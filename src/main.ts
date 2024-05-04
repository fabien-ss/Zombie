import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.setGlobalPrefix("wcbp");
  await app.listen("4000", '0.0.0.0');
  console.log(`Application is d running on: ${await app.getUrl()}`);
}
bootstrap();
