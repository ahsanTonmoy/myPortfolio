import SectionTitle from '@/components/shered/sectionTitle/SectionTitle';
import { Box, Container } from '@mui/material';
import Image from 'next/image';
import { MdFitScreen } from "react-icons/md";
import Link from 'next/link'
// image
import bistroBoss from '../../../assects/image/work/bistroBoss.png';
import fruitBrust from '../../../assects/image/work/fruit-brust.jpg';
import phTube from '../../../assects/image/work/ph-tube.jpg';
import gameHunt from '../../../assects/image/work/game-hunting.jpg';
import summerSale from '../../../assects/image/work/summer-sale.jpg';
const MyProject = () => {
    const projects = [
        {
            title: 'bistro boss',
            shots: bistroBoss,
            description: 'bistro boss is a modern and responsive restaurant website designed to provide an exceptional online experience for customers looking to explore, book, and order from their favorite restaurants. ',
            link: 'https://rms-clint.web.app/'
        },
        {
            title: 'fruit brust',
            shots: fruitBrust,
            description: 'Online fruit shop , best food for online',
            link :`https://ahosant82.github.io/FruiteBrust/`
        },
        {
            title: 'ph tube',
            shots: phTube,
            description: 'online video sharing platform',
            link: `https://sensational-fudge-a45baf.netlify.app/`
        },
        {
            title: 'game hunt',
            shots: gameHunt,
            description: 'Online  gameing platfurm chose you febarite game',
             link : `https://ahosant82.github.io/TheGameing/`
        },
    ]
    return (
        <div>
            <Container>
                {/*  */}
                <SectionTitle TitleContent={'my projects'}></SectionTitle>

                {/*  */}
                <Container className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    {
                        projects.map(item =>
                            <Box key={item} className='pCard md:h-[350px] md:flex flex-row-reverse gap-4 rounded-lg bg-[#0f0715] hover:bg-[#7636f8] border-2 border-[#2a1454] cursor-pointer'>
                                {/*  */}
                                <Box className=' md:w-2/5 w-full relative'>
                                    <Image className='md:h-full h-[300px] rounded-t-md md:rounded-e-md' src={item.shots} alt={item.title} />
                                    {/* overlay */}
                                    <Link href={item.link} className='overlay bg-[#0f0715] bg-opacity-60 w-full h-full absolute top-0'>
                                        <div className=" uppercase font-semibold text-sm flex justify-center gap-2 py-[48%] lg:py-[75%]">live preview <div className=" text-xl"><MdFitScreen /></div></div>

                                    </Link>
                                </Box>

                                {/*  */}
                                <Box className='p-8 grid gap-6 md:w-3/5'>
                                    {/*  */}
                                    <div className=" capitalize text-lg font-medium">{item.title}</div>
                                    {/*  */}
                                    <div className=" opacity-80 font-light text-sm h-20 text-ellipsis overflow-hidden">{item.description}</div>
                                    {/* btns */}
                                    <div className=" flex flex-wrap gap-2">
                                        {/*  */}
                                        <div className=" uppercase text-xs font-medium h-6 py-1 px-4 bg-black w-fit rounded-full border border-[#2a1454] hover:bg-gradient-to-t from-[#6c3ccb] to-[#2a1454] ">react js</div>
                                        {/*  */}
                                        <div className=" uppercase text-xs font-medium h-6 py-1 px-4 bg-black w-fit rounded-full border border-[#2a1454] hover:bg-gradient-to-t from-[#6c3ccb] to-[#2a1454] ">NEXT js</div>
                                        {/*  */}
                                        <div className=" uppercase text-xs font-medium h-6 py-1 px-4 bg-black w-fit rounded-full border border-[#2a1454] hover:bg-gradient-to-t from-[#6c3ccb] to-[#2a1454] ">tailwind css</div>
                                        {/*  */}
                                        <div className=" uppercase text-xs font-medium h-6 py-1 px-4 bg-black w-fit rounded-full border border-[#2a1454] hover:bg-gradient-to-t from-[#6c3ccb] to-[#2a1454] ">node</div>
                                        {/*  */}
                                        <div className=" uppercase text-xs font-medium h-6 py-1 px-4 bg-black w-fit rounded-full border border-[#2a1454] hover:bg-gradient-to-t from-[#6c3ccb] to-[#2a1454] ">express</div>
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