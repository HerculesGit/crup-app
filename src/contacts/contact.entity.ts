import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity() // transformando a classe em uma entidade
export class Contact {

    // Coluna primaria
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    email: string;

    @Column()
    phone: string;

    @Column()
    city: string;

    @Column()
    country: string;


}

