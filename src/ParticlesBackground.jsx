import Particles from "react-tsparticles";

const ParticlesBackground = () => {
  return (
    <Particles
      options={{
        background: {
          color: {
            value: "#000", // Background color
          },
        },
        particles: {
          color: {
            value: "#ffffff", // Particle color
          },
          links: {
            color: "#ffffff", // Link color between particles
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          move: {
            directions: "none",
            enable: true,
            outMode: "out",
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 100, // Number of particles
          },
          opacity: {
            value: 0.5,
          },
          size: {
            value: 3,
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;
