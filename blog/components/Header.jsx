import React, { useState, useEffect } from 'react'
import { getCategories } from '../services'
import Link from "next/link";


const Header = () => {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    getCategories().then(result => {
      setCategories(result)
    }, [])
  })
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-blue-400 py-3">
        <div className="md:float-left block ">
          <Link href="/">
            <span className="text-4xl font-bold cursor-pointer text-gray-200 hover:text-gray-300 duration-300">
              ALJABRAK
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left  md:contents text-white">
          {categories.map((category, index) => (
            <Link key={index} href={`/category/${category.slug}`}>
              <span className="md:float-right font-semibold text-xl align-middle mt-2 ml-3 cursor-pointer  hover:text-gray-300 duration-300 ">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
