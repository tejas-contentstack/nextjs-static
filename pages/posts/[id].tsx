import type {
    GetStaticProps,
    GetStaticPaths,
  } from 'next'
import { getById } from '../../lib/posts'

type Post = {
    userId: number
    id: number
    title: string
    body: string
    timestamp: string
}


  type props = {
    post: Post
  }

export default function Page({post}: props) {
    return <div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <p>{post.timestamp}</p>
    </div>
  }


  export const getStaticPaths = (async () => {
    return {
      paths: [
        { params: { id: '1' } },
        { params: { id: '2' } },
        { params: { id: '3' } },
        { params: { id: '4' } },
        { params: { id: '5' } },
      ],
      fallback: 'blocking',
    }
  }) satisfies GetStaticPaths

  export const getStaticProps = (async ({params}) => {
    
    const post = await getById(params.id)
    return {
        props: {
            post
        },
      revalidate: 10,
    }
  }) satisfies GetStaticProps<{
  post: Post
}>