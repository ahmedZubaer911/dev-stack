
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologyList from "./components/TechnologyList";
import { useEffect, useState } from "react";
import type { Technology } from "./types/technology";

function App() {
    const [technologies, setTechnologies] = useState<Technology[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const fetchTechnologies = async () => {
        try {
          const response = await fetch("/technologies.json");

          if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
          }

          const data: Technology[] = await response.json();

          setTechnologies(data);
        } catch (error) {
          console.error("Failed to load technologies:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchTechnologies();
    }, []);

    if (loading) {
      return <p>Loading technologies...</p>;
    }

    return (
        <div>
          <Navbar />
          <Hero />
          <TechnologyList technologies={technologies} />

        

        </div>
    );
}
export default App
