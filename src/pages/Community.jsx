import React from 'react'
import { images, posts } from '../constants'
import { Link }  from 'react-router-dom'
import { useTitleAnime, useScrollAnime } from '../animation'

const Community = () => {
    useTitleAnime();
     useScrollAnime();
  return (
    <div className="mx-auto px-4 py-8">
    <header className="text-center mb-8 animate-on-scroll">
        <h1 id="title" className="text-4xl font-bold text-purple-800 opacity-0 translate-y-20">Fitness Community</h1>
        <p className="text-lg text-[#ccc] mt-2">Connect with other fitness enthusiasts, share tips, and stay motivated!</p>
    </header>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map(post => (
            <div key={post.id} className="bg-white p-6 shadow-md rounded-lg animate-on-scroll">
                <h2 className="text-xl font-semibold mb-2 text-purple-800">{post.title}</h2>
                <p className="text-gray-700 mb-4">{post.content}</p>
                <div className="flex justify-between items-center">
                    <p className="text-gray-600 text-sm">Posted by {post.author} on {post.date}</p>
                    <Link to={`/community/${post.id}`} className="text-purple-600 hover:text-purple-800">Read More</Link>
                </div>
            </div>
        ))}
    </div>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 mt-8">
        {images.map((image) => (
            <div key={image.id} className="p-6 shadow-md rounded-lg animate-on-scroll">
                <img src={image.src} alt={image.alt} className="w-full h-40 object-cover" />
            </div>
        ))}
    </div>
</div>
  )
}

export default Community
