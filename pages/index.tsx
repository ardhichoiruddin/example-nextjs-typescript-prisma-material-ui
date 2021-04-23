import { GetServerSideProps } from 'next'
import { PrismaClient } from '@prisma/client'

import styles from '../styles/Home.module.css'

import HomeComponent from '../src/components/pages/home'

const prisma = new PrismaClient()

export default function Home({ posts }) {
  console.log(posts)
  return (
    <>
      <HomeComponent/>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const posts = await prisma.post.findMany()

    return {
      props : {
        posts
      }
    }
}


