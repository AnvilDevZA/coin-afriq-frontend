import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Noto_Serif, Noto_Sans } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
import "./globals.css";
import { siteConfig } from "@/site.config";

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
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
