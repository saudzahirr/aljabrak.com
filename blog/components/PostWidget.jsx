import React,{useState,useEffect} from 'react'
import { getRecentPosts,getSimilarPosts } from '../services'
import moment from 'moment';
import Link from 'next/link';

const PostWidget = ({ categories,slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);
  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) => {
        console.log(result)
        setRelatedPosts(result);
      });
    } else {
      getRecentPosts().then((result) => {
        setRelatedPosts(result);
      });
    }
  }, [slug]);
  return (
    <div className='mt-6 bg-white shadow-lg rounded-lg flex flex-col mb-10 p-3 justify-center'>
      <h1 className='text-xl w-full font-bold self-start p-2 text-black border-b-2'>
        {slug? 'Related Posts' :'Recent Posts'}
        </h1>
      {
        relatedPosts.map((recent)=> (
          <div className='flex w-full flex-row items-center justify-center m-4' key={recent.title}>
            <div className='mr-3' >
              <Link href={`/post/${recent.slug}`}>
              <img 
                className='rounded-lg cursor-pointer hover:scale-105 duration-150 shadow-sm'
                height='100px'
                width='100px' 
                src={recent.featuredImage.url}
              />
              </Link>
            </div>
            <div className='flex-grow flex flex-col text-base mr-3 font-semibold'>
              <p className='underline'><Link href={`/post/${recent.slug}`}>{recent.title}</Link></p>
              <span className="text-gray-500 text-xs align-middle">
                Published: {moment(recent.createdAt).format("MMM DD, YYYY")}
              </span>
            </div>
          </div>
        ))
      }
    </div>
  )
}
// export async function getStaticProps() {
//   const recentPosts = await getRecentPosts()
//   console.log(recentPosts)
//   return {
//     props: { recentPosts }
//   }
// } You can't do this inside components, only getStaticProps work inside /pages folder in pages
export default PostWidget