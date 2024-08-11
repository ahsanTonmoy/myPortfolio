import { Inter } from "next/font/google";
import "./globals.css";
import './style.css'
import Navigetions from "@/components/shered/navigetion/Navigetions";
import { Container } from "@mui/material";
import Footer from "@/components/shered/footer/Footer";
import Bannar from "@/components/ui/Bannar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: 'AR Tonmoy | Personal Portfolio',
    template: '%s | Personal Portfolio'
  },
  description: "mern stack developer",

};

export default function RootLayout({ children }) {
  return (
    <html lang="bn">
      
      <body className={inter.className}>
        <div className="bg-gradient-to-r from-[#0F0719] from-0% via-[#2a1439] via-60% to-[#1c1640] to-100% min-h-screen text-white">
          <Navigetions />
          <Bannar/>
          <div className="min-h-screen bg-black">{children}</div>
          <Footer></Footer>
        </div>

      </body>
    </html>
  );
}
