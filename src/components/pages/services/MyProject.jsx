import SectionTitle from '@/components/shered/sectionTitle/SectionTitle';
import { Box, Container } from '@mui/material';
import bistroBoss from '../../../assects/image/work/bistroBoss.png'
import Image from 'next/image';
import { MdFitScreen } from "react-icons/md";
const MyProject = () => {
    const projects = [
        {
            title: 'bistro boss',
            shots: bistroBoss,
            description: 'bistro boss is a modern and responsive restaurant website designed to provide an exceptional online experience for customers looking to explore, book, and order from their favorite restaurants. '
        },
        {
            title: 'bistro boss',
            shots: bistroBoss,
            description: 'bistro boss is a modern and responsive restaurant website designed to provide an exceptional online experience for customers looking to explore, book, and order from their favorite restaurants. '
        },
        {
            title: 'bistro boss',
            shots: bistroBoss,
            description: 'bistro boss is a modern and responsive restaurant website designed to provide an exceptional online experience for customers looking to explore, book, and order from their favorite restaurants. '
        },
        {
            title: 'bistro boss',
            shots: bistroBoss,
            description: 'bistro boss is a modern and responsive restaurant website designed to provide an exceptional online experience for customers looking to explore, book, and order from their favorite restaurants. '
        },
    ]
    return (
        <div>
            <Container>
                {/*  */}
                <SectionTitle TitleContent={'my projects'}></SectionTitle>

                {/*  */}
                <Container className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    {
                        projects.map(item =>
                            <Box key={item} className='pCard md:flex flex-row-reverse gap-4 rounded-lg bg-[#0f0715] hover:bg-[#7636f8] border-2 border-[#2a1454] cursor-pointer'>
                                {/*  */}
                                <Box className=' md:w-2/5 relative'>
                                    <Image className='md:h-full h-[350px] rounded-t-md md:rounded-e-md' src={item.shots} alt={item.title} />
                                    {/* overlay */}
                                    <div className='overlay bg-[#0f0715] bg-opacity-60 w-full h-full absolute top-0'>
                                        <div className=" uppercase font-semibold text-sm flex justify-center gap-2 py-[48%] md:py-[75%]">live preview <div className=" text-xl"><MdFitScreen /></div></div>

                                    </div>
                                </Box>

                                {/*  */}
                                <Box className='p-8 grid gap-6 md:w-3/5'>
                                    {/*  */}
                                    <div className=" capitalize text-lg font-medium">{item.title}</div>
                                    {/*  */}
                                    <div className=" opacity-80 font-light text-sm overflow-hidden">{item.description}</div>
                                    {/* btns */}
                                    <div className=" flex flex-wrap gap-2">
                                        {/*  */}
                                        <div className=" uppercase text-xs font-medium py-1 px-4 bg-black w-fit rounded-full border border-[#2a1454] hover:bg-gradient-to-t from-[#6c3ccb] to-[#2a1454] ">react js</div>
                                        {/*  */}
                                        <div className=" uppercase text-xs font-medium py-1 px-4 bg-black w-fit rounded-full border border-[#2a1454] hover:bg-gradient-to-t from-[#6c3ccb] to-[#2a1454] ">NEXT js</div>
                                        {/*  */}
                                        <div className=" uppercase text-xs font-medium py-1 px-4 bg-black w-fit rounded-full border border-[#2a1454] hover:bg-gradient-to-t from-[#6c3ccb] to-[#2a1454] ">tailwind css</div>
                                        {/*  */}
                                        <div className=" uppercase text-xs font-medium py-1 px-4 bg-black w-fit rounded-full border border-[#2a1454] hover:bg-gradient-to-t from-[#6c3ccb] to-[#2a1454] ">node</div>
                                        {/*  */}
                                        <div className=" uppercase text-xs font-medium py-1 px-4 bg-black w-fit rounded-full border border-[#2a1454] hover:bg-gradient-to-t from-[#6c3ccb] to-[#2a1454] ">express</div>
                                        {/*  */}

                                    </div>
                                </Box>
                            </Box>
                        )
                    }


                </Container>
                {/* more btns*/}
                <Box>
                    <button className='bg-gradient-to-r from-[#6c3ccb] to-[#2a1454] p-4 w-40 flex justify-center  mx-auto rounded-lg font-bold capitalize cursor-pointer my-8'>see more</button>
                </Box>

            </Container>
        </div>
    );
};

export default MyProject;