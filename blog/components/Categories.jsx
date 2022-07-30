import React,{useState,useEffect} from 'react'
import Link from 'next/link'
import { getCategories } from '../services'
const Categories = () => {
  const [categories,setCategories]= useState([])
  useEffect(()=>{
    getCategories().then(result => {
      setCategories(result)
  })},[])
  return (
    <div className='text-black bg-white rounded-lg shadow-sm p-4 '>
      <h1 className='text-xl font-bold mb-3 py-4 px-1 border-b-2' >Categories</h1>
      {categories.map(category => (
        <h3 className='text-base py-2 transform hover:scale-y-110 duration-150 font-medium cursor-pointer underline' key={category.name}><Link href={`/category/${category.slug}`}>
          {category.name}</Link></h3>
      ))}
     
    </div>
  )
}

export default Categories