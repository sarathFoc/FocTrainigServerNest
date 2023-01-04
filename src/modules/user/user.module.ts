import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
// import { TypeOrmModule } from '@nestjs/typeorm';
import UserService from './user.service';
// import { User } from './user.entity';

@Module({
    controllers: [UserController],
    // imports: [TypeOrmModule.forFeature([User])],
    providers: [UserService],
    exports: [UserService]

})
export class UserModule {}
