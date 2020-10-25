import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;
  let mockUser;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: UsersService,
          useFactory: () => ({ create: jest.fn() }),
        },
      ],
    }).compile();

    service = await module.get<UsersService>(UsersService);

    mockUser = {
      email: 'contrataeulogo@gmail.com',
      firstName: 'Contrata o',
      id: '777',
      lastName: 'Loxt',
      password: '123456',
      confirmPassword: '123456',
      phone: '996944782',
    };
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be call the create user function', async () => {
    await expect(service.create).not.toHaveBeenCalled();

    (service.create as jest.Mock).mockReturnValue(mockUser);

    await expect(service.create).resolves;
  });

  it('should be call the create user function twice times', async () => {
    await expect(service.create).not.toHaveBeenCalled();

    (service.create as jest.Mock).mockReturnValue(mockUser);

    await service.create(mockUser);
    await service.create({
      email: 'contrataeulogo2@gmail.com',
      firstName: 'Contrata o',
      id: '777',
      lastName: 'Loxt',
      password: '123456',
      confirmPassword: '123456',
      phone: '996944782',
    });

    await expect(service.create).toHaveBeenCalledTimes(2);
  });
});
