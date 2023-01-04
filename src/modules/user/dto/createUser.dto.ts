
import { IsNotEmpty, Length } from "class-validator";

export class createUserDto {

    @IsNotEmpty({message: 'user should have name and email'})

    @Length(5,10)

    name: string;

    @Length(5)

    email: string;

    @Length(5, 30)

    password: string
    

}
