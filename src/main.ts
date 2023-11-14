import { NestFactory } from '@nestjs/core';
import { RootModule } from './root.module';

async function bootstrap() {
  const app = await NestFactory.create(RootModule); // this create instance having all abstraction of express then nodejs
  await app.listen(3000);
}
bootstrap();
