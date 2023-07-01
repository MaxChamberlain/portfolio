'use client'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import hamburger from '../assets/svgs/hamburger.svg'
import Image from 'next/image'

export default function Header(){
    const [ hovering, setHovering ] = useState('')
    const [ showNavbar, setShowNavbar ] = useState(false)

    useEffect(() => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [window])

    return (
        <div className="w-screen px-12 py-6 flex justify-between items-center bg-white dark:bg-zinc-800 sticky border-b dark:border-b-black shadow-xm top-0 text-stone-700 dark:text-stone-100 z-50">
            <Link href="/">
                <div className="z-10 w-full max-w-5xl font-semibold items-center justify-between text-xl lg:flex cursor-pointer">
                    Max.dev
                </div>
            </Link>
            <div className='block md:hidden cursor-pointer' onClick={() => {
                setShowNavbar(was => !was)
            }}>
                <Image
                    src={hamburger}
                    alt='hamburger'
                    width={25}
                    height={25}
                />
            </div>
            <AnimatePresence mode='wait'>
                {showNavbar && <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`fixed top-0 left-0 w-full h-screen bg-black bg-opacity-50 z-1 backdrop-blur-md`}
                    onClick={() => setShowNavbar(false)}
                />}
            </AnimatePresence>
            <AnimatePresence mode='wait'>
                <motion.div 
                    className={`flex flex-col md:left-0 md:flex-row items-center w-fit justify-start gap-4 md:gap-0 p-8 md:justify-end right-0 top-0 fixed md:relative md:space-x-4 text-lg font-semibold bg-white md:bg-transparent shadow-2xl md:shadow-none h-screen md:h-fit transition-transform`}
                    animate={{ right: showNavbar ? 0 : '-100%' }}
                    transition={{ duration: 0.2, delay: 0 }}
                >
                    <Link href="#home">
                        <motion.span
                            onHoverStart={() => setHovering('home')}
                            onHoverEnd={() => setHovering('')}
                            onClick={() => setShowNavbar(false)}
                        >
                            Home
                        </motion.span>
                        <div className='hidden md:block'>
                            <AnimatePresence mode='wait'>
                                {hovering === 'home' && <motion.div
                                    style={{
                                        height: 2,
                                        width: '100%',
                                        backgroundColor: 'black',
                                    }}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    transition={{ duration: 0.3 }}
                                    layout
                                    layoutId='underline'
                                ></motion.div>}
                            </AnimatePresence>
                        </div>
                    </Link>
                    <Link href="#about">
                        <motion.span
                            onHoverStart={() => setHovering('about')}
                            onHoverEnd={() => setHovering('')}
                            onClick={() => setShowNavbar(false)}
                        >
                            About
                        </motion.span>
                        <div className='hidden md:block'>
                            <AnimatePresence mode='wait'>
                                {hovering === 'about' && <motion.div
                                    style={{
                                        height: 2,
                                        width: '100%',
                                        backgroundColor: 'black',
                                    }}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    transition={{ duration: 0.3 }}
                                    layout
                                    layoutId='underline'
                                ></motion.div>}
                            </AnimatePresence>
                        </div>
                    </Link>
                    <Link href="#projects">
                        <motion.span
                            onHoverStart={() => setHovering('projects')}
                            onHoverEnd={() => setHovering('')}
                            onClick={() => setShowNavbar(false)}
                        >
                            Projects
                        </motion.span>
                        <div className='hidden md:block'>
                            <AnimatePresence mode='wait'>
                                {hovering === 'projects' && <motion.div
                                    style={{
                                        height: 2,
                                        width: '100%',
                                        backgroundColor: 'black',
                                    }}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    transition={{ duration: 0.3 }}
                                    layout
                                    layoutId='underline'
                                ></motion.div>}
                            </AnimatePresence>
                        </div>
                    </Link>
                    <Link href="#contact">
                        <motion.span
                            onHoverStart={() => setHovering('contact')}
                            onHoverEnd={() => setHovering('')}
                            onClick={() => setShowNavbar(false)}
                        >
                            Contact
                        </motion.span>
                        <div className='hidden md:block'>
                            <AnimatePresence mode='wait'>
                                {hovering === 'contact' && <motion.div
                                    style={{
                                        height: 2,
                                        width: '100%',
                                        backgroundColor: 'black',
                                    }}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    transition={{ duration: 0.3 }}
                                    layout
                                    layoutId='underline'
                                ></motion.div>}
                            </AnimatePresence>
                        </div>
                    </Link>
                    <div className="before:content-['Dark'] dark:before:content-['Light'] cursor-pointer" onClick={() => {
                        document.querySelector('html')?.classList.toggle('dark')
                    }}>
                        <div
                            style={{
                                height: 2,
                                width: '100%',
                                backgroundColor: 'hsl(220, 100%, 60%)',
                            }}
                        ></div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    )
}