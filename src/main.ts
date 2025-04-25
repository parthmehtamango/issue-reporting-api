import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Issue Reporting API')
    .setDescription('API for reporting and updating system issues')
    .setVersion('1.0')
    .addBearerAuth() // adds JWT auth to Swagger
    .build();
    console.log(`Swagger is running at http://localhost:3000/api`);
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // Visit http://localhost:3000/api

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
