import type { Metadata } from "next";
import "./globals.css";
import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"
import NavBar from "@/layout/NavBar";
import { SideBar } from "@/layout/SideBar";
import { ThemeProvider } from "@/components/theme-provider";


const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})
export const metadata: Metadata = {
  title: "Portfolio",
  description: "Anandharaj portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={cn(
        "font-sans antialiased",
        fontSans.variable
      )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <div className="flex">
            <NavBar />
            <SideBar />
            <main className="flex-1 ml-[60px]">
              {children}
            </main>
          </div>

        </ThemeProvider>
      </body>
    </html >
  );
}
