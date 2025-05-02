import { Inter } from "next/font/google";
import "./globals.css";
import "./style.css";
import Navigetions from "@/components/shered/navigetion/Navigetions";
import { Container } from "@mui/material";
import Footer from "@/components/shered/footer/Footer";
import Bannar from "@/components/ui/Bannar";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "AR Tonmoy | Personal Portfolio",
    template: "%s | Personal Portfolio",
  },
  description: "mern stack developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-[#0F0715] min-h-screen text-white">
          <Navigetions />
          <div className="min-h-screen bg-black">{children}</div>
          <Footer></Footer>
        </div>
      </body>
    </html>
  );
}
