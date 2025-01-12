import React from 'react'
import { Blogs } from "@/Utilities/Utils"
import Image from 'next/image'

export default function Blog() {
  return (
    <div className="blog-page">
          <h4 className="blog-h4">Blog</h4>
           <div className='blog-main'>
                    {Blogs.map((blog) => (
                        <div
                            key={blog.id}
                            className='blog-card'
                        >
                        <Image
                           src={blog.src}
                            alt={blog.alt}
                            width={200}
                                height={100}
                                className="blog-img"
                        /> 
                        <h3 className='blog-head'>{blog.head}</h3>
                        <p className='blog-parag'>{blog.parag}</p>
                        </div>
                    ))   
                    }
                  </div>
    </div>
  )
}
