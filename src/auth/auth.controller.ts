import { Controller, Post, Body, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersService } from 'src/users/users.service';
import { LocalAuthGuard } from './dto/guards/local-auth.guard';
import { Public } from './dto/decorators/public.decorator';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService, private usersService: UsersService,) {}

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req: Express.Request) {
    return this.authService.login(req.user);
  }

  @Public()
  @Post('register')
  async register(@Body() body: CreateUserDto) {
    const user = await this.usersService.create(body);
    return user;
  }
}
