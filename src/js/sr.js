import assignProps from './assignProps';
export default function() {
  const defaultProps = {
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    distance: '30px',
    duration: 800,
    desktop: true,
    mobile: true
  };
  
  /* Section Title */
  ScrollReveal().reveal('.section-title', 
    assignProps(
      {
        delay: 100,
        distance: '0px', 
        origin: 'bottom'
      }, defaultProps)
  );

  /* Hero Section */
  ScrollReveal().reveal('.hero-title', 
    assignProps(
      { 
        delay: 200, 
        origin: window.innerWidth > 768 ? 'left' : 'bottom'
      }, defaultProps)
  );

  ScrollReveal().reveal('.hero-subtitle', 
    assignProps(
      { 
        delay: 350, 
        origin: window.innerWidth > 768 ? 'left' : 'bottom'
      }, defaultProps)
  );
  
  ScrollReveal().reveal('.hero-cta', 
    assignProps(
      {
        delay: 500, 
        origin: window.innerWidth > 768 ? 'left' : 'bottom'
      }, defaultProps)
  );

  /* About Section */
  ScrollReveal().reveal('.about-wrapper__info', 
    assignProps(
      {
        delay: 200,
        origin: 'bottom'
      }, defaultProps)
  );

  /* Skills Section */
  ScrollReveal().reveal('.skill-category', 
    assignProps(
      {
        delay: 150,
        origin: 'bottom',
        interval: 80
      }, defaultProps)
  );

  /* Experience Section */
  ScrollReveal().reveal('.experience-item', 
    assignProps(
      {
        delay: 200,
        origin: 'bottom',
        interval: 150
      }, defaultProps)
  );

  /* Projects Section */
  ScrollReveal().reveal('.project-wrapper__text', 
    assignProps(
      {
        delay: 200,
        origin: window.innerWidth > 768 ? 'left' : 'bottom'
      }, defaultProps)
  );

  ScrollReveal().reveal('.project-wrapper__image', 
    assignProps(
      {
        delay: 350,
        origin: window.innerWidth > 768 ? 'right' : 'bottom'
      }, defaultProps)
  );

  /* Awards Section */
  ScrollReveal().reveal('.award-item', 
    assignProps(
      {
        delay: 150,
        origin: 'bottom',
        interval: 100
      }, defaultProps)
  );

  /* Contact Section */
  ScrollReveal().reveal('.contact-wrapper', 
    assignProps(
      {
        delay: 200,
        origin: 'bottom'
      }, defaultProps)
  );
}
