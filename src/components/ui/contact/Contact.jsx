import SectionTitle from '@/components/shered/sectionTitle/SectionTitle';
import { Box, Container, TextField } from '@mui/material';
import React from 'react';
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Link from 'next/link';
const Contact = () => {
    return (
        <div>
            <Container className='Dark rounded-lg p-6'>

                {/* content */}
                <Container className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                    <Box className='bgDark p-4 rounded-sm'>
                        {/*  */}
                        <SectionTitle TitleContent={'Let’s work together!'}></SectionTitle>

                        {/*  */}
                        <Container>
                            <form>
                                <div className="grid grid-cols-2 gap-4">
                                    {/* name */}
                                    <div className=" col-span-2 md:col-span-1">
                                        <input className='p-3 border border-[#8750f7] bg-black rounded capitalize w-full' type="text" placeholder='your name' name='Name' />
                                    </div>
                                    {/* email */}
                                    <div className=" col-span-2 md:col-span-1">
                                        <input className='p-3 border border-[#8750f7] bg-black rounded capitalize w-full' type="email" placeholder='email address' name='email' />
                                    </div>
                                    {/* phone */}
                                    <div className=" col-span-2 md:col-span-1">
                                        <input className='p-3 border border-[#8750f7] bg-black rounded capitalize w-full' type="text" placeholder='phone number' name='phone' />
                                    </div>
                                    {/* locations */}
                                    <div className=" col-span-2 md:col-span-1">
                                        <input className='p-3 border border-[#8750f7] bg-black rounded capitalize w-full' type="text" placeholder='your locations' name='address' />
                                    </div>
                                    {/*  */}
                                    <div className="col-span-2">

                                        <select className='p-3 border border-[#8750f7] bg-black rounded capitalize w-full' >
                                            <option>chose opttion</option>
                                            <option>web applicetion</option>
                                            <option>web site</option>
                                            <option>e-commerce web site</option>
                                        </select>
                                    </div>
                                    {/*  */}
                                    <div className=" col-span-2">
                                        <textarea className='p-3 border border-[#8750f7] bg-black rounded capitalize w-full' type="text" placeholder='messages' name='messages' ></textarea>
                                    </div>

                                </div>

                                {/*  */}

                                <input className=' bg-gradient-to-r from-[#6c3ccb] to-[#2a1454] p-4 w-full rounded-lg font-bold capitalize cursor-pointer my-4' type="submit" value="send message" />
                            </form>
                        </Container>
                    </Box>
                    {/*  */}
                    <Box className='grid place-content-center gap-6'>
                        {/*  */}
                        <div className="flex gap-4">
                            {/* icon */}
                            <div className="text-white text-3xl w-12 h-12 p-2 rounded-full bg-gradient-to-t from-[#6c3ccb] to-[#2a1454]"><MdOutlinePhoneInTalk /></div>
                            {/*  */}
                            <div className="grid gap-2">
                                <div className=" capitalize text-xl text-zinc-400">phone</div>
                                {/*  */}
                                <div className=" text-2xl">+880 1994-361085</div>

                            </div>
                        </div>
                        {/*  */}
                        <div className="flex gap-4">
                            {/* icon */}
                            <div className="text-white text-3xl w-12 h-12 p-2 rounded-full bg-gradient-to-t from-[#6c3ccb] to-[#2a1454]"><MdOutlineAlternateEmail /></div>
                            {/*  */}
                            <div className="grid gap-2">
                                <div className=" capitalize text-xl text-zinc-400">email</div>
                                {/*  */}
                                <div className="text-2xl">ahosant82@gmail.com</div>

                            </div>
                        </div>
                        {/*  */}
                        <div className="flex gap-4">
                            {/* icon */}
                            <div className="text-white text-3xl w-12 h-12 p-2 rounded-full bg-gradient-to-t from-[#6c3ccb] to-[#2a1454]"><FaLocationCrosshairs /></div>
                            {/*  */}
                            <div className="grid gap-2">
                                <div className=" capitalize text-xl text-zinc-400">address</div>
                                {/*  */}
                                <div className="text-2xl capitalize">gazipur, dhaka , bangladesh</div>

                            </div>
                        </div>
                        {/*  */}

                        <div className="my-10">
                            <Box className='social-icon flex gap-4 flex-wrap justify-center'>
                                {/*  */}
                                <Link href={'https://www.facebook.com/profile.php?id=100010579990810'}><FaFacebookF></FaFacebookF></Link>
                                {/*  */}
                                <Link href={'/'}><FaTwitter></FaTwitter></Link>
                                {/*  */}
                                <Link href={'https://www.linkedin.com/in/ahsanur-rahman-tonmoy-1680921b6'}><FaLinkedinIn></FaLinkedinIn></Link>
                                {/*  */}
                                <Link href={'https://github.com/ahsanTonmoy'}><FaGithub></FaGithub></Link>

                            </Box>
                        </div>
                    </Box>
                </Container>
            </Container>
        </div>
    );
};

export default Contact;