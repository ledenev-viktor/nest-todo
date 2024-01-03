import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todos/todo.module';

@Module({
  imports: [TodoModule],
})
export class AppModule {}
