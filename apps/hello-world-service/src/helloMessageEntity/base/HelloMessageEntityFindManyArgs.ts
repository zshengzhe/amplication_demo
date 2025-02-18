/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { HelloMessageEntityWhereInput } from "./HelloMessageEntityWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { HelloMessageEntityOrderByInput } from "./HelloMessageEntityOrderByInput";

@ArgsType()
class HelloMessageEntityFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => HelloMessageEntityWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => HelloMessageEntityWhereInput, { nullable: true })
  @Type(() => HelloMessageEntityWhereInput)
  where?: HelloMessageEntityWhereInput;

  @ApiProperty({
    required: false,
    type: [HelloMessageEntityOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [HelloMessageEntityOrderByInput], { nullable: true })
  @Type(() => HelloMessageEntityOrderByInput)
  orderBy?: Array<HelloMessageEntityOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { HelloMessageEntityFindManyArgs as HelloMessageEntityFindManyArgs };
