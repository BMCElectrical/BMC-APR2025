'use client';

import Navbar from '../components/Navbar'; 
import Footer from '../components/Footer';
import Image from 'next/image'; 
import { motion } from 'framer-motion';

export default function AboutPage() {
  const stats = [
    {
      value: "40+",
      label: "Years Combined Experience",
      icon: "fas fa-users"
    },
    {
      value: "24/7",
      label: "Local Support",
      icon: "fas fa-headset"
    },
    {
      value: "100%",
      label: "Lifetime Guarantee",
      icon: "fas fa-shield-alt"
    }
  ];

  const coreValues = [
    {
      title: "Excellence",
      description: "Delivering superior electrical solutions with precision and expertise.",
      icon: "fas fa-star"
    },
    {
      title: "Safety",
      description: "Prioritising safety in every project through rigorous standards and protocols.",
      icon: "fas fa-shield-alt"
    },
    {
      title: "Integrity",
      description: "Building trust through honest communication and reliable service.",
      icon: "fas fa-handshake"
    }
  ];

  return (
    <div>
      <Navbar />
      <main className="min-h-screen pt-24 md:pt-32">
        {/* Hero Section */}
        <section className="relative py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <motion.h1 
                  className="text-4xl md:text-5xl font-bold mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  Powering Progress with
                  <span className="block text-green-700">Expert Electrical Solutions</span>
                </motion.h1>
                <p className="text-lg text-gray-600 mb-8">
                  With over 40 years of combined experience, BMC Electrical services Bacchus Marsh and surrounding suburbs, delivering excellence, safety, and innovation to homes and businesses alike.
                </p>
              </div>
              <div className="relative h-[400px]">
                <Image
                  src="public/Brandon-about.jpg"
                  alt="Brandon from BMC Electrical"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="pt-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-6 rounded-lg bg-gray-50"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <i className={`${stat.icon} text-4xl text-green-700 mb-4`}></i>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About the Team Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">About the Team</h2>
            </div>
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-6 text-gray-600"
              >
                <p>
                  We are a family-run local business situated in the heart of Moorabool Shire, serving our local community with friendly and affordable electrical services.
                </p>
                <p>
                  Brandon is a dedicated electrician and proud owner of BMC Electrical, with a wealth of knowledge and experience in his field. Our team has vast networks in residential, commercial and industrial landscapes, making BMC Electrical Contractors a one-stop for all electrical works.
                </p>
                <p>
                  We have managed to grow our business in Bacchus Marsh and surrounding suburbs and have loved getting to know the locals, the businesses and the stories behind the many customers we&rsquo;ve interacted with.
                </p>
                <p>
                  Our goal is to provide reliable, professional electrical work that is exceptional and affordable. We understand the importance of quality work that keeps you and your family safe, whilst maintaining transparency about the work being done in your home, office or business by communicating throughout the entire process.
                </p>
                <p>
                  We&rsquo;d love to hear from you – so please feel free to give us a call and speak to us about your electrical needs or simply fill in one of the enquiry forms and one of the team will reach out to discuss your works as soon as we can!
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission & Values Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Mission</h2>
              <p className="text-lg text-gray-600">
                To deliver exceptional electrical services that enhance safety, efficiency, and comfort in every home and business we serve, while maximising professionalism and customer satisfaction.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {coreValues.map((value, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                    <i className={`${value.icon} text-2xl text-green-700`}></i>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-center">{value.title}</h3>
                  <p className="text-gray-600 text-center">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Safety Commitment Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Our Commitment to Safety</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  At BMC Electrical, safety isn&rsquo;t just a priority—it&rsquo;s our foundation. We maintain rigorous safety protocols that exceed industry standards, ensuring the wellbeing of our team and clients alike.
                </p>
                <p>
                  Every project undergoes comprehensive safety assessments, and our team receives regular training on the latest safety practices and regulations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-green-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-6">Ready to Experience Excellence?</h2>
              <motion.button
                className="bg-white text-green-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-50 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = '/contact'}
              >
                Schedule Your Consultation
                <i className="fas fa-arrow-right ml-2"></i>
              </motion.button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
