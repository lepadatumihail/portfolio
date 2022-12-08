import React from "react";
import Particles from 'react-tsparticles';


export default function ParticleBackground() {
    return(
        <Particles id="tsparticles"
        style={{position:'fixed',zIndex:2}}
        options={{
          
          fpsLimit: 60,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 10,
                duration: 2,
                opacity: 0.8,
                size: 20,
              },
              push: {
                quantity: 3,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#818181",
            },
            links: {
              color: "#dddddd",
              distance: 100,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: true,
              speed: 0.5,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 900,
              },
              value: 80,
            },
            opacity: {
              value: 0.8,
            },
            shape: {
              type: "triangle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
    );
}