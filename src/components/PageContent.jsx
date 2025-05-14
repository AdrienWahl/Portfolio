// components/PageContent.js
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import About from './about';
import Services from './Services';
import Contact from './Contact';

const PageContent = ({ currentPage }) => {
  const contentRef = useRef();
  const [page, setPage] = useState(currentPage);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    const currentContent = contentRef.current;
    if (!currentContent) return;

    const tl = gsap.timeline();

      if (!hasMounted) {
    setPage(currentPage);
    gsap.set(currentContent, { opacity: 1, x: "0%" });
    setHasMounted(true);
    return;
  }

    // 1️⃣ Slide out + fade out
    tl.to(currentContent, { x: "-100%", opacity: 0, duration: 0.7, ease: "power2.inOut" });

    // 2️⃣ On change le contenu APRES l'animation de sortie
    tl.add(() => {
      setPage(currentPage);
    });

    // 3️⃣ On repositionne + slide in + fade in
    tl.set(currentContent, { x: "100%" });
    tl.to(currentContent, { x: "0%", opacity: 1, duration: 1, ease: "power2.inOut" });

  }, [currentPage]);

  let contentToRender;
  if (page === 'about') {
    contentToRender = <About />;
  } else if (page === 'services') {
    contentToRender = <Services />;
  } else if (page === 'contact') {
    contentToRender = <Contact />;
  }

  return (
    <div className="content px-20 py-10 text-white overflow-hidden" ref={contentRef}>
      {contentToRender}
    </div>
  );
};

export default PageContent;
