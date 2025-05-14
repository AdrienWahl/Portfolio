import { useEffect, useState } from "react";

const LoadTime = () => {
  const [loadTime, setLoadTime] = useState(null);

  useEffect(() => {
    const handleLoad = () => {
      const entries = performance.getEntriesByType("navigation");
      if (entries.length > 0) {
        const navEntry = entries[0];
        const time = Math.round(navEntry.loadEventEnd - navEntry.startTime);
        setLoadTime(time);
      }
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <p className="text-lg bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent  font-[Poppins]">
      {loadTime !== null
        ? `Website loaded in  ${loadTime} ms.`
        : "loading..."}
    </p>
  );
};

export default LoadTime;
