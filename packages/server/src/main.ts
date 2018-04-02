import { NestFactory } from '@nestjs/core';
import './config';
import { AppModule } from './app.module';
import { join } from 'path';
import * as express from 'express';

async function bootstrap() {
  const server = express();
  const app = await NestFactory.create(AppModule, server, { cors: true, bodyParser: true });
  app.setGlobalPrefix('api');
  app.use(express.static(join(__dirname, 'client')));
  await app.listen(parseInt(process.env.PORT, 10));

  if (process.env.PROD) server.get('*', notFound);

  console.log(`Server start at por ${process.env.PORT}`);
}

function notFound(req, res) {
  res.sendFile(join(__dirname, 'client/index.html'));
}

bootstrap();
