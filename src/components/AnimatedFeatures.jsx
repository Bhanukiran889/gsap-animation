import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../scss/extensions.scss";

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedFeatures() {
  const containerRef = useRef(null);

  const scene1Ref = useRef(null);
  const scene2Ref = useRef(null);
  const scene3Ref = useRef(null);
  const scene4Ref = useRef(null);

  const bgRef = useRef(null);
  const iconsRef = useRef([]);

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

      // Scene 1
      tl.fromTo(scene1Ref.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 })
        .to(scene1Ref.current, { opacity: 0, y: -50, duration: 1 });

      // Scene 2 - Extensions
      tl.fromTo(scene2Ref.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 });

      // Background gradient change
      tl.to(bgRef.current, {
        background: "linear-gradient(120deg, #e0f7fa, #80deea)",
        duration: 1,
      }, "<");

      // Animate icons stagger
      tl.fromTo(
        iconsRef.current,
        { y: 100, opacity: 0, scale: 0.5, rotate: -45 },
        { y: 0, opacity: 1, scale: 1, rotate: 0, duration: 1, stagger: 0.2, ease: "back.out(1.7)" },
        "<+0.2"
      );

      // Scene 2 exit
      tl.to(scene2Ref.current, { opacity: 0, y: -50, duration: 1 });

      // Scene 3
      tl.fromTo(scene3Ref.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 })
        .to(scene3Ref.current, { opacity: 0, y: -50, duration: 1 });

      // Scene 4
      tl.fromTo(scene4Ref.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="sticky-container">
      <div ref={bgRef} className="sticky-content scene-2-bg">
        <div className="scene" ref={scene1Ref}>
          <h2>The browser built to be yours</h2>
          <p>Color picker mockup / UI elements go here</p>
        </div>

        <div className="scene" ref={scene2Ref}>
          <h2>Extensions</h2>
          <p>These icons represent extensions</p>
          <div className="extensions-icons">
            <div
              className="icon"
              ref={(el) => (iconsRef.current[0] = el)}
            ></div>
            <div
              className="icon circle"
              ref={(el) => (iconsRef.current[1] = el)}
            ></div>
            <div
              className="icon triangle"
              ref={(el) => (iconsRef.current[2] = el)}
            ></div>
            <div
              className="icon diamond"
              ref={(el) => (iconsRef.current[3] = el)}
            ></div>
          </div>
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
