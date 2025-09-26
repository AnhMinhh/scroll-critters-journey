import { useRef } from "react";
import Navigation from "@/components/Navigation";
import TopicCard from "@/components/TopicCard";
import natureBackground from "@/assets/nature-background.jpg";

const Home = () => {
  const topicsRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const feedbackRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (section: string) => {
    const refs = {
      topics: topicsRef,
      about: aboutRef,
      feedback: feedbackRef,
    };
    
    const targetRef = refs[section as keyof typeof refs];
    if (targetRef?.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const topics = [
    { id: "vertebrates", title: "Vertebrate Animals", description: "Animals with backbones" },
    { id: "invertebrates", title: "Invertebrate Animals", description: "Animals without backbones" },
    { id: "mammals", title: "Mammals", description: "Warm-blooded vertebrates" },
    { id: "birds", title: "Birds", description: "Feathered flying animals" },
    { id: "reptiles", title: "Reptiles", description: "Cold-blooded scaled animals" },
    { id: "amphibians", title: "Amphibians", description: "Animals living in water and land" },
  ];

  return (
    <div className="min-h-screen relative">
      {/* Fixed nature background */}
      <div 
        className="fixed left-0 top-0 w-1/3 h-full bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${natureBackground})` }}
      />
      
      {/* Main content */}
      <div className="relative z-10 ml-[33.333%] min-h-screen">
        <Navigation onNavigate={scrollToSection} />
        
        {/* Header */}
        <header className="py-16 px-8 text-center bg-gradient-sky">
          <h1 className="text-5xl font-bold text-primary-foreground mb-4 animate-slide-up">
            NEROMIND
          </h1>
          <p className="text-xl text-primary-foreground/80 animate-fade-in">
            Exploring the World of Animals
          </p>
        </header>

        {/* Topics Section */}
        <section ref={topicsRef} className="py-16 px-8 bg-background">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
              Topics
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {topics.map((topic, index) => (
                <div 
                  key={topic.id} 
                  className="animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <TopicCard {...topic} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section ref={aboutRef} className="py-16 px-8 bg-secondary/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-foreground">About</h2>
            <div className="bg-card rounded-lg p-8 shadow-soft border border-border/50">
              <p className="text-lg text-muted-foreground leading-relaxed">
                We are a team from Hanoi University of Science and Technology, 
                joining the NASA Space Apps Challenge 2025 with dreams that reach 
                beyond the skies. To us, the universe is like a vast ocean, filled 
                with countless miracles—so we create and share as though scattering 
                starlight, hoping to leave the world with something beautiful and 
                inspiring. "SHARE TO BE SHARED"
              </p>
            </div>
          </div>
        </section>

        {/* Feedback Section */}
        <section ref={feedbackRef} className="py-16 px-8 bg-background">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-foreground">Feedback</h2>
            <div className="bg-gradient-card rounded-lg p-8 shadow-soft border border-border/50">
              <p className="text-lg text-muted-foreground">
                The website is so beautiful.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;