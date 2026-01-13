import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Главная", icon: "Home" },
    { path: "/news", label: "Новости", icon: "Newspaper" },
    { path: "/roster", label: "Состав", icon: "Users" },
    { path: "/matches", label: "Матчи", icon: "Swords" },
    { path: "/achievements", label: "Достижения", icon: "Trophy" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src="https://cdn.poehali.dev/files/Без названия10_20260113212648.png" 
              alt="Willow Team" 
              className="h-12 w-auto object-contain group-hover:scale-110 transition-transform duration-300"
            />
            <div>
              <div className="font-heading text-2xl font-black text-white leading-none">
                WILLOW
              </div>
              <div className="font-heading text-sm font-bold text-primary leading-none">
                TEAM
              </div>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <Button
                  variant={isActive(item.path) ? "default" : "ghost"}
                  className={
                    isActive(item.path)
                      ? "bg-primary hover:bg-primary/90 text-white font-heading font-bold"
                      : "text-muted-foreground hover:text-white font-heading font-bold hover:bg-primary/10"
                  }
                >
                  <Icon name={item.icon as any} className="mr-2" size={18} />
                  {item.label}
                </Button>
              </Link>
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Icon name={isOpen ? "X" : "Menu"} size={24} />
          </Button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link key={item.path} to={item.path} onClick={() => setIsOpen(false)}>
                  <Button
                    variant={isActive(item.path) ? "default" : "ghost"}
                    className={`w-full justify-start ${
                      isActive(item.path)
                        ? "bg-primary hover:bg-primary/90 text-white font-heading font-bold"
                        : "text-muted-foreground hover:text-white font-heading font-bold hover:bg-primary/10"
                    }`}
                  >
                    <Icon name={item.icon as any} className="mr-2" size={18} />
                    {item.label}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;