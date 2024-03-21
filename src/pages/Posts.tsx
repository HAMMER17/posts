

// import { fetchPosts } from '../services/fetchPosts';
import CardPost from '../components/CardPost';

import { useInfiniteQuery } from '@tanstack/react-query';
import axios, { AxiosResponse } from 'axios';




const Posts = () => {
  const { data, fetchNextPage } = useInfiniteQuery(
    {
      queryKey: ['posts'],
      queryFn: async ({ pageParam }: any) => {
        const data = await axios.get<any, AxiosResponse<any, any>, any>(`https://jsonplaceholder.typicode.com/posts?_page=${pageParam}&_limit=5`)

        return await data.data
      },
      initialPageParam: 1,
      getNextPageParam: (_lastPage, _allPages, lastPageParam) => {
        return lastPageParam + 1;
      }
    })
  return (
    <div className='post_container'>
      <h1>Posts</h1>

      {data?.pages?.map((page: any) =>
        page.map((elem: { id: number; title: string; body: string; }) => {
          return <CardPost id={elem.id} title={elem.title} body={elem.body} key={elem.id} />
        }

        ))}
      <button className='button' onClick={() => fetchNextPage()}>next</button>
    </div>
  )
}

export default Posts
