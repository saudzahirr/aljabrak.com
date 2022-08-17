import React from "react";
import Link from "next/link";
import moment from "moment";
import Image from 'next/image'
const PostCard = ({ post }) => {
  return (
    <div className="flex flex-col w-full bg-white rounded-md lg:m-6 sm:mx-2 sm:my-3 m-3 ">
      <div className="m-2">
        <Image
          unoptimized
          className="shadow-lg rounded-sm w-full"
          src={post.featuredImage.url}
          alt={post.title}
          width='1000'
          height='550px'
        />
        {/* <img
          className="shadow-lg rounded-sm w-full"
          src={post.featuredImage.url}
          alt={post.title}
        /> */}
      </div>
      <div className="text-black w-fit self-center inline-block text-xl text-center align-middle font-bold transition duration-300 hover:text-gray-700">
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </div>
      <div className="flex flex-row items-center justify-center self-center mb-4 p-4">
        {/* <img
          className="rounded-full h-[30px] w-[30px]"
          src={post.author.photo.url}
          alt={post.author.name}
        /> */}
        <Image
          unoptimized
          className="rounded-full"
          src={post.author.photo.url}
          alt={post.author.name}
          height='30'
          width='30'
        />
        <p className="text-base  ml-3 font-normal">{post.author.name} </p>
        <div className="font-normal ml-4 self-center text-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 inline mr-2 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span className=" text-base align-middle">
            {moment(post.createdAt).format("MMM DD, YYYY")}
          </span>
        </div>
      </div>
      <p className="text-base text-center self-center" >{post.excerpt}...</p>
      <button className='p-3 w-fit self-center my-4 rounded-lg hover:text-white hover:bg-black bg-gray-600 text-white transform hover:translate-x-[4px] duration-500'>
         <Link href={`/post/${post.slug}`}>Read More..</Link>
      </button> 
    </div>
  );
};

export default PostCard;
