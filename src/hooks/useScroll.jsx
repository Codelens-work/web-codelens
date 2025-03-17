import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useScrollIntoView = () => {
  const location = useLocation()

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const targetSection = document.querySelector(hash);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return
}


