import { Injectable } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory, Transport } from "@nestjs/microservices";


@Injectable()
export class AppService {

  private client: ClientProxy

  constructor(){
    this.client = ClientProxyFactory.create({
      transport: Transport.REDIS,
      options: {
        host: '127.0.0.1',
        port: 6379
      }
    })
  }
  public getLoginPageData() {
    return this.client.send('getLoginPageData', 'getLoginPageData').pipe();
  }

  public getBlogModalData() {
    return this.client.send('getBlogModalData', 'getBlogModalData').pipe();

  }

  public getSignUpPageData() {
    return this.client.send('getSignUpPageData', 'getSignUpPageData').pipe();

  }

  public getLogInPageData() {
    return this.client.send('getLogInPageData', 'getLogInPageData').pipe();

  }

  public getBlogHeaderData() {
    return this.client.send('getBlogHeaderData', 'getBlogHeaderData').pipe();

  }

  

  

  // public  getBlogPageData () {
  //   const data = this.client.send('getBlogPageData', 'getBlogPageData').pipe()
  //   return data;
  // }

  public getBlogPageData() {
    return this.client.send('getBlogPageData', 'getBlogPageData').pipe();
  }

  testing(): string {
    return 'Hello World!';
  }

}
