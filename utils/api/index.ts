import axios from 'axios';
import { CreateUserDto, LoginDto, ResponseUser } from './types';

const instance = axios.create({
  baseURL: 'http://localhost:8888/',
});

export const UserApi = {
  async register(dto: CreateUserDto): Promise<ResponseUser> {
    const { data } = await instance.post<CreateUserDto, { data: ResponseUser }>(
      '/auth/register',
      dto,
    );
    return data;
  },
  async login(dto: LoginDto) {
    const { data } = await instance.post('/auth/register', dto);
    return data;
  },
};
