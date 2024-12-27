import * as graphql from "@nestjs/graphql";
import { HelloMessageEntityResolverBase } from "./base/helloMessageEntity.resolver.base";
import { HelloMessageEntity } from "./base/HelloMessageEntity";
import { HelloMessageEntityService } from "./helloMessageEntity.service";

@graphql.Resolver(() => HelloMessageEntity)
export class HelloMessageEntityResolver extends HelloMessageEntityResolverBase {
  constructor(protected readonly service: HelloMessageEntityService) {
    super(service);
  }
}
