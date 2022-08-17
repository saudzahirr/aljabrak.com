import React from "react";
import Link from "next/link";
const PostCard = ({ post }) => {
  console.log(post)
  return (
    // <div className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8">
    //   <div className="relative overflow-hidden shadow-md pb-80 mb-6">
    //     <img
    //       src={post.featuredImage.url}
    //       alt={post.title}
    //       className='object-top absolute h-80 w-full object-cover shadow-lg'
    //     />
    //     <h1 className="text-black transition duration-300 text-center mb-8 cursor-pointer">
    //       {post.title}
    //     </h1>
    //   </div>

    // </div>
    <div className="flex flex-col w-full bg-white rounded-md mb-8 m-5">
      <div>
        <img className="p-4 rounded" src={post.featuredImage.url} alt={post.title} />
        <h1 className="text-black text-xl text-center font-bold transition duration-300 hover:text-gray-400">
          <Link href={`/post/${post.slug}`}>{post.title}</Link>
        </h1>
      </div>
      <div className="flex flex-row ">
        <img src={post.author.photo.url} alt={post.author.name} 
        className="rounded-full " />
        <p className="text-xl" ></p>
      </div>
    </div>
  );
};

export default PostCard;
