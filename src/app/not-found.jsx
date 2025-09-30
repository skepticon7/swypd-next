"use client"
import {SwypdLogo} from "../assets/index"
import {handleLogoClick} from "@/utils/scrollToTop";
import {styles} from "@/style";
import Link from "next/link";
import {motion} from "framer-motion";
import {fadeIn} from "@/utils/motion";
export default function NotFound() {
    return (
        <section style={{
            backgroundImage: 'url(/assets/bg-404.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
        }} aria-labelledby={'404-title'}
                 className={'relative min-h-screen overflow-hidden z-0 flex items-center justify-center'}>

            <Link
                href={'/'}
                aria-label='Scrolls to top of the page'
                className={`absolute top-0 left-1/2 transform -translate-x-1/2 ${styles.paddingX} py-4 xl:py-9 md:py-7 2xs:py-5`}
            >
                <SwypdLogo
                    className="xl:w-32 lg:w-30 md:w-28 sm:w-28 2xs:w-22 w-18  text-primary-red cursor-pointer"/>
            </Link>
            <div className='flex flex-col items-center justify-center gap-20 relative'>
                <div className='flex flex-col items-center justify-center'>
                    <h1 className='akira text-primary-red 2xl:text-[20rem] xl:text-[15rem] lg:text-[13rem] md:text-[10rem] sm:text-[8rem] xs:text-[7rem] text-[6rem] leading-none'>404</h1>
                    <p className='oswald-extralight text-tertiary-white 2xl:text-2xl xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs tracking-wider'>OH NO! THIS PAGE
                        DOESN’T
                        EXIST</p>
                </div>
                <Link
                    href={'/'}
                    aria-label={'Takes you back to the Home page'}
                    className="akira bg-primary-red/90 hover:bg-primary-red
                      duration-200  text-tertiary-white cursor-pointer rounded-xs transition-colors
                      text-[0.7rem] xs:text-[0.75rem] sm:text-[0.8rem] md:text-[0.85rem] lg:text-[0.9rem] xl:text-[1rem]
                                py-2 px-4 xs:py-2.5 xs:px-5 sm:py-3 sm:px-6 md:py-3.5 md:px-7 lg:py-4 lg:px-7 xl:py-3.5 xl:px-7
                      "
                >
                    go back
                </Link>
                <img className='absolute bottom-5 left-3 xs:bottom-6 xs:left-4 md:bottom-7 md:left-10 lg:bottom-8 lg:left-20 xl:bottom-9 xl:left-27 2xl:bottom-9 2xl:left-55 xl:w-12 lg:w-11  md:w-10  sm:w-9 xs:w-8 w-7 ' src='/assets/hero-arrow.svg'/>
            </div>
        </section>
    )
}