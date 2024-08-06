import ecommerce from "./assets/e-commerce.png";
import budgetApp from "./assets/budget-app.png";
import jobrover from "./assets/jobrover.png";
import geojourney from "./assets/geojourney.png";
import HTML from "./assets/techstack/html5.png";
import CSS3 from "./assets/techstack/css3.png";
import JS from "./assets/techstack/javascript.svg";
import React from "./assets/techstack/react.svg";
import ReactLeaflet from "./assets/leaflet.svg";
import Tailwind from "./assets/techstack/tailwind.svg";
import ProjectTechstack from "./ProjectTechstack";
import ReactRouter from "./assets/techstack/react-router.svg";
import PHP from "./assets/techstack/php.svg";
import MySQL from "./assets/techstack/mysql.svg";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";

const Projects = () => {
  return (
    <>
      <div className='text-start p-5'>
        <h3 className='text-xl font-bold text-primary text-start'>My Projects</h3>
        <p className='text-muted-foreground'>My recent projects: </p>
      </div>

      {/* Projects */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
        {/* jobrover */}
        <aside className='flex flex-col border rounded overflow-hidden h-auto w-full shadow m-auto max-w-[300px]'>
          <div className='relative h-[180px] overflow-hidden flex justify-center'>
            <img
              src={jobrover}
              alt='e-commerce'
              className='ease-in-out duration-100 w-full hover:scale-105 object-contain object-center'
            />
          </div>
          <div className='flex flex-col ml-4 pt-2 items-start'>
            <div>
              <h5 className='text-lg font-semibold text-start'>Jobrover</h5>
              <p className='flex items-center gap-1 text-blue-500 text-xs'>PERSONAL PROJECT</p>
            </div>
          </div>
          <div className='flex flex-col px-2 gap-3 h-auto'>
            <p className='text-sm text-start text-muted-foreground ml-1.5 mt-2'>
              Job listing application to search and apply jobs online. Employers can also register
              an account to post a job listing in the system. It was made using vanilla PHP and
              composer for autoloading.
            </p>

            {/* techstack icons */}
            <div className='flex flex-wrap gap-1.5 col-span-3 my-2 ml-2 '>
              {/* HTML Tooltip */}
              <TooltipProvider delayDuration={90} skipDelayDuration={60}>
                <Tooltip>
                  <TooltipTrigger>
                    <img src={HTML} alt='html5-icon' className='w-[20px]' />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>HTML5</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              {/* CSS3 Tooltip */}
              <TooltipProvider delayDuration={90} skipDelayDuration={60}>
                <Tooltip>
                  <TooltipTrigger>
                    <img src={CSS3} alt='css3-icon' className='w-[20px]' />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>CSS3</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              {/* PHP Tooltip */}
              <TooltipProvider delayDuration={90} skipDelayDuration={60}>
                <Tooltip>
                  <TooltipTrigger>
                    <img src={PHP} alt='php-icon' className='w-[38px] rounded-sm mt-[3px]' />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>PHP</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              {/* MySQL Tooltip */}
              <TooltipProvider delayDuration={90} skipDelayDuration={60}>
                <Tooltip>
                  <TooltipTrigger>
                    <img src={MySQL} alt='mysql-icon' className='w-[35px] rounded-sm mt-[3px]' />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>MySQL</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>

            {/* source code & live preview */}
            <div className='flex flex-col mb-1'>
              {/* github source code button*/}
              <a href='https://github.com/arvinbuid/jobrover' className='text-xs w-full'>
                <button className='text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 mb-2 flex gap-1 items-center justify-center w-full'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='h-10 w-10 p-2 text-blue-600'
                  >
                    <path d='M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4'></path>
                    <path d='M9 18c-4.51 2-5-2-7-2'></path>
                  </svg>
                  Source Code
                </button>
              </a>

              {/* live preview */}
              <a href='https://jobrover.tech' className='text-xs w-full'>
                <button className='text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 mb-2 flex gap-1 items-center justify-center w-full'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='h-10 w-10 p-2 text-blue-600'
                  >
                    <circle cx='12' cy='12' r='3'></circle>
                    <path d='M21 12c0-3.9-4.5-9-9-9s-9 5.1-9 9 4.5 9 9 9 9-5.1 9-9z'></path>
                  </svg>
                  Live Preview
                </button>
              </a>
            </div>
          </div>
        </aside>

        {/* geojourney */}
        <aside className='flex flex-col border rounded overflow-hidden h-auto w-full shadow m-auto max-w-[300px]'>
          <div className='relative h-[180px] overflow-hidden flex justify-center'>
            <img
              src={geojourney}
              alt='e-commerce'
              className='ease-in-out duration-100 w-full hover:scale-105 object-contain object-center'
            />
          </div>
          <div className='flex flex-col ml-4 pt-2 items-start'>
            <div>
              <h5 className='text-lg font-semibold text-start'>GeoJourney</h5>
              <p className='flex items-center gap-1 text-blue-500 text-xs'>PERSONAL PROJECT</p>
            </div>
          </div>
          <div className='flex flex-col px-2 gap-3 h-auto'>
            <p className='text-sm text-start text-muted-foreground ml-1.5 mt-2'>
              An interactive web application that lets users mark a location on the world map that
              they have been to and share their experiences there. React Leaflet Third Party Library
              Package was utilized for the application.
            </p>

            {/* techstack icons */}
            <div className='flex flex-wrap gap-1.5 col-span-3 my-2 ml-2 '>
              {/* HTML Tooltip */}
              <TooltipProvider delayDuration={90} skipDelayDuration={60}>
                <Tooltip>
                  <TooltipTrigger>
                    <img src={HTML} alt='html5-icon' className='w-[20px]' />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>HTML5</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              {/* CSS3 Tooltip */}
              <TooltipProvider delayDuration={90} skipDelayDuration={60}>
                <Tooltip>
                  <TooltipTrigger>
                    <img src={CSS3} alt='css3-icon' className='w-[20px]' />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>CSS3</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              {/* Javascript */}
              <TooltipProvider delayDuration={90} skipDelayDuration={60}>
                <Tooltip>
                  <TooltipTrigger>
                    <img src={JS} alt='javascript-icon' className='w-[22px] rounded-sm mt-[3px]' />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Javascript</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              {/* ReactJS Tooltip */}
              <TooltipProvider delayDuration={90} skipDelayDuration={60}>
                <Tooltip>
                  <TooltipTrigger>
                    <img src={React} alt='reactjs-icon' className='w-[22px] rounded-sm mt-[3px]' />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>ReactJS</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              {/* React Router */}
              <TooltipProvider delayDuration={90} skipDelayDuration={60}>
                <Tooltip>
                  <TooltipTrigger>
                    <img src={ReactRouter} alt='tailwindcss-icon' className='w-[22px] mt-[3px]' />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>React Router</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              {/* React Leaflet */}
              <TooltipProvider delayDuration={90} skipDelayDuration={60}>
                <Tooltip>
                  <TooltipTrigger>
                    <img
                      src={ReactLeaflet}
                      alt='react-leaflet-icon'
                      className='w-[55px] mt-[3px]'
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>React Leaflet</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>

            {/* source code & live preview */}
            <div className='flex flex-col mb-1'>
              {/* github source code button*/}
              <a href='https://github.com/arvinbuid/geojourney' className='text-xs w-full'>
                <button className='text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 mb-2 flex gap-1 items-center justify-center w-full'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='h-10 w-10 p-2 text-blue-600'
                  >
                    <path d='M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4'></path>
                    <path d='M9 18c-4.51 2-5-2-7-2'></path>
                  </svg>
                  Source Code
                </button>
              </a>

              {/* live preview */}
              <a href='https://geo-journey.vercel.app' className='text-xs w-full'>
                <button className='text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 mb-2 flex gap-1 items-center justify-center w-full'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='h-10 w-10 p-2 text-blue-600'
                  >
                    <circle cx='12' cy='12' r='3'></circle>
                    <path d='M21 12c0-3.9-4.5-9-9-9s-9 5.1-9 9 4.5 9 9 9 9-5.1 9-9z'></path>
                  </svg>
                  Live Preview
                </button>
              </a>
            </div>
          </div>
        </aside>

        {/* e-commerce */}
        <aside className='flex flex-col border rounded overflow-hidden h-auto w-full shadow m-auto max-w-[300px]'>
          <div className='relative h-[180px] overflow-hidden flex justify-center'>
            <img
              src={ecommerce}
              alt='e-commerce'
              className='ease-in-out duration-100 w-full hover:scale-105 object-contain object-center'
            />
          </div>
          <div className='flex flex-col ml-4 pt-2 items-start'>
            <div>
              <h5 className='text-lg font-semibold text-start'>E-Commerce</h5>
              <p className='flex items-center gap-1 text-blue-500 text-xs'>PERSONAL PROJECT</p>
            </div>
          </div>
          <div className='flex flex-col px-2 gap-3 h-auto'>
            <p className='text-sm text-start text-muted-foreground ml-1.5 mt-2'>
              E-Commerce Website made with ReactJS that has a functionality to add and delete items
              from the cart. Responsive to any device to give the users a much better experience
              browsing through their phone or tablet.
            </p>

            {/* techstack icons */}
            <ProjectTechstack />

            {/* source code & live preview */}
            <div className='flex flex-col mb-1'>
              {/* github source code button*/}
              <a href='https://github.com/arvinbuid/react-e-commerce' className='text-xs w-full'>
                <button className='text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 mb-2 flex gap-1 items-center justify-center w-full'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='h-10 w-10 p-2 text-blue-600'
                  >
                    <path d='M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4'></path>
                    <path d='M9 18c-4.51 2-5-2-7-2'></path>
                  </svg>
                  Source Code
                </button>
              </a>

              {/* live preview */}
              <a href='https://react-e-commerce-snowy.vercel.app' className='text-xs w-full'>
                <button className='text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 mb-2 flex gap-1 items-center justify-center w-full'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='h-10 w-10 p-2 text-blue-600'
                  >
                    <circle cx='12' cy='12' r='3'></circle>
                    <path d='M21 12c0-3.9-4.5-9-9-9s-9 5.1-9 9 4.5 9 9 9 9-5.1 9-9z'></path>
                  </svg>
                  Live Preview
                </button>
              </a>
            </div>
          </div>
        </aside>

        {/* budget-app */}
        <aside className='flex flex-col border rounded overflow-hidden h-auto w-full shadow m-auto max-w-[300px]'>
          <div className='relative h-[180px] overflow-hidden flex justify-center'>
            <img
              src={budgetApp}
              alt='budget-app'
              className='ease-in-out duration-100 w-full hover:scale-105 object-contain object-center'
            />
          </div>
          <div className='flex flex-col ml-4 pt-2 items-start'>
            <div>
              <h5 className='text-lg font-semibold text-start'>Budget App</h5>
              <p className='flex items-center gap-1 text-blue-500 text-xs'>PERSONAL PROJECT</p>
            </div>
          </div>
          <div className='flex flex-col px-2 gap-3 h-auto'>
            <p className='text-sm text-start text-muted-foreground ml-1.5 mt-2'>
              Budget Web Application made with ReactJS that has a functionality to create and delete
              a user, Add budgets and expenses, and ability to edit and delete each individual
              expense. Responsive to any device to give the users a much better experience browsing
              through their phone or tablet.
            </p>
            {/* techstack icons */}
            <div className='flex flex-wrap gap-1.5 col-span-3 my-2 ml-2 '>
              {/* HTML Tooltip */}
              <TooltipProvider delayDuration={90} skipDelayDuration={60}>
                <Tooltip>
                  <TooltipTrigger>
                    <img src={HTML} alt='html5-icon' className='w-[20px]' />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>HTML5</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              {/* CSS3 Tooltip */}
              <TooltipProvider delayDuration={90} skipDelayDuration={60}>
                <Tooltip>
                  <TooltipTrigger>
                    <img src={CSS3} alt='css3-icon' className='w-[20px]' />
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
                    <img src={JS} alt='javascript-icon' className='w-[22px] rounded-sm mt-[3px]' />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Javascript</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              {/* ReactJS Tooltip */}
              <TooltipProvider delayDuration={90} skipDelayDuration={60}>
                <Tooltip>
                  <TooltipTrigger>
                    <img src={React} alt='reactjs-icon' className='w-[22px] rounded-sm mt-[3px]' />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>ReactJS</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              {/* TailwindCSS Tooltip */}
              <TooltipProvider delayDuration={90} skipDelayDuration={60}>
                <Tooltip>
                  <TooltipTrigger>
                    <img src={Tailwind} alt='tailwindcss-icon' className='w-[22px] mt-[3px]' />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>TailwindCSS</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              {/* React Router */}
              <TooltipProvider delayDuration={90} skipDelayDuration={60}>
                <Tooltip>
                  <TooltipTrigger>
                    <img src={ReactRouter} alt='react-router-icon' className='w-[22px] mt-[3px]' />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>React Router</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>

            {/* source code & live preview */}
            <div className='flex flex-col mb-1'>
              {/* github source code button*/}
              <a href='https://github.com/arvinbuid/react-budget-app' className='text-xs w-full'>
                <button className='text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 mb-2 flex gap-1 items-center justify-center w-full'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='h-10 w-10 p-2 text-blue-600'
                  >
                    <path d='M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4'></path>
                    <path d='M9 18c-4.51 2-5-2-7-2'></path>
                  </svg>
                  Source Code
                </button>
              </a>

              {/* live preview */}
              <a href='https://budget-app-cyan.vercel.app' className='text-xs w-full'>
                <button className='text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 mb-2 flex gap-1 items-center justify-center w-full'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='h-10 w-10 p-2 text-blue-600'
                  >
                    <circle cx='12' cy='12' r='3'></circle>
                    <path d='M21 12c0-3.9-4.5-9-9-9s-9 5.1-9 9 4.5 9 9 9 9-5.1 9-9z'></path>
                  </svg>
                  Live Preview
                </button>
              </a>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
};

export default Projects;
