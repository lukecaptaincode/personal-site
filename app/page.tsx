import Hero from "./components/hero";
import About from "./components/about";
import Work from "./components/work";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-18 bg-slate-800">
      <Hero></Hero>
      <About></About>
      <Work></Work>
    </main>
  );
}
