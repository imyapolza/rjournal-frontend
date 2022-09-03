import { AxiosInstance } from "axios";
import { CreateUserDto, LoginDto, PostItem, ResponseUser } from "./types";

export const UserApi = (instance: AxiosInstance) => ({
  async register(dto: CreateUserDto): Promise<ResponseUser> {
    const { data } = await instance.post<CreateUserDto, { data: ResponseUser }>(
      "/auth/register",
      dto,
      { withCredentials: true }
    );
    return data;
  },
  async login(dto: LoginDto) {
    const { data } = await instance.post("/auth/login", dto, {
      withCredentials: true,
    });
    return data;
  },
});
