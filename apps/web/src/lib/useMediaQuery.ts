import { useState, useEffect } from "react";

export function useMediaQuery(query: string) {
  const isOnClient = typeof window !== "undefined";
  const initialVal = isOnClient ? window.matchMedia(query).matches : false;

  const [matches, setMatches] = useState(initialVal);

  useEffect(() => {
    const media = window.matchMedia(query);

    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => {
      setMatches(media.matches);
    };

    media.addEventListener("change", listener);

    return () => media.removeEventListener("change", listener);
  }, [matches, query]);

  return matches;
}
