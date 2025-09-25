"use client";
import SectionWrapper from "../hoc/SectionWrapper.jsx";
import {valuesItems} from "../constants/index.js";
import Reveal from "./Reveal.jsx";


const ValueCard = ({ value }) => {
    return (
        <div className="w-full xs:flex items-center justify-start gap-3 md:block">
                <Reveal>
                    <img
                        aria-hidden='true'
                        className="2xl:w-12  md:w-9.5 xs:w-9 w-7 "
                        src={value.icon}
                        alt={value.title}
                    />
                </Reveal>

            <div>
                <Reveal>
                    <p className="text-[0.8rem] xs:text-[0.9rem] sm:text-[1rem] md:text-[1.125rem] lg:text-[1.25rem] xl:text-[1.5rem]  oswald-bold text-tertiary-white md:mt-4">{value.title}</p>
                </Reveal>
                <Reveal>
                    <p className="2xl:text-base xl:text-sm sm:text-[0.75rem] xs:text-[0.65rem] text-[0.55rem] oswald-regular text-tertiary-white mt-1">{value.description}</p>
                </Reveal>
            </div>

        </div>
    );
};



const Values =   () =>  {
    return (
        <section aria-labelledby={'values-title'} id="values" className='2xl:py-24 xl:py-20 lg:py-18 xs:py-15 py-10 flex items-center justify-center relative'>
            <div className='flex flex-col gap-20 items-center justify-center w-full'>
                <div className='flex flex-col gap-4 items-center justify-center'>
                    <Reveal>
                        <p className='oswald-semibold text-tertiary-white xs:text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-xl '>Our values</p>
                    </Reveal>
                    <Reveal>
                        <h2 id={'values-title'} className='akira text-primary-red text-lg xs:text-xl sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl text-center leading-[1.05]'>
                            <span className=' akira block '>why clients</span>
                            <span className='akira block'>choose us</span>
                        </h2>
                    </Reveal>

                </div>
                <div className='flex md:flex-row flex-col items-center md:gap-10 gap-20 justify-between w-full'>
                    <div className='order-2 md:order-1 md:w-1/2 xs:w-full self-center'>
                        <div className='w-full grid grid-cols-2 2xl:gap-x-15 md:gap-y-10 xl:gap-x-10 sm:gap-y-8 xs:gap-y-10 xs:gap-x-5 gap-y-10 gap-x-4 lg:gap-x-8 md:gap-x-10 sm:gap-x-15 sm:gap-y-10'>
                            {valuesItems.map((item, index) => (
                                    <ValueCard
                                        key={index}
                                        value={item}
                                    />
                            ))}
                        </div>
                    </div>
                    <div className='order-1 md:order-2 xs:w-full md:w-1/2 relative'>
                        <Reveal>
                            <video
                                src={'/swypd-reel.mp4'}
                                loop
                                autoPlay
                                playsInline
                                preload="auto"
                                muted
                                role="presentation"
                                aria-label={'reel video in instagram showcasing our editing skills'}
                                className="!min-w-full 2xl:h-[42rem] xl:h-[35rem] lg:h-[30rem] md:h-[28rem] sm:h-[26rem] xs:h-[25rem]  object-cover rounded-lg"
                            />
                        </Reveal>
                        <div
                            aria-hidden='true'
                            className='absolute 2xl:w-[35rem] 2xl:-left-55 2xl:top-80 xl:w-[30rem] xl:-left-45 xl:top-65 lg:w-[25rem] lg:-left-40 lg:top-60 md:w-[20rem] md:-left-35 md:top-65 sm:w-[15rem] sm:-top-30 sm:-right-30 xs:w-[12rem] xs:-top-20 xs:-left-20 -top-20 -right-20 2xs:w-[11rem] -z-10'>
                            <img alt={'circle for visualization in values sections'} className='w-full' src={'/assets/values-circle.png'}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionWrapper(Values , "values");

