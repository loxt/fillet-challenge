import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';

const mockUser = {
  email: 'contrataeulogo@gmail.com',
  firstName: 'Contrata o',
  id: '777',
  lastName: 'Loxt',
  password: '123456',
  confirmPassword: '123456',
  phone: '996944782',
};

const mockUserRepository = () => ({
  findAll: jest.fn(),
  findOne: jest.fn(),
  create: jest.fn(),
});

describe('UsersService', () => {
  let userService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: UsersService,
          useFactory: mockUserRepository,
        },
      ],
    }).compile();

    userService = await module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(userService).toBeDefined();
  });

  it('should be call the create user function', async () => {
    await userService.create.mockReturnValue(mockUser);

    await expect(userService.create).not.toHaveBeenCalled();

    userService.create(mockUser);
    expect(userService.create).toHaveBeenCalled();

    expect(userService.create).toHaveBeenCalledWith(mockUser);
  });
});
