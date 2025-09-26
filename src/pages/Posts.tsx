import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import scienceBackground from "@/assets/science-background.jpg";
import scientistPost from "@/assets/scientist-post.jpg";

const Posts = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  const categoryTitles = {
    birds: "BIRDS",
    mouse: "MOUSE", 
    "dog-cat": "DOGS & CATS"
  };

  const currentTitle = categoryTitles[category as keyof typeof categoryTitles] || "BIRDS";

  const posts = [
    {
      id: 1,
      title: "Avian Flight Mechanics",
      description: "Study of how birds achieve and maintain flight through wing structure and aerodynamics.",
      tags: ["biology", "physics", "aerodynamics"]
    },
    {
      id: 2,
      title: "Bird Migration Patterns",
      description: "Research on seasonal migration routes and navigation systems used by various bird species.",
      tags: ["ecology", "behavior", "navigation"]
    },
    {
      id: 3,
      title: "Feather Structure Analysis",
      description: "Microscopic examination of feather composition and its role in thermoregulation.",
      tags: ["anatomy", "materials", "biology"]
    },
    {
      id: 4,
      title: "Avian Respiratory System",
      description: "Understanding the unique breathing mechanisms that enable high-altitude flight.",
      tags: ["physiology", "respiration", "evolution"]
    },
    {
      id: 5,
      title: "Bird Song Communication",
      description: "Analysis of acoustic patterns and their role in territorial and mating behaviors.",
      tags: ["acoustics", "behavior", "communication"]
    },
    {
      id: 6,
      title: "Nest Architecture Study",
      description: "Investigation of construction techniques and materials used in different bird species' nests.",
      tags: ["architecture", "behavior", "ecology"]
    }
  ];

  const handlePostClick = (postId: number) => {
    navigate(`/post/${postId}`);
  };

  return (
    <div className="min-h-screen relative">
      {/* Fixed science background */}
      <div 
        className="fixed left-0 top-0 w-1/3 h-full bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${scienceBackground})` }}
      />
      
      {/* Main content */}
      <div className="relative z-10 ml-[33.333%] min-h-screen bg-background">
        {/* Header */}
        <header className="p-8 border-b border-border/20">
          <div className="flex items-center justify-between mb-6">
            <Button
              variant="ghost"
              onClick={() => navigate(-1)}
              className="hover:bg-primary/10"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input 
                placeholder="Search..." 
                className="pl-10 w-64 bg-muted/30 border-border/50"
              />
            </div>
          </div>
          
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground animate-slide-up">
              {currentTitle}
            </h1>
          </div>
        </header>

        {/* Posts Grid */}
        <div className="p-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {posts.map((post, index) => (
                <Card 
                  key={post.id}
                  className="cursor-pointer group hover:shadow-nature transition-smooth bg-gradient-card border border-border/50 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => handlePostClick(post.id)}
                >
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img 
                        src={scientistPost} 
                        alt="Research"
                        className="w-full h-48 object-cover group-hover:scale-105 transition-smooth"
                      />
                      <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                        GO
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-smooth">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {post.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <span 
                            key={tag}
                            className="bg-muted/50 text-muted-foreground px-2 py-1 rounded text-xs border border-border/30"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;