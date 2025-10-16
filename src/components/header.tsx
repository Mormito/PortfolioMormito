import { FolderGit2, Github, Linkedin, type LucideIcon } from "lucide-react"
import { ReactNode } from "react"

type ExternalLink = {
    url: string,
    Icon: LucideIcon,
    title: string
}

function ExternalLinkBtn({url, Icon, title}:ExternalLink){
    return (
        <a href={url} className="flex flex-row justify-center items-center gap-1 cursor-pointer duration-300 ease-in-out scale-100 hover:scale-110 text-sm md:text-base lg:text-base">
            <Icon className="w-5 h-5"/>
            <p>{title}</p>
        </a>
    )
}

const links:ExternalLink[] = [
    {url: 'https://www.linkedin.com/in/mormito/', Icon: Linkedin, title:'Linkedin'},
    {url: 'https://github.com/Mormito/', Icon: Github, title:'Github'},
    {url: 'https://github.com/Mormito?tab=repositories', Icon: FolderGit2, title:'Repositório'}
];

export default function Header(){
    return (
        <div className="w-full flex flex-row justify-center items-center gap-8 lg:gap-10 p-5 lg:p-10 border-b-2 dark:border-green-500">

            {links.map((l) => (
                <ExternalLinkBtn key={l.url} url={l.url} Icon={l.Icon} title={l.title} />
            ))}

        </div>
    )
}

