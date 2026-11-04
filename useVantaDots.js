// useVantaDots.js
import { useEffect, useRef } from "react";

export const useVantaDots = () => {
  const ref = useRef(null);

  useEffect(() => {
    let vantaEffect;

    const loadVanta = async () => {
      // Load THREE
      if (!window.THREE) {
        await new Promise((resolve) => {
          const script = document.createElement("script");
          script.src =
            "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";
          script.onload = resolve;
          document.body.appendChild(script);
        });
      }

      // Load VANTA
      if (!window.VANTA) {
        await new Promise((resolve) => {
          const script = document.createElement("script");
          script.src =
            "https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.globe.min.js";
          script.onload = resolve;
          document.body.appendChild(script);
        });
      }

      if (window.VANTA && ref.current) {
        vantaEffect = window.VANTA.GLOBE({
          el: ref.current,

          mouseControls: true,
          touchControls: true,
          gyroControls: true,

          minHeight: 200,
          minWidth: 200,

          scale: 0.7,
          scaleMobile: 0.7,

        color: 0xff7b00,
        backgroundColor: 0x090909,
        //   size: 4.5,
            spacing: 25,
            // waveHeight: 50,
        waveSpeed: 1.2,
        zoom: 2.05,

    
        //   speed: 2.5,

          // stronger perspective movement
          points: 12.0,

          // more depth
          maxDistance: 30,

          // makes animation more dynamic
          forceAnimate: true,
        });
      }
    };

    loadVanta();

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return ref;
};