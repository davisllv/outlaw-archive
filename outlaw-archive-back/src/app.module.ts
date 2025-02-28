import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { WantedModule } from './wanted/wanted.module';

@Module({
  imports: [DatabaseModule, WantedModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
