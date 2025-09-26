import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

interface TopicCardProps {
  title: string;
  description: string;
  id: string;
}

const TopicCard = ({ title, description, id }: TopicCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/topic/${id}`);
  };

  return (
    <Card 
      className="cursor-pointer group hover:shadow-nature transition-smooth bg-gradient-card border border-border/50 animate-fade-in"
      onClick={handleClick}
    >
      <CardContent className="p-6 text-center">
        <div className="w-full h-32 bg-gradient-sky rounded-lg mb-4 flex items-center justify-center group-hover:scale-105 transition-smooth">
          <div className="w-16 h-8 bg-nature-green rounded-full animate-float"></div>
        </div>
        <h3 className="font-semibold text-lg text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </CardContent>
    </Card>
  );
};

export default TopicCard;