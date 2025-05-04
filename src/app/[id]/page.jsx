/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React from "react";
import { projects } from "@/utills/projects";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaCaretRight } from "react-icons/fa";
import Link from "next/link";
//
const page = ({ params }) => {
  const pathName = usePathname();
  const id = params.id;
  const singleItem = projects.find((item) => item.id === id);
  return (
    <div>
      <div className="bgDark px-4 md:px-20">
        {/* indecetor */}
        <div className="py-6">
          <div className=" flex gap-2 text-xs capitalize text-gray-300">
            <Link href={"/"} className="border-b">
              home
            </Link>
            <div className="mt-[2px]">
              <FaCaretRight />
            </div>
            {/*  */}
            <div className="">{singleItem.title}</div>
          </div>
        </div>
        {/* heading */}
        <div className="grid md:grid-cols-12 gap-8 ">
          <div className="md:col-span-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-100">
              {singleItem.title}
            </h1>

            <div className="flex flex-wrap gap-2 my-6">
              {singleItem.technologies.map((tech) => (
                <div
                  key={tech}
                  className="uppercase text-xs font-bold h-6 py-1 px-4 bg-black w-fit rounded-full border border-[#6c3ccb] text-[#6c3ccb] cursor-pointer"
                >
                  {tech}
                </div>
              ))}
            </div>

            {/* <p className="text-gray-300 mb-8 leading-relaxed">
              {singleItem.description}
            </p> */}

            <div className="flex flex-wrap gap-4">
              <button
                className="bg-[#6c3ccb] hover:bg-gradient-to-l from-[#6c3ccb] to-[#2a1454] border-0 hover:border-0 border-[#6c3ccb] text-white font-bold uppercase rounded-md px-8 py-2 "
                onClick={() => window.open(singleItem.demo, "_blank")}
              >
                {/* <ExternalLinkIcon size={16} /> */}
                Live Demo
              </button>
              <button
                className="bg-[#6c3ccb] hover:bg-gradient-to-l from-[#6c3ccb] to-[#2a1454] border-0 hover:border-0 border-[#6c3ccb] text-white font-bold uppercase rounded-md px-8 py-2 "
                variant="outlined"
                onClick={() => window.open(singleItem.github, "_blank")}
              >
                {/* <GithubIcon size={16} className="mr-2" /> */}
                View Code
              </button>
            </div>
          </div>
        </div>
        {/* content */}
        <div className="relative my-6">
          <div className="grid md:grid-cols-2 gap-4">
            {/* left side  */}
            <div className=" rounded-lg border border-gray-800 h-96">
              <Image
                className=" "
                src={singleItem.image}
                alt={singleItem.title}
                fill
              ></Image>
            </div>
            {/* right side */}
            <div className=" text-white p-6">
              {/*  */}

              {/*  */}
              <div className="prose prose-invert ">
                {/* <div className=" capitalize  text-gray-400 text-base ">
                Key Features
              </div> */}
                <ul className="space-y-3 py-4">
                  {singleItem.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-sm text-gray-200  font-bold"
                    >
                      <span className="text-bold ">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="">
                  <div className="bg-dark-surface border-gray-800 overflow-hidden">
                    <div className="p-6">
                      <div className="space-y-1">
                        <div>
                          <p className="text-gray-400 text-sm">Category</p>
                          <p className="text-white">{singleItem.category}</p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm">Completed</p>
                          <p className="text-white">
                            {singleItem.completedDate}
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm">Role</p>
                          <p className="text-white">{singleItem.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-dark-surface border border-gray-800 my-12"></div>
        {/* footer */}
        <div defaultValue="overview" className=" my-10">
          {/*  */}
          <div value="overview" className="  rounded-md p-6">
            <div className="prose prose-invert max-w-none">
              <h2 className="capitalize  text-gray-400 text-base py-2">
                project Overview
              </h2>
              <p className="mb-4">{singleItem.overview}</p>
              {singleItem.problemStatement && (
                <>
                  <h3 className="capitalize  text-gray-400 text-base py-2">
                    Problem Statement
                  </h3>
                  <p>{singleItem.problemStatement}</p>
                </>
              )}
            </div>
          </div>
          {/*  */}
          <div value="features" className=" rounded-md px-6 bg-dark-surface">
            <div className="prose prose-invert ">
              <div className=" capitalize  text-gray-400 text-base ">
                Key Features
              </div>
              <ul className="space-y-3 py-4">
                {singleItem.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-xs text-gray-200  font-bold"
                  >
                    <span className="text-highlight mt-[2px]">▹</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/*  */}

          <div className="rounded-md p-6 bg-dark-surface">
            <div className="prose prose-invert max-w-none">
              {singleItem.challenges.map((challenge, index) => (
                <div key={index} className="mb-6">
                  <h3 className="capitalize  text-gray-400 text-base py-2">
                    {challenge.title}
                  </h3>
                  <p className="mb-2">{challenge.description}</p>
                  <p className="capitalize  text-gray-400 text-base py-2">
                    Solution:
                  </p>
                  <p>{challenge.solution}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
