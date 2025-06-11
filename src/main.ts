import './style.css'

interface TShirtSize {
  id: string;
  label: string;
}

interface ProductImage {
  id: string;
  url: string;
  alt: string;
}

const tshirtSizes: TShirtSize[] = [
  { id: 'xs', label: 'XS' },
  { id: 's', label: 'S' },
  { id: 'm', label: 'M' },
  { id: 'l', label: 'L' },
  { id: 'xl', label: 'XL' }
];

const imageUrls: ProductImage[] = [
  {
    id: '1',
    url: 'https://media.i.allsaints.com/image/list/fn_select:jq:first%28.%5B%5D%7Cif%20has%28%22metadata%22%29%20then%20select%28any%28.metadata%5B%5D%3B%20.external_id%20%3D%3D%20%22sfcc-gallery-position%22%20and%20.value%20%3D%3D%205%29%29%20else%20empty%20end%29/f_auto,q_auto,dpr_auto,w_837,h_1046,c_fit/M013JB-4068.json?_i=AG',
    alt: 'T-shirt view 1'
  },
  {
    id: '2',
    url: 'https://media.i.allsaints.com/image/list/fn_select:jq:first%28.%5B%5D%7Cif%20has%28%22metadata%22%29%20then%20select%28any%28.metadata%5B%5D%3B%20.external_id%20%3D%3D%20%22sfcc-gallery-position%22%20and%20.value%20%3D%3D%204%29%29%20else%20empty%20end%29/f_auto,q_auto,dpr_auto,w_837,h_1046,c_fit/M013JB-4068.json?_i=AG, https://media.i.allsaints.com/image/list/fn_select:jq:first%28.%5B%5D%7Cif%20has%28%22metadata%22%29%20then%20select%28any%28.metadata%5B%5D%3B%20.external_id%20%3D%3D%20%22sfcc-gallery-position%22%20and%20.value%20%3D%3D%204%29%29%20else%20empty%20end%29/f_auto,q_auto,dpr_auto,w_1674,h_2092,c_fit/M013JB-4068.json?_i=AG 2x',
    alt: 'T-shirt view 2'
  },
  {
    id: '3',
    url: 'https://media.i.allsaints.com/image/list/fn_select:jq:first%28.%5B%5D%7Cif%20has%28%22metadata%22%29%20then%20select%28any%28.metadata%5B%5D%3B%20.external_id%20%3D%3D%20%22sfcc-gallery-position%22%20and%20.value%20%3D%3D%203%29%29%20else%20empty%20end%29/f_auto,q_auto,dpr_auto,w_837,h_1046,c_fit/M013JB-4068.json?_i=AG, https://media.i.allsaints.com/image/list/fn_select:jq:first%28.%5B%5D%7Cif%20has%28%22metadata%22%29%20then%20select%28any%28.metadata%5B%5D%3B%20.external_id%20%3D%3D%20%22sfcc-gallery-position%22%20and%20.value%20%3D%3D%203%29%29%20else%20empty%20end%29/f_auto,q_auto,dpr_auto,w_1674,h_2092,c_fit/M013JB-4068.json?_i=AG 2x',
    alt: 'T-shirt view 3'
  },
  {
    id: '4',
    url: 'https://media.i.allsaints.com/image/list/fn_select:jq:first%28.%5B%5D%7Cif%20has%28%22metadata%22%29%20then%20select%28any%28.metadata%5B%5D%3B%20.external_id%20%3D%3D%20%22sfcc-gallery-position%22%20and%20.value%20%3D%3D%202%29%29%20else%20empty%20end%29/f_auto,q_auto,dpr_auto,w_837,h_1046,c_fit/M013JB-4068.json?_i=AG, https://media.i.allsaints.com/image/list/fn_select:jq:first%28.%5B%5D%7Cif%20has%28%22metadata%22%29%20then%20select%28any%28.metadata%5B%5D%3B%20.external_id%20%3D%3D%20%22sfcc-gallery-position%22%20and%20.value%20%3D%3D%202%29%29%20else%20empty%20end%29/f_auto,q_auto,dpr_auto,w_1674,h_2092,c_fit/M013JB-4068.json?_i=AG 2x',
    alt: 'T-shirt view 4'
  },
  {
    id: '5',
    url: 'https://media.i.allsaints.com/image/list/fn_select:jq:first%28.%5B%5D%7Cif%20has%28%22metadata%22%29%20then%20select%28any%28.metadata%5B%5D%3B%20.external_id%20%3D%3D%20%22sfcc-gallery-position%22%20and%20.value%20%3D%3D%201%29%29%20else%20empty%20end%29/f_auto,q_auto,dpr_auto,w_837,h_1046,c_fit/M013JB-4068.json?_i=AG, https://media.i.allsaints.com/image/list/fn_select:jq:first%28.%5B%5D%7Cif%20has%28%22metadata%22%29%20then%20select%28any%28.metadata%5B%5D%3B%20.external_id%20%3D%3D%20%22sfcc-gallery-position%22%20and%20.value%20%3D%3D%201%29%29%20else%20empty%20end%29/f_auto,q_auto,dpr_auto,w_1674,h_2092,c_fit/M013JB-4068.json?_i=AG 2x',
    alt: 'T-shirt view 5'
  }
];

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="product-container">
    <div class="product-gallery">
      <div class="gallery-column">
        ${imageUrls.map(image => `
          <img src="${image.url}" alt="${image.alt}" class="gallery-image" />
        `).join('')}
      </div>
      <div class="carousel-container">
        <div class="carousel-track">
          ${imageUrls.map(image => `
            <div class="carousel-slide">
              <img src="${image.url}" alt="${image.alt}" class="carousel-image" />
            </div>
          `).join('')}
        </div>
        <div class="carousel-dots">
          ${imageUrls.map((_, index) => `
            <button class="carousel-dot ${index === 0 ? 'active' : ''}" data-index="${index}"></button>
          `).join('')}
        </div>
      </div>
    </div>
    <div class="product-details">
      <h1>Nero Mock Neck Short Sleeve T-Shirt
</h1>
      <p class="price">$29.99</p>
      <div class="size-selector">
        <h3>Select Size</h3>
        <div class="size-options">
          ${tshirtSizes.map(size => `
            <label class="size-option">
              <input type="radio" name="size" value="${size.id}" />
              <span>${size.label}</span>
            </label>
          `).join('')}
        </div>
      </div>
      <button class="add-to-cart">Add to Cart</button>
    </div>
  </div>
`

// Carousel functionality
class Carousel {
  private track: HTMLElement;
  private slides: HTMLElement[];
  private dots: HTMLElement[];
  private currentIndex: number = 0;
  private startX: number = 0;
  private currentX: number = 0;
  private isDragging: boolean = false;

  constructor() {
    this.track = document.querySelector('.carousel-track')!;
    this.slides = Array.from(document.querySelectorAll('.carousel-slide'));
    this.dots = Array.from(document.querySelectorAll('.carousel-dot'));
    this.setupEventListeners();
    this.updateCarousel();
  }

  private setupEventListeners() {
    // Touch events
    this.track.addEventListener('touchstart', this.handleTouchStart.bind(this));
    this.track.addEventListener('touchmove', this.handleTouchMove.bind(this));
    this.track.addEventListener('touchend', this.handleTouchEnd.bind(this));

    // Mouse events
    this.track.addEventListener('mousedown', this.handleMouseDown.bind(this));
    this.track.addEventListener('mousemove', this.handleMouseMove.bind(this));
    this.track.addEventListener('mouseup', this.handleMouseUp.bind(this));
    this.track.addEventListener('mouseleave', this.handleMouseUp.bind(this));

    // Dot navigation
    this.dots.forEach((dot, index) => {
      dot.addEventListener('click', () => this.goToSlide(index));
    });
  }

  private handleTouchStart(e: TouchEvent) {
    this.startX = e.touches[0].clientX;
    this.isDragging = true;
  }

  private handleTouchMove(e: TouchEvent) {
    if (!this.isDragging) return;
    this.currentX = e.touches[0].clientX;
    const diff = this.currentX - this.startX;
    this.track.style.transform = `translateX(calc(-${this.currentIndex * 100}% + ${diff}px))`;
  }

  private handleTouchEnd() {
    if (!this.isDragging) return;
    this.isDragging = false;
    const diff = this.currentX - this.startX;
    
    if (Math.abs(diff) > 50) {
      if (diff > 0 && this.currentIndex > 0) {
        this.goToSlide(this.currentIndex - 1);
      } else if (diff < 0 && this.currentIndex < this.slides.length - 1) {
        this.goToSlide(this.currentIndex + 1);
      } else {
        this.updateCarousel();
      }
    } else {
      this.updateCarousel();
    }
  }

  private handleMouseDown(e: MouseEvent) {
    this.startX = e.clientX;
    this.isDragging = true;
  }

  private handleMouseMove(e: MouseEvent) {
    if (!this.isDragging) return;
    this.currentX = e.clientX;
    const diff = this.currentX - this.startX;
    this.track.style.transform = `translateX(calc(-${this.currentIndex * 100}% + ${diff}px))`;
  }

  private handleMouseUp() {
    if (!this.isDragging) return;
    this.isDragging = false;
    const diff = this.currentX - this.startX;
    
    if (Math.abs(diff) > 50) {
      if (diff > 0 && this.currentIndex > 0) {
        this.goToSlide(this.currentIndex - 1);
      } else if (diff < 0 && this.currentIndex < this.slides.length - 1) {
        this.goToSlide(this.currentIndex + 1);
      } else {
        this.updateCarousel();
      }
    } else {
      this.updateCarousel();
    }
  }

  private goToSlide(index: number) {
    this.currentIndex = index;
    this.updateCarousel();
  }

  private updateCarousel() {
    this.track.style.transform = `translateX(-${this.currentIndex * 100}%)`;
    this.dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === this.currentIndex);
    });
  }
}

// Initialize carousel
const carousel = new Carousel();

const addToCartButton = document.querySelector('.add-to-cart');
addToCartButton?.addEventListener('click', () => {
  const selectedSize = document.querySelector('input[name="size"]:checked') as HTMLInputElement;
  if (!selectedSize) {
    alert('Please select a size');
    return;
  }
  alert(`Added to cart: Size ${selectedSize.value}`);
});
