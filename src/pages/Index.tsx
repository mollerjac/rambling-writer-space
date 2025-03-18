
import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import BlogCard from '../components/blog/BlogCard';
import { blogPosts } from '../data/blogPosts';

const Index = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <section className="mb-16 text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Velkommen til Min Blog</h1>
            <p className="text-xl text-gray-600">Her deler jeg mine tanker og oplevelser om alt, hvad jeg går og laver.</p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold mb-8 animate-fade-in">Seneste Indlæg</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts.map((post, index) => (
                <BlogCard key={post.slug} post={post} index={index} />
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Index;
