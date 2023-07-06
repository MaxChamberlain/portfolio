
import Image from 'next/image'
import Link from 'next/link'
import githubLogo from '../assets/svgs/github.svg'
import externalIcon from '../assets/svgs/open-external-link-icon.svg'

export default function DevProjectCard({ project, reverse }: { project: Project, reverse?: boolean }) {
    return(
        <div className={`flex justify-center gap-4 max-w-5xl w-11/12 xl:w-full p-4 bg-white dark:bg-zinc-800 rounded-xl shadow-md flex-col ${reverse ? 'xl:flex-row-reverse' : 'xl:flex-row'}`}>
            <Link href={project.links.main}>
                <div className='relative w-full xl:w-[35rem] h-72 md:h-96 overflow-hidden rounded-xl drop-shadow-md'>
                    <Image 
                        src={project.image}
                        alt={project.name}
                        className='translate-y-0 hover:-translate-y-3/4 transition-transform ease-in-out'
                        style={{
                            transitionDuration: '10s',
                        }}
                    />
                </div>
            </Link>
            <div className='w-full xl:max-w-2xl p-8 pb-0 flex flex-col items-center justify-center gap-4'>
                <div className='font-bold uppercase text-stone-700 dark:text-stone-100'>
                    {project.name}
                </div>
                <div className='text-stone-500 dark:text-stone-400 text-sm md:text-lg text-center h-1/2 flex items-center'>
                    {project.description}
                </div>
                <div className='flex justify-center gap-4'>
                    {project.techStack.map((tech, index) => (
                        <div key={index} className='font-bold bg-white dark:bg-zinc-600 text-black dark:text-white drop-shadow-md rounded-xl text-xs sm:text-sm md:text-base p-2 md:p-4 flex items-center justify-center'>
                            {tech}
                        </div>
                    ))}
                </div>
                <div className='flex justify-center items-center gap-4'>
                    {project.links.github && (
                        <Link href={project.links.github}>
                            <div className= 'bg-transparent text-black dark:text-white p-4 flex items-center gap-2 justify-center text-xs sm:text-sm md:text-base whitespace-nowrap'>
                                Code <Image src={githubLogo} alt='github' width={30} height={30} className='dark:invert' />
                            </div>
                        </Link>
                    )}
                    {project.links.live && (
                        <Link href={project.links.live}>
                            <div className= 'p-4 bg-transparent text-black dark:text-white flex items-center gap-2 justify-center text-xs sm:text-sm md:text-base whitespace-nowrap'>
                                Live Demo <Image src={externalIcon} alt='github' width={20} height={20} className='dark:invert' />
                            </div>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    )
}