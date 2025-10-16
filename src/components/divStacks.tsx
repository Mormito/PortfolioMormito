import Image from 'next/image'

export const basePath = process.env.NODE_ENV === "production" ? "/PortfolioMormito" : "";

type Stacks = {
    src: string,
    alt: string
}

export default function Stacks(){
    return (
    <div className="divBase rsitePallete">
        <h3 className="text-lg md:text-xl lg:text-2xl font-semibold">Principais Stacks</h3>
        <div className="w-full flex flex-row justify-center items-center gap-3">

    <Image src={`${basePath}/icons/HTML.svg`} alt="HTML5" width={1000} height={1000} className="stackSize" />
    <Image src={`${basePath}/icons/CSS.svg`} alt="CSS" width={1000} height={1000} className="stackSize" />
    <Image src={`${basePath}/icons/TailwindCSS-Dark.svg`} alt="TailwindCSS" width={1000} height={1000} className="hidden dark:block stackSize" />
    <Image src={`${basePath}/icons/TailwindCSS-Light.svg`} alt="TailwindCSS" width={1000} height={1000} className="block dark:hidden stackSize" />
    <Image src={`${basePath}/icons/PHP-Dark.svg`} alt="PHP" width={1000} height={1000} className="hidden dark:block stackSize" />
    <Image src={`${basePath}/icons/PHP-Light.svg`} alt="PHP" width={1000} height={1000} className="block dark:hidden stackSize" />
    <Image src={`${basePath}/icons/Python-Dark.svg`} alt="Python" width={1000} height={1000} className="hidden dark:block stackSize" />
    <Image src={`${basePath}/icons/Python-Light.svg`} alt="Python" width={1000} height={1000} className="block dark:hidden stackSize" />
    <Image src={`${basePath}/icons/MySQL-Dark.svg`} alt="MySQL" width={1000} height={1000} className="hidden dark:block stackSize" />
    <Image src={`${basePath}/icons/MySQL-Light.svg`} alt="MySQL" width={1000} height={1000} className="block dark:hidden stackSize" />

        </div>
    </div>
    )
}