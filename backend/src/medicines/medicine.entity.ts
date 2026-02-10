import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Medicine {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column('float')
    price: number;

    @Column('int')
    stock: number;
}