import HTML from "./assets/techstack/html5.png";
import CSS3 from "./assets/techstack/css3.png";
import JS from "./assets/techstack/javascript.svg";
import Tailwind from "./assets/techstack/tailwind.svg";
import React from "./assets/techstack/react.svg";
import Git from "./assets/techstack/git.svg";
import Three from "./assets/techstack/threejs.svg";
import Typescript from "./assets/techstack/typescript.svg";
import NodeJS from "./assets/techstack/nodejs.svg";
import Express from "./assets/techstack/express.png";
import MongoDB from "./assets/techstack/mongodb.png";
import CSharp from "./assets/techstack/csharp.png";
import DotnetCore from "./assets/techstack/asp.netcore-icon.svg";
import MSSQL from "./assets/techstack/sql-server.png";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";

const Techstack = () => {
  return (
    <article className='mt-10 mb-4 grid grid-cols-12 col-span-full sm:col-span-6 sm:border-l md:ps-4'>
      <div className='col-span-full '>
        <div className='flex flex-col gap-2 items-center h-full p-2 w-full'>
          <h1 className='text-md'>Frontend</h1>
          <div className='flex flex-wrap gap-3 items-center justify-center mt-[-10px]'>
            {/* HTML Tooltip */}
            <TooltipProvider delayDuration={90} skipDelayDuration={60}>
              <Tooltip>
                <TooltipTrigger>
                  <img src={HTML} alt='html5-icon' width={35} height={35} />
                </TooltipTrigger>
                <TooltipContent>
                  <p>HTML5</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            {/* CSS Tooltip */}
            <TooltipProvider delayDuration={90} skipDelayDuration={60}>
              <Tooltip>
                <TooltipTrigger>
                  <img src={CSS3} alt='css3-icon' width={35} height={35} />
                </TooltipTrigger>
                <TooltipContent>
                  <p>CSS3</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            {/* Javascript Tooltip */}
            <TooltipProvider delayDuration={90} skipDelayDuration={60}>
              <Tooltip>
                <TooltipTrigger>
                  <img
                    src={JS}
                    className='rounded-md mt-2'
                    alt='javascript-icon'
                    width={35}
                    height={35}
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Javascript</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            {/* Typescript Tooltip */}
            <TooltipProvider delayDuration={90} skipDelayDuration={60}>
              <Tooltip>
                <TooltipTrigger>
                  <img
                    src={Typescript}
                    className='rounded-md mt-2'
                    alt='typescript-icon'
                    width={35}
                    height={35}
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Typescript</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            {/* Tailwind Tooltip */}
            <TooltipProvider delayDuration={90} skipDelayDuration={60}>
              <Tooltip>
                <TooltipTrigger>
                  <img
                    src={Tailwind}
                    className='mt-2'
                    alt='tailwindcss-icon'
                    width={35}
                    height={35}
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Tailwind CSS</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            {/* ReactJS Tooltip */}
            <TooltipProvider delayDuration={90} skipDelayDuration={60}>
              <Tooltip>
                <TooltipTrigger>
                  <img src={React} className='mt-2' alt='reactjs-icon' width={35} height={35} />
                </TooltipTrigger>
                <TooltipContent>
                  <p>ReactJS</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            {/* Git Tooltip */}
            <TooltipProvider delayDuration={90} skipDelayDuration={60}>
              <Tooltip>
                <TooltipTrigger>
                  <img src={Git} className='mt-2' alt='git-icon' width={35} height={35} />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Git</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            {/* ThreeJS Tooltip */}
            <TooltipProvider delayDuration={90} skipDelayDuration={60}>
              <Tooltip>
                <TooltipTrigger>
                  <img src={Three} className='mt-2' alt='threejs-icon' width={35} height={35} />
                </TooltipTrigger>
                <TooltipContent>
                  <p>ThreeJS</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </div>
      <div className='col-span-full'>
        <div className='flex flex-col gap-2 items-center h-full p-2 w-full'>
          <h1 className='text-md'>Backend & Database</h1>
          <div className='flex flex-wrap gap-3 items-center justify-center '>
            {/* NodeJS Tooltip */}
            <TooltipProvider delayDuration={90} skipDelayDuration={60}>
              <Tooltip>
                <TooltipTrigger>
                  <img src={NodeJS} alt='firebase-icon' width={30} height={30} />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Node.js</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            {/* ExpressJS Tooltip */}
            <TooltipProvider delayDuration={90} skipDelayDuration={60}>
              <Tooltip>
                <TooltipTrigger>
                  <img src={Express} alt='express-icon' width={37} height={37} />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Express.js</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            {/* C# Tooltip */}
            <TooltipProvider delayDuration={90} skipDelayDuration={60}>
              <Tooltip>
                <TooltipTrigger>
                  <img src={CSharp} alt='c#-icon' width={63} />
                </TooltipTrigger>
                <TooltipContent>
                  <p>C#</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            {/* ASP.Net Core Tooltip */}
            <TooltipProvider delayDuration={90} skipDelayDuration={60}>
              <Tooltip>
                <TooltipTrigger>
                  <img src={DotnetCore} alt='asp.netcore-icon' width={35} height={35} />
                </TooltipTrigger>
                <TooltipContent>
                  <p>ASP.Net Core</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            {/* SQL Server Tooltip */}
            <TooltipProvider delayDuration={90} skipDelayDuration={60}>
              <Tooltip>
                <TooltipTrigger>
                  <img src={MSSQL} alt='sqlserver-icon' width={37} height={37} />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Microsoft SQL Server</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            {/* MongoDB Tooltip */}
            <TooltipProvider delayDuration={90} skipDelayDuration={60}>
              <Tooltip>
                <TooltipTrigger>
                  <img src={MongoDB} alt='mongodb-icon' width={53} height={53} className='pt-1' />
                </TooltipTrigger>
                <TooltipContent>
                  <p>MongoDB</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Techstack;
