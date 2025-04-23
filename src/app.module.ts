import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/dto/guards/jwt-auth.guard';
import { IssueModule } from './issue/issue.module';
import { Issue } from './issue/entities/issue.entity';
import { IssueController } from './issue/issue.controller';
import { JwtStrategy } from './auth/strategies/jwt.strategy';

@Module({
  imports: [ 
    ConfigModule.forRoot({
    isGlobal: true,
  }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      password: 'root',
      username: 'postgres',
      entities: [User, Issue],
      database: 'madb',
      synchronize: true, // for demo/development
      logging: true, 
    }), UsersModule, AuthModule, IssueModule],
  controllers: [AppController],
  providers: [AppService, JwtStrategy,{
    provide: APP_GUARD,
    useClass: JwtAuthGuard,
  },],
})
export class AppModule {}
