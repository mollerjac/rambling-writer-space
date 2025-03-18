
import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import BlogPostComponent from '../components/blog/BlogPost';

const BlogPost = () => {
  return (
    <>
      <Header />
      <main>
        <BlogPostComponent />
      </main>
      <Footer />
    </>
  );
};

export default BlogPost;
