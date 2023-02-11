import { useState, useEffect } from "react";

export function useMediaQuery(query: string) {
  const isOnClient = typeof window !== "undefined";

  if (isOnClient) {
    const [matches, setMatches] = useState(window.matchMedia(query).matches);

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
  } else {
    return false;
  }
}
