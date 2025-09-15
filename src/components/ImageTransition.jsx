import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../scss/imageTransition.scss";

gsap.registerPlugin(ScrollTrigger);

export default function ImageTransition() {
  const containerRef = useRef(null);
  const lightRef = useRef(null);
  const darkRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true,
        },
      });

      // Dark image reveals while light image hides
      tl.fromTo(
        darkRef.current,
        { clipPath: "inset(100% 0 0 0)" }, // fully hidden from bottom
        { clipPath: "inset(0% 0 0 0)", duration: 1, ease: "none" }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="image-transition">
      <img ref={lightRef} src="/images/light.png" alt="Chrome Light" className="light" />
      <img ref={darkRef} src="/images/dark.png" alt="Chrome Dark" className="dark" />
    </div>
  );
}
