import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm'
import { Repository } from 'typeorm';
// import { User } from './user.entity';
import { createUserDto } from './dto/createUser.dto';
import { ClientProxy, ClientProxyFactory, Transport } from "@nestjs/microservices";


@Injectable()
export default class UserService {
    
    private client: ClientProxy

    // constructor(@InjectRepository(User) private repo: Repository<User>, ) { }
    constructor(){
        this.client = ClientProxyFactory.create({
          transport: Transport.REDIS,
          options: {
            host: '127.0.0.1',
            port: 6379
          }
        })
      }

//    async  getAllUserInfo(){
//         return [1, 1, 3]
//         // return await this.repo.recover();

//     }

    // async getUserInfo(id: number){
    //     return await this.repo.findOne
    //     ({
    //         where:{
    //             id
    //         },
    //         relations: {
    //             blogs: true
    //         }
    //     });
    // }

    // async authenticateUser(username){
    //     const userData = await this.repo.findOne({where: {email:username}})
    //     return userData
      
    // } 

    async createNewUser({ data }: { data: createUserDto; }) {
    return this.client.send('signin', data).pipe()
    }
}
