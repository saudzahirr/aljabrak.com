import Head from "next/head";
import { PostCard, PostWidget, Categories } from "../components";
import { getPosts, getRecentPosts } from "../services";
import { useState } from "react";

export default function Home({ posts }) {
  const [showposts,setShowPosts]=useState(posts)
  const handleSearch=(e)=>{
    if(e.target.value)
    {
    setShowPosts(posts.filter(post=>post.node.title.toLowerCase().includes(e.target.value.toLowerCase())))
    }else setShowPosts(posts)
  }
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Aljabrak</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="p-3 w-fit ml-4 text-black text-center">
        <input
          type="text"
          placeholder="Search Blog"
          onChange={handleSearch}
          className="outline-none p-4 placeholder:text-white  bg-gray-800 text-gray-300 font-semibold rounded-lg shadow-sm"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {showposts.map((post) => (
            <PostCard post={post.node} key={post.node.title} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps () {
  const posts = await getPosts();
  return {
    props: {
      posts,
    }
  }
}