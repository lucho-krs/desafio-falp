import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {

	@PrimaryGeneratedColumn('increment')
    id: number

	@Column('text', {
        unique: true,
        nullable: false
    })
    rut: string;

	@Column('text', {
        nullable: false
    })
    nombre: string;

    @Column('text')
    primerApellido: string;

    @Column('text')
    segundoApellido: string;
	
}
