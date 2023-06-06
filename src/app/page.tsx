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
          <div className="container ">
            <div className="flex flex-col items-center m-10 ">
                <h1 className="text-2xl font-bold text-blue-700 lg:text-5xl "> I'm Muhammad Farhan
                  <br className="" />
                  <div className= "text-xl font-bold text-black underline lg:text-4xl">  <Typewriter
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
                  
            
            </div>
            <div className="flex flex-col items-center ">
              <div className="m-10">
                  <Image src={"/image/personal1.jpg"} alt="personal pic" width={250} height={100} 
                  className="rounded-full shadow-black shadow-2xl " />
              </div>
              <div className="flex flex-col items-center flex-wrap pb-12">
                <p className="text-blue-400 m-7 w-1/2 ">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                
                </p>
                  <Button className="bg-green-500 w-fit  ">Learn more</Button>
              </div>
              </div>
            </div>
          <About/>
          <Skill/>
          <Contact/>
      </div>
  )
}
