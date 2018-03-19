var config = {
  "particles": {
    "number": {
      "value": 5,
      "density": {
        "enable": true,
        "value_area": 200
      }
    },
    "color": {
      "value": ["#4745d1", "#37a1fc", "#b083c8", "#72c87c", "#fd9a59"]
    },
    "shape": {
      "type": ["circle", "triangle"],
      "stroke": {
        "width": 0
      }
    },
    "opacity": {
      "value": 0.5,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 0.5,
        "opacity_min": 0.5,
        "sync": false
      }
    },
    "size": {
      "value": 20,
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
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
      },
      "onclick": {
        "enable": false,
      },
      "resize": true
    },
    "modes": {
      "push": {
        "particles_nb": 3
      }
    }
  },
};

particlesJS('particles', config);
