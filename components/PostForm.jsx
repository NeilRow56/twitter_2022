/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import useUserInfo from '../hooks/useUserInfo'
import axios from 'axios'

const PostForm = () => {
    const { userInfo, status } = useUserInfo()
    const [text, setText ] = useState('')

    async function handlePostSubmit(e) {
        e.preventDefault()
        await axios.post('/api/posts', {text})

    }

    if(status === 'loading') {
        return ''
    }

  return (
    <form className='mx-5' onSubmit={handlePostSubmit}>
          <div className='flex p-2'>
            <div className='rounded-full overflow-hidden w-12 h-12'>
              <img src={userInfo?.image} alt="avatar" />
            </div>
            <div className='grow pl-4 '>
              <textarea className='w-full p-2 bg-transparent text-twitterWhite' 
              value={text}
              onChange = {e => setText(e.target.value)}
              placeholder={'What\'s happening?'}
              />
              <div className='text-right border-t border-twitterBorder pt-2 pb-2'>
              
              <button className='rounded-full bg-twitterBlue text-twitterWhite px-4 py-2'>Tweet</button>
              </div>
              
            </div>
          </div>

        </form>
  )
}

export default PostForm