// DOM Elements
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const backToTop = document.getElementById('back-to-top');
const portfolioGrid = document.getElementById('portfolio-grid');
const portfolioModal = document.getElementById('portfolio-modal');
const modalImage = document.getElementById('modal-image');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const closeModal = document.querySelector('.close');
const contactForm = document.getElementById('contact-form');
const adminPanel = document.getElementById('admin-panel');
const adminToggle = document.getElementById('admin-toggle');
const adminForm = document.getElementById('admin-form');

// Sample Portfolio Data
let portfolioData = [
    {
        id: 1,
        title: "Restaurant Facebook Page",
        description: "Professional Facebook business page for a local restaurant with custom cover photo, menu integration, and customer engagement features.",
        image: "https://via.placeholder.com/400x300/007BFF/ffffff?text=Facebook+Page",
        category: "facebook"
    },
    {
        id: 2,
        title: "Beauty Salon Google Listing",
        description: "Optimized Google Business Profile with photos, reviews management, and location optimization for better local search visibility.",
        image: "https://via.placeholder.com/400x300/28a745/ffffff?text=Google+Listing",
        category: "google"
    },
    {
        id: 3,
        title: "Digital Marketing Poster",
        description: "Eye-catching promotional poster designed for a coaching center with modern typography and engaging visuals.",
        image: "https://via.placeholder.com/400x300/ffc107/ffffff?text=Digital+Poster",
        category: "poster"
    },
    {
        id: 4,
        title: "Business Website",
        description: "Responsive one-page website for a local shop with modern design, contact forms, and mobile optimization.",
        image: "https://via.placeholder.com/400x300/6f42c1/ffffff?text=Business+Website",
        category: "website"
    }
];

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializePortfolio();
    initializeContactForm();
    initializeAdminPanel();
    initializeScrollEffects();
    initializeModal();
});

// Navigation functionality
function initializeNavigation() {
    // Mobile menu toggle
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 30px rgba(0, 0, 0, 0.15)';
            navbar.style.borderBottom = '1px solid rgba(0, 123, 255, 0.2)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 30px rgba(0, 0, 0, 0.1)';
            navbar.style.borderBottom = '1px solid rgba(0, 123, 255, 0.1)';
        }
    });

    // Active navigation highlighting
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Dropdown menu functionality
    const dropdownItems = document.querySelectorAll('.nav-item.dropdown');
    dropdownItems.forEach(item => {
        const link = item.querySelector('.nav-link');
        const dropdown = item.querySelector('.dropdown-menu');
        
        // Desktop hover
        if (window.innerWidth > 768) {
            item.addEventListener('mouseenter', () => {
                dropdown.style.opacity = '1';
                dropdown.style.visibility = 'visible';
                dropdown.style.transform = 'translateY(0)';
            });
            
            item.addEventListener('mouseleave', () => {
                dropdown.style.opacity = '0';
                dropdown.style.visibility = 'hidden';
                dropdown.style.transform = 'translateY(-10px)';
            });
        }
        
        // Mobile click
        if (window.innerWidth <= 768) {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
            });
        }
    });

    // Sticky navigation
    window.addEventListener('scroll', function() {
        const nav = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            nav.classList.add('sticky');
        } else {
            nav.classList.remove('sticky');
        }
    });

    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
        });
    });
}

// Portfolio functionality
function initializePortfolio() {
    loadPortfolio();
}

function loadPortfolio() {
    // Load from localStorage if available
    const savedPortfolio = localStorage.getItem('swgtm_portfolio');
    if (savedPortfolio) {
        portfolioData = JSON.parse(savedPortfolio);
    }

    displayPortfolio();
}

function displayPortfolio() {
    portfolioGrid.innerHTML = '';
    
    portfolioData.forEach(item => {
        const portfolioItem = createPortfolioItem(item);
        portfolioGrid.appendChild(portfolioItem);
    });
}

function createPortfolioItem(item) {
    const div = document.createElement('div');
    div.className = 'portfolio-item fade-in';
    div.innerHTML = `
        <div class="portfolio-image">
            <img src="${item.image}" alt="${item.title}" loading="lazy">
            <div class="portfolio-overlay">
                <i class="fas fa-eye"></i>
            </div>
        </div>
        <div class="portfolio-info">
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            <span class="portfolio-category">${getCategoryLabel(item.category)}</span>
        </div>
    `;

    // Add click event for modal
    div.addEventListener('click', function() {
        openPortfolioModal(item);
    });

    return div;
}

function getCategoryLabel(category) {
    const labels = {
        'facebook': 'Facebook Page',
        'google': 'Google Listing',
        'poster': 'Digital Poster',
        'website': 'Website'
    };
    return labels[category] || category;
}

// Modal functionality
function initializeModal() {
    // Close modal when clicking outside
    portfolioModal.addEventListener('click', function(e) {
        if (e.target === portfolioModal) {
            closePortfolioModal();
        }
    });

    // Close modal with X button
    closeModal.addEventListener('click', closePortfolioModal);

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && portfolioModal.style.display === 'block') {
            closePortfolioModal();
        }
    });
}

function openPortfolioModal(item) {
    modalImage.src = item.image;
    modalImage.alt = item.title;
    modalTitle.textContent = item.title;
    modalDescription.textContent = item.description;
    portfolioModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closePortfolioModal() {
    portfolioModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Contact form functionality
function initializeContactForm() {
    // Initialize EmailJS
    (function() {
        emailjs.init("YOUR_EMAILJS_PUBLIC_KEY"); // Replace with your actual EmailJS public key
    })();
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            business: document.getElementById('business').value,
            service: document.getElementById('service').value,
            budget: document.getElementById('budget').value,
            message: document.getElementById('message').value,
            newsletter: document.getElementById('newsletter').checked
        };

        // Show loading state
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;

        // Send email using EmailJS
        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
            to_email: 'aiswagotom@gmail.com',
            from_name: formData.name,
            from_email: formData.email,
            phone: formData.phone,
            business: formData.business,
            service_interest: formData.service,
            budget_range: formData.budget,
            message: formData.message,
            newsletter_subscription: formData.newsletter ? 'Yes' : 'No'
        })
        .then(function(response) {
            // Success message
            showNotification('Message sent successfully! We\'ll get back to you soon.', 'success');
            contactForm.reset();
        })
        .catch(function(error) {
            // Error message
            showNotification('Sorry, there was an error sending your message. Please try again or contact us directly.', 'error');
            console.error('EmailJS Error:', error);
        })
        .finally(function() {
            // Reset button state
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        });
    });
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
            <span>${message}</span>
            <button class="notification-close">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;

    // Add to page
    document.body.appendChild(notification);

    // Show notification
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);

    // Auto hide after 5 seconds
    setTimeout(() => {
        hideNotification(notification);
    }, 5000);

    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        hideNotification(notification);
    });
}

function hideNotification(notification) {
    notification.classList.remove('show');
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 300);
}

// Add notification styles
const notificationStyles = `
    .notification {
        position: fixed;
        top: 20px;
        right: 20px;
        background: white;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        padding: 20px;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 400px;
        border-left: 4px solid #007BFF;
    }

    .notification.show {
        transform: translateX(0);
    }

    .notification-success {
        border-left-color: #28a745;
    }

    .notification-error {
        border-left-color: #dc3545;
    }

    .notification-content {
        display: flex;
        align-items: center;
        gap: 12px;
    }

    .notification-content i:first-child {
        font-size: 1.2rem;
        color: #007BFF;
    }

    .notification-success .notification-content i:first-child {
        color: #28a745;
    }

    .notification-error .notification-content i:first-child {
        color: #dc3545;
    }

    .notification-content span {
        flex: 1;
        font-size: 0.9rem;
        color: #333;
    }

    .notification-close {
        background: none;
        border: none;
        color: #666;
        cursor: pointer;
        padding: 5px;
        border-radius: 50%;
        transition: all 0.3s ease;
    }

    .notification-close:hover {
        background: #f8f9fa;
        color: #333;
    }

    @media (max-width: 768px) {
        .notification {
            top: 10px;
            right: 10px;
            left: 10px;
            max-width: none;
        }
    }
`;

// Inject notification styles
const styleSheet = document.createElement('style');
styleSheet.textContent = notificationStyles;
document.head.appendChild(styleSheet);

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.service-card, .testimonial-card, .contact-method').forEach(el => {
    observer.observe(el);
});

// Add animation styles
const animationStyles = `
    .service-card,
    .testimonial-card,
    .contact-method {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease;
    }

    .service-card.animate-in,
    .testimonial-card.animate-in,
    .contact-method.animate-in {
        opacity: 1;
        transform: translateY(0);
    }

    .service-card:nth-child(1) { transition-delay: 0.1s; }
    .service-card:nth-child(2) { transition-delay: 0.2s; }
    .service-card:nth-child(3) { transition-delay: 0.3s; }
    .service-card:nth-child(4) { transition-delay: 0.4s; }
    .service-card:nth-child(5) { transition-delay: 0.5s; }
    .service-card:nth-child(6) { transition-delay: 0.6s; }
    .service-card:nth-child(7) { transition-delay: 0.7s; }
    .service-card:nth-child(8) { transition-delay: 0.8s; }
    .service-card:nth-child(9) { transition-delay: 0.9s; }
    .service-card:nth-child(10) { transition-delay: 1.0s; }
    .service-card:nth-child(11) { transition-delay: 1.1s; }
    .service-card:nth-child(12) { transition-delay: 1.2s; }
    .service-card:nth-child(13) { transition-delay: 1.3s; }
    .service-card:nth-child(14) { transition-delay: 1.4s; }
    .service-card:nth-child(15) { transition-delay: 1.5s; }
    .service-card:nth-child(16) { transition-delay: 1.6s; }
`;

// Inject animation styles
const animationStyleSheet = document.createElement('style');
animationStyleSheet.textContent = animationStyles;
document.head.appendChild(animationStyleSheet);

// Admin panel functionality
function initializeAdminPanel() {
    // Toggle admin panel
    adminToggle.addEventListener('click', function() {
        adminPanel.classList.toggle('open');
    });

    // Handle admin form submission
    adminForm.addEventListener('submit', function(e) {
        e.preventDefault();
        handleAdminForm();
    });
}

function handleAdminForm() {
    const formData = new FormData(adminForm);
    const newItem = {
        id: Date.now(),
        title: formData.get('title') || document.getElementById('admin-title').value,
        description: formData.get('description') || document.getElementById('admin-description').value,
        image: formData.get('image') || document.getElementById('admin-image').value,
        category: formData.get('category') || document.getElementById('admin-category').value
    };

    // Validate required fields
    if (!newItem.title || !newItem.description || !newItem.image || !newItem.category) {
        showMessage('Please fill in all required fields.', 'error');
        return;
    }

    // Add to portfolio data
    portfolioData.push(newItem);

    // Save to localStorage
    localStorage.setItem('swgtm_portfolio', JSON.stringify(portfolioData));

    // Refresh portfolio display
    displayPortfolio();

    // Reset form
    adminForm.reset();

    // Show success message
    showMessage('Portfolio item added successfully!', 'success');

    // Close admin panel
    adminPanel.classList.remove('open');
}

// Scroll effects
function initializeScrollEffects() {
    // Back to top button
    const backToTopBtn = document.querySelector('.back-to-top');
    if (backToTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });

        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Fade in animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all fade-in elements
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });

    // Add fade-in class to sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Performance optimization
const debouncedScrollHandler = debounce(function() {
    // Any scroll-based calculations can go here
}, 16);

window.addEventListener('scroll', debouncedScrollHandler);

// Service Worker Registration (for PWA features)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('SW registered: ', registration);
            })
            .catch(function(registrationError) {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Analytics tracking (example)
function trackEvent(eventName, eventData = {}) {
    // Replace with your analytics service
    console.log('Event tracked:', eventName, eventData);
}

// Track important user interactions
document.addEventListener('click', function(e) {
    if (e.target.matches('.btn-primary')) {
        trackEvent('cta_click', { button: e.target.textContent });
    }
    if (e.target.matches('.whatsapp-float a')) {
        trackEvent('whatsapp_click');
    }
    if (e.target.matches('.portfolio-item')) {
        trackEvent('portfolio_view', { item: e.target.querySelector('h3').textContent });
    }
});

// Form validation enhancement
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^[\+]?[1-9][\d]{0,15}$/;
    return re.test(phone.replace(/\s/g, ''));
}

// Enhanced contact form validation
document.querySelectorAll('#contact-form input, #contact-form textarea').forEach(field => {
    field.addEventListener('blur', function() {
        validateField(this);
    });
});

function validateField(field) {
    const value = field.value.trim();
    let isValid = true;
    let errorMessage = '';

    switch (field.type) {
        case 'email':
            if (value && !validateEmail(value)) {
                isValid = false;
                errorMessage = 'Please enter a valid email address';
            }
            break;
        case 'tel':
            if (value && !validatePhone(value)) {
                isValid = false;
                errorMessage = 'Please enter a valid phone number';
            }
            break;
        default:
            if (field.required && !value) {
                isValid = false;
                errorMessage = 'This field is required';
            }
    }

    // Remove existing error message
    const existingError = field.parentNode.querySelector('.field-error');
    if (existingError) {
        existingError.remove();
    }

    // Add error message if invalid
    if (!isValid) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'field-error';
        errorDiv.style.color = '#dc3545';
        errorDiv.style.fontSize = '0.875rem';
        errorDiv.style.marginTop = '0.25rem';
        errorDiv.textContent = errorMessage;
        field.parentNode.appendChild(errorDiv);
    }

    // Update field styling
    field.style.borderColor = isValid ? '#e9ecef' : '#dc3545';
}

// Lazy loading for images
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }
}

// Initialize lazy loading
initializeLazyLoading();

// Export functions for potential external use
window.SWGTM = {
    addPortfolioItem: function(item) {
        portfolioData.push(item);
        localStorage.setItem('swgtm_portfolio', JSON.stringify(portfolioData));
        displayPortfolio();
    },
    getPortfolioData: function() {
        return portfolioData;
    },
    clearPortfolio: function() {
        portfolioData = [];
        localStorage.removeItem('swgtm_portfolio');
        displayPortfolio();
    }
}; 