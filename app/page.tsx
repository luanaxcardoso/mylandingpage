import Image from "next/image";
import { ModeToggle } from "./_components/mode-toggle";

export default function Home() {
  return (
    <main className="relative">  
      <div className="absolute top-0 right-0 m-4"> 
        <ModeToggle />
      </div>
      <section id="sobre" className="space-y-6 py-4 md:py-12 lg:py-28">
  <div className="container flex max-w-[64rem] flex-col items-center text-center gap-4">
  <h1 className="text-primary text-4xl font-bold text-center">Luana Cardoso</h1>
    <span className="rounded-2xl bg-muted px-6 py-1 text-lg font-semibold flex items-center">
      <p>Desenvolvedora Full-Stack Júnior</p>
    </span>
  </div>
  
</section>

    </main>
  );
}
