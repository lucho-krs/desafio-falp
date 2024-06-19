import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Address {

    @PrimaryGeneratedColumn('increment')
    id: number

	@Column('text', {
        nullable: false
    })
    calle: string;

	@Column('text', {
        nullable: false
    })
    numero: string;

	@Column('text', {
        nullable: false
    })
    ciudad: string;

    @OneToOne(() => User)
    @JoinColumn()
    user: User;
	
}
