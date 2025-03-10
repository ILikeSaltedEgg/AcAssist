/**
 * Carousel Component
 * Handles testimonials and other carousel functionality
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize testimonial carousel
    initTestimonialCarousel();
    
    /**
     * Initialize the testimonial carousel functionality
     */
    function initTestimonialCarousel() {
        const carousel = document.querySelector('.testimonial-carousel');
        const prevButton = document.querySelector('.carousel-controls .prev');
        const nextButton = document.querySelector('.carousel-controls .next');
        
        if (!carousel || !prevButton || !nextButton) return;
        
        const testimonials = carousel.querySelectorAll('.testimonial');
        if (testimonials.length <= 1) return;
        
        let currentIndex = 0;
        
        // Set initial state
        updateCarousel();
        
        // Event listeners for controls
        prevButton.addEventListener('click', function() {
            currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
            updateCarousel();
        });
        
        nextButton.addEventListener('click', function() {
            currentIndex = (currentIndex + 1) % testimonials.length;
            updateCarousel();
        });
        
        // Auto-advance the carousel
        let autoplayInterval = setInterval(function() {
            currentIndex = (currentIndex + 1) % testimonials.length;
            updateCarousel();
        }, 5000);
        
        // Pause autoplay on hover
        carousel.addEventListener('mouseenter', function() {
            clearInterval(autoplayInterval);
        });
        
        // Resume autoplay when mouse leaves
        carousel.addEventListener('mouseleave', function() {
            autoplayInterval = setInterval(function() {
                currentIndex = (currentIndex + 1) % testimonials.length;
                updateCarousel();
            }, 5000);
        });
        
        /**
         * Update the carousel to show the current testimonial
         */
        function updateCarousel() {
            testimonials.forEach((testimonial, index) => {
                if (index === currentIndex) {
                    testimonial.style.display = 'block';
                    testimonial.style.opacity = '0';
                    
                    // Trigger animation
                    setTimeout(() => {
                        testimonial.style.opacity = '1';
                    }, 10);
                } else {
                    testimonial.style.display = 'none';
                }
            });
        }
    }
    
    // Initialize gallery carousel (for university pages)
    const galleryCarousel = document.querySelector('.gallery-carousel');
    
    if (galleryCarousel) {
        const galleryImages = galleryCarousel.querySelectorAll('.gallery-image');
        const galleryPrev = galleryCarousel.querySelector('.gallery-prev');
        const galleryNext = galleryCarousel.querySelector('.gallery-next');
        const galleryDots = galleryCarousel.querySelector('.gallery-dots');
        
        if (galleryImages.length > 0) {
            let galleryIndex = 0;
            
            // Create dot indicators
            galleryImages.forEach((_, index) => {
                const dot = document.createElement('span');
                dot.className = 'gallery-dot';
                if (index === 0) dot.classList.add('active');
                
                dot.addEventListener('click', () => {
                    galleryIndex = index;
                    updateGallery();
                });
                
                galleryDots.appendChild(dot);
            });
            
            // Add event listeners for controls
            galleryPrev.addEventListener('click', () => {
                galleryIndex = (galleryIndex - 1 + galleryImages.length) % galleryImages.length;
                updateGallery();
            });
            
            galleryNext.addEventListener('click', () => {
                galleryIndex = (galleryIndex + 1) % galleryImages.length;
                updateGallery();
            });
            
            /**
             * Update the gallery to show the current image
             */
            function updateGallery() {
                galleryImages.forEach((image, index) => {
                    if (index === galleryIndex) {
                        image.classList.add('active');
                    } else {
                        image.classList.remove('active');
                    }
                });
                
                // Update dots
                const dots = galleryDots.querySelectorAll('.gallery-dot');
                dots.forEach((dot, index) => {
                    if (index === galleryIndex) {
                        dot.classList.add('active');
                    } else {
                        dot.classList.remove('active');
                    }
                });
            }
        }
    }
});