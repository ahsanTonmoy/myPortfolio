import React from "react";
import { projects } from "@/utills/projects";
import Image from "next/image";
const DetailsPage = ({ singleItem }) => {

  return (
    <div>
      <div className="bgDark">
        {/* heading */}
        <div className="grid md:grid-cols-12 gap-8 mb-12 bg-slate-400">
          <div className="md:col-span-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
              {singleItem.title}
            </h1>

            <div className="flex flex-wrap gap-2 mb-6">
              {singleItem.technologies.map((tech) => (
                <div
                  key={tech}
                  variant="outline"
                  className="bg-dark-surface border-highlight text-highlight"
                >
                  {tech}
                </div>
              ))}
            </div>

            <p className="text-gray-300 mb-8 leading-relaxed">
              {singleItem.description}
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                className="bg-gradient hover:opacity-90 transition-opacity flex items-center gap-2"
                // onClick={() => window.open(singleItem.demo, '_blank')}
              >
                {/* <ExternalLinkIcon size={16} /> */}
                Live Demo
              </button>
              <button
                variant="outline"
                className="border-highlight text-highlight hover:bg-highlight/10"
                // onClick={() => window.open(singleItem.github, '_blank')}
              >
                {/* <GithubIcon size={16} className="mr-2" /> */}
                View Code
              </button>
            </div>
          </div>

          <div className="md:col-span-4">
            <div className="bg-dark-surface border-gray-800 overflow-hidden">
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4 text-gradient">
                  singleItem Details
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-400 text-sm">Category</p>
                    <p className="text-white">{singleItem.category}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Completed</p>
                    <p className="text-white">{singleItem.completedDate}</p>
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
        {/* content */}
        <div className="relative mb-12">
          <div className="aspect-[16/9] overflow-hidden rounded-lg border border-gray-800">
            <Image
              src={singleItem.image}
              alt={singleItem.title}
              fill
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        {/* footer */}
        <div defaultValue="overview" className="mb-12">
          <div className="bg-dark-surface border border-gray-800 mb-6"></div>

          <div
            value="overview"
            className="border border-gray-800 rounded-md p-6 bg-dark-surface"
          >
            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-bold mb-4">singleItem Overview</h2>
              <p className="mb-4">{singleItem.overview}</p>
              {singleItem.problemStatement && (
                <>
                  <h3 className="text-xl font-semibold mb-3">
                    Problem Statement
                  </h3>
                  <p>{singleItem.problemStatement}</p>
                </>
              )}
            </div>
          </div>

          <div
            value="features"
            className="border border-gray-800 rounded-md p-6 bg-dark-surface"
          >
            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-bold mb-4">Key Features</h2>
              <ul className="space-y-2">
                {singleItem.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-highlight mt-1">▹</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border border-gray-800 rounded-md p-6 bg-dark-surface">
            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-bold mb-4">
                Challenges & Solutions
              </h2>
              {singleItem.challenges.map((challenge, index) => (
                <div key={index} className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {challenge.title}
                  </h3>
                  <p className="mb-2">{challenge.description}</p>
                  <p className="text-highlight font-semibold">Solution:</p>
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

export default DetailsPage;
