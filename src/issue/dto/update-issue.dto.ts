import { PartialType } from '@nestjs/mapped-types';
import { CreateIssueDto } from './create-issue.dto';
import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateIssueDto extends PartialType(CreateIssueDto) {
        @IsString()
        @ApiProperty({ example: 'Login not working' })
        title: string;
      
        @IsString()
        @ApiProperty({ example: 'User is unable to login using valid credentials' })
        description: string; 
    
        
        @ApiProperty({example: 'Open/Close/Process like that'})
        status: string;
          
        
        @ApiProperty({example: 'Open/Close/Process like that'})
        comments: string;
}
