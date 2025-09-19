import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import type { Metadata, Viewport } from "next";
import "../globals.css";
import { AppWrapper } from "@/context";
import SplashScreenProvider from "./components/splash-screen-provider";
import NextTopLoader from "nextjs-toploader";
import { SidebarDemo } from "./components/Sidebar";
import { ThemeProvider } from "./components/theme-provider";
import { Toaster } from 'sonner';
import {Analytics} from "@vercel/analytics/react"
import Footer from './components/Footer';
import {Fira_Code} from "next/font/google"
import Script from 'next/script'

const fira = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira'
})

export const metadata: Metadata = {
  title:"mrEseosa - Official home page",
  description: "mrEseosa is the best web development agency in Benin City, delivering modern, high-quality websites that help businesses grow, stand out, and succeed online.",
};

export const viewport: Viewport = {
  themeColor: "#000000"
}

export default async function LocaleLayout({
  children,
  params: {locale}
}: Readonly<{
  children: React.ReactNode;
  params: {locale: string};
}>) {
  const messages = await getMessages();
  
  return (
    <html lang={locale} className="dark">
      <head>
        <meta name="google-adsense-account" content="ca-pub-4058102666903293" />
        {/* Preload script to prevent flash of light theme */}
        <Script id="prevent-flash" strategy="beforeInteractive">
          {`(function() {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
          })()`}
        </Script>
      </head>
      <body className={`${fira.variable} font-sans bg-black text-white`}>
        <AppWrapper>
        <SplashScreenProvider>
        <Analytics/>
        <NextTopLoader
          shadow={false}
          height={2}
          color="green"
          showSpinner={false}
        />
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            forcedTheme="dark"
            disableTransitionOnChange
          >
            <NextIntlClientProvider messages={messages}>
            <SidebarDemo>
            <div className="h-full relative overflow-y-auto w-full">
              <Toaster position="bottom-right" richColors/>
              {children}
              <Footer/>
            </div>
          </SidebarDemo>
          </NextIntlClientProvider>
          </ThemeProvider>
        </SplashScreenProvider>
        </AppWrapper>
        </body>
    </html>
  );
}