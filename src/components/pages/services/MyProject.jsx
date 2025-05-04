import SectionTitle from "@/components/shered/sectionTitle/SectionTitle";
import { Box, Container } from "@mui/material";
import Image from "next/image";
import { MdFitScreen } from "react-icons/md";
import Link from "next/link";
import { projects } from "@/utills/projects";

const MyProject = () => {
  return (
    <div>
      <Container>
        {/*  */}
        <SectionTitle TitleContent={"my projects"}></SectionTitle>

        {/*  */}
        <Container className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {projects.map((item) => (
            <Box key={item}>
              <Link
                href={`/${item.id}`}
                className="pCard md:h-[350px] md:flex flex-row-reverse gap-4 rounded-lg bg-[#0f0715] hover:bg-[#7636f8] border-2 border-[#2a1454] cursor-pointer"
              >
                {/*  */}
                <Box className=" md:w-2/5 w-full relative">
                  <Image
                    className=" "
                    src={item.image}
                    fill
                    alt={item.title}
                  ></Image>
                  {/* overlay */}
                  <Link
                    href={`${item.demo}`}
                    className="overlay bg-[#0f0715] bg-opacity-60 w-full h-full absolute top-0"
                  >
                    <div className=" uppercase font-semibold text-sm flex justify-center gap-2 py-[48%] lg:py-[75%]">
                      live preview{" "}
                      <div className=" text-xl">
                        <MdFitScreen />
                      </div>
                    </div>
                  </Link>
                </Box>

                {/*  */}
                <Box className="p-8 grid gap-6 md:w-3/5">
                  {/*  */}
                  <div className=" capitalize text-lg font-medium">
                    {item.title}
                  </div>
                  {/*  */}
                  <div className=" opacity-80 font-light text-sm h-20 text-ellipsis overflow-hidden">
                    {item.description}
                  </div>
                  {/* btns */}
                  {/*  */}
                  <div className="flex flex-wrap gap-2 my-6">
                    {item.technologies.slice(0,5).map((tech) => (
                      <div
                        key={tech}
                        className="uppercase text-xs font-bold h-6 py-1 px-4 bg-black w-fit rounded-full border border-[#6c3ccb] text-[#6c3ccb] cursor-pointer"
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                  <div className=""></div>
                </Box>
              </Link>
            </Box>
          ))}
        </Container>
        {/* more btns*/}
        <Box>
          <button className="bg-gradient-to-r from-[#6c3ccb] to-[#2a1454] p-4 w-40 flex justify-center  mx-auto rounded-lg font-bold capitalize cursor-pointer my-8">
            see more
          </button>
        </Box>
      </Container>
    </div>
  );
};

export default MyProject;
