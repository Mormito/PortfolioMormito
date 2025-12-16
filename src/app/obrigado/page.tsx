import { CircleCheck } from "lucide-react";
import Link from "next/link";

export default function ObrigadoPage() {
  return (
    <div className="divBase w-full h-100 flex justify-center items-center">
        <div className="flex flex-row justify-center items-center gap-3">
            <h3 className="text-2xl">Seu email foi recebido!</h3>
            <CircleCheck />
        </div>

        <Link href={'/'}><button type="submit" className="border-2 py-1 px-4 font-light rounded-lg cursor-pointer duration-300 ease-in-out
                bg-defaultText text-defaultBg border-defaultText 
                dark:bg-darkdefaultText dark:text-darkdefaultBg dark:border-darkdefaultText ">Voltar a home</button></Link>
    </div>
  );
}
