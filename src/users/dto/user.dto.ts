
import { IsEmail, IsNotEmpty, Max, Min, MinLength } from 'class-validator';

export class UserDto {
    name: string;

    @IsEmail()
    email: string;

    @IsNotEmpty()
    @MinLength(6, {
        message: 'Password is too sort!'
    })
    password: string;
}
