import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Noto_Serif, Noto_Sans } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
import "./globals.css";
import { siteConfig } from "@/site.config";
import Script from "next/script";
import { Thumbnail } from "@/lib/Resources";
import { Analytics } from '@vercel/analytics/next';

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
});

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Coin Afriq",
  description: "Africa's Digital Currency",
  metadataBase: new URL(siteConfig.site_domain),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Coin Afriq",
    description: "Africa's Digital Curency",
    url: new URL(siteConfig.site_domain),
    type: "website",
    siteName: "Coin Afriq",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body
        className={`${notoSerif.variable} ${notoSans.variable} antialiased`}
      >
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GTM-PH6T92J6"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GTM-PH6T92J6');
          `}
          </Script>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Analytics />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
