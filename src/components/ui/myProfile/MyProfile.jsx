import SectionTitle from "@/components/shered/sectionTitle/SectionTitle";
import { Box, Container } from "@mui/material";

const MyProfile = () => {
    const experience =[
        {
            title: 'mern stack developer',
            experience: '2023-present',
        },
        {
            title: 'web developer',
            experience: '2019-2023',
        },
        {
            title: 'wordpress developer',
            experience: '2021-2023',
        },
        {
            title: 'graphics desigenr',
            experience: '2018-2021',
        },
       
    ]
    const education = [
        {
            title: 'complate web development course',
            years: '2023-2024',
            institute: 'progranneing hero'
        },
        {
            title: 'wordpress development course',
            years: '2022-2023',
            institute: 'ecc institute'
        },
        {
            title: 'graphics design',
            years: '2021-2022',
            institute: 'createqee it'
        },
        {
            title: 'diploma in computer sicence & technology',
            years: '2017-2022',
            institute: 'dhaka polytechnic institute'
        },
    ]
    return (
        <div>
            <Container className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/*  */}
                <Container>
                    <SectionTitle TitleContent={'My Experience'}></SectionTitle>
                    <Box className='grid gap-5'>
                        {
                            experience.map(item=>
                                <Box className='bgDark p-4 rounded-lg w-11/12 grid gap-4 cursor-pointer' key={item}>
                                    <div className=" capitalize font-bold text-[#8750f7]">{item.experience}</div>
                                    <div className="text-lg font-bold uppercase">{item.title}</div>
                                </Box>
                            )
                        }
                    </Box>
                </Container>
                {/*  */}
                <Container>
                    <SectionTitle TitleContent={'My Education'}></SectionTitle>
                    <Box className='grid gap-5'>
                        {
                            education.map(item=>
                                <Box className='bgDark p-4 rounded-lg w-11/12 grid gap-4 cursor-pointer' key={item}>
                                    <div className=" capitalize font-bold text-[#8750f7]">{item.years}</div>
                                    <div className="text-lg font-bold uppercase">{item.title}</div>
                                    <div className=" uppercase text-slate-200 font-semibold">{item.institute}</div>
                                </Box>
                            )
                        }
                    </Box>
                </Container>
            </Container>
        </div>
    );
};

export default MyProfile;