
import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { blogPosts } from '../../data/blogPosts';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const post = blogPosts.find(post => post.slug === slug);
  
  useEffect(() => {
    if (!post) {
      navigate('/');
    }
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [post, navigate]);
  
  if (!post) return null;
  
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl animate-fade-in">
      <div className="mb-10">
        <Link to="/" className="text-gray-600 hover:text-black flex items-center gap-1 transition-colors mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left">
            <path d="m12 19-7-7 7-7"/>
            <path d="M19 12H5"/>
          </svg>
          Tilbage til oversigten
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">{post.title}</h1>
        
        <div className="flex flex-wrap items-center text-gray-600 mb-8">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-gray-100 rounded-full mr-3">
            {post.category}
          </span>
          <span>{post.date}</span>
          <span className="mx-2">•</span>
          <span>{post.readTime} min læsning</span>
        </div>
      </div>
      
      <div className="mb-10 rounded-lg overflow-hidden">
        <img 
          src={post.coverImage} 
          alt={post.title} 
          className="w-full h-auto object-cover"
        />
      </div>
      
      <div className="blog-content prose prose-lg max-w-none">
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
      
      <div className="mt-12 pt-8 border-t border-gray-100">
        <h3 className="text-xl font-semibold mb-4">Del dette indlæg</h3>
        <div className="flex space-x-4">
          <a href={`https://twitter.com/intent/tweet?text=${post.title}&url=${window.location.href}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
          >
            Twitter
          </a>
          <a href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
          >
            Facebook
          </a>
          <button 
            onClick={() => {
              navigator.clipboard.writeText(window.location.href);
              alert('Link kopieret til udklipsholder!');
            }}
            className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
          >
            Kopier Link
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
