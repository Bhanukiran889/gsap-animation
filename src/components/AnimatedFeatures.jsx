import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedFeatures() {
  const containerRef = useRef(null);

  // Refs for each scene headline + content
  const scene1Ref = useRef(null);
  const scene2Ref = useRef(null);
  const scene3Ref = useRef(null);
  const scene4Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          pin: true,
        },
      });

      // Scene 1: "The browser built to be yours"
      tl.fromTo(
        scene1Ref.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1 }
      ).to(scene1Ref.current, { opacity: 0, y: -50, duration: 1 });

      // Scene 2: "Extensions"
      tl.fromTo(
        scene2Ref.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1 }
      ).to(scene2Ref.current, { opacity: 0, y: -50, duration: 1 });

      // Scene 3: "Take control of your tabs"
      tl.fromTo(
        scene3Ref.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1 }
      ).to(scene3Ref.current, { opacity: 0, y: -50, duration: 1 });

      // Scene 4: "Helpful features built-in"
      tl.fromTo(
        scene4Ref.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1 }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="sticky-container">
      <div className="sticky-content">
        <div className="scene" ref={scene1Ref}>
          <h2>The browser built to be yours</h2>
          <p>Color picker mockup / UI elements go here</p>
        </div>

        <div className="scene" ref={scene2Ref}>
          <h2>Extensions</h2>
          <p>Logos (Translate, Arts & Culture, etc.) go here</p>
        </div>

        <div className="scene" ref={scene3Ref}>
          <h2>Take control of your tabs</h2>
          <p>Tab group mockup goes here</p>
        </div>

        <div className="scene" ref={scene4Ref}>
          <h2>Helpful features built-in</h2>
          <p>Password manager / Safety check UI elements go here</p>
        </div>
      </div>
    </div>
  );
}
