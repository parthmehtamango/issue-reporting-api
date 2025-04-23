import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Issue {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    title: string;
  
    @Column()
    description: string;
  
    @Column({ default: 'open' })
    status: string;
  
    @Column({ nullable: true })
    comments: string;
  
    @Column({ nullable: true })
    created_by: string;
  
    @Column({ nullable: true })
    updated_by: string;
}
