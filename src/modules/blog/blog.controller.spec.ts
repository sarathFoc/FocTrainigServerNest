import { Test, TestingModule } from '@nestjs/testing';
import { BlogController } from './blog.controller';
import { Request, Response } from 'express';
import BlogService from './blog.service';
import UserService from '../user/user.service';
import { UserController } from '../user/user.controller';

describe('BlogController', () => {
  
  let controller: BlogController;

  let data =  [
    {
      id: 1,
      title: 'aeoij',
      blog: 'ollknkjn',
      createdAt: '2022-11-16T18:23:06.118Z',
      LastUpdated: '2022-11-16T18:23:06.118Z',
      user:  {
        id: 2,
        name: 'sarath',
        email: 'sarathkaruvanthal@gmail.com',
        password: 'Ponnuskannan@2',
        createdAt: '2022-11-16T16:44:56.987Z',
        LastUpdated: '2022-11-16T16:44:56.987Z'
      }
    }
  ] 

  const mockUsersService = {};

  const mockBlogService = {
    createNewBlog: jest.fn((dto) => {
      return {
        id: Date.now(),
        ...dto,
      };
    }),

    getBlog: jest.fn(() => {
      return data
        
    })

    
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BlogController],
      providers: [BlogService],
    })
      .overrideProvider(BlogService)
      .useValue(mockBlogService)
      .overrideProvider(UserService)
      .useValue(mockUsersService)
      .compile();

    controller = module.get<BlogController>(BlogController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a blog', () => {
    expect(
      controller.postBlogs({
        title: 'testing title',
        blog: 'this is just for unit test case only.',
        userId: 2
      }),
    ).toEqual({
      id: expect.any(Number),
      title: 'testing title',
      blog: 'this is just for unit test case only.',
      userId: 2
    });

    
    

  //   // expect(mockUsersService.createNewUser).toHaveBeenCalledWith({
  //   //   name: 'sarath',
  //   //   email: 'sarathbhaskar@gmail.com',
  //   //   password: 'mockpassword',
  //   // });

  });

  it('should get blogs', ()=> {
    expect(
      controller.getAllBlogs()
    ).toEqual(
      [
        {
          id: 1,
          title: 'aeoij',
          blog: 'ollknkjn',
          createdAt: '2022-11-16T18:23:06.118Z',
          LastUpdated: '2022-11-16T18:23:06.118Z',
          user:  {
            id: 2,
            name: 'sarath',
            email: 'sarathkaruvanthal@gmail.com',
            password: 'Ponnuskannan@2',
            createdAt: '2022-11-16T16:44:56.987Z',
            LastUpdated: '2022-11-16T16:44:56.987Z'
          }
        }
      ]
    )
  })
});
