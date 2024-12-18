import type { Metadata } from "next";
import { GoogleTagManager } from '@next/third-parties/google'
import { ThemeProvider } from "@/components/theme-provider";
import { Settings } from "@/lib/meta";
import "./globals.css";

const baseUrl = Settings.metadataBase;

export const metadata: Metadata = {
  title: Settings.title,
  metadataBase: new URL(baseUrl),
  description: Settings.description,
  keywords: Settings.keywords,
  openGraph: {
    type: Settings.openGraph.type,
    url: baseUrl,
    title: Settings.openGraph.title,
    description: Settings.openGraph.description,
    siteName: Settings.openGraph.siteName,
    images: Settings.openGraph.images.map((image) => ({
      ...image,
      url: `${baseUrl}${image.url}`,
    })),
  },
  twitter: {
    card: Settings.twitter.card,
    title: Settings.twitter.title,
    description: Settings.twitter.description,
    site: Settings.twitter.site,
    images: Settings.twitter.images.map((image) => ({
      ...image,
      url: `${baseUrl}${image.url}`,
    })),
  },
  alternates: {
    canonical: baseUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" suppressHydrationWarning>
      { Settings.gtmconnected && (
        <GoogleTagManager gtmId={Settings.gtm} />
      )}
      <body
        className={`font-regular`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <main className=" h-auto min-h-screen  text-white overflow-hidden">
<img className='obj1'  src="/images/1.svg" alt='obj' />
<img className='obj2'  src="/images/2.svg" alt='obj' />
<img className='obj3'  src="/images/3.svg" alt='obj' />
<img className='obj4'  src="/images/dfd.jpg" alt='obj' />

            {children}
          </main>
         {/* تذييل الصفحة */}
         <footer className="py-6 text-center backdrop-blur-sm">
          <p>&copy; 2024 كريبتو إنفست. جميع الحقوق محفوظة</p>
        </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
