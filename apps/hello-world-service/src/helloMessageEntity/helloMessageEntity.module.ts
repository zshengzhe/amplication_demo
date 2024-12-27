import { Module } from "@nestjs/common";
import { HelloMessageEntityModuleBase } from "./base/helloMessageEntity.module.base";
import { HelloMessageEntityService } from "./helloMessageEntity.service";
import { HelloMessageEntityController } from "./helloMessageEntity.controller";
import { HelloMessageEntityResolver } from "./helloMessageEntity.resolver";

@Module({
  imports: [HelloMessageEntityModuleBase],
  controllers: [HelloMessageEntityController],
  providers: [HelloMessageEntityService, HelloMessageEntityResolver],
  exports: [HelloMessageEntityService],
})
export class HelloMessageEntityModule {}
