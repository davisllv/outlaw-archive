import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('wanted')
export class Wanted {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  wanted_name: string;

  @Column({ type: 'varchar', length: 20 })
  wanted_status: string;
  
  @Column({ type: 'decimal', precision: 10, scale: 2})
  bounty_value: number; 

  @Column({ type: 'boolean', default: true })
  dead_or_alive: boolean;

  @Column({ type: 'varchar', length: 50 })
  location: string;

  @Column({ type: 'varchar', length: 200, nullable: true })
  notes: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
