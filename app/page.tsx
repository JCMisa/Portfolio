import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import ProjectHighlights from "@/components/ProjectHighlights";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import RecentProjects from "../components/RecentProjects";
import Clients from "@/components/Clients";
import ButtonUp from "@/components/ButtonUp";
import Experience from "@/components/Experience";
import { Approach } from "@/components/Approach";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-9xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <ProjectHighlights />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <ButtonUp />
      </div>
    </main>
  );
}
