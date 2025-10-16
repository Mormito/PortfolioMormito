import Image from 'next/image'

type Stacks = {
    src: string,
    alt: string
}

export default function Stacks(){
    return (
    <div className="divBase rsitePallete">
        <h3 className="text-lg md:text-xl lg:text-2xl font-semibold">Principais Stacks</h3>
        <div className="w-full flex flex-row justify-center items-center gap-3">

            <Image src="/icons/HTML.svg" alt="HTML5" width={1000} height={1000} className="stackSize" />
            <Image src="/icons/CSS.svg" alt="CSS" width={1000} height={1000} className="stackSize" />
            <Image src="/icons/Dark/TailwindCSS-Dark.svg" alt="TailwindCSS" width={1000} height={1000} className="hidden dark:block stackSize" />
            <Image src="/icons/Light/TailwindCSS-Light.svg" alt="TailwindCSS" width={1000} height={1000} className="block dark:hidden stackSize" />
            <Image src="/icons/Dark/PHP-Dark.svg" alt="PHP" width={1000} height={1000} className="hidden dark:block stackSize" />
            <Image src="/icons/Light/PHP-Light.svg" alt="PHP" width={1000} height={1000} className="block dark:hidden stackSize" />
            <Image src="/icons/Dark/Python-Dark.svg" alt="Python" width={1000} height={1000} className="hidden dark:block stackSize" />
            <Image src="/icons/Light/Python-Light.svg" alt="Python" width={1000} height={1000} className="block dark:hidden stackSize" />
            <Image src="/icons/Dark/MySQL-Dark.svg" alt="MySQL" width={1000} height={1000} className="hidden dark:block stackSize" />
            <Image src="/icons/Light/MySQL-Light.svg" alt="MySQL" width={1000} height={1000} className="block dark:hidden stackSize" />
        
        </div>
    </div>
    )
}