import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  name?: string;
  
  @Column({ unique: true })
  username: string;

  @Column({ nullable: true, select: false })
  password: string;

  @Column({ default: 'inactive' })
  accountStatus: 'active' | 'inactive';
}
