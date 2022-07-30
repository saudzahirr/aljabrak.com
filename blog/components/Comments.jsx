import React,{useEffect,useState} from 'react'
import {getPostComments} from '../services'
import moment from 'moment'
const Comments = ({slug}) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    getPostComments(slug).then(result => setComments(result))
  }, []);
  return (
    <div className='bg-white shadow-lg p-8 pb-12 mb-8 rounded-lg' >
      {comments.length && <h3 className='font-semibold text-xl text-black border-b mb-2 border-gray-300' > {comments.length} Comments</h3>}
      {
        comments.map(({name,createdAt,comment})=>(
          <div key={createdAt} className='my-4 border-b'>
            <h3 className='font-semibold '>{name} <span className='font-normal'>on {moment(createdAt).format('MMM DD, YYYY')}</span></h3>
            <div className='w-full border-2 p-3 my-3 rounded-lg '>{comment}</div>
          </div>
        ))
      }
    </div>
  )
}

export default Comments