import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');
  app.enableCors();
  await app.listen(3000, '0.0.0.0', () => {
    console.log(`Server running on port: 3000`);
  });
}
bootstrap();
