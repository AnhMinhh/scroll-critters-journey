import { Button } from "@/components/ui/button";

interface NavigationProps {
  onNavigate: (section: string) => void;
}

const Navigation = ({ onNavigate }: NavigationProps) => {
  return (
    <nav className="fixed top-6 right-6 z-50 bg-card/80 backdrop-blur-md rounded-full px-6 py-3 shadow-soft border border-border/50">
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          onClick={() => onNavigate('topics')}
          className="text-foreground hover:text-primary hover:bg-primary/10 transition-smooth"
        >
          Topics
        </Button>
        <Button
          variant="ghost"
          onClick={() => onNavigate('about')}
          className="text-foreground hover:text-primary hover:bg-primary/10 transition-smooth"
        >
          About
        </Button>
        <Button
          variant="ghost"
          onClick={() => onNavigate('feedback')}
          className="text-foreground hover:text-primary hover:bg-primary/10 transition-smooth"
        >
          Feedback
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;