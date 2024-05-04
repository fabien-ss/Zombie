import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { createConnection } from 'typeorm';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  await createConnection();
  app.setGlobalPrefix("wcbp");
  await app.listen("4000", '0.0.0.0');
  console.log(`Application is d running on: ${await app.getUrl()}`);
}
bootstrap();
