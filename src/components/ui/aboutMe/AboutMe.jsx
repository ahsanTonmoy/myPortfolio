import SectionTitle from "@/components/shered/sectionTitle/SectionTitle";
import { Box, Container } from "@mui/material";

const AboutMe = () => {

    return (
        <div>
            <Container>
                <Box>
                    <SectionTitle TitleContent={'about me'} />
                </Box>

                {/*  */}
                <Box className='bg-[#0f0715] bg-opacity-30 p-8 rounded-xl'>
                    <Box className=''>
                        <Box className='subpixel-antialiased leading-8 font-medium'>
                            <article>
                                Hello! My name is Ahsanur Rahman Tonmoy, and I am a passionate and dedicated MERN stack developer with one year of experience in building dynamic and responsive web applications. My expertise lies in the powerful MERN stack (MongoDB, Express.js, React, and Node.js), which enables me to create full-stack applications with seamless front-end and back-end integration.
                                Throughout my journey, I have developed a keen eye for detail and a commitment to writing clean, efficient, and maintainable code. I thrive in collaborative environments and enjoy working with cross-functional teams to bring innovative ideas to life. My problem-solving skills, coupled with a strong foundation in JavaScript, allow me to tackle complex challenges and deliver high-quality solutions.
                            </article>
                        </Box>
                    </Box>
                </Box>
            </Container>

        </div>
    );
};

export default AboutMe;