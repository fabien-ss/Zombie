import { Module } from "@nestjs/common";
import { ReplicateService } from "./replicate.service";
import { ReplicateController } from "./replicate.controller";

@Module({
    imports: [],
    controllers: [ReplicateController],
    providers: [ReplicateService],
})
export class ReplicateModule {}
  