import Image from "next/image";
import { ModeToggle } from "./_components/mode-toggle";

export default function Home() {
  return (
    <main className="">
      <section id="sobre" className="space-y-6 py-8 md:py12 lg:py32">
        <div className="container flex max-w-[64rem] flex-col items-center text-center gap-4">
          <span>
                <ModeToggle />
          </span>

        </div>
        <h1 className="text-primary text-4xl font-bold text-center">Luana Cardoso</h1>        
      </section>
      
    </main>
  );
}
