import {SwypdLogo} from "../assets/index"
import Link from "next/link"
export default function NotFound() {
    return (
        <section aria-labelledby={'404-title'} className={'relative min-h-screen overflow-hidden z-0 bg-secondary-black flex items-center justify-center'}>
            <div className='flex flex-col items-center justify-center '>
                <SwypdLogo className='xl:w-72 lg:w-65 md:w-62 sm:w-56 xs:w-48 w-40 text-primary-red'/>
                <div className='flex flex-col items-center justify-center gap-1 mt-5'>
                    <h1 id={'404-title'} className='text-primary-red akira xl:text-7xl lg:text-6xl'>404</h1>
                    <h2 className='text-tertiary-white akira xl:text-xl lg:text-lg'>page not found</h2>
                </div>
                <p className='text-tertiary-white text-center  xl:text-2xl lg:text-xl w-2/3 mt-10'>The page you're looking for has vanished into the digital void. Don't worry, even in cyberspace, not all paths lead somewhere.</p>
                <Link
                    href='/'
                >
                    <button
                        aria-label={'Takes you back to the main SWYPDMEDIA landing page'}
                        className="akira md:block text-tertiary-white bg-primary-red/90 mt-6 hover:bg-primary-red duration-200 cursor-pointer rounded-xs transition-colors xl:text-base lg:text-sm  sm:text-xs  py-2.5 px-5"
                    >
                        Return home
                    </button>
                </Link>
            </div>
        </section>
    )
}