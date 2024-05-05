import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets"
import { Socket } from "socket.io";
import * as os from 'os';
import { execSync } from "child_process";

import { AdministratorService } from "../administrator/administrator.service";
import { MessageService } from "../message/message.service";
import { Message } from "../entities/Message";

console.log("it's the web socket server")
@WebSocketGateway({
  cors: {
    origin: "*",
  },
  path: '/wbcp/socket'
},)
export class HandlerGateWay {

  @WebSocketServer()
    server;

  forums: any
  constructor(
    private messageService: MessageService, // Inject the MessageService here
  ) {
    this.forums = []
  }
  
  private positions: Map<string, { x: number, y: number, z: number }> = new Map();

  @SubscribeMessage('uptime')
  handleUptime(): void {
    console.log('uptime', process.uptime());
    this.server.emit('uptime-recall', process.uptime());
  }

  @SubscribeMessage("memory-usage")
  handleMemoryUsage(): void {
    const usage = process.memoryUsage();
    const memoryUsage = usage.heapUsed / usage.heapTotal;
    this.server.emit('memory-usage-recall', { memoryUsage: memoryUsage });
  }

  @SubscribeMessage("cpu-usage")
  handleCpuUsage(): void {
    const cpuUsage = os.cpus()[0].times;
    const totalCpuTime = cpuUsage.user + cpuUsage.sys;
    const cpuPercentage = (totalCpuTime / os.totalmem()) * 100;
    this.server.emit('cpu-usage-recall', { cpuPercentage: cpuPercentage })
  }

  @SubscribeMessage("running-processes")
  handleRunningProcesses(): void {
    const processes = execSync('ps aux').toString().split('\n');
    let formattedProcesses = processes.slice(1).map(processLine => {
      let [pid, user, cpu, memory, time, command] = processLine.split(/\s+/);
      return { pid, user, cpu, memory, time, command };
    });
    formattedProcesses = formattedProcesses.sort((a, b) => Number(b.cpu) - Number(a.cpu));

    this.server.emit('running-processes-recall', this.subArray(formattedProcesses, 0, 7));
  }

  subArray(array, start, end) {
    let newArray = [];
    for (let i = start; i < end; i++) {
      newArray.push(array[i]);
    }
    return newArray;
  }


  @SubscribeMessage('message')
   handleMessageForum(@MessageBody() message: any, email: string): void {
    let mess: Message = new Message();
    mess.message = message;
    mess.email = email;
    console.log("message ", message);
    this.messageService.insertData(message.message, message.email);
    this.server.emit('message', message);
   
  }  

  @SubscribeMessage('forum')
  handleMessage(): void {
    if(this.forums.length == 0) this.forums =this.messageService.findAll();
    console.log("forum ", this.forums); 

  
    this.server.emit('forum', this.forums);
  }

  @SubscribeMessage('client')
  handleClient(@MessageBody() data: { clientId: string, position: { x: number, y: number, z: number } }): void {
    console.log("client ", data.clientId, data.position);
    this.positions.set(data.clientId, data.position);
    this.server.emit('client', Array.from(this.positions.entries()));
  }


  private characters: any[] = [];

  @SubscribeMessage('connecter')
  async handleConnection(client: any) {
    console.log('user connected');
    this.characters.push({
      id: client.id,
      position: this.generateRandomPosition(),
      hairColor: this.generateRandomHexColor(),
      topColor: this.generateRandomHexColor(),
      bottomColor: this.generateRandomHexColor(),
    });

    client.emit('hello');
    if(this.forums.length == 0) this.forums = await this.messageService.findAll();
    this.server.emit('forum', this.forums)
    console.log(client,  this.forums)
    console.log(JSON.stringify( this.forums))
    this.server.emit('characters', this.characters);
  }

  handleDisconnect(client: any) {
    console.log('disconnected');
    this.characters = this.characters.filter(character => character.id !== client.id);
    this.server.emit('characters', this.characters);
  }

  generateRandomPosition(): any {
    return [Math.random() * 3, 0, Math.random() * 3];
  }

  generateRandomHexColor(): string {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  }

  @SubscribeMessage('move')
  handleMove(client: any, position: any): void {
    const character = this.characters.find(character => character.id === client.id);
    if (character) {
      character.position = position;
      this.server.emit('characters', this.characters);
    }
  }
}