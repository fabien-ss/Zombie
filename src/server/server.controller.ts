import { Controller, Get } from '@nestjs/common';
import * as os from 'os';
import { execSync } from 'child_process';
import { ServerService } from './server.service';

@Controller('server')
export class ServerController {

    constructor(private readonly serverService: ServerService){

    }

    @Get('uptime') // temps d'execution
    getUptime(): number {
      return process.uptime();
    }
    @Get('memory-usage') // utilisation de la mémoire
    getMemoryUsage(): any {
        const usage = process.memoryUsage();
        const memoryUsage = usage.heapUsed / usage.heapTotal;
        return { memoryUsage: memoryUsage };
    }
    @Get('cpu-usage') // utilisation du cpu
    getCpuUsage(): any {
      const cpuUsage = os.cpus()[0].times;
      const totalCpuTime = cpuUsage.user + cpuUsage.sys;
      const cpuPercentage = (totalCpuTime / os.totalmem()) * 100;
      return { cpuPercentage: cpuPercentage };
    }
    @Get('system-info') // information sur le serveur
    getSystemInfo(): any {
      return {
        platform: os.platform(),
        arch: os.arch(),
        version: os.version(),
        uptime: process.uptime(),
        memory: process.memoryUsage(),
        cpu: os.cpus()[0],
      };
    }
    @Get('running-processes')
    getRunningProcesses(): any {
      return this.serverService.getRunningProcess()
    }

    
}
