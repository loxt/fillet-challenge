import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty } from 'class-validator';

@InputType()
export class CreateUserInput {
  @IsNotEmpty()
  id: string;

  @Field(() => String, { description: 'Primeiro nome' })
  @IsNotEmpty()
  firstName: string;

  @Field(() => String, { description: 'Último nome' })
  @IsNotEmpty()
  lastName: string;

  @Field(() => String, { description: 'Número de celular' })
  @IsNotEmpty()
  phone: string;

  @Field(() => String, { description: 'E-mail' })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @Field(() => String, { description: 'Senha' })
  @IsNotEmpty()
  password: string;

  @Field(() => String, { description: 'Confirme a senha' })
  @IsNotEmpty()
  confirmPassword: string;
}
