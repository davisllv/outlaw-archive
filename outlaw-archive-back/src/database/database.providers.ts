import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: process.env.DATABASE_HOST,
        port: 5435,
        username: 'postgres',
        password: 'postgres',
        database: 'postgres',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        migrations: ['dist/migrations/*.js'],
      });

      return dataSource.initialize();
    },
  },
];
