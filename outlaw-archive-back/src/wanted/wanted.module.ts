import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { wantedProviders } from './wanted.providers';
import { WantedService } from './wanted.service';
import { WantedController } from './wanted.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [WantedController],
  providers: [...wantedProviders, WantedService],
})
export class WantedModule {}
