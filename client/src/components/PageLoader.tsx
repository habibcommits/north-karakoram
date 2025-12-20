import { useEffect, useState } from "react";
import { useLocation } from "wouter";

export function PageLoader() {
  const [isLoading, setIsLoading] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    setIsLoading(true);
    
    const timer = setTimeout(() => {
      setIsLoading(false);
      window.scrollTo(0, 0);
    }, 300);

    return () => clearTimeout(timer);
  }, [location]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-white/80 dark:bg-black/80 flex items-center justify-center z-50">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        <p className="text-sm font-medium text-muted-foreground">Loading...</p>
      </div>
    </div>
  );
}
