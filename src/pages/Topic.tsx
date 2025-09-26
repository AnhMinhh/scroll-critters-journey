import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import natureBackground from "@/assets/nature-background.jpg";

const Topic = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const topicData = {
    vertebrates: {
      title: "ĐỘNG VẬT CÓ XƯƠNG SỐNG",
      englishTitle: "Vertebrate Animals",
      items: [
        { id: "birds", name: "CHIM", englishName: "Birds" },
        { id: "mouse", name: "CHUỘT", englishName: "Mouse" },
        { id: "dog-cat", name: "CHÓ MÈO", englishName: "Dog/Cat" },
      ]
    }
  };

  const currentTopic = topicData[id as keyof typeof topicData] || topicData.vertebrates;

  const handleDetailsClick = (itemId: string) => {
    navigate(`/posts/${itemId}`);
  };

  const interestTags = [
    "#animal",
    "#nature", 
    "#biology",
    "#science",
    "#wildlife"
  ];

  return (
    <div className="min-h-screen relative">
      {/* Fixed nature background */}
      <div 
        className="fixed left-0 top-0 w-1/3 h-full bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${natureBackground})` }}
      />
      
      {/* Main content */}
      <div className="relative z-10 ml-[33.333%] min-h-screen bg-background">
        {/* Header */}
        <header className="p-8 border-b border-border/20">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="mb-6 hover:bg-primary/10"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-2 animate-slide-up">
              {currentTopic.title}
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-in">
              {currentTopic.englishTitle}
            </p>
          </div>
        </header>

        <div className="p-8">
          <div className="max-w-6xl mx-auto flex gap-8">
            {/* Left Column - Topics */}
            <div className="flex-1">
              <div className="space-y-4">
                {currentTopic.items.map((item, index) => (
                  <Card 
                    key={item.id}
                    className="hover:shadow-nature transition-smooth bg-gradient-card border border-border/50 animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-6 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-full bg-nature-green flex items-center justify-center">
                          <div className="w-8 h-8 rounded-full bg-nature-green-foreground/20"></div>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-foreground">
                            {item.name}
                          </h3>
                          <p className="text-muted-foreground">
                            {item.englishName}
                          </p>
                        </div>
                      </div>
                      <Button
                        onClick={() => handleDetailsClick(item.id)}
                        className="bg-primary hover:bg-primary/90 text-primary-foreground px-6"
                      >
                        CHI TIẾT
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Right Column - Interest Tags */}
            <div className="w-80">
              <Card className="bg-gradient-card border border-border/50 shadow-soft animate-fade-in">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    BẠN CÓ THỂ QUAN TÂM
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    You may also be interested in
                  </p>
                  <div className="space-y-3">
                    {interestTags.map((tag, index) => (
                      <div 
                        key={tag}
                        className="bg-muted/50 rounded-lg p-3 text-center text-muted-foreground border border-border/30 hover:bg-primary/10 hover:text-primary transition-smooth cursor-pointer animate-slide-up"
                        style={{ animationDelay: `${(index + 3) * 0.1}s` }}
                      >
                        {tag}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topic;