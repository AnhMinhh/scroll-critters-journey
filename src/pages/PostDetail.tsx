import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import scienceBackground from "@/assets/science-background.jpg";
import scientistPost from "@/assets/scientist-post.jpg";

const PostDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const postData = {
    title: "Avian Flight Mechanics",
    content: `
      Birds have evolved one of the most sophisticated flight systems in the natural world. Their ability to achieve and maintain powered flight is the result of millions of years of evolutionary refinement.

      ## Wing Structure and Design

      The avian wing is a marvel of biological engineering. Unlike the rigid wings of aircraft, bird wings are flexible structures that can change shape during flight. This adaptability allows birds to optimize their wing configuration for different flight modes - from rapid acceleration to efficient gliding.

      ## Aerodynamic Principles

      Birds utilize several key aerodynamic principles:
      
      • **Lift Generation**: The curved shape of bird wings creates differential air pressure
      • **Thrust Production**: Wing-beat patterns generate forward propulsion
      • **Drag Reduction**: Streamlined body shapes minimize air resistance
      • **Maneuverability**: Tail feathers act as control surfaces for steering

      ## Flight Adaptations

      Different bird species have evolved unique flight adaptations based on their ecological needs. Seabirds have long, narrow wings for efficient gliding over ocean surfaces, while forest birds possess shorter, rounded wings for agile maneuvering through dense vegetation.

      ## Research Applications

      Understanding avian flight mechanics has led to numerous technological innovations in aerospace engineering, including improved aircraft wing designs and unmanned aerial vehicle development.
    `,
    tags: ["biology", "physics", "aerodynamics", "evolution", "biomimetics"],
    publishDate: "March 15, 2024",
    readTime: "8 min read"
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
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="mb-6 hover:bg-primary/10"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Posts
          </Button>
        </header>

        {/* Post Content */}
        <div className="p-8">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-card border border-border/50 shadow-soft animate-fade-in">
              <CardContent className="p-0">
                {/* Hero Image */}
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={scientistPost} 
                    alt="Research"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <h1 className="absolute bottom-6 left-6 text-3xl font-bold text-white animate-slide-up">
                    {postData.title}
                  </h1>
                </div>
                
                {/* Article Content */}
                <div className="p-8">
                  {/* Meta Information */}
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6 pb-6 border-b border-border/20">
                    <span>{postData.publishDate}</span>
                    <span>•</span>
                    <span>{postData.readTime}</span>
                  </div>

                  {/* Article Body */}
                  <div className="prose prose-lg max-w-none text-foreground animate-fade-in">
                    <div className="whitespace-pre-line leading-relaxed">
                      {postData.content}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="mt-8 pt-6 border-t border-border/20">
                    <h3 className="text-sm font-semibold text-foreground mb-3">Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {postData.tags.map((tag, index) => (
                        <span 
                          key={tag}
                          className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm border border-primary/20 animate-slide-up"
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;