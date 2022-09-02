import axios from "axios";
import { parseCookies } from "nookies";
import { CreateUserDto, LoginDto, PostItem, ResponseUser } from "./types";

const instance = axios.create({
  baseURL: "http://localhost:8888/",
});

instance.interceptors.request.use(function (config) {
  const cookie = parseCookies();
  console.log("cookie", cookie);
  const token = cookie.accessToken;
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

export const UserApi = {
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
};

export const PostApi = {
  async create(dto: PostItem): Promise<any> {
    const { data } = await instance.post<any, { data: any }>("/posts", dto, {
      withCredentials: true,
    });
    return data;
  },

  async getPosts(): Promise<any> {
    const { data } = await instance.get("/posts", {
      withCredentials: true,
    });
    return data;
  },
};
