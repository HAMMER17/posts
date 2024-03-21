

import { fetchPosts } from '../services/fetchPosts';
import CardPost from '../components/CardPost';

import { useQuery } from '@tanstack/react-query';


const Posts = () => {

  const query = useQuery({ queryKey: ['posts'], queryFn: fetchPosts })

  return (
    <div className='post_container'>
      <h1>Posts</h1>
      {query.data?.map((elem: { id: number; title: string; body: string; }) => (
        <CardPost id={elem.id} title={elem.title} body={elem.body} />
      ))}

    </div>
  )
}

export default Posts
