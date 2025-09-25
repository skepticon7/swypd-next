"use client";
import SectionWrapper from "../hoc/SectionWrapper.jsx";
import Reveal from "./Reveal.jsx";
const Projects = () => {
    return (
        <section aria-labelledby={'projects-title'} id='projects' className='2xl:py-24 xl:py-20 lg:py-18 xs:py-15 py-10 flex  items-center justify-center relative'>
            <div className='flex flex-col gap-20 items-center justify-center w-full'>
                <div className='flex flex-col gap-4 items-center justify-center'>
                    <Reveal>
                        <p className='oswald-semibold text-tertiary-white xs:text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-xl'>Our
                            projects</p>
                    </Reveal>
                    <Reveal>
                        <h2 id={'projects-title'} className='akira text-primary-red text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center leading-[1.05]'>
                            <span className=' akira block '>emphasize what's</span>
                            <span className='akira block'>important to your</span>
                            <span className='akira block'>company</span>
                        </h2>
                    </Reveal>
                </div>

                <div
                    className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8 2xl:gap-10 auto-rows-[minmax(0,auto)]">
                    <div className="row-span-3 md:row-span-5">
                        <Reveal>
                            <img alt='Artboard 1 showcasing our recent branding work on Instagram' className="w-full h-full object-contain rounded-md" src={'/assets/Artboard 1.jpg'}/>
                        </Reveal>
                    </div>

                    <div className="row-span-2 md:col-start-1 md:row-start-6 md:row-span-3">
                        <Reveal>
                            <img alt='our first service values from Instagram' className="w-full h-full object-contain rounded-md" src={'/assets/service1.jpg'}/>
                        </Reveal>
                    </div>

                    <div className="row-span-3 md:row-span-5">
                        <Reveal>
                            <img alt='Artboard 2 showcasing our recent branding work on Instagram' className="w-full h-full object-contain rounded-md" src={'/assets/Artboard 2.jpg'}/>
                        </Reveal>
                    </div>

                    <div className="row-span-2 md:col-start-2 md:row-start-1 md:row-span-3">
                        <Reveal>
                            <img alt='our main logo' className="w-full h-full object-contain rounded-md" src={'/assets/swypd-values.png'}/>
                        </Reveal>
                    </div>

                    <div className="row-span-5 md:col-start-2 md:row-start-4 md:row-span-5">
                        <Reveal>
                            <img alt='Artboard 3 showcasing our recent branding work on Instagram' className="w-full h-full object-contain rounded-md" src={'/assets/Artboard 3.jpg'}/>
                        </Reveal>
                    </div>

                    <div className="row-span-3 md:col-start-3 md:row-start-6">
                        <Reveal>
                            <img alt='our second service values from Instagram' className="w-full h-full object-contain rounded-md" src={'/assets/service2.jpg'}/>
                        </Reveal>
                    </div>
                </div>


            </div>
            <img aria-hidden='true' className='absolute -z-10 xs:-left-30 xs:-top-0 -rotate-[10px] -left-30 top-0' src={'/assets/projects-slime.svg'}/>
            <img aria-hidden='true' className='absolute -z-10 xs:-bottom-20 xs:-right-65 -rotate-70 -bottom-20 -right-45' src={'/assets/hero-slime.png'}/>
        </section>
    )
}

export default SectionWrapper(Projects , 'projects');
