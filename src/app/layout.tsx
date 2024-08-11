import type { Metadata } from "next";
import "./globals.css";
import { AppWrapper } from "@/context";
import SplashScreenProvider from "@/components/splash-screen-provider";
import NextTopLoader from "nextjs-toploader";
import { SidebarDemo } from "@/components/Sidebar";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Eseosa Osayi - Official home page",
  description: "Driven by curiosity, fueled by passion, delivering top-notch web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppWrapper>
        <SplashScreenProvider>
      <NextTopLoader 
          shadow={false} 
          height={5} 
          color="blue" 
          showSpinner={false}
          />
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <SidebarDemo>
            <div  className="h-full overflow-y-auto">
            {children}
            </div>
          </SidebarDemo>
          </ThemeProvider>
        </SplashScreenProvider>
        </AppWrapper>
        </body>
    </html>
  );
}
