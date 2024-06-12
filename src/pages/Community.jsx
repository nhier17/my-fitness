import React, { useState, useEffect } from 'react';
import { images, posts as initialPosts } from '../constants';
import { Link } from 'react-router-dom';
import { useTitleAnime, useScrollAnime } from '../animation';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue';

const Community = () => {
  useTitleAnime();
  useScrollAnime();

  const [isMobile, setIsMobile] = useState(false);
  const [posts, setPosts] = useState(initialPosts);
  const [newPost, setNewPost] = useState({ title: '', content: '', image: '' });
  const [comments, setComments] = useState({});
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost({ ...newPost, [name]: value });
  };

  const handleFileChange = (e) => {
    setNewPost({ ...newPost, image: URL.createObjectURL(e.target.files[0]) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPostWithId = { ...newPost, id: posts.length + 1, author: 'You', date: new Date().toLocaleDateString(), likes: 0 };
    setPosts([newPostWithId, ...posts]);
    setNewPost({ title: '', content: '', image: '' });
  };

  const handleLike = (postId) => {
    const updatedPosts = posts.map(post => 
      post.id === postId ? { ...post, likes: post.likes + 1 } : post
    );
    setPosts(updatedPosts);
  };

  const handleCommentSubmit = (postId, comment) => {
    const postComments = comments[postId] || [];
    setComments({ ...comments, [postId]: [...postComments, comment] });
  };

  const splideOptions = {
    perPage: 1,
    type: 'loop',
    autoplay: true,
    interval: 4000,
    pauseOnHover: true,
    resetProgress: false,
    arrows: false,
    drag: 'free',
  };

  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-8 animate-on-scroll">
        <h1 id="title" className="text-4xl font-bold text-purple-800 opacity-0 translate-y-20">Fitness Community</h1>
        <p className="text-lg text-[#ccc] mt-2">Connect with other fitness enthusiasts, share tips, and stay motivated!</p>
      </header>
      
      <form className="mb-8" onSubmit={handleSubmit}>
        <div className="mb-4">
          <input 
            type="text" 
            name="title" 
            value={newPost.title} 
            onChange={handleInputChange} 
            placeholder="Title" 
            className="w-full p-2 border rounded" 
            required 
          />
        </div>
        <div className="mb-4">
          <textarea 
            name="content" 
            value={newPost.content} 
            onChange={handleInputChange} 
            placeholder="What's on your mind?" 
            className="w-full p-2 border rounded" 
            required 
          />
        </div>
        <div className="mb-4">
          <input 
            type="file" 
            name="image" 
            onChange={handleFileChange} 
            className="w-full p-2 border rounded" 
          />
        </div>
        <button type="submit" className="bg-purple-600 text-white p-2 rounded">Share</button>
      </form>

      <div className="mb-8">
        <input
          type="text"
          placeholder="Search posts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {isMobile ? (
          <Splide options={splideOptions}>
            {filteredPosts.map(post => (
              <SplideSlide key={post.id}>
                <div className="bg-white p-6 shadow-md rounded-lg animate-on-scroll">
                  <h2 className="text-xl font-semibold mb-2 text-purple-800">{post.title}</h2>
                  <p className="text-gray-700 mb-4">{post.content}</p>
                  {post.image && <img src={post.image} alt={post.title} className="w-full h-40 object-cover mb-4" />}
                  <div className="flex justify-between items-center">
                    <p className="text-gray-600 text-sm">Posted by {post.author} on {post.date}</p>
                    <Link to={`/community/${post.id}`} className="text-purple-600 hover:text-purple-800">Read More</Link>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <button onClick={() => handleLike(post.id)} className="text-purple-600 hover:text-purple-800">Like ({post.likes})</button>
                    <button onClick={() => handleCommentSubmit(post.id, prompt('Enter your comment'))} className="text-purple-600 hover:text-purple-800">Comment</button>
                  </div>
                  <div className="mt-4">
                    {(comments[post.id] || []).map((comment, index) => (
                      <p key={index} className="text-gray-700 mb-2">Comment: {comment}</p>
                    ))}
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        ) : (
          filteredPosts.map(post => (
            <div key={post.id} className="bg-white p-6 shadow-md rounded-lg animate-on-scroll">
              <h2 className="text-xl font-semibold mb-2 text-purple-800">{post.title}</h2>
              <p className="text-gray-700 mb-4">{post.content}</p>
              {post.image && <img src={post.image} alt={post.title} className="w-full h-40 object-cover mb-4" />}
              <div className="flex justify-between items-center">
                <p className="text-gray-600 text-sm">Posted by {post.author} on {post.date}</p>
                <Link to={`/community/${post.id}`} className="text-purple-600 hover:text-purple-800">Read More</Link>
              </div>
              <div className="flex justify-between items-center mt-4">
                <button onClick={() => handleLike(post.id)} className="text-purple-600 hover:text-purple-800">Like ({post.likes})</button>
                <button onClick={() => handleCommentSubmit(post.id, prompt('Enter your comment'))} className="text-purple-600 hover:text-purple-800">Comment</button>
              </div>
              <div className="mt-4">
                {(comments[post.id] || []).map((comment, index) => (
                  <p key={index} className="text-gray-700 mb-2">Comment: {comment}</p>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 mt-8">
        {images.map((image) => (
          <div key={image.id} className="p-6 shadow-md rounded-lg animate-on-scroll">
            <img src={image.src} alt={image.alt} className="w-full h-40 object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Community;
