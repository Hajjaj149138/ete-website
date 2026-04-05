"use client";
import { createContext, useContext, useEffect, useState, ReactNode } from "react";
type Theme = "light"|"dark";
interface Ctx { theme:Theme; isDark:boolean; toggleTheme:()=>void; }
const Ctx = createContext<Ctx>({ theme:"light", isDark:false, toggleTheme:()=>{} });
export function ThemeProvider({ children }: { children:ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("ete-theme") as Theme|null;
    const init: Theme = saved === "dark" ? "dark" : "light";
    setTheme(init);
    document.documentElement.classList.toggle("dark", init === "dark");
  }, []);
  const toggleTheme = () => {
    const next: Theme = theme === "light" ? "dark" : "light";
    setTheme(next);
    localStorage.setItem("ete-theme", next);
    document.documentElement.classList.toggle("dark", next === "dark");
  };
  if (!mounted) return <>{children}</>;
  return <Ctx.Provider value={{ theme, isDark:theme==="dark", toggleTheme }}>{children}</Ctx.Provider>;
}
export const useTheme = () => useContext(Ctx);
