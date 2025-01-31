import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadLinksPreset } from "tsparticles-preset-links";

const LinksParticles = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadLinksPreset(engine);
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-full z-0 bg-gradient-to-b from-[#000428] to-[#000000]">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          preset: "links",
          background: {
            color: "transparent", // Pastikan background transparan agar gradient terlihat
          },
          particles: {
            color: { value: "#0ea5e9" }, // Warna partikel biru
            lineLinked: {
              enable: true,
              distance: 130,
              color: "#0ea5e9", // Warna garis biru
              opacity: 0.5,
              width: 1.5,
            },
            move: {
              enable: true,
              speed: 1, // Gerakan partikel lebih lambat
              direction: "none",
              random: false,
              straight: false,
              outModes: {
                default: "out",
              },
              attract: {
                enable: true,
                rotateX: 600,
                rotateY: 1200,
              },
            },
            number: {
              value: 70, // Jumlah partikel
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default LinksParticles;
