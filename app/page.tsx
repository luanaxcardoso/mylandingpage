import Image from "next/image";
import { ModeToggle } from "./_components/mode-toggle";
import { FaLinkedin } from 'react-icons/fa';

export default function Home() {
  const linkedinLink = "https://www.linkedin.com/in/luana-ap-cardoso/";
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
  <header className="bg-800 text-primary py-4">
    <div className="container mx-auto flex justify-between items-center">
        <h2 className="text-2xl font-bold">
            {' '}
            <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="inline-block w-8 h-8" />
            </a>
        </h2>
      <ModeToggle />
    </div>
  </header>
  <section className="py-10 bg-gray-100 dark:bg-gray-900">
    <div className="container mx-auto text-center">
    <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-5xl text-center">
    <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Luana Cardoso</span> 
</h1>

      <p className="text-lg text-gray-600 dark:text-gray-300">Desenvolvedora Full-Stack Júnior</p>
      <a href="https://wa.me/12991871456" className="inline-block bg-green-600 text-white py-2 px-4 rounded-lg mt-4 hover:bg-green-800">WhatsApp</a>
    </div>
  </section>
  <section className="bg-gray-100 dark:bg-gray-900">
    <div className="container mx-auto py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-4 bg-gray-200 dark:bg-gray-700 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold">Formação</h2>
          <p className="mt-2 font-medium">Graduanda em Análise e Desenvolvimento de Sistemas (UNIFEOB)</p>
        </div>
        <div className="p-4 bg-gray-200 dark:bg-gray-700 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold">Experiência</h2>
<p className="mt-2 font-medium">Tenho trabalhado em projetos pessoais e estudos relacionados à programação há um ano e meio.</p>

        </div>
        
        <div className="p-4 bg-gray-200 dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden">
          <h2 className="text-xl font-bold">Hard Skills</h2>
          <ul className="py-4 space-y-4 text-left text-gray-500 dark:text-gray-400">
              <li className="flex items-center space-x-3 rtl:space-x-reverse">
                  <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                  </svg>
                  <span>Python</span>
              </li>
              <li className="flex items-center space-x-3 rtl:space-x-reverse">
                  <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                  </svg>
                  <span>Javascript</span>
              </li>
              <li className="flex items-center space-x-3 rtl:space-x-reverse">
                  <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                  </svg>
                  <span>C-Sharp</span>
              </li>
              <li className="flex items-center space-x-3 rtl:space-x-reverse">
                  <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                  </svg>
                  <span>SQL</span>
              </li>
          </ul>
        </div>
        <div className="p-4 bg-gray-200 dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden" >
        <h2 className="text-xl font-bold">Soft Skills</h2>
          <ul className="py-4 space-y-4 text-left text-gray-500 dark:text-gray-400">
              <li className="flex items-center space-x-3 rtl:space-x-reverse">
                  <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                  </svg>
                  <span>Colaboração</span>
              </li>
              <li className="flex items-center space-x-3 rtl:space-x-reverse">
                  <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                  </svg>
                  <span>Flexibilidade</span>
              </li>
              <li className="flex items-center space-x-3 rtl:space-x-reverse">
                  <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                  </svg>
                  <span>Resolução de problemas</span>
              </li>
              <li className="flex items-center space-x-3 rtl:space-x-reverse">
                  <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                  </svg>
                  <span>Comunicação</span>
              </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <section id="projetos" className=" bg-white dark:bg-gray-800">
      <div className="container mx-auto ">
        <h1 className="mb-4 py-10 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl text-center">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Projetos</span> 
        </h1>
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
    <h2 className="mb-4 py-10 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl text-center">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Redes Sociais</span> 
        </h2>
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
