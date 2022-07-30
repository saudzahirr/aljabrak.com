import React from 'react'

const Author = ({author}) => {
  return (
    <div className=' flex flex-col relative items-center mt-20 mb-8 rounded-lg bg-black bg-opacity-20'>
      <h1 className='border-b-2 text-xl font-bold absolute -top-12 text-white'> About Author </h1>
      <h1 className='font-bold text-base text-white'>Bio</h1>
      <div className='flex flex-row items-center self-start'>
           
        <img
        src={author.photo.url}
        className='rounded-lg h-full w-[4rem]'
        />
        <p className='px-3 text-white' >{author.bio}</p> 
       </div>
    </div>
  )
}

export default Author