import React,{useState,useRef,useEffect} from 'react'

const CommentsForm = ({slug}) => {
    const [errorMessage, setErrorMessage] = useState(null);
    const [localStorage, setLocalStorage] = useState(null);
    const [successMessage, setSuccessMessage] = useState(false);
    const nameEl = useRef();
    const emailEl = useRef();
    const commentEl = useRef();
    const storeEl = useRef();

  return (
    <div className='bg-white shadow-lg p-8 pb-12 mb-8 rounded-lg'>
        <h3 className='text-xl font-semibold pb-4 mb-8 border-b-2' >Comments Form</h3>
        <div className="grid grid-cols-1 mb-4 gap-4">
            <textarea ref={commentEl} 
                className='p-4 outline-none text-gray-700 w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100'
                placeholder='comment'>
            </textarea>
        </div>
        <div className="grid grid-cols-1 mb-4 gap-4">
              <input type='text' name='name' placeholder='Name' className='py-2 px-4 outline-none text-gray-700 w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100' />
        </div>
        <div className="grid grid-cols-1 mb-4 gap-4">
            <input type='text' className='py-2 px-4 outline-none text-gray-700 w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100'
            placeholder='Email' name='email' />
        </div>
    </div>
  )
}

export default CommentsForm