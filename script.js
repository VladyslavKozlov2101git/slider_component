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
    slides.forEach((slide, index) => {
      const slideElement = document.createElement('div');
      slideElement.className = 'slide';
      slideElement.textContent = slide;
      slideElement.dataset.slideId = index; // Add data attribute for binding
      track.appendChild(slideElement);
    });

    // Add duplicate slides
    slides.forEach((slide, index) => {
      const slideElement = document.createElement('div');
      slideElement.className = 'slide';
      slideElement.textContent = slide;
      slideElement.dataset.slideId = index; // Add data attribute for binding
      track.appendChild(slideElement);
    });

    marquee.appendChild(track);
    wrapper.appendChild(marquee);
    section.appendChild(wrapper);
  }

  // Create the slide list
  const slideList = document.getElementById('slide-list-items');
  slides.forEach((slide, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = slide;
    listItem.dataset.slideId = index; // Match the data attribute with slides

    // Add hover events
    listItem.addEventListener('mouseenter', () => {
      const slideId = listItem.dataset.slideId;
      document.querySelectorAll(`.slide[data-slide-id="${slideId}"]`).forEach((slide) => {
        slide.classList.add('hovered');
      });
    });

    listItem.addEventListener('mouseleave', () => {
      const slideId = listItem.dataset.slideId;
      document.querySelectorAll(`.slide[data-slide-id="${slideId}"]`).forEach((slide) => {
        slide.classList.remove('hovered');
      });
    });

    slideList.appendChild(listItem);
  });

  // Add the section to the body (or you can specify a different container)
  document.querySelector('.container').insertBefore(section, document.querySelector('.slide-list'));
}

// Example usage:
document.addEventListener('DOMContentLoaded', () => {
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
