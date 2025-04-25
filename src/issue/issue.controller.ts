import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { IssueService } from './issue.service';
import { CreateIssueDto } from './dto/create-issue.dto';
import { UpdateIssueDto } from './dto/update-issue.dto';
import { JwtAuthGuard } from 'src/auth/dto/guards/jwt-auth.guard';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Public } from 'src/auth/dto/decorators/public.decorator';

@ApiTags('Issue')
@Controller('issues')
export class IssueController {
  constructor(private readonly issueService: IssueService) {}

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post()
  @ApiOperation({ summary: 'Create a new issue' })
  @ApiResponse({ status: 201, description: 'The issue has been successfully created.' })
  create(@Body() dto: CreateIssueDto, @Request() req) {
    return this.issueService.create(dto, req);
  }

  @Public()
  @Get()
  @ApiOperation({ summary: 'Get all issues' })
  @ApiResponse({ status: 200, description: 'List of issues returned successfully.' })
  findAll() {
    return this.issueService.findAll();
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  @ApiOperation({ summary: 'Update an existing issue' })
  @ApiResponse({ status: 200, description: 'The issue has been successfully updated.' })
  update(@Param('id') id: string, @Body() dto: UpdateIssueDto,@Request() req) {
    return this.issueService.update(+id, dto,  req);
  }
}
