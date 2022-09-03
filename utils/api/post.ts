import { AxiosInstance } from "axios";
import { PostItem } from "./types";

export const PostApi = (instance: AxiosInstance) => ({
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

  async getPost(id: number): Promise<any> {
    const { data } = await instance.get(`/posts/${id}`, {
      withCredentials: true,
    });
    return data;
  },
});
