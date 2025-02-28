import { DataSource } from 'typeorm';
import { Wanted } from './entities/wanted.entity';

export const wantedProviders = [
  {
    provide: 'WANTED_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Wanted),
    inject: ['DATA_SOURCE'],
  },
];
