import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ThemeProvider } from "./hooks/useTheme";

const Index = () => {
  return (
    <ThemeProvider>
      <main className="min-h-screen bg-background transition-colors duration-300">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </ThemeProvider>
  );
};

export default Index;
