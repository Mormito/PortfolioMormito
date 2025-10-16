import Image from "next/image";

export const basePath = process.env.NODE_ENV === "production" ? "/PortfolioMormito" : "";

export default function DivBase(){
    return (
    <div className="w-full flex flex-col justify-center items-center mt-5 p-5 lg:p-10"> 
        <div className="w-full flex flex-col md:flex-row justify-center items-center gap-10">
            <Image alt="Mormito" width={1000} height={1000} src={`${basePath}/imgs/me-resized.jpg`} className="w-8/12 h-8/12 md:w-4/12 md:h-4/12 lg:w-3/12 lg:h-3/12 rounded-4xl meImg" />
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-base md:text-2xl lg:text-4xl font-semibold">Olá, me chamo Guilherme Mormito</h1>
                <h2 className="md:text-xl lg:text-3xl font-extralight">Desenvolvedor Fullstack Júnior</h2>
            </div>
        </div>
    </div>
    )
}