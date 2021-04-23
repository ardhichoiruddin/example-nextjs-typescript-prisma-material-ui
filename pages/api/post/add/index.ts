import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async(req: NextApiRequest, res: NextApiResponse) => {

    if(req.method !== 'POST') {
        res.status(405).json({ name: 'Method not allowed' })
    }

    const postData = JSON.parse(req.body)

    const savedPost = await prisma.post.create({
        data: postData
    })

    res.status(200).json(savedPost)
}