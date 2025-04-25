"use client";

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

type ReactStarsProps = {
  count: number;
  value?: number;
  size?: number;
  edit?: boolean;
  activeColor?: string;
};

const ReactStars = dynamic<ReactStarsProps>(
  () => import('react-rating-stars-component'),
  {
    ssr: false,
    loading: () => <div className="h-6 bg-gray-200 rounded animate-pulse"></div>
  }
);

export default function ReviewsPage() {
  const stats = {
    averageRating: 4.9,
    totalReviews: 512,
    verifiedReviews: 486,
    categories: {
      residential: 312,
      commercial: 156,
      industrial: 44
    }
  };

  const reviews = [
    {
      name: "Jase Matthews ",
      avatar: "/avatars/client3.jpg",
      rating: 5,
      text: "A huge thankyou to Brandon once again he's done a ton of work at our place in kurunjang very honest and quality work highly recommended.",
    },
    {
      name: "John Mahoney",
      rating: 5,
      text: "BMC electrical contractors were great! They gave a quote, prompt arrival, efficient and pleasant to deal with whilst on site. Highly recommend this company.",
    },
    {
      name: "Marno Brits",
      rating: 5,
      text: "Very knowledgeable and friendly service. Brandon really knows his stuff.",
    }
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 md:pt-32">
        {/* Hero Section */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <motion.h1 
                className="text-4xl md:text-5xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                What Our Clients
                <span className="block text-green-700">Say About Us</span>
              </motion.h1>
              <p className="text-xl text-gray-600 mb-8">
                Read authentic experiences from our valued customers
              </p>
              <div className="flex items-center justify-center gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-700">4.9</div>
                  <div className="flex justify-center mt-2">
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <i key={star} className="fas fa-star text-yellow-500"></i>
                      ))}
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 mt-1">Average Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-700">{stats.totalReviews}</div>
                  <div className="text-sm text-gray-600 mt-1">Verified Reviews</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-8 border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-4 items-center justify-between">
              <div className="flex gap-4">
                <select className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500">
                  <option value="">All Categories</option>
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                  <option value="industrial">Industrial</option>
                </select>
                <select className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500">
                  <option value="">All Ratings</option>
                  <option value="5">5 Stars</option>
                  <option value="4">4+ Stars</option>
                  <option value="3">3+ Stars</option>
                </select>
              </div>
              <div className="relative">
                <input
                  type="search"
                  placeholder="Search reviews..."
                  className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <i className="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reviews.map((review, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {review.projectImage && (
                    <div className="relative h-48">
                      <Image
                        src={review.projectImage}
                        alt="Project"
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden">
                        <Image
                          src={review.avatar}
                          alt={review.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold">{review.name}</h3>
                        <div className="text-sm text-gray-500">{review.date}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 mb-4">
                      <ReactStars
                        count={5}
                        value={review.rating}
                        size={20}
                        edit={false}
                        activeColor="#FFD700"
                      />
                      <span className="text-sm text-gray-500">{review.category}</span>
                    </div>
                    <p className="text-gray-600">{review.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Write Review Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Share Your Experience</h2>
              <p className="text-gray-600">
                Your feedback helps us improve and helps others make informed decisions
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Category
                  </label>
                  <select
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  >
                    <option value="">Select a category</option>
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                    <option value="industrial">Industrial</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Rating
                  </label>
                  <ReactStars
                    count={5}
                    size={30}
                    activeColor="#FFD700"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Review
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  ></textarea>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Photos (Optional)
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-700 text-white py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors"
                >
                  Submit Review
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
