"use client";

import SectionWrapper from "../hoc/SectionWrapper.jsx";
import Reveal from "./Reveal.jsx";
import {scrollToSection} from "@/utils/scrollToSection.js";

const HowCard = ({icon , title , description}) => {
    return (
        <div className='flex flex-col md:flex-row max-w-[12rem] md:max-w-full items-center gap-2 justify-start md:justify-start 2xl:gap-10 md:gap-5'>
            <Reveal>
                <img aria-hidden='true' alt={title} className='2xl:w-12  md:w-9.5 xs:w-9 w-8' src={icon}/>
            </Reveal>
            <div className='flex flex-col gap-1 md:items-start  items-center justify-center'>
                <Reveal>
                    <p className='oswald-bold text-[0.85rem] xs:text-[0.9rem] sm:text-[1rem] md:text-[1.125rem] lg:text-[1.25rem] xl:text-[1.5rem]    text-tertiary-white '>{title}</p>
                </Reveal>
                <Reveal>
                    <p className='oswald-light  text-[0.6rem] xs:text-[0.65rem] sm:text-[0.75rem] md:text-[0.875rem] lg:text-[1rem] xl:text-[1.125rem]   text-tertiary-white text-center md:text-left'>{description}</p>
                </Reveal>
            </div>
        </div>
    )
}

const How  = () =>  {

    return(
        <section aria-labelledby='how-title' id='how' className='2xl:py-24 xl:py-20 lg:py-18 xs:py-15 py-10 flex items-center justify-center'>
            <div className='flex md:flex-row flex-col xs:gap-15 gap-11 items-center justify-between w-full h-full '>
                <div className="xl:self-center md:self-start md:w-1/2">
                    <Reveal>
                        <p className='oswald-semibold text-tertiary-white xs:text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-xl xs:text-center md:text-left'>How it works</p>
                    </Reveal>

                    <Reveal>
                        <h2 id={'how-title'} className='akira text-primary-red 2xl:text-5xl xl:text-4xl sm:text-2xl xs:text-xl xs:text-center text-lg md:text-left leading-[1.05] mt-4'>
                            <span className=' akira xs:block md:hidden '>Simple steps to bring</span>
                            <span className=' akira xs:block  md:hidden '>your idea to life</span>
                            <span className=' akira md:block hidden '>Simple steps</span>
                            <span className='akira md:block hidden'>to bring your</span>
                            <span className='akira md:block hidden'>idea to life</span>
                        </h2>
                    </Reveal>

                    <Reveal>
                        <button
                            aria-label='Scrolls to the call of action section to book an appointment'
                                onClick={() => scrollToSection("cta")}
                                className="akira hidden md:block  mt-6 bg-tertiary-white/90 hover:bg-tertiary-white
                                    duration-200   text-secondary-black cursor-pointer rounded-xs transition-colors
                                    text-[0.7rem] xs:text-[0.75rem] sm:text-[0.8rem] md:text-[0.85rem] lg:text-[0.9rem] xl:text-[1rem]
                                    py-2 px-4 xs:py-2.5 xs:px-5 sm:py-3 sm:px-6 md:py-3.5 md:px-7 lg:py-4 lg:px-7 xl:py-3.5 xl:px-7
                                "
                        >
                                talk to us about your idea
                        </button>
                    </Reveal>
                </div>
                <div className='md:flex md:flex-col grid grid-cols-2 xs:gap-x-10 gap-x-8 gap-y-10 xs:gap-y-12 xl:gap-5 lg:gap-3 md:gap-2 md:items-start '>
                        <HowCard icon={'/assets/discover.svg'} title={'Discover'}
                                 description={'We listen, understand your goals, and plan.'}/>
                    <div className="hidden md:block w-px xl:h-15 lg:h-13 md:h-8 md:ml-4 lg:ml-5 bg-tertiary-white"></div>
                        <HowCard icon={'/assets/create.svg'} title={'Create'}
                                 description={"Our designers and developers craft your solution."}/>
                    <div className="hidden md:block w-px xl:h-15 lg:h-13 md:h-8 md:ml-4 lg:ml-5 bg-tertiary-white"></div>
                        <HowCard icon={'/assets/launch.svg'} title={'Launch'}
                                 description={'We test, deliver, and celebrate your new product.'}/>
                    <div className="hidden md:block w-px xl:h-15 lg:h-13 md:h-8 md:ml-4 lg:ml-5 bg-tertiary-white"></div>
                        <HowCard icon={'/assets/support.svg'} title={'Support'}
                                 description={'Ongoing help to keep everything running smoothly.'}/>
                </div>

                <div className='md:hidden w-full'>
                    <Reveal>
                            <button
                                onClick={() => scrollToSection("cta")}
                                aria-label='Scrolls to the call of action section to book an appointment'
                                className="akira w-full bg-tertiary-white/90 hover:bg-tertiary-white
                      duration-200   text-secondary-black cursor-pointer rounded-xs transition-colors
                      text-[0.7rem] xs:text-[0.75rem] sm:text-[0.8rem] md:text-[0.85rem] lg:text-[0.9rem] xl:text-[1rem]
    py-2 px-4 xs:py-2.5 xs:px-5 sm:py-3 sm:px-6 md:py-3.5 md:px-7 lg:py-4 lg:px-7 xl:py-3.5 xl:px-7"
                            >
                                talk to us about your idea
                            </button>
                    </Reveal>
                </div>

            </div>
        </section>
    )
}

export default SectionWrapper(How , 'how');

