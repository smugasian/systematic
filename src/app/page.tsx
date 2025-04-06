import Footer from "@/components/Footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="h-6"></div>
      <Navbar />
      <Hero />

      <Footer />
    </main>
  );
}
