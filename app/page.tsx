'use client';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

export default function Home() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const serviceAreas = [
    {
      title: "Bacchus Marsh & Surrounds",
      image: "/Farm.jpg",
      description: "Professional electrical services throughout Bacchus Marsh and nearby suburbs."
    },
    {
      title: "Ballan & Surrounds",
      image: "/Forest.jpg",
      description: "Expert electrical solutions covering Ballan and surrounding communities."
    },
    {
      title: "Ballarat & Surrounds",
      image: "/Windmills.jpg",
      description: "Reliable residential and commercial electrical support in Ballarat & surrounds."
    }
  ];

  const services = [
    {
      title: "Residential Services",
      description: "Expert electrical solutions for homes, from repairs to complete rewiring. Licensed professionals ensuring your family's safety and comfort.",
      icon: "fas fa-home",
      benefits: [
        "24/7 emergency service",
        "Licensed & insured experts",
        "Same-day appointments"
      ]
    },
    {
      title: "Commercial Services",
      description: "Comprehensive electrical services for businesses, minimising downtime and maximising efficiency. Trusted by leading companies.",
      icon: "fas fa-building",
      benefits: [
        "Energy-efficient solutions",
        "Preventive maintenance",
        "Code compliance"
      ]
    },
    {
      title: "Industrial Services",
      description: "Heavy-duty electrical solutions for manufacturing and industrial facilities. Keeping your operations running smoothly.",
      icon: "fas fa-industry",
      benefits: [
        "Custom installations",
        "Safety compliance",
        "24/7 support"
      ]
    }
  ];

  return (
    <>
      <Navbar />
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section
          ref={targetRef}
          className="relative min-h-[90vh] flex items-center justify-center pt-20 bg-gray-50"
        >
          <motion.div
            style={{ y, opacity }}
            className="absolute inset-0 pointer-events-none"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background opacity-50" />
          </motion.div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              {/* Static H1, no animation */}
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Your Trusted Electrical
                <span className="block text-green-700">Service Partner</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Professional electrical services with 24/7 emergency support. 
                Licensed experts ready to solve any electrical challenge.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="tel:0432974722"
                  className="btn-primary text-lg px-12 py-4 rounded-full inline-flex items-center justify-center gap-2 bg-green-700 text-white hover:bg-green-800"
                >
                  Get Emergency Service
                  <i className="fas fa-bolt"></i>
                </Link>
                <Link
                  href="/contact"
                  className="btn-secondary text-lg px-12 py-4 rounded-full inline-flex items-center justify-center gap-2 border-2 border-green-700 text-green-700 hover:bg-green-50"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Expert Services</h2>
              <p className="text-xl text-gray-600">
                Comprehensive electrical solutions for every need
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <i className={`${service.icon} text-2xl text-green-700`}></i>
                  </div>
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <i className="fas fa-check text-green-700"></i>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Areas We Service Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Areas We Service</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {serviceAreas.map((area, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="relative h-48">
                    <Image
                      src={area.image}
                      alt={`Professional electrical services in ${area.title}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={index === 0}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{area.title}</h3>
                    <p className="text-gray-600">{area.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="sr-only" aria-hidden="false">…</div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                className="bg-white p-6 rounded-xl shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="fas fa-star" aria-hidden="true"></i>
                    ))}
                  </div>
                  <span className="sr-only">5 out of 5 stars</span>
                </div>
                <p className="text-gray-600 mb-4">
                  &rdquo;BMC Electrical Contractors were great! They gave a quote, prompt arrival, efficient and pleasant to deal with whilst on site. Highly recommend this company.&rdquo;
                </p>
                <div className="font-semibold">- John M.</div>
              </motion.div>
              {/* …other testimonials */}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
