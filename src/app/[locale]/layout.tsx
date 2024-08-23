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
import Footer from './components/Footer';

export const metadata: Metadata = {
  title:"Eseosa Osayi - Official home page",
  description: "Driven by curiosity, fueled by passion, delivering top-notch web applications.",
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
    <html lang={locale}>
      <body>
        <AppWrapper>
        <SplashScreenProvider>
      <NextTopLoader 
          shadow={false} 
          height={2} 
          color="green" 
          showSpinner={false}
          />
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <NextIntlClientProvider messages={messages}>
            <SidebarDemo>
            <div  className="h-full relative overflow-y-auto w-full">
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
