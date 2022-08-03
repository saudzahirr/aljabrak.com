import React,{useState,useEffect} from 'react'
import { getRecentPosts,getSimilarPosts } from '../services'
import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';

const PostWidget = ({ categories,slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);
  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) => {
        setRelatedPosts(result);
      });
    } else {
      getRecentPosts().then((result) => {
        setRelatedPosts(result);
      });
    }
  }, [categories,slug]);
  return (
    <div className='mt-6 bg-white shadow-lg rounded-lg flex flex-col mb-5 p-3 justify-center'>
      <h1 className='text-xl w-full font-bold self-start p-2 text-black border-b-2'>
        {slug? 'Related Posts' :'Recent Posts'}
        </h1>
      {
       relatedPosts.map((recent)=> (
          <div className='flex w-full flex-row items-center justify-center m-4' key={recent.createdAt}>
            <div className='-ml-2 mr-3 w-fit h-fit hover:scale-[1.2] duration-200' >
              <Link href={`/post/${recent.slug}`} passHref>
              {/* <img 
                className='rounded-lg cursor-pointer hover:scale-105 duration-150 shadow-sm'
                height='100px'
                width='100px' 
                alt={recent.title}
                src={recent.featuredImage.url}
              /> */}
              <div>
              <Image 
              className='rounded-lg cursor-pointer shadow-sm'
              layout='fixed'
              height='60'
              width='100'
              alt={recent.title}
              src={recent.featuredImage.url}
              />
               </div>
              </Link>
            </div>
            <div className='flex-grow flex flex-col text-sm mr-3 font-semibold'>
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