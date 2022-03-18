/* eslint-disable */
export default {
  "particles": {
    "number": {
      "value": 10,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": ["#37a1fc", "#b083c8", "#72c87c", "#fd9a59"]
    },
    "shape": {
      "type": ["circle", "triangle"],
      "stroke": {
        "width": 0
      }
    },
    "opacity": {
      "value": 0.9,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 0.2,
        "opacity_min": 0.6,
        "sync": false
      }
    },
    "size": {
      "value": 15,
      "random": true
    },
    "line_linked": {
      "enable": false
    },
    "move": {
      "enable": true,
      "speed": 1,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "in",
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "repulse"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "push": {
        "particles_nb": 3
      }
    }
  },
  "retina_detect": true
}
