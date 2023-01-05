import { Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { HasRoles } from './auth/has-roles.decorator';
import { Role } from './models/roles.enum';
import { RolesGuard } from './auth/roles.guard';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly authService: AuthService
    ) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @HasRoles(Role.User)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  // @Get('/something')
  // getSomething(): string {
  //   return this.appService.testing();
  // }

  @Get('/fetchLoginPage')
  getLoginPageData(): any {
    const data = this.appService.getLoginPageData();
    return data 
  }

  @Get('/signUpPage')
  getSignUpPageData(): any {
    const data = this.appService.getSignUpPageData();
    return data 
  }

  @Get('/blogPage')
  getBlogPageData(): any {
    const data = this.appService.getBlogPageData();
    return data 
  }

  @Get('/blogModal')
  getBlogModalData(): any {
    const data = this.appService.getBlogModalData();
    return data 
  }

  @Get('/logInPage')
  getLogInPageData(): any {
    const data = this.appService.getLogInPageData();
    return data 
  }

  @Get('/blogHeader')
  getBlogHeaderData(): any {
    const data = this.appService.getBlogHeaderData();
    return data 
  }

  
  

}
