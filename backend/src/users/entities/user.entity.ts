import { ObjectType, Field } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { IsEmail, IsNotEmpty } from 'class-validator';

@Entity()
@ObjectType()
@Unique(['email'])
export class User {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  @Field(() => String, { description: 'Primeiro nome' })
  @IsNotEmpty()
  firstName: string;

  @Column()
  @Field(() => String, { description: 'Último nome' })
  @IsNotEmpty()
  lastName: string;

  @Column()
  @Field(() => String, { description: 'Número de celular' })
  @IsNotEmpty()
  phone: string;

  @Column()
  @Field(() => String, { description: 'E-mail' })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @Column()
  @Field(() => String, { description: 'Senha' })
  @IsNotEmpty()
  password?: string;
}
