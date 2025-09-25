"use client"
import SectionWrapper from "../hoc/SectionWrapper.jsx";
import { motion } from "framer-motion";
import { fadeIn  } from "../utils/motion.js";
import Reveal from "./Reveal.jsx";

const CTA = () => {
    const handleBookingClick = () => {
        window.open("https://calendly.com/yussefelhilali", "_blank", "noopener,noreferrer");
    };
    return (
        <section aria-labelledby={'CTA-title'} id="cta" className="2xl:py-24 xl:py-20 lg:py-18 xs:py-15 py-10 flex items-center justify-center relative">
            <div className="text-center relative">
                <Reveal>
                    <h1 id={'CTA-title'} className="akira  text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-tertiary-white leading-[1.15]">
                        <span className="akira  block">ready to start</span>
                        <span className="akira  block">your next project ?</span>
                    </h1>
                </Reveal>

                <Reveal>
                    <h2 className="oswald-extralight text-tertiary-white text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-xl mt-4 tracking-wide">
                        Let’s bring your ideas to life with design, development, and marketing that deliver results.
                    </h2>
                </Reveal>

                <Reveal>
                        <button
                            onClick={handleBookingClick}
                            aria-label={'Forwards the user to book a calendly appointment'}
                            className="akira self-end  mt-8 bg-tertiary-white/90 hover:bg-tertiary-white
                      duration-200  text-secondary-black cursor-pointer rounded-xs transition-colors
                      text-[0.7rem] xs:text-[0.75rem] sm:text-[0.8rem] md:text-[0.85rem] lg:text-[0.9rem] xl:text-[1rem]
                                py-2 px-4 xs:py-2.5 xs:px-5 sm:py-3 sm:px-6 md:py-3.5 md:px-7 lg:py-4 lg:px-7 xl:py-3.5 xl:px-7
                      "
                        >
                            book an appointment
                        </button>
                </Reveal>
                <motion.img
                    aria-hidden={'true'}
                    variants={fadeIn("left", "spring", 0.9, 1)}
                    alt={'first horizontal line under the keyword'}
                    className='absolute xl:top-26 xl:right-63 xl:w-30 lg:top-19 lg:right-45 md:top-16 md:w-22 md:right-46 sm:w-20 sm:top-13 sm:right-41 xs:top-11 xs:right-25 xs:w-18 hidden xs:block' src={'/assets/hero-line-1.svg'}
                />
                <motion.img
                    aria-hidden={'true'}
                    alt={'second horizontal line under the keyword'}
                    variants={fadeIn("left", "spring", 1, 1)}
                    className='absolute xl:top-28 xl:right-68 xl:w-25  lg:top-21 lg:right-50 lg:w-20 md:top-18 md:right-53 md:w-15 sm:w-13 sm:top-14.5 sm:right-47 xs:w-11 xs:top-12.5 xs:right-32 xs:block hidden'  src={'/assets/hero-line-2.svg'}/>
                <motion.img
                    aria-hidden={'true'}
                    alt={'arrow to point for the booking appointment button'}
                    variants={fadeIn("right", "spring", 1, 1)}
                    className='absolute xl:left-33 xl:top-43 xl:-rotate-10 xl:w-10 lg:w-9 lg:left-15 lg:top-37 md:w-8 md:left-15 md:top-34 sm:w-7 sm:left-15 sm:top-27 xs:w-7 xs:left-10 xs:top-23 xs:block hidden' src={'/assets/hero-arrow.svg'}/>

            </div>

        </section>
    );
};

export default SectionWrapper(CTA , 'cta');
