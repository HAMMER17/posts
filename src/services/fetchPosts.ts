import axios, { AxiosResponse } from "axios";

export async function fetchPosts({ pageParam }: any) {
  const data = await axios.get<any, AxiosResponse<any, any>, any>(`https://jsonplaceholder.typicode.com/posts?_page=${pageParam}&_limit=5`)

  return data.data
}

