"use client";
import React from "react";
import "./style.css";
import MySkills from "@/components/ui/mySkills/MySkills";
import RecentRork from "@/components/ui/recentWork/RecentRork";
import MyProfile from "@/components/ui/myProfile/MyProfile";
import Contact from "@/components/ui/contact/Contact";
import Myinfo from "@/components/pages/about/Myinfo";
import { motion } from "framer-motion";
import Bannar from "@/components/ui/Bannar";

const HomePage = () => {
  return (
    <div className="wrepperArea">
      {/*  */}
      <div
        className="-mt-"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(15, 17, 23, 0.85), rgba(15, 17, 23, 0.95)), url('https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
        }}
      >
        <Bannar />
      </div>
      {/*  */}
      <div className="bgDark">
        <Myinfo></Myinfo>
      </div>
      {/*  */}
      <div className="Dark">
        <MySkills></MySkills>
      </div>
      {/*  */}
      <div className="bgDark">
        <RecentRork></RecentRork>
      </div>
      {/*  */}
      <div className="Dark">
        <MyProfile />
      </div>
      {/*  */}
      <div className="bgDark">
        <Contact></Contact>
      </div>
    </div>
  );
};

export default HomePage;
