import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedFeatures() {
  const containerRef = useRef(null);
  const headlineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          pin: true,
        },
      })
      .fromTo(headlineRef.current, { opacity: 0, y: 100 }, { opacity: 1, y: 0 });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="sticky-container">
      <div className="sticky-content">
        <h2 ref={headlineRef}>The browser built to be yours</h2>
      </div>
    </div>
  );
}
