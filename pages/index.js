/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import { useSession} from "next-auth/react";
import useUserInfo from '../hooks/useUserInfo';
import UsernameForm from '../components/UsernameForm';
import PostForm from '../components/PostForm';


export default function Home() {

 
  const {userInfo, status: userInfoStatus } = useUserInfo()

  

  

  if( userInfoStatus === 'loading') {
    return 'loading user info'  
  }

  if( !userInfo?.username) {
    return <UsernameForm />
  }

  return (
    <div >
      <Head>
        <title>Twitter Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='max-w-xl mx-auto border-l border-r border-twitterBorder min-h-screen'>
        <h1 className='text-lg font-bold'>
          Home Page - Logged in as {userInfo.username}
        </h1>
        <PostForm />

       
      </main>

      
    </div>
  )
}
