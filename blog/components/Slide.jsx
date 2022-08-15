import React from 'react'
import moment from 'moment'
const Slide = ({data}) => {
  return (
      <div style={{
          backgroundImage: `url(${data.background})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: '100% 40%'
        //   back
      }} className='relative slide rounded-lg ml-3  transition duration-300 shadow-sm w-[400px] h-[400px]' >
        <div className='flex flex-col justify-center items-center' >
              <p className='text-xs font-bold mt-4 text-white'>{moment(data.createdAt).format("MMM DD, YYYY")}</p>    
            <p className=' mt-4 text-xl font-bold text-white '>{data.title}</p>

        </div>
    </div>
      
  )
}

export default Slide