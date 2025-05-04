// Функція для генерації списку з 12 елементів
function generateItems() {
  const items = [];
  for (let i = 1; i <= 12; i++) {
    items.push(`Елемент ${i}`);
  }
  return items;
}

// Функція для створення слайду
function createSlide(text, id) {
  const slide = document.createElement('div');
  slide.className = 'slide';
  slide.id = id;
  slide.textContent = text;
  return slide;
}

// Функція для створення колонки слайдера з marquee ефектом
function createMarqueeColumn(items, direction, startIndex) {
  const column = document.createElement('div');
  column.className = 'marquee-column';

  // Подвоюємо масив для безперервного ефекту
  const doubledItems = [...items, ...items];

  // Створюємо контейнер для слайдів
  const slidesContainer = document.createElement('div');
  slidesContainer.className = 'marquee-container';
  slidesContainer.style.flexDirection = direction === 'down' ? 'column' : 'column-reverse';

  // Додаємо слайди
  doubledItems.forEach((item, index) => {
    const slide = createSlide(item, `slide-${direction}-${index}`);
    slidesContainer.appendChild(slide);
  });

  column.appendChild(slidesContainer);

  // Налаштування анімації
  const duration = items.length * 5; // Час для одного циклу в секундах
  slidesContainer.style.animation = `marquee-${direction} ${duration}s linear infinite`;

  return column;
}

// Основна функція ініціалізації
function initSlider() {
  const items = generateItems();
  const sliderContainer = document.getElementById('sliderContainer');
  const itemsList = document.getElementById('itemsList');

  // Відображення списку елементів
  items.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    itemsList.appendChild(li);
  });

  // Створення 4 колонок з різними напрямками
  for (let i = 0; i < 4; i++) {
    // Тасуємо елементи для кожної колонки
    const shuffledItems = [...items].sort(() => Math.random() - 0.5);

    // Визначаємо напрямок (чергування)
    const direction = i % 2 === 0 ? 'down' : 'up';

    // Створюємо колонку
    const column = createMarqueeColumn(shuffledItems, direction, i * 3);
    sliderContainer.appendChild(column);
  }
}

// Ініціалізація слайдера при завантаженні сторінки
window.onload = initSlider;
