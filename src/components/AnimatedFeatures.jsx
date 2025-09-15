import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../scss/_extensions.scss";
import "../scss/_tabs.scss";
import "../scss/_features.scss";

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedFeatures() {
  const containerRef = useRef(null);

  const scene1Ref = useRef(null);
  const scene2Ref = useRef(null);
  const scene3Ref = useRef(null);
  const scene4Ref = useRef(null);

  const bgRef = useRef(null);
  const iconsRef = useRef([]);
  const tabsRef = useRef([]);
  const featuresRef = useRef([]);

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

      // Scene 2
      tl.fromTo(scene2Ref.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 });
      tl.to(bgRef.current, { background: "linear-gradient(120deg, #e0f7fa, #80deea)", duration: 1 }, "<");
      tl.fromTo(
        iconsRef.current,
        { y: 100, opacity: 0, scale: 0.5, rotate: -45 },
        { y: 0, opacity: 1, scale: 1, rotate: 0, duration: 1, stagger: 0.2, ease: "back.out(1.7)" },
        "<+0.2"
      );
      tl.to(scene2Ref.current, { opacity: 0, y: -50, duration: 1 });

      // Scene 3
      tl.fromTo(scene3Ref.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 });
      tl.to(bgRef.current, { background: "linear-gradient(120deg, #ede7f6, #d1c4e9)", duration: 1 }, "<");
      tl.to(
        tabsRef.current,
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "back.out(1.7)" },
        "<+0.3"
      );
      tl.to(tabsRef.current, { x: (i) => i * -20, duration: 1, ease: "power2.inOut" }, "+=0.5");
      tl.to(scene3Ref.current, { opacity: 0, y: -50, duration: 1 });

      // Scene 4
      tl.fromTo(scene4Ref.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 });
      tl.to(bgRef.current, { background: "linear-gradient(120deg, #e8f5e9, #c8e6c9)", duration: 1 }, "<");
      tl.fromTo(
        featuresRef.current,
        { opacity: 0, scale: 0.5, y: 50 },
        { opacity: 1, scale: 1, y: 0, duration: 1, stagger: 0.3, ease: "elastic.out(1, 0.5)" },
        "<+0.3"
      );
      // Pulse effect
      tl.to(featuresRef.current, { scale: 1.1, repeat: 1, yoyo: true, duration: 0.5 }, "+=0.5");
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="sticky-container">
      <div ref={bgRef} className="sticky-content scene-2-bg">
        {/* Scene 1 */}
        <div className="scene" ref={scene1Ref}>
          <h2>The browser built to be yours</h2>
          <p>Color picker mockup / UI elements go here</p>
        </div>

        {/* Scene 2 */}
        <div className="scene" ref={scene2Ref}>
          <h2>Extensions</h2>
          <p>These icons represent extensions</p>
          <div className="extensions-icons">
            <div className="icon" ref={(el) => (iconsRef.current[0] = el)}></div>
            <div className="icon circle" ref={(el) => (iconsRef.current[1] = el)}></div>
            <div className="icon triangle" ref={(el) => (iconsRef.current[2] = el)}></div>
            <div className="icon diamond" ref={(el) => (iconsRef.current[3] = el)}></div>
          </div>
        </div>

        {/* Scene 3 */}
        <div className="scene" ref={scene3Ref}>
          <h2>Take control of your tabs</h2>
          <p>Tab group mockup goes here</p>
          <div className="tabs-mockup">
            <div className="tab red" ref={(el) => (tabsRef.current[0] = el)}>Work</div>
            <div className="tab blue" ref={(el) => (tabsRef.current[1] = el)}>Social</div>
            <div className="tab green" ref={(el) => (tabsRef.current[2] = el)}>Projects</div>
            <div className="tab yellow" ref={(el) => (tabsRef.current[3] = el)}>Shopping</div>
          </div>
        </div>

        {/* Scene 4 */}
        <div className="scene" ref={scene4Ref}>
          <h2>Helpful features built-in</h2>
          <p>Password manager / Safety check</p>
          <div className="features-icons">
            <div className="icon lock" ref={(el) => (featuresRef.current[0] = el)}></div>
            <div className="icon shield" ref={(el) => (featuresRef.current[1] = el)}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
