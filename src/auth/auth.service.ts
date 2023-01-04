import { Injectable } from '@nestjs/common';
// import UserService  from '../modules/user/user.service'
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';
import { JwtService } from '@nestjs/jwt';
import { firstValueFrom } from 'rxjs';


@Injectable()
export class AuthService {

private client: ClientProxy

    constructor(
      private jwtService: JwtService
      ) {
        
    this.client = ClientProxyFactory.create({
      transport: Transport.REDIS,
      options: {
        host: '127.0.0.1',
        port: 6379
      }
    })
      }

  async validateUser(username: string, password: string): Promise<any> {
    

    const user = this.client.send('auth/login', {username,password}).pipe()
   const result = await firstValueFrom(user);
   console.log("result", result)

   if (result && result.password === password) {
    const { password, ...user } = result;
    return user;
  }   
  return null
  }

  async login(user: any) {
    console.log("pay;load", user)
    const payload = { username: user.email, sub: user.id, role: user.role};

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
