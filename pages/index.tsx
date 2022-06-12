import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../components/firebase'

const Home: NextPage = () => {
  const [postList, setPostList] = useState([])
  useEffect(() => {
    const getPosts = async () => {
      const collectionRef = collection(db, 'posts')
      const data = await getDocs(collectionRef)
      setPostList((data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))) as any)
    }
    getPosts()
  })
  return (
    <div className="flex h-screen items-center justify-center m-2">
      <div className='bg-black p-2 rounded-2xl'>
          {postList.map((post:any) => {
              return (
                <div key={post.id} className="shadow-2xl">
                  <h1 className='bg-black'>{post.title}</h1>
                  <article className='bg-black w-96 '>{post.text}</article>
                </div>
              )
          })}
      </div>
    </div>

  )
}

export default Home
