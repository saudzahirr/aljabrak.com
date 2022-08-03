import React,{useState,useEffect} from 'react'
import Link from 'next/link'
import { getCategories } from '../services'
const Categories = () => {
  const [categories,setCategories]= useState([])
  const [showThree, setShowThree] = useState(true);
  useEffect(()=>{
    getCategories().then(result => {
      setCategories(result)
  })},[])
  return (
    <div className='text-black mt-6 bg-white rounded-lg shadow-sm p-4 '>
      <h1 className='text-xl font-bold mb-3 py-4 px-1 border-b-2' >Categories</h1>
      {showThree? categories.slice(0,3).map(category => (
        <h3 className='text-base py-2 transform hover:scale-y-110 duration-150 font-medium cursor-pointer underline' key={category.createdAt}><Link href={`/category/${category.slug}`}>
          {category.name}</Link></h3>
      ))
       : 
        categories.map(category => (
          <h3 className='text-base py-2 transform hover:scale-y-110 duration-150 font-medium cursor-pointer underline' key={category.createdAt}><Link href={`/category/${category.slug}`}>
            {category.name}</Link></h3>
        ))
      }
      {categories.length >3 && <div className='flex justify-center items-center'> <button type='button'
        className='p-2 rounded-lg w-full inline-block text-center bg-gray-600 hover:bg-black text-white duration-300 transition ' 
        onClick={()=>setShowThree(!showThree)}>
          {showThree ? `Show All Categories`: `Reset`} 
        </button></div>
      }
    </div>
  )
}

export default Categories