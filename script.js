function createVerticalSlider(slides, direction = 'top_bottom', columns = 3) {
  // Create the main container section
  const section = document.createElement('section');
  section.className = 'columns';
  section.id = 'my_own_library';

  // Calculate how many slides each column should have for unique viewport display
  const slidesPerColumn = Math.ceil(slides.length / columns);

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

    // Get the slides for this specific column
    const columnSlides = [];
    for (let j = 0; j < slidesPerColumn; j++) {
      const slideIndex = (i * slidesPerColumn + j) % slides.length;
      columnSlides.push(slides[slideIndex]);
    }

    // Add slides (original set + duplicate for seamless loop)
    columnSlides.forEach((slide, index) => {
      const slideElement = document.createElement('div');
      slideElement.className = 'slide';
      slideElement.textContent = slide;
      slideElement.dataset.slideId = (i * slidesPerColumn + index) % slides.length;
      track.appendChild(slideElement);
    });

    // Add duplicate slides
    columnSlides.forEach((slide, index) => {
      const slideElement = document.createElement('div');
      slideElement.className = 'slide';
      slideElement.textContent = slide;
      slideElement.dataset.slideId = (i * slidesPerColumn + index) % slides.length;
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

  document.querySelector('.container').insertBefore(section, document.querySelector('.slide-list'));
}

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
    'New Item 1',
    'Another Great Item',
    'Special Deal',
    'Product 4',
    'Ocean Deal',
    'New Item 3',
  ];
  createVerticalSlider(mySlides, 'alternate', 3);
});
