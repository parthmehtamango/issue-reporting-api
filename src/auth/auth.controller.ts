import { Controller, Post, Body, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersService } from 'src/users/users.service';
import { LocalAuthGuard } from './dto/guards/local-auth.guard';
import { Public } from './dto/decorators/public.decorator';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { LoginDto } from './dto/login.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService, private usersService: UsersService,) {}

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('login')
  @ApiOperation({ summary: 'You can login from here' })
  @ApiResponse({ status: 201, description: 'You succesfully login to HERE' })
   async login(@Request() req: Express.Request) {
    return this.authService.login(req.user);
  }

  @Public()
  @Post('register')
  @ApiOperation({ summary: 'You can register new user here' })
  @ApiResponse({ status: 201, description: 'welcome to my app' })
  async register(@Body() body: CreateUserDto) {
    const user = await this.usersService.create(body);
    return user;
  }
}
