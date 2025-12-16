import DivBase from "@/components/divBase";
import Projetos from "@/components/divProjetos";
import Stacks from "@/components/divStacks";
import SobreMim from "@/components/divText";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { FormEmail } from "@/components/mail";
import { Linkedin } from "lucide-react";


export default function Home(){
  return (
    <div>
    
    <DivBase />
    <SobreMim />
    <Stacks />
    <Projetos />
    <FormEmail />
        
    </div>
    
  )
}