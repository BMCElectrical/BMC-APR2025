import Link from 'next/link';
import { motion } from 'framer-motion';

interface ContactCalloutProps {
  headline?: string;
  message?: string;
  buttonText?: string;
  buttonLink?: string;
}

export default function ContactCallout({
  headline = "Need Expert Electrical Service?",
  message = "Professional solutions for all your electrical needs, available 24/7",
  buttonText = "Get a Free Quote",
  buttonLink = "/contact"
}: ContactCalloutProps) {
  return (
    <section 
      className="bg-green-700 py-12 md:py-16"
      role="complementary"
      aria-label="Contact callout"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2 
            className="text-2xl md:text-3xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {headline}
          </motion.h2>
          <motion.p 
            className="text-lg text-white/90 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {message}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              href={buttonLink}
              className="inline-block bg-white text-green-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors"
            >
              {buttonText}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}