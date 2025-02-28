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
    return this.wantedRepository.find();
  }

  // Atualiza um único procurado
  async updateOne(
    id: number,
    updateDto: UpdateWantedDto,
  ): Promise<Wanted | null> {
    await this.wantedRepository.update(id, updateDto);
    return await this.wantedRepository.findOne({ where: { id } });
  }

  // Atualiza vários procurados
  async bulkUpdate(dto: BulkUpdateWantedDto): Promise<Wanted[]> {
    const { ids } = dto;
    await this.wantedRepository
      .createQueryBuilder()
      .update(Wanted)
      .set({})
      .whereInIds(ids)
      .execute();

    return this.wantedRepository.findByIds(ids);
  }
}
