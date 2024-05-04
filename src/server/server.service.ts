import { Injectable } from '@nestjs/common';
import { execSync } from 'child_process';

@Injectable()
export class ServerService {
    getRunningProcess(): any{
      const processes = execSync('ps aux').toString().split('\n');
      let formattedProcesses = processes.slice(1).map(processLine => {
        let [pid, user, cpu, memory, time, command] = processLine.split(/\s+/);
        return { pid, user, cpu, memory, time, command };
      });
      formattedProcesses = formattedProcesses.sort((a,b) => Number(b.cpu) - Number(a.cpu));
      
      return this.subArray(formattedProcesses, 0, 7);
    }

    subArray(array, start, end){
        let newArray = [];
        for(let i = start; i < end; i++){
            newArray.push(array[i]);
        }
        return newArray;
    }
}
