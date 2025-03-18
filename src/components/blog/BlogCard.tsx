
import React from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from '../../data/blogPosts';

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, index }) => {
  const delay = index * 0.1;

  return (
    <div 
      className="group"
      style={{ 
        animation: `fade-up 0.5s ease-out ${delay}s both` 
      }}
    >
      <Link to={`/post/${post.slug}`} className="block">
        <div className="overflow-hidden rounded-lg bg-white shadow-sm transition-all duration-300 hover:shadow-md">
          <div className="aspect-w-16 aspect-h-9 overflow-hidden">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </div>
          <div className="p-6">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-gray-100 rounded-full mb-3">
              {post.category}
            </span>
            <h3 className="text-xl font-display font-bold mb-2 group-hover:text-gray-700 transition-colors">
              {post.title}
            </h3>
            <p className="text-gray-600 mb-3 line-clamp-2">{post.excerpt}</p>
            <div className="flex items-center text-sm text-gray-500">
              <span>{post.date}</span>
              <span className="mx-2">•</span>
              <span>{post.readTime} min læsning</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
