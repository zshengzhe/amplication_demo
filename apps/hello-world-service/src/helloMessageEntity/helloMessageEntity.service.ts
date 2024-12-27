import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { HelloMessageEntityServiceBase } from "./base/helloMessageEntity.service.base";

@Injectable()
export class HelloMessageEntityService extends HelloMessageEntityServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
