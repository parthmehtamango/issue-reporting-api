import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { FindUsersDto } from './dto/find-users.dto';
import { CurrentUser } from 'src/auth/dto/decorators/current-user.decorator';
import { User } from './entities/user.entity';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // @Get()
  // @ApiOperation({ summary: 'get all users' })
  // @ApiResponse({ status: 201, description: '' })
  // findMany(@Query() query: FindUsersDto) {
  //   return this.usersService.findMany(query);
  // }

  // @Get('profile')
  // @ApiOperation({ summary: 'find particular user' })
  // @ApiResponse({ status: 201, description: '' })
  // getProfile(@CurrentUser() user: User) {
  //   return user;
  // }
}
