import { Inter } from 'next/font/google';
import Image from 'next/image';

interface HeroBannerProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  useGreenBackground?: boolean;
}

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

export default function HeroBanner({ 
  title, 
  subtitle, 
  backgroundImage,
  useGreenBackground = false 
}: HeroBannerProps) {
  return (
    <section 
      className={`relative ${backgroundImage ? 'min-h-[40vh] md:min-h-[40vh]' : 'min-h-[30vh] md:min-h-[40vh]'}`}
      role="banner"
      aria-label={title}
    >
      {/* Background */}
      {backgroundImage ? (
        <>
          <div className="absolute inset-0">
            <Image
              src={backgroundImage}
              alt=""
              fill
              className="object-cover"
              priority
            />
          </div>
          <div 
            className="absolute inset-0 bg-black/60"
            aria-hidden="true"
          />
        </>
      ) : useGreenBackground ? (
        <div 
          className="absolute inset-0 bg-green-700"
          aria-hidden="true"
        />
      ) : null}

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 flex items-center justify-center">
        <div className="text-center">
          <h1 
            className={`text-2xl md:text-[3.5rem] font-bold text-white leading-tight ${inter.variable}`}
          >
            {title}
          </h1>
          {subtitle && (
            <p 
              className={`mt-4 text-base md:text-xl text-white max-w-[600px] mx-auto ${inter.variable}`}
            >
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}