import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";
import { SearchProvider } from "./Component/Context/searchContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title:{
    default:"Coffee Shop",  
    template:"%s | Coffee Shop"
  } ,
  description: "Create a coffee shop with next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SearchProvider>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
        </SearchProvider>
      </body>
    </html>
  );
}
