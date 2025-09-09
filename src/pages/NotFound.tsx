import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-background pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto text-center">
          <div className="mb-8">
            <h1 className="font-display text-9xl font-bold text-primary mb-4">404</h1>
            <h2 className="font-display text-2xl font-semibold text-foreground mb-2">Page Not Found</h2>
            <p className="text-muted-foreground">
              Sorry, the page you're looking for doesn't exist or has been moved.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="elevation-2 hover:elevation-3 transition-all">
              <Link to="/">
                <Home className="mr-2 h-4 w-4" />
                Go Home
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={() => window.history.back()}
              className="elevation-1 hover:elevation-2 transition-all"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go Back
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
