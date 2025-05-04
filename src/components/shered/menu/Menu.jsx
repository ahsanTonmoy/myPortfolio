import { Box } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Menu = ({ display }) => {
  const pathName = usePathname();
  const page = [
    {
      id: 1,
      route: "home",
      pathName: "/",
    },
    {
      id: 2,
      route: "about",
      pathName: "/about",
    },
    {
      id: 3,
      route: "service",
      pathName: "/service",
    },
    {
      id: 4,
      route: "contact",
      pathName: "/contact",
    },
    {
      id: 5,
      route: "blogs",
      pathName: "/blogs",
    },
  ];
  return (
    <div>
      <div className={`${display} font-samibold capitalize text-base gap-6`}>
        {page.map((page) => (
          <Link
            key={page.id}
            className={`${
              pathName === page.pathName
                ? "relative pb-1 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-gradient-to-l before:from-[#2a1454] before:to-purple-500"
                : "relative pb-1 hover:before:content-[''] hover:before:absolute hover:before:bottom-0 hover:before:left-0 hover:before:w-full hover:before:h-[2px] hover:before:bg-gradient-to-l hover:before:from-[#2a1454] hover:before:to-purple-500 hover:scale-110 transition duration-300 ease-in"
            }`}
            href={page.pathName}
          >
            <div className="relative z-10 text-gray-100">{page.route}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Menu;
