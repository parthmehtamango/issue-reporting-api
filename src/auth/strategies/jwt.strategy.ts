
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UsersService } from '../../users/users.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private configService: ConfigService,
    private usersService: UsersService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('JWT_SECRET'),
    });
  }

  async validate(payload: any) {
    // only runs if the token is valid and successfully verified.
    // If the token is valid, the validate method is called with the decoded payload.

    // Optionally, you can perform additional checks here, such as checking if
    // the user exists, is banned, whatever.
    const user = await this.usersService.findOne(payload.username);

    if (!user) {
      throw new UnauthorizedException();
    }

    if (user.accountStatus !== 'active') {
      throw new UnauthorizedException(
        `${user.username}, account ${user.accountStatus}`,
      );
    }

    return { id: user.id,
      name: user.name, };
  }
}
