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
      entities: [User],
      database: 'madb',
      synchronize: true, // for demo/development
      logging: true, 
    }), UsersModule, AuthModule],
  controllers: [AppController],
  providers: [AppService, {
    provide: APP_GUARD,
    useClass: JwtAuthGuard,
  },],
})
export class AppModule {}
