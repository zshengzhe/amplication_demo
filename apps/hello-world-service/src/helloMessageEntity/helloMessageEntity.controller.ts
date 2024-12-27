import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { HelloMessageEntityService } from "./helloMessageEntity.service";
import { HelloMessageEntityControllerBase } from "./base/helloMessageEntity.controller.base";

@swagger.ApiTags("helloMessageEntities")
@common.Controller("helloMessageEntities")
export class HelloMessageEntityController extends HelloMessageEntityControllerBase {
  constructor(protected readonly service: HelloMessageEntityService) {
    super(service);
  }
}
