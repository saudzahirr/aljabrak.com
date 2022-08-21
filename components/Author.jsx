import React from 'react'
import Image from 'next/image'
const Author = ({author}) => {
  return (
    <div className='bg-slate-200  relative shadow-lg p-8 pb-12 mb-8 mt-20  rounded-lg'>
      <h3 className='absolute -top-12 border-2 rounded-lg font-semibold -ml-8 p-2 text-white'> About Author</h3>
      <div className='flex flex-row gap-5 flex-wrap '>
        <Image src={author.photo.url} height='100px' width='100px' className='rounded-lg' unoptimized layout='intrinsic' alt={author.name} />
        <div className='flex flex-col flex-grow justify-center'>
          <h3 className='font-semibold text-xl text-gray-700'>{author.name} </h3>
          <p className='text-base'> {author.bio}</p>

        </div>
      </div>

    </div>
  )
}

export default Author