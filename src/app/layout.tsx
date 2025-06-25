import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: "--font-poppins",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Yunus Emre Duran | Web Developer & Data Analyst Portfolio",
  description: "Antalya merkezli Web Developer ve Data Analyst Yunus Emre Duran'ın portfolio sitesi. Modern web çözümleri, veri analizi projeleri ve freelance hizmetler. React, Next.js, Python, SQL, Power BI uzmanı.",
  keywords: [
    "Yunus Emre Duran",
    "web developer",
    "data analyst", 
    "portfolio",
    "freelance",
    "istanbul",
    "react developer",
    "next.js",
    "python developer",
    "sql uzmanı",
    "power bi",
    "veri analizi",
    "web tasarım",
    "e-ticaret",
    "machine learning",
    "data science",
    "frontend developer",
    "backend developer",
    "full stack developer"
  ],
  authors: [{ name: "Yunus Emre Duran", url: "https://yunusemreduran.com" }],
  creator: "Yunus Emre Duran",
  publisher: "Yunus Emre Duran",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://yunusemreduran.com'),
  alternates: {
    canonical: 'https://yunusemreduran.com',
  },
  openGraph: {
    title: "Yunus Emre Duran | Web Developer & Data Analyst",
    description: "Antalya merkezli Web Developer ve Data Analyst. Modern web çözümleri, veri analizi projeleri ve freelance hizmetler. Portfolio ve iletişim için ziyaret edin.",
    url: "https://yunusemreduran.com",
    siteName: "Yunus Emre Duran Portfolio",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: '/images/yunusemresitekimligi.png',
        width: 1200,
        height: 630,
        alt: 'Yunus Emre Duran - Web Developer & Data Analyst Portfolio',
      },
      {
        url: '/images/yunusemrelogo.png',
        width: 800,
        height: 400,
        alt: 'Yunus Emre Duran Logo',
      },
      {
        url: '/images/profile.jpg',
        width: 800,
        height: 600,
        alt: 'Yunus Emre Duran Profile Photo',
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yunus Emre Duran | Web Developer & Data Analyst",
    description: "Antalya merkezli Web Developer ve Data Analyst. Modern web çözümleri ve veri analizi uzmanı.",
    images: ['/images/yunusemresitekimligi.png'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/images/favicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/favicon.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/images/favicon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/images/favicon.png',
        color: '#C64A00',
      },
    ],
  },
  manifest: '/manifest.json',
  verification: {
    google: 'your-google-verification-code',
    other: {
      'msvalidate.01': 'your-bing-verification-code',
    },
  },
  category: 'technology',
  classification: 'Business',
  referrer: 'origin-when-cross-origin',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        {/* Primary Favicon */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/images/favicon.png" type="image/png" />
        
        {/* Apple Touch Icons */}
        <link rel="apple-touch-icon" href="/images/favicon.png" />
        <link rel="apple-touch-icon" sizes="57x57" href="/images/favicon.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/images/favicon.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/images/favicon.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/images/favicon.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/images/favicon.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/images/favicon.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/images/favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon.png" />
        
        {/* Android Chrome Icons */}
        <link rel="icon" type="image/png" sizes="192x192" href="/images/favicon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/images/favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon.png" />
        
        {/* Theme and Browser Colors */}
        <meta name="theme-color" content="#C64A00" />
        <meta name="msapplication-TileColor" content="#C64A00" />
        <meta name="msapplication-TileImage" content="/images/favicon.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Yunus Emre Duran" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="language" content="Turkish" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="web" />
        <meta name="rating" content="general" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="MobileOptimized" content="320" />
        
        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Yunus Emre Duran",
              "jobTitle": "Web Developer & Data Analyst",
              "email": "yucemahmuteren@gmail.com",
              "url": "https://yunusemreduran.com",
              "image": "https://yunusemreduran.com/images/profile.jpg",
              "sameAs": [
                "https://linkedin.com/in/yunusemreduran",
                "https://github.com/yunusemreduran"
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "Freelance"
              },
              "alumniOf": [
                {
                  "@type": "EducationalOrganization",
                  "name": "İstanbul Biruni Üniversitesi"
                },
                {
                  "@type": "EducationalOrganization", 
                  "name": "Akdeniz Üniversitesi"
                }
              ],
              "knowsAbout": [
                "Web Development",
                "Data Analysis", 
                "React",
                "Next.js",
                "Python",
                "SQL",
                "Power BI"
              ]
            })
          }}
        />
        
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-824G7VYCHS"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-824G7VYCHS', {
                page_title: 'Yunus Emre Duran Portfolio',
                page_location: window.location.href
              });
            `,
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen bg-gradient-to-br from-secondary-50 via-white to-primary-50">
          {children}
        </div>
      </body>
    </html>
  );
}
