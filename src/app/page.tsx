import DivBase from "@/components/divBase";
import Projetos from "@/components/divProjetos";
import Stacks from "@/components/divStacks";
import SobreMim from "@/components/divText";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { Linkedin } from "lucide-react";


export default function Home(){
  return (
    <div className="w-full h-full sitePallete">
    <Header></Header>
    
    <DivBase></DivBase>
    <SobreMim></SobreMim>
    <Stacks></Stacks>
    <Projetos></Projetos>
    
    <Footer></Footer>
    </div>
    
  )
}