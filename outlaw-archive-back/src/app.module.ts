import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DatabaseModule } from './database/database.module';
import { WantedModule } from './wanted/wanted.module';

@Module({
  imports: [DatabaseModule, WantedModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
