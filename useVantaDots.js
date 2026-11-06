// useVantaDots.js
import { useEffect, useRef } from "react";

export const useVantaDots = () => {
  const ref = useRef(null);

  useEffect(() => {
    let vantaEffect;
    let isInitializing = false;
    let isUnmounted = false;
    const mobileQuery = window.matchMedia("(max-width: 767px)");

    const loadVanta = async () => {
      if (mobileQuery.matches || vantaEffect || isInitializing) return;

      isInitializing = true;
      try {
        if (!window.THREE) {
          await new Promise((resolve) => {
            const script = document.createElement("script");
            script.src =
              "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";
            script.onload = resolve;
            document.body.appendChild(script);
          });
        }

        if (!window.VANTA) {
          await new Promise((resolve) => {
            const script = document.createElement("script");
            script.src =
              "https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.globe.min.js";
            script.onload = resolve;
            document.body.appendChild(script);
          });
        }

        if (!isUnmounted && !mobileQuery.matches && window.VANTA && ref.current) {
          vantaEffect = window.VANTA.GLOBE({
            el: ref.current,

            mouseControls: true,
            touchControls: true,
            gyroControls: true,

            minHeight: 200,
            minWidth: 200,

            scale: 0.7,
            scaleMobile: 0.45,

            color: 0xff7b00,
            backgroundColor: 0x090909,
            spacing: 25,
            waveSpeed: 1.2,
            zoom: 2.05,
            points: 12.0,
            maxDistance: 30,
            forceAnimate: true,
          });
        }
      } finally {
        isInitializing = false;
      }
    };

    const handleViewportChange = () => {
      if (mobileQuery.matches) {
        vantaEffect?.destroy();
        vantaEffect = undefined;
      } else {
        loadVanta();
      }
    };

    mobileQuery.addEventListener("change", handleViewportChange);
    loadVanta();

    return () => {
      isUnmounted = true;
      mobileQuery.removeEventListener("change", handleViewportChange);
      vantaEffect?.destroy();
    };
  }, []);

  return ref;
};