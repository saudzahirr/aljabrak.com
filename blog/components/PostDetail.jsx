import React from 'react'
import moment from 'moment'
import { RichText } from '@graphcms/rich-text-react-renderer'
import Image from 'next/image'
const PostDetail = ({ post }) => {
    return (
        <div className='bg-white shadow-lg mt-6 rounded-lg lg:p-8 p-4 pb-12 mb-8'>
            <div className='relative overflow-hidden shadow-md mb-6'>
                {/* <img
                    src={post.featuredImage.url}
                    alt={post.title}
                    className='object-top w-full h-full rounded-lg'
                /> */}
                <Image 
                    src={post.featuredImage.url}
                    alt={post.title}
                    className='object-cover w-full h-full'
                    layout='intrinsic'
                    width='800'
                    height='400'
                    unoptimized
                />
            </div>
            <div className='px-4 lg:px-0'>
                <div className='flex flex-row items-center'>
                    <div>
                        {/* <img
                            className="rounded-full h-[30px] w-[30px]"
                            src={post.author.photo.url}
                            alt={post.author.name}
                        /> */}
                        <Image 
                            className="rounded-full"
                            width='30'
                            height='30'
                            layout='intrinsic'
                            src={post.author.photo.url}
                            alt={post.author.name}
                        />
                    </div>
                    <p className='ml-3 '>{post.author.name}</p>
                    <div className='ml-auto'>
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
                <h3 className='text-xl m-4 font-bold text-black'>{post.title}</h3>
            </div>
            <RichText
                content={post.content.raw}
                renderers={{
                    h1: ({ children }) => <h1 className="text-black text-xl text-center font-bold">{children}</h1>,
                    bold: ({ children }) => <strong>{children}</strong>,
                    img: ({ src, title, width, height, mimeType, altText }) => (<div>
                        {/* <img
                            src={src}
                            width={width}
                            height={height}
                            alt={altText}
                            className='rounded-lg lg:my-3 my-2'
                        /> */}
                        <Image
                            src={src}
                            width={width}
                            height={height}
                            alt={altText}
                            layout='intrinsic'
                            className='rounded-lg lg:my-3 my-2'
                        />
                    </div>),
                    a: ({ children, openInNewTab, href, rel, ...rest }) => {
                        if (href.match(/^https?:\/\/|^\/\//i)) {
                            return (
                                <a
                                    href={href}
                                    target={openInNewTab ? '_blank' : '_self'}
                                    rel='noopener noreferrer'
                                    {...rest}
                                >
                                    {children}
                                </a>
                            );
                        }
                    }

                    }}
                    />
    </div>

    )
    }

export default PostDetail