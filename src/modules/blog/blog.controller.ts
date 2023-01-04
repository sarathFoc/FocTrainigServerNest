import { Controller, Get, Post, Body, HttpCode, UsePipes, ValidationPipe, UseGuards, Request} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import UserService from '../user/user.service';
import BlogService from './blog.service';
import { createBlogDto } from './dto/createBlog.dto';

@Controller()

export class BlogController {

    constructor(private blogService: BlogService, private userService: UserService ) {}

    @Get('blog')
    getAllBlogs(){
        return this.blogService.getBlog();
    }

    @UseGuards(JwtAuthGuard)
    @Post('create-blog')
    @HttpCode(200)
    @UsePipes(ValidationPipe) 
    async postBlogs( @Body() blogData: createBlogDto, @Request() req) {
        console.log("blog req.user", req.user.userId)
        return await this.blogService.createNewBlog(blogData);
    }
}
