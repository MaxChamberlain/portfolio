import Image from 'next/image'
import githubLogo from '../assets/svgs/github.svg'
import linkedinLogo from '../assets/svgs/linkedin.svg'
import selfImage from '../assets/images/self_image.jpg'
import htmlLogo from '../assets/svgs/html.svg'
import cssLogo from '../assets/svgs/css.svg'
import jsLogo from '../assets/svgs/javascript.svg'
import reactLogo from '../assets/svgs/react.svg'
import tailwind from '../assets/svgs/tailwind.svg'
import expressLogo from '../assets/svgs/express.svg'
import firebaseLogo from '../assets/svgs/firebase.svg'
import deskImage from '../assets/images/desk.png'
import devIcon from '../assets/svgs/front-end-developer-icon.svg'
import guyOnLaptop from '../assets/images/guy-on-laptop-emoji.png'
import DevProjectCard from '@/components/DevProjectCard'
import carRental from '../assets/images/rental.png'
import proxier from '../assets/images/proxier.png'
import maxauto from '../assets/images/info_maxauto.png'
import mapIcon from '../assets/svgs/map-location-dot-solid.svg'
import envelope from '../assets/svgs/envelope-solid.svg'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-screen dark:bg-zinc-900/95">
      <section id='home' className='w-full flex flex-col justify-center items-center gap-32 bg-stone-100/80 dark:bg-zinc-900 dark:text-stone-100 text-stone-700 pt-32 md:pt-64 pb-96'>
        <div className='flex flex-col lg:flex-row gap-28 sm:justify-center'>
          <div className='rounded-full w-40 md:w-52 lg:w-72 aspect-square overflow-hidden border-2 border-black dark:border-stone-100 lg:hidden block mx-auto'>
            <Image
              src={selfImage}
              alt='self image'
              width={350}
              height={350}
              className='-mt-6'
              loading='eager'
            />
          </div>
          <article className='max-w-xs md:max-w-md lg:max-w-lg flex flex-col gap-8 items-center text-center lg:text-start'>
            <h1 className='lg:text-[3.4rem] md:text-2xl text-xl font-bold lg:leading-[4rem]'>Front-End React Developer</h1>
            <p className='lg:text-base md:text-sm text-xs-'>Hi, I&apos;m Max Chamberlain. A passionate Front-end React Developer based in Denver, Colorado. 📍</p>
            <div className='flex justify-center lg:justify-start xl:justify-start gap-2 w-full'>
              <a href='https://www.linkedin.com/in/max-chamberlain-2430811b0/' target='_blank' rel='noreferrer'>
                <Image
                  src={linkedinLogo}
                  alt='linkedin logo'
                  width={30}
                  height={30}
                  className='xs:w-6 sm:w-6 dark:invert'
                />
              </a>
              <a href='https://www.github.com/MaxChamberlain' target='_blank' rel='noreferrer'>
                <Image
                  src={githubLogo}
                  alt='linkedin logo'
                  width={30}
                  height={30}
                  className='xs:w-6 sm:w-6 dark:invert'
                />
              </a>
            </div>
          </article>
          <div className='rounded-full w-40 lg:w-72 aspect-square overflow-hidden border-2 border-black dark:border-stone-100 hidden lg:block'>
            <Image
              src={selfImage}
              alt='self image'
              width={350}
              height={350}
              className='-mt-6'
            />
          </div>
        </div>
        <div className='flex flex-col lg:flex-row gap-6 justify-start items-center w-full max-w-sm md:max-w-4xl'>
          <h1 className='font-normal text-xl min-w-fit'>Tech Stack</h1>
          <span className='h-px w-6 lg:h-6 lg:w-px bg-stone-500 min-w-fit'></span>
          <div>
            <ul className='flex flex-wrap md:flex-nowrap justify-center gap-8 items-center h-full md:ml-12'>
              <li className='bg-white dark:bg-zinc-700 shadow rounded-full w-16 h-16 flex items-center justify-center gap-2 hover:w-28 transition-all duration-100 group cursor-pointer oveflow-hidden'>
                <Image
                  src={htmlLogo}
                  alt='html'
                  width={30}
                  height={30}
                  className='pointer-events-none'
                />
                <label className='absolute opacity-0 transition-all duration-100  dark:text-stone-100 group-hover:relative group-hover:opacity-100  delay-0 font-bold group-hover:delay-200 pointer-events-none'>
                  HTML
                </label>
              </li>
              <li className='bg-white dark:bg-zinc-700 shadow rounded-full w-16 h-16 flex items-center justify-center gap-2 hover:w-28 transition-all duration-100 group cursor-pointer oveflow-hidden'>
                <Image
                  src={cssLogo}
                  alt='css'
                  width={30}
                  height={30}
                  className='pointer-events-none'
                />
                <label className='absolute opacity-0 transition-all duration-100  dark:text-stone-100 group-hover:relative group-hover:opacity-100  delay-0 font-bold group-hover:delay-200 pointer-events-none'>
                  CSS
                </label>
              </li>
              <li className='bg-white dark:bg-zinc-700 shadow rounded-full w-16 h-16 flex items-center justify-center gap-2 hover:w-36 transition-all duration-100 group cursor-pointer oveflow-hidden'>
                <Image
                  src={jsLogo}
                  alt='javascript'
                  width={30}
                  height={30}
                  className='pointer-events-none'
                />
                <label className='absolute opacity-0 transition-all duration-100  dark:text-stone-100 group-hover:relative group-hover:opacity-100 delay-0 font-bold group-hover:delay-200 pointer-events-none'>
                  JavaScript
                </label>
              </li>
              <li className='bg-white dark:bg-zinc-700 shadow rounded-full w-16 h-16 flex items-center justify-center gap-2 hover:w-32 transition-all duration-100 group cursor-pointer oveflow-hidden'>
                <Image
                  src={reactLogo}
                  alt='react'
                  width={30}
                  height={30}
                  className='pointer-events-none'
                />
                <label className='absolute opacity-0 transition-all duration-100  dark:text-stone-100 group-hover:relative group-hover:opacity-100 delay-0 font-bold group-hover:delay-200 pointer-events-none'>
                  ReactJS
                </label>
              </li>
              <li className='bg-white dark:bg-zinc-700 shadow rounded-full w-16 h-16 flex items-center justify-center gap-2 hover:w-40 transition-all duration-100 group cursor-pointer oveflow-hidden'>
                <Image
                  src={tailwind}
                  alt='tailwind'
                  width={30}
                  height={30}
                  className='pointer-events-none'
                />
                <label className='absolute opacity-0 transition-all duration-100  dark:text-stone-100 group-hover:relative group-hover:opacity-100  delay-0 font-bold group-hover:delay-200 pointer-events-none'>
                  TailwindCSS
                </label>
              </li>
              <li className='bg-white dark:bg-zinc-700 shadow rounded-full w-16 h-16 flex items-center justify-center gap-2 hover:w-36 transition-all duration-100 group cursor-pointer oveflow-hidden'>
                <Image
                  src={expressLogo}
                  alt='express js'
                  width={30}
                  height={30}
                  className='pointer-events-none dark:invert'
                />
                <label className='absolute opacity-0 transition-all duration-200  dark:text-stone-100 group-hover:relative group-hover:opacity-100  delay-0 font-bold group-hover:delay-200 pointer-events-none'>
                  ExpressJS
                </label>
              </li>
              <li className='bg-white dark:bg-zinc-700 shadow rounded-full w-16 h-16 flex items-center justify-center gap-2 hover:w-32 transition-all duration-100 group cursor-pointer oveflow-hidden'>
                <Image
                  src={firebaseLogo}
                  alt='firebase'
                  width={30}
                  height={30}
                  className='pointer-events-none'
                />
                <label className='absolute opacity-0 transition-all duration-100  dark:text-stone-100 group-hover:relative group-hover:opacity-100  delay-0 font-bold group-hover:delay-200 pointer-events-none'>
                  Firebase
                </label>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section id='about' className='bg-transparent flex flex-col lg:flex-row items-center justify-center py-12 lg:py-36 gap-12 lg:gap-24'>
        <div className='relative'>
          <div className='w-11/12 h-11/12 mx-auto lg:h-96 lg:w-96 rounded-xl overflow-hidden'>
            <Image
              src={deskImage}
              alt='desk'
              width={800}
              height={800}
            />
          </div>
          <div className='bg-white dark:bg-zinc-800 rounded-full w-48 h-48 absolute bottom-0 right-0 items-center justify-center translate-x-16 translate-y-16 hidden lg:flex'>
            <Image
              src={devIcon}
              alt='dev icon'
              width={250}
              height={250}
              className='animate-spin absolute dark:invert' 
              style={{ animationDuration: '20s' }}
            />
            <Image
              src={guyOnLaptop}
              alt='guy on laptop'
              width={50}
              height={50}
            />
          </div>
        </div>
        <article className='h-full max-w-[92%] lg:max-w-md flex flex-col justify-start text-center lg:text-start lg:items-start items-center gap-4'>
          <h2 className='font-bold text-lg' style={{ color: 'hsl(220, 100%, 60%)' }}>ABOUT ME</h2>
          <h1 className='font-bold text-stone-700 dark:text-stone-100 text-base sm:text-xl md:text-2xl'>
            A passionate Front-end Developer
            based in Denver, Colorado 📍  
          </h1>
          <p className='text-stone-500 dark:text-stone-400 text-sm sm:text-lg'>
            As a Front-End Developer, I possess a deep understanding of skills in HTML, CSS, JavaScript, React and Tailwind. 
            I excel in designing and maintaining responsive websites that offer a smooth user experience. 
            My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code 
            and utilizing cutting-edge development tools and techniques. I am also a team player who both enjoys and thrives in 
            collaborating with cross-functional teams to produce outstanding web applications.
          </p>
        </article>
      </section>
      <section id='projects' className='bg-stone-100/80 dark:bg-zinc-900 flex items-center flex-col justify-center py-36 gap-16 w-full'>
        <article className='h-full max-w-xs lg:max-w-5xl flex flex-col w-full justify-start text-center lg:text-start lg:items-start items-center gap-4'>
          <h2 className='font-bold text-lg' style={{ color: 'hsl(220, 100%, 60%)' }}>PORTFOLIO</h2>
          <h1 className='font-bold text-stone-700 dark:text-stone-100 text-base md:text-xl lg:text-2xl'>
            Each project is a unique piece of development 🧩
          </h1>
        </article>
        <ul className='bg-stone-100/80 dark:bg-zinc-900 flex items-center flex-col justify-center gap-16 w-full'>
          <DevProjectCard
            project={{
              name: 'WORKSPACE RENTAL 🏢',
              description: 'A workspace rental website is a comprehensive resource for workspace information, class schedules, membership options, and tools to help users',
              image: carRental,
              techStack: [
                'React',
                'NextJS',
                'TailwindCSS'
              ],
              links: {
                main: 'https://workspace-rental-example.vercel.app',
                github: 'https://github.com/MaxChamberlain/workspace-rental-example',
                live: 'https://workspace-rental-example.vercel.app'
              },
            }}
          />
          <DevProjectCard
            project={{
              name: 'Proxier',
              description: 'Proixier is a web scraping tool that allows you to scrape data from any website. It is a simple and easy to use tool that can be used by anyone.',
              image: proxier,
              techStack: [
                'React',
                'NextJS',
                'TailwindCSS'
              ],
              links: {
                main: 'https://proxier-webscrape-example.vercel.app/',
                github: 'https://github.com/MaxChamberlain/proxier-webscrape-example',
                live: 'https://proxier-webscrape-example.vercel.app/'
              },
            }}
            reverse
          />
          <DevProjectCard
            project={{
              name: 'Max Autolytics',
              description: 'Max Autolytics is a data analytics/dashboard tool used by car dealers to gain insight into their store. This app is the information website for the tool. (THIS IS A REAL APP)',
              image: maxauto,
              techStack: [
                'React',
                'Firebase',
                'ExpressJS',
              ],
              links: {
                main: 'https://info.maxautolytics.com/',
                github: 'https://github.com/MaxChamberlain/info-max-autolytics',
                live: 'https://info.maxautolytics.com'
              },
            }}
          />
        </ul>
      </section>
      <section id='contact' className='bg-white dark:bg-transparent flex items-center flex-col justify-center py-24 gap-16 w-full'>
        <div className='h-full max-w-xs lg:max-w-5xl flex flex-col w-full justify-start text-center lg:text-start lg:items-start items-center gap-4'>
          <h2 className='font-bold text-lg' style={{ color: 'hsl(220, 100%, 60%)' }}>CONTACT</h2>
          <h1 className='font-bold text-stone-700 dark:text-stone-100 text-base md:text-xl lg:text-2xl'>
          Don&apos;t be shy! Hit me up! 👇
          </h1>
        </div>
        <article className='flex gap-16 md:gap-24 items-center justify-start max-w-xs lg:max-w-5xl w-full flex-col lg:flex-row'>
          <div className='flex gap-4 items-center flex-col lg:flex-row text-center lg:text-start'>
            <div className='bg-white rounded-full shadow p-4 md:p-6'>
              <Image
                src={mapIcon}
                alt='map icon'
                width={30}
                height={30}
              />
            </div>
            <div className='flex flex-col justify-around h-full'>
              <h2 className='font-bold text-stone-700 dark:text-stone-100 text-base md:text-xl lg:text-xl'>
                Location
              </h2>
              <h3 className='text-stone-500 dark:text-stone-400 text-sm md:text-lg'>
                Denver, Colorado
              </h3>
            </div>
          </div>
          <div className='flex gap-4 items-center flex-col lg:flex-row text-center lg:text-start'>
            <div className='bg-white rounded-full shadow p-4 md:p-6'>
              <Image
                src={envelope}
                alt='map icon'
                width={30}
                height={30}
              />
            </div>
            <div className='flex flex-col justify-around h-full'>
              <h2 className='font-bold text-stone-700 dark:text-stone-100 text-base md:text-xl lg:text-xl'>
                Mail
              </h2>
              <Link href='mailto:maxintegllc@gmail.com'>
                <h3 className='text-stone-500 dark:text-stone-400 text-sm md:text-lg hover:text-blue-500 transition-colors duration-500'>
                  maxintegllc@gmail.com
                </h3>
              </Link>
            </div>
          </div>
        </article>
      </section>
      <footer className='bg-slate-800 dark:bg-slate-900 p-12 gap-16 w-full flex justify-center'>
        <div className='flex items-center justify-between w-full max-w-5xl flex-col lg:flex-row gap-8'>
          <span className='font-bold text-stone-100 text-sm w-56 md:w-fit md:text-lg lg:text-xl text-center md:text-start'>
            © 2023 Max Integrations LLC. All rights reserved.
          </span>
          <div className='flex justify-center lg:justify-start xl:justify-start gap-4'>
            <a href='https://www.linkedin.com/in/max-chamberlain-2430811b0/' target='_blank' rel='noreferrer'>
              <Image
                src={linkedinLogo}
                alt='linkedin logo'
                width={30}
                height={30}
                className='sm:w-4 invert brightness-0'
              />
            </a>
            <a href='https://www.github.com/MaxChamberlain' target='_blank' rel='noreferrer'>
              <Image
                src={githubLogo}
                alt='linkedin logo'
                width={30}
                height={30}
                className='sm:w-4 invert brightness-0'
              />
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
