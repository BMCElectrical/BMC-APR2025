'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    {
      title: "Residential Services",
      description: "Complete electrical solutions for homes and apartments",
      icon: "fas fa-home",
      features: [
        "Electrical repairs and maintenance",
        "Lighting installation and design",
        "Safety inspections and upgrades",
        "Smart home automation",
        "Emergency electrical services",
        "Surge protection"
      ]
    },
    {
      title: "Commercial Services",
      description: "Professional electrical services for businesses, minimising downtime and maximising efficiency. Trusted by leading companies.",
      icon: "fas fa-building",
      features: [
        "Commercial wiring and repairs",
        "Lighting systems installation",
        "Energy efficiency solutions",
        "Data and network cabling",
        "Emergency backup systems",
        "Regular maintenance"
      ]
    },
    {
      title: "Industrial Services",
      description: "Heavy-duty electrical solutions for industrial facilities",
      icon: "fas fa-industry",
      features: [
        "Statement Lighting",
        "Machine installation and wiring",
        "Control system installation",
        "Automation",
        "Preventive maintenance",
        "Safety compliance"
      ]
    }
  ];

  const emergencyServices = [
    "24/7 Emergency Response",
    "Power Outage Resolution",
    "Circuit Breaker Issues",
    "Electrical Fire Safety",
    "Storm Damage Repair",
    "Emergency Lighting"
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 md:pt-32">
        {/* Hero Section */}
        <section className="relative py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <motion.h1 
                className="text-4xl md:text-5xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Professional
                <span className="block text-green-700">Electrical Services</span>
              </motion.h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Expert electrical solutions for residential, commercial, and industrial needs
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="p-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                      <i className={`${service.icon} text-2xl text-green-700`}></i>
                    </div>
                    <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-3">
                          <i className="fas fa-check text-green-700"></i>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Emergency Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">24/7 Emergency Services</h2>
              <p className="text-xl text-gray-600">
                Fast response times for all your electrical emergencies
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {emergencyServices.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg flex items-center gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-bolt text-red-600"></i>
                  </div>
                  <span className="text-lg">{service}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Some of our Work Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Some of Our Work</h2>
              <p className="text-xl text-gray-600">
                A glimpse into our completed projects, showcasing our expertise and commitment to quality.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project 1 */}
              <motion.div
                className="bg-white rounded-xl shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div className="relative h-48">
                  <Image
                    src="/switchboard.jpg"
                    alt="Residential Wiring"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Residential Wiring</h3>
                  <p className="text-gray-600">Complete wiring for a modern home.</p>
                </div>
              </motion.div>
              {/* Project 2 */}
              <motion.div
                className="bg-white rounded-xl shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="relative h-48">
                  <Image
                    src="/statement-lighting.jpg"
                    alt="Commercial Lighting"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Commercial Lighting</h3>
                  <p className="text-gray-600">Energy-efficient lighting solutions for a retail space.</p>
                </div>
              </motion.div>
              {/* Project 3 */}
              <motion.div
                className="bg-white rounded-xl shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="relative h-48">
                  <Image
                    src="/residential.jpg"
                    alt="Statement Lighting"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Statement Lighting</h3>
                  <p className="text-gray-600">Effective lighting solutions for your home, office or business.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-green-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and quote
            </p>
            <Link 
              href="/contact"
              className="inline-block bg-white text-green-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
