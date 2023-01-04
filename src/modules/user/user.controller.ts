import { Controller, Get, Post, Body, HttpCode, UsePipes, ValidationPipe} from '@nestjs/common';
import UserService from './user.service';
import { createUserDto } from './dto/createUser.dto';

@Controller('user')

export class UserController {
    constructor (private readonly userService: UserService) {}

    // @Get('/user')

    // getAllUserInfo() {
    //     return this.userService.getAllUserInfo();
    // }

    // @Get('/auth')

    // getUserInfo( @Body() userData) {
    //     return this.userService.getUserInfo(userData)
    // }

    @Post('/signup')
    @HttpCode(200)
    @UsePipes(ValidationPipe)
    async createNewUser( @Body() userData: createUserDto ) {
        return await this.userService.createNewUser({ data: userData })
    }
}
