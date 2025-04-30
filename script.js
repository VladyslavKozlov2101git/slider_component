// script.js
function createVerticalSlider(slides, direction = 'top_bottom', columns = 3) {
  // Create the main container section
  const section = document.createElement('section');
  section.className = 'columns';
  section.id = 'my_own_library';

  // Create columns with sliders
  for (let i = 0; i < columns; i++) {
    // Alternate direction for each column if not specified
    const columnDirection =
      direction === 'alternate' ? (i % 2 === 0 ? 'top_bottom' : 'bottom_top') : direction;

    const wrapper = document.createElement('div');
    wrapper.className = 'vertical-marquee-wrapper';
    wrapper.setAttribute('direction', columnDirection);

    const marquee = document.createElement('div');
    marquee.className = 'vertical-marquee';

    const track = document.createElement('div');
    track.className = 'vertical-track';

    // Add slides (original set + duplicate for seamless loop)
    slides.forEach((slide) => {
      const slideElement = document.createElement('div');
      slideElement.className = 'slide';
      slideElement.textContent = slide;
      track.appendChild(slideElement);
    });

    // Add duplicate slides
    slides.forEach((slide) => {
      const slideElement = document.createElement('div');
      slideElement.className = 'slide';
      slideElement.textContent = slide;
      track.appendChild(slideElement);
    });

    marquee.appendChild(track);
    wrapper.appendChild(marquee);
    section.appendChild(wrapper);
  }

  // Add the section to the body (or you can specify a different container)
  document.body.appendChild(section);
}

// Example usage:
document.addEventListener('DOMContentLoaded', () => {
  // Create slides array

  const mySlides = [
    'Product 1',
    'Product 2',
    'Service A',
    'Offer 1',
    'Service B',
    'Offer 2',
    'Offer 3',
    'Service C',
    'Offer C',
  ];
  createVerticalSlider(mySlides, 'alternate', 3);
});
