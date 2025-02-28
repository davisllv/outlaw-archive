import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Wanted } from './entities/wanted.entity';
import { UpdateWantedDto } from './dto/UpdatedWantedDTO';
import { BulkUpdateWantedDto } from './dto/BulkUpdateWantedDTO';

@Injectable()
export class WantedService {
  constructor(
    @Inject('WANTED_REPOSITORY')
    private wantedRepository: Repository<Wanted>,
  ) {}

  // Retorna todos os dados (com cache opcional)
  async findAll(): Promise<Wanted[]> {
    return this.wantedRepository.find({
      order: {
        id: 'ASC'
      }
    });
  }

  // Atualiza um único procurado
  async updateOne(
    id: number,
    updateDto: UpdateWantedDto,
  ): Promise<void> {
    await this.wantedRepository.update(id, updateDto);
  }

  // Atualiza vários procurados
  async bulkUpdate(dto: BulkUpdateWantedDto): Promise<void> {
    const { ids, bulk_values } = dto;

 
    await this.wantedRepository
      .createQueryBuilder()
      .update(Wanted)
      .set({
        wanted_status: bulk_values.wantedStatus,
        dead_or_alive: bulk_values.deadOrAlive
      })
      .whereInIds(ids)
      .execute();

  }
}
