import Image from "next/image"

export const basePath = process.env.NODE_ENV === "production" ? "/PortfolioMormito" : "";

{/* Criação de tipo */}
type Project = {
    title: string,
    text: string,
    img: string,
    alt: string,
    repo: string,
    site: string,
}

{/* Componente Card com props passadas */}
export function Card({title, text, img, alt, repo, site}: Project) {
  return (
    <div className="w-full card">
      <h4>{title}</h4>
      <p>{text}</p>
      <Image src={img} alt={alt} width={1000} height={1000} />
      <div className="w-full flex flex-row mt-2 gap-2">
        <a href={repo} target="_blank" rel="noopener noreferrer">
          <button>Repositório</button>
        </a>

{/* Caso não haja site, então não exibe botão de site */}
        {site !== "" && (
          <a href={site} target="_blank" rel="noopener noreferrer">
            <button>Site</button>
          </a>
        )}
      </div>
    </div>
  );
}

{/* Array de objetos tipo Project */}
const project: Project[] = [
  {
    title: "Calculadora Fitness",
    text: "Uma calculadora de gasto calórico basal, TDEE e diversas modalidades de dieta.",
    img: `${basePath}/imgs/BMRCalculator-screenshot.png`,
    alt: "Foto: Calculadora BMR",
    repo: "https://github.com/Mormito/BMR-Calculator",
    site: "https://mormito.github.io/BMR-Calculator/",
  },

  {
    title: "MuscleDB",
    text: "Um sistema CRUD para registro de exericicios separados por grupo muscular.",
    img: `${basePath}/imgs/muscleDB-screenshot.png`,
    alt: "Foto: Muscle Database",
    repo: "https://github.com/Mormito/MuscleDB",
    site: "",
  },

  {
    title: "Sistema de ataque DDOS",
    text: "Um script desenvolvido para realizar ataques em ambientes controlados (TCC).",
    img: `${basePath}/imgs/DDOS-screenshot.png`,
    alt: "Foto: Denial Of Service System (DDOS)",
    repo: "https://github.com/Mormito/TCC-DenialOfService",
    site: "",
  },
];


{/* Componente */}
export default function Projetos(){
    return (
    <div className="divBase">
        <h3 className="text-lg md:text-xl lg:text-2xl font-semibold">Projetos Realizados</h3>

        <div className="w-full lg:w-8/12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3  justify-center items-stretch gap-3">

        {project.map((p) => (
                <Card key={p.title} title={p.title} text={p.text} img={p.img} alt={p.alt} repo={p.repo} site={p.site} />
        ))}       

        </div>

    </div>
    )
}