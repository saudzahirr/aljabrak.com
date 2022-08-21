import React,{useState,useRef,useEffect} from 'react'
import { submitComment } from '../services';

const CommentsForm = ({slug}) => {
    const [errorMessage, setErrorMessage] = useState(false);
    const [localStorage, setLocalStorage] = useState(null);
    const [successMessage, setSuccessMessage] = useState(false);
    const nameEl = useRef();
    const emailEl = useRef();
    const commentEl = useRef();
    const storeEl = useRef();
    useEffect(() => {
        nameEl.current.value = window.localStorage.getItem('name');
        emailEl.current.value=window.localStorage.getItem('email')
    }, []);
    const handleCommentSubmission = ()=>{
        setErrorMessage(false);
        const {value: name}=nameEl.current;
        const {value: email}=emailEl.current;
        const {value: comment}=commentEl.current;
        const {checked: storeData}=storeEl.current;
        console.log(storeData)
        
        if(!name || !email || !comment){
            setErrorMessage(true)
            return;
        }
        const commentObj = {name,email,comment,slug}
        if (storeData) {
            window.localStorage.setItem('name', name)
            window.localStorage.setItem('email', email)
        } else {
            // window.localStorage.clear()
            window.localStorage.removeItem("name")
            window.localStorage.removeItem("email")

        }

        submitComment(commentObj).then(response => {
            setSuccessMessage(true)
            setTimeout(() => {
                setSuccessMessage(false)
            }, 3000);
        })

    }
  return (
    <div className='bg-white shadow-lg p-8 pb-12 mb-8 rounded-lg'>
        <h3 className='text-xl font-bold pb-4 mb-8 border-b-2' >Leave a Comment</h3>
        <div className="grid grid-cols-1 mb-4 gap-4">
            <textarea ref={commentEl} 
                className='p-4 outline-none text-gray-700 w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100'
                placeholder='Comment'>
            </textarea>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 mb-4 gap-4">
              <input type='text' ref={nameEl} name='name' placeholder='Name' className='py-2 px-4 outline-none text-gray-700 w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100' />
              <input type='text' ref={emailEl} className='py-2 px-4 outline-none text-gray-700 w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100'
                  placeholder='Email' name='email' />
        </div>
        <div className="grid grid-cols-1 mb-4 gap-4">
            <div>
                <input type='checkbox' className='accent-gray-500' name="storeData" id="storeData" ref={storeEl} value={true}/>
                <label className='text-gray-500 ml-2 cursor-pointer' htmlFor="storeData"> Save my name and Email info for the next time I comment</label>
            </div>
        </div>
        {errorMessage && <p className='text-xs text-red-500'>All Fields are required</p>}
        <div className="mt-8">
            <button type="button" onClick={handleCommentSubmission}
                  className='transition rounded-full duration-500 ease hover:bg-black bg-gray-600 text-white transform hover:translate-x-[4px] inline-block px-4 py-2 cursor-pointer '>
                    Post Comment
            </button>
        </div>
        {successMessage && <span className='text-xl font-semibold text-green-500 float-right'>
            Comment submitted successfully for review</span>}
        
        
    </div>
  )
}

export default CommentsForm