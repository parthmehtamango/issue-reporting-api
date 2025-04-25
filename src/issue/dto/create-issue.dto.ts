import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateIssueDto {
    @IsString()
    @ApiProperty({ example: 'Login not working' })
    title: string;
  
    @IsString()
    @ApiProperty({ example: 'User is unable to login using valid credentials' })
    description: string; 

    
    @ApiProperty({example: 'OPen/Close/Process'})
    status: string;
      
    
    @ApiProperty()
    comments: string;
}
