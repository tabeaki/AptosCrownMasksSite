import type { NextPage } from 'next'
import {Link as Scroll} from "react-scroll"

/* eslint-disable @next/next/no-img-element */
const Header: NextPage = () => {
     return <nav className="bg-black">
        <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
            <div className="flex items-center justify-between">
                <div>
                    <img className="mt-2" src="/logo.png" alt="LOGO" height="70" width="70" />
                </div>
                
                <div className="flex md:hidden">
                    <button type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                            <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                        </svg>
                    </button>
                </div>
            </div>

            <div className="items-center md:flex">
                <div className="flex flex-col md:flex-row md:mx-6">
                    <Scroll to="home" smooth={true} duration={600} offset={-30}>
                        <a className="my-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0">Home</a>
                    </Scroll>
                    <Scroll to="roadmap" smooth={true} duration={600} offset={-30}>
                        <a className="my-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0">Roadmap</a>
                    </Scroll>
                    <Scroll to="team" smooth={true} duration={600} offset={-30}>
                        <a className="my-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0">Team</a>
                    </Scroll>
                    <Scroll to="team" smooth={true} duration={600} offset={-30}>
                        <a className="my-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0">About</a>
                    </Scroll>
                </div>
            </div>
        </div>
    </nav>
    }

   export default Header;