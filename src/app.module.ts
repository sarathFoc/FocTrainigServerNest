import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { BlogModule } from './modules';
// import { BlogController } from './modules/blog/blog.controller';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { typeOrmConfig } from './config/typeorm.config';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './auth/auth.module';
import { BlogController } from './modules/blog/blog.controller';
import BlogService from './modules/blog/blog.service';

@Module({

  imports: [ UserModule, AuthModule],
  controllers: [AppController, BlogController],
  providers: [AppService, BlogService],
})
export class AppModule {}
