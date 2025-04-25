import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://bmcelectrical.com'),
  title: {
    default: 'BMC Electrical - Professional Electrical Services',
    template: '%s | BMC Electrical'
  },
  description: 'Professional electrical services for residential, commercial and industrial needs. Licensed and insured electricians.',
  keywords: [
    'electrical services',
    'electrician',
    'Bacchus Marsh electrician',
    'Darley electrician',
    'Maddingley electrician',
    'Coimadai electrical services',
    'Pentland Hills electrician',
    'Toolern Vale electrical',
    'Ballan electrical services',
    'Greendale electrician',
    'Myrniong electrical',
    'Gordon electrician',
    'Wallace electrical services',
    'Bungaree electrician',
    'Ballarat electrician',
    'Warrenheip electrical',
    'Wendouree electrician',
    'Sebastopol electrical services',
    'Delacombe electrician',
    'Lucas electrical services',
    'emergency electrician'
  ],
  authors: [{ name: 'BMC Electrical' }],
  creator: 'BMC Electrical',
  publisher: 'BMC Electrical',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#0A1F44' }
    ]
  },
  manifest: '/site.webmanifest',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
  themeColor: '#0A1F44',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://bmcelectrical.com',
    siteName: 'BMC Electrical',
    title: 'BMC Electrical - Professional Electrical Services',
    description: 'Professional electrical services for residential, commercial and industrial needs. Licensed and insured electricians.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Champions - Connect Musicians with Investors',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BMC Electrical - Professional Electrical Services',
    description: 'Professional electrical services for residential, commercial and industrial needs. Licensed and insured electricians.',
    images: ['/og-image.jpg'],
    creator: '@bmcelectrical',
  },
  alternates: {
    canonical: 'https://bmcelectrical.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([{
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://bmcelectrical.com",
              "name": "BMC Electrical",
              "image": "https://bmcelectrical.com/bmc-logo.jpg",
              "url": "https://bmcelectrical.com",
              "telephone": "1800-BMC-HELP",
              "priceRange": "$$",
              "description": "Professional electrical services for residential, commercial and industrial needs. Licensed and insured electricians serving Bacchus Marsh, Ballan, Ballarat and surrounds.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Industrial Drive",
                "addressLocality": "Bacchus Marsh",
                "addressRegion": "VIC",
                "postalCode": "3340",
                "addressCountry": "AU"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -37.6772,
                "longitude": 144.4390
              },
              "areaServed": [
                "Bacchus Marsh",
                "Darley",
                "Maddingley",
                "Coimadai",
                "Pentland Hills",
                "Toolern Vale",
                "Ballan",
                "Greendale",
                "Myrniong",
                "Gordon",
                "Wallace",
                "Bungaree",
                "Ballarat",
                "Warrenheip",
                "Wendouree",
                "Sebastopol",
                "Delacombe",
                "Lucas"
              ],
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "00:00",
                "closes": "23:59"
              },
              "sameAs": [
                "https://www.facebook.com/profile.php?id=100094347470517"
              ],
            }, {
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Electrical Services",
              "provider": {
                "@type": "LocalBusiness",
                "@id": "https://bmcelectrical.com"
              },
              "areaServed": {
                "@type": "State",
                "name": "Victoria"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Electrical Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Residential Electrical Services",
                      "description": "Expert electrical solutions for homes, from repairs to complete rewiring"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Commercial Electrical Services",
                      "description": "Comprehensive electrical services for businesses"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Industrial Electrical Services",
                      "description": "Heavy-duty electrical solutions for manufacturing facilities"
                    }
                  }
                ]
              }
            }]),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [{
                "@type": "Question",
                "name": "Do you provide 24/7 emergency electrical services?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we provide 24/7 emergency electrical services across Bacchus Marsh, Ballan, Ballarat and surrounding areas. Our licensed electricians are always ready to respond to urgent electrical issues."
                }
              }, {
                "@type": "Question",
                "name": "What areas do you service?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We service Bacchus Marsh & surrounds (including Darley, Maddingley, Coimadai, Pentland Hills, Toolern Vale), Ballan & surrounds (including Greendale, Myrniong, Gordon, Wallace, Bungaree), and Ballarat & surrounds (including Warrenheip, Wendouree, Sebastopol, Delacombe, Lucas)."
                }
              }, {
                "@type": "Question",
                "name": "Are your electricians licensed and insured?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, all our electricians are fully licensed and insured. We maintain strict safety standards and comply with all relevant electrical regulations."
                }
              }]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AggregateRating",
              "itemReviewed": {
                "@type": "LocalBusiness",
                "@id": "https://bmcelectrical.com"
              },
              "ratingValue": "5",
              "bestRating": "5",
              "worstRating": "1",
              "ratingCount": "512",
              "reviewCount": "486"
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Review",
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
              },
              "author": {
                "@type": "Person",
                "name": "John D."
              },
              "reviewBody": "Excellent service! The team was professional and completed the work ahead of schedule.",
              "itemReviewed": {
                "@type": "LocalBusiness",
                "@id": "https://bmcelectrical.com"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [{
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://bmcelectrical.com"
              }, {
                "@type": "ListItem",
                "position": 2,
                "name": "Services",
                "item": "https://bmcelectrical.com/services"
              }, {
                "@type": "ListItem",
                "position": 3,
                "name": "About",
                "item": "https://bmcelectrical.com/about"
              }, {
                "@type": "ListItem",
                "position": 4,
                "name": "Contact",
                "item": "https://bmcelectrical.com/contact"
              }]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "@id": "https://bmcelectrical.com",
              "name": "BMC Electrical",
              "serviceType": "Electrical Contractor",
              "availableLanguage": "English",
              "currenciesAccepted": "AUD",
              "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
              "areaServed": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": -37.6772,
                  "longitude": 144.4390
                },
                "geoRadius": "50000"
              },
              "availableService": [{
                "@type": "Service",
                "name": "Emergency Electrical Services",
                "description": "24/7 emergency electrical repairs and services",
                "serviceType": "Emergency Electrical"
              }, {
                "@type": "Service",
                "name": "Residential Electrical",
                "description": "Complete home electrical services and installations",
                "serviceType": "Residential"
              }, {
                "@type": "Service",
                "name": "Commercial Electrical",
                "description": "Professional electrical services for businesses",
                "serviceType": "Commercial"
              }, {
                "@type": "Service",
                "name": "Industrial Electrical",
                "description": "Heavy-duty electrical solutions for industrial facilities",
                "serviceType": "Industrial"
              }]
            })
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}