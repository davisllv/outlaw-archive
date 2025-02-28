import { Controller, Get, Patch, Param, Body } from '@nestjs/common';
import { WantedService } from './wanted.service';
import { UpdateWantedDto } from './dto/UpdatedWantedDTO';
import { BulkUpdateWantedDto } from './dto/BulkUpdateWantedDTO';

@Controller('wanted')
export class WantedController {
  constructor(private readonly wantedService: WantedService) {}

  @Get()
  findAll() {
    return this.wantedService.findAll();
  }

  @Patch(':id')
  updateOne(@Param('id') id: number, @Body() updateDto: UpdateWantedDto) {
    return this.wantedService.updateOne(id, updateDto);
  }

  @Patch()
  bulkUpdate(@Body() dto: BulkUpdateWantedDto) {
    return this.wantedService.bulkUpdate(dto);
  }
}
