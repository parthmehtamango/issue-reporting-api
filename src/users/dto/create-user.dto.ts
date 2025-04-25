import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";

export class CreateUserDto {
   
  @IsString()
  // @IsUnique(...) check my previous video on how to make such
  // custom validator as IsUnique doesn't exist in class-validator
  @ApiProperty()
  username: string;
  
  @IsString()
  @ApiProperty()
  password: string;
  
  @IsString()
  @IsOptional()
  @ApiProperty()
  name?: string;
}
