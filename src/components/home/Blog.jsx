import React from "react";
import Avatar1 from "../../images/blog/Avatar.png";
import Avatar2 from "../../images/blog/Avatar-1.png";
import Avatar3 from "../../images/blog/Avatar-2.png";
import ThumbsUp from "../../images/blog/thumbs-up.png";
import Eye from "../../images/blog/eye.png";

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      category: "Article",
      title: "How do you use social media for growing traffic and sales?",
      author: "Jessica Parker",
      date: "May, 2020",
      readTime: "6 min read",
      avatar: Avatar1,
      likes: 34,
      views: 203,
    },
    {
      id: 2,
      category: "Lifestyle",
      title: "Health & fitness for busy people during times of stress",
      author: "Jason Bourne",
      date: "June, 2020",
      readTime: "10 min read",
      avatar: Avatar2,
      likes: 39,
      views: 604,
    },
    {
      id: 3,
      category: "CEO/ Office",
      title: "QR codes- innovative ways to use them in small business",
      author: "Wanda Maximoff",
      date: "March, 2020",
      readTime: "7 min read",
      avatar: Avatar3,
      likes: 26,
      views: 436,
    },
  ];

  return (
    <section className="py-20 bg-linear-to-b from-purple-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">Blog post</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Blogs are a great method to increase traffic and generate leads.
            Make a profit.
            <br />
            Get compensated for your efforts.
          </p>
        </div>

        {/* Blog cards grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition"
            >
              {/* Category badge */}
              <span className="inline-block text-indigo-600 text-sm font-medium mb-4">
                {post.category}
              </span>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-800 mb-4 leading-snug">
                {post.title}
              </h3>

              {/* Author info */}
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={post.avatar}
                  alt={post.author}
                  className="w-10 h-10 rounded-full"
                />
                <div className="text-sm">
                  <p className="font-medium text-gray-800">{post.author}</p>
                  <p className="text-gray-500">
                    {post.date} • {post.readTime}
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-4 text-gray-500 text-sm">
                <div className="flex items-center gap-1">
                  <img src={ThumbsUp} alt="likes" className="w-4 h-4" />
                  <span>{post.likes}</span>
                </div>
                <div className="flex items-center gap-1">
                  <img src={Eye} alt="views" className="w-4 h-4" />
                  <span>{post.views}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All button */}
        <div className="text-center">
          <button className="border-2 border-indigo-500 text-indigo-600 font-semibold px-8 py-3 rounded-full hover:bg-indigo-50 transition">
            View All
          </button>
        </div>
      </div>
    </section>
  );
}
