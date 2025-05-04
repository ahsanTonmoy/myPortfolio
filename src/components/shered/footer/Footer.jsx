"use client";
import { Box, Container } from "@mui/material";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import AdbIcon from "@mui/icons-material/Adb";
import Menu from "../menu/Menu";

import { usePathname } from "next/navigation";
const Footer = () => {
  const pathName = usePathname();
  const page = [
    {
      route: "home",
      pathName: "/",
    },
    {
      route: "about",
      pathName: "/about",
    },
    {
      route: "service",
      pathName: "/service",
    },
    {
      route: "contact",
      pathName: "/contact",
    },
    {
      route: "blogs",
      pathName: "/blogs",
    },
  ];
  return (
    <div>
      <div className=" bg-[#0f0715] m-0 shadow-2xl">
        <Container className="p-4 md:p-10 grid grid-cols-1 justify-items-center text-center gap-6">
          {/*  */}
          <Box>
            <AdbIcon className="text-5xl" />
          </Box>

          {/*  */}
          <Box>
            <ul
              className={` flex flex-wrap text-center gap-4 justify-center font-semibold uppercase text-sm`}
            >
              {page.map((page) => (
                <Link
                  key={page}
                  className={`${
                    pathName === page.pathName
                      ? "relative pb-1 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-gradient-to-l before:from-[#2a1454] before:to-purple-500"
                      : "relative pb-1 hover:before:content-[''] hover:before:absolute hover:before:bottom-0 hover:before:left-0 hover:before:w-full hover:before:h-[2px] hover:before:bg-gradient-to-l hover:before:from-[#2a1454] hover:before:to-purple-500 hover:scale-110 transition duration-300 ease-in"
                  }`}
                  href={page.pathName}
                >
                  {page.route}
                </Link>
              ))}
            </ul>
          </Box>
          {/*  */}
          <Box className="social-icon flex gap-4 flex-wrap">
            {/*  */}
            <Link
              href={"https://www.facebook.com/profile.php?id=100010579990810"}
            >
              <FaFacebookF></FaFacebookF>
            </Link>
            {/*  */}
            <Link href={"/"}>
              <FaTwitter></FaTwitter>
            </Link>
            {/*  */}
            <Link
              href={
                "https://www.linkedin.com/in/ahsanur-rahman-tonmoy-1680921b6"
              }
            >
              <FaLinkedinIn></FaLinkedinIn>
            </Link>
            {/*  */}
            <Link href={"https://github.com/ahsanTonmoy"}>
              <FaGithub></FaGithub>
            </Link>
          </Box>

          {/*  */}
          <Box>
            <div className="bg-gradient-to-r from-[#8750f7]  to-white inline-block text-transparent bg-clip-text text-lg">
              © 2024 All rights reserved by <Link href="/">Tonmoy</Link>
            </div>
          </Box>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
