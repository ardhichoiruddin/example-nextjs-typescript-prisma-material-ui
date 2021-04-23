import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async(req: NextApiRequest, res: NextApiResponse) => {

    if(req.method !== 'GET') {
        res.status(405).json({ name: 'Method not allowed' })
    }

    const posts = await prisma.post.findMany()

    res.status(200).json(posts)
}