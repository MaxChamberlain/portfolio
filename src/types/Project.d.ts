declare interface Project {
    name: string
    description: string
    image: StaticImageData
    techStack: string[]
    links: {
        main: string
        github: string
        live: string
    }
}