import {NextApiRequest, NextApiResponse} from 'next'
import { getById } from '../../../lib/posts'

type Post = {
    userId: number
    id: number
    title: string
    body: string
    timestamp: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Post>
){
    const { query:{ id } } = req;
    const post = await getById(id)
    res.status(200).json(post)
}