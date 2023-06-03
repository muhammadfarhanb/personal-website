/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import Typewriter from 'typewriter-effect';
import Image from "next/image";
import { Button } from "../../components/ui/button";
import About from "./About/page";
import Skill from "./Skill/page";
import Contact from "./Contact/page";



export default function Home() {
  return (
      <div className="bg-white h-screen ">
          <div className="mx-auto flex items-center justify-center py-28 px-10 ">
            <div className=" flex flex-col ">
                <h1 className="text-blue-600 text-6xl pr-40 font-bold"> I'm Muhammad Farhan
                  <br className="" />
                  <div className= "text-4xl text-black">  <Typewriter
                        options={{
                        strings: ['Full-Stack Developer',
                         'Front-end Developer',
                        'Back-end Developer'],
                        autoStart: true,
                        loop: true,
                        }}
                     />
                     </div>

                </h1>
                <br/>
                <div className="w-[100px] h-[4px] bg-black -m-5 mx-1"></div>
                <p className="text-blue-400 my-10 w-1/2 ">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                
                </p>
                <Button className="bg-green-500 w-fit  ">Learn more</Button>
                
            </div>
            <div className="pr-20 ">
                  <Image src={"/image/personal.jpg"} alt="personal pic" width={600} height={300} 
                  className="flex rounded-full shadow-black shadow-2xl " />
            </div>
            <div>
            
            </div>
          </div>
          <About/>
          <Skill/>
          <Contact/>
      </div>
  )
}
