import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm'
import { Repository } from 'typeorm';
import { createUserDto } from '../user/dto/createUser.dto';
// import { User } from '../user/user.entity';
// import { Blog } from './blog.entity';
import { createBlogDto } from './dto/createBlog.dto';
import { ClientProxy, ClientProxyFactory, Transport } from "@nestjs/microservices";


@Injectable()
export default class BlogService {

    private client: ClientProxy

    constructor( ) {
        this.client = ClientProxyFactory.create({
            transport: Transport.REDIS,
            options: {
              host: '127.0.0.1',
              port: 6379
            }
          })
     }

   async  getBlog(){
    return this.client.send('getBlog', 'getBlog').pipe()
    }

    async createNewBlog(blogData: createBlogDto) {
    return this.client.send('createBlog', blogData).pipe()
    }


}
