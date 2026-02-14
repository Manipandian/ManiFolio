import VanillaTilt from 'vanilla-tilt';

const initTilt = () => {
  // Projects images
  const elements = document.querySelectorAll('.project-wrapper__image a div');
  VanillaTilt.init(elements, {
    max: 3,
    speed: 400,
    glare: false
  });
};

export default initTilt;
