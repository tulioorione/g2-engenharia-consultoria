import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="text-center">
        <div className="font-display text-7xl text-primary md:text-8xl">404</div>
        <p className="mt-6 text-lg text-muted-foreground">
          Esta página não existe ou foi movida.
        </p>
        <Link
          to="/"
          className="mt-10 inline-flex items-center gap-3 border border-primary px-8 py-4 text-sm font-medium uppercase tracking-[0.15em] text-primary transition-all duration-500 hover:bg-primary hover:text-primary-foreground"
        >
          Voltar ao início
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
