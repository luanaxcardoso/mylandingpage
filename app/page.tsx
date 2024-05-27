import Image from "next/image";
import { ModeToggle } from "./_components/mode-toggle";
import { HiOutlineExternalLink } from 'react-icons/hi';

export default function Home() {
  const githubLink = "https://github.com/luanaxcardoso";
  const projects = [
    {
      title: 'E-commerce Mary Jackson',
      description: 'Desenvolvimento de um e-commerce da marca Mary Jackson, utilizando Django e Bootstrap.',
      image: '/images/image1.jpg',
      link: 'https://luanacardoso.pythonanywhere.com/',
    },
    {
      title: 'Projeto 2',
      description: 'Descrição do projeto 2.',
      image: '/path/to/image2.jpg',
      link: 'https://linkdoproj2.com',
    },
    {
      title: 'Projeto 3',
      description: 'Descrição do projeto 3.',
      image: '/path/to/image3.jpg',
      link: 'https://linkdoproj3.com',
    },
  ];
return (
  <main className="relative">  
  <header className="bg-gray-600 text-white py-4">
    <div className="container mx-auto flex justify-between items-center">
    <h2 className="text-2xl font-bold">
            Github{' '}
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <HiOutlineExternalLink className="inline-block w-6 h-6" />
            </a>
          </h2>
      <ModeToggle />
    </div>
  </header>
  <section className="py-10 bg-gray-100 dark:bg-gray-900">
    <div className="container mx-auto text-center">
      <h1 className="text-primary text-4xl font-bold mb-4">Luana Cardoso</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300">Desenvolvedora Full-Stack Júnior</p>
      <a href="https://wa.me/12991871456" className="inline-block bg-green-600 text-white py-2 px-4 rounded-lg mt-4 hover:bg-green-800">WhatsApp</a>
    </div>
  </section>
  <section className="bg-gray-100 dark:bg-gray-900">
    <div className="container mx-auto py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-4 bg-gray-200 dark:bg-gray-700 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold">Formação</h2>
          <p className="mt-2">Graduanda em Análise e Desenvolvimento de Sistemas (UNIFEOB)</p>
        </div>
        <div className="p-4 bg-gray-200 dark:bg-gray-700 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold">Experiência</h2>
<p className="mt-2">Tenho trabalhado em projetos pessoais e estudos relacionados à programação por um ano e meio.</p>

        </div>
        
        <div className="p-4 bg-gray-200 dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden">
          <h2 className="text-xl font-semibold">Habilidades</h2>
          <ul className="mt-2">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Next.js</li>
            <li>Node.js</li>
            <li>Python</li>
            <li>Django</li>
          </ul>
        </div>
        <div className="p-4 bg-gray-200 dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden" >
          <h2>Soft Skills</h2>
          <ul className="mt-2">
            <li>Trabalho em equipe</li>
            <li>Comunicação</li>
            <li>Proatividade</li>
            <li>Resolução de problemas</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section id="projetos" className="py-10 bg-white dark:bg-gray-800">
    <div className="container mx-auto">
      <h2 className="text-primary text-4xl font-bold text-center py-4">Meus Projetos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg shadow-lg">
            <Image src={project.image} alt={project.title} width={500} height={300} className="rounded-lg" />
            <h3 className="mt-4 text-xl font-semibold">{project.title}</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
              Ver Projeto
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>

  <section id="contato" className="py-20 bg-gray-100 dark:bg-gray-900">
    <div className="container mx-auto text-center">
      <h1 className="text-primary text-3xl font-bold mb-10">Redes Sociais</h1>
      <p>Me chame em uma das minhas redes socias</p>
      <div className="flex justify-center mt-8">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="mr-4">
          <Image src="/images/linkedin.svg" alt="Linkedin" width={40} height={40} />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <Image src="/images/github.svg" alt="Github" width={40} height={40} />
        </a>
      </div>
      
    </div>
  </section>
</main>

  );
}
