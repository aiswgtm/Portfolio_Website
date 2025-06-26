# SWGTM - Digital Services Landing Page

A professional, modern, and responsive landing page website for **SWGTM (Smart Web Growth & Tech Management)**, a digital service provider helping local businesses go online.

## 🌟 Features

### ✨ Design & User Experience
- **Modern & Professional Design**: Clean, modern interface with brand colors (Blue #007BFF, White, Soft Gray)
- **Fully Responsive**: Optimized for all devices (desktop, tablet, mobile)
- **Smooth Animations**: Fade-in effects, hover animations, and smooth scrolling
- **Sticky Navigation**: Fixed navigation bar with smooth scroll effects
- **Back to Top Button**: Easy navigation back to the top of the page

### 🎯 Content Sections
- **Hero Section**: Compelling headline with call-to-action buttons
- **About Section**: Company information with statistics
- **Services Section**: 16 comprehensive digital services organized in two categories:
  - **Business Digitization Services** (9 services)
  - **Digital Marketing Services** (7 services)
- **Portfolio Section**: Dynamic portfolio gallery with lightbox modal
- **Testimonials Section**: Client reviews with star ratings
- **Contact Section**: Contact form and business information
- **Footer**: Social links and additional information

### 🛠️ Technical Features
- **Admin Panel**: Easy portfolio management system
- **Contact Form**: Functional contact form with validation
- **WhatsApp Integration**: Floating WhatsApp button for instant contact
- **SEO Optimized**: Meta tags, structured content, and semantic HTML
- **Performance Optimized**: Lazy loading, debounced scroll events
- **Local Storage**: Portfolio data persistence
- **Form Validation**: Real-time email and phone validation

### 📱 Mobile-First Design
- Responsive grid layouts
- Mobile-friendly navigation menu
- Touch-optimized buttons and interactions
- Optimized typography for mobile devices

## 🚀 Quick Start

### Prerequisites
- A modern web browser
- Basic knowledge of HTML, CSS, and JavaScript (for customization)

### Installation
1. **Download/Clone** the project files
2. **Open** `index.html` in your web browser
3. **That's it!** The website is ready to use

### File Structure
```
swgtm-website/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and responsive design
├── script.js           # JavaScript functionality
├── README.md           # This documentation
└── assets/             # Images and other assets (create if needed)
    └── favicon.ico     # Website favicon
```

## 🎨 Customization

### Brand Colors
The website uses a consistent color scheme defined in `styles.css`:
- **Primary Blue**: `#007BFF`
- **Dark Blue**: `#0056b3`
- **Text Color**: `#333`
- **Light Gray**: `#666`
- **Background Gray**: `#f8f9fa`

### Updating Content

#### 1. Basic Information
Edit `index.html` to update:
- Company name and tagline
- Contact information
- Service descriptions and pricing
- Testimonials

#### 2. Services
The website now includes 16 comprehensive services organized in two categories:

**Business Digitization Services:**
- Facebook Business Page Creation & Setup
- Google My Business (Map Listing) Setup
- WhatsApp Business Setup + Auto-Reply
- Digital Banner, Poster, & Flyer Design
- Logo Design (Basic / Minimal)
- Business Card Design
- One-Page Business Website
- Portfolio / Landing Page Design
- Online Price List or Menu Creation

**Digital Marketing Services:**
- Facebook & Instagram Ad Setup
- Ad Creative & Visual Design
- Social Media Post Design (Weekly / Monthly)
- Caption + Hashtag Research
- Facebook & Instagram Profile Optimization
- Basic SEO Setup for Website
- Marketing Strategy & Content Planning

#### 3. Portfolio Management
Use the built-in admin panel:
1. Click the gear icon (⚙️) on the right side of the screen
2. Fill in the form with:
   - Project title
   - Description
   - Image URL
   - Category
3. Click "Add Item" to add to portfolio

#### 4. Contact Information
Current contact details:
- **Phone/WhatsApp**: +8801969716508
- **Email**: aiswagotom@gmail.com
- **Location**: Dhaka, Bangladesh

**Email Setup:** The contact form is configured to send messages directly to the email address. See `EMAIL_SETUP.md` for configuration instructions.

### Adding Custom Images
1. Create an `assets` folder
2. Add your images to the folder
3. Update image paths in the HTML/CSS
4. For portfolio items, use the admin panel with image URLs

## 📧 Contact Form Setup

The contact form is configured to send emails directly to **aiswagotom@gmail.com**. 

### EmailJS Setup (Recommended)
1. Follow the detailed setup guide in `EMAIL_SETUP.md`
2. Create an EmailJS account and configure Gmail service
3. Update the configuration in `script.js` with your EmailJS credentials
4. Test the form to ensure emails are delivered

### Alternative Options
- **Formspree**: Easier setup, just add form action URL
- **Netlify Forms**: If hosting on Netlify, add `netlify` attribute to form
- **Backend Integration**: Modify `handleContactForm()` function for custom backend

## 🔧 Advanced Customization

### Adding New Sections
1. Add HTML structure in `index.html`
2. Add corresponding CSS in `styles.css`
3. Add any JavaScript functionality in `script.js`

### Modifying Animations
Animation classes are defined in `styles.css`:
```css
.fade-in {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.6s ease;
}

.fade-in.visible {
    opacity: 1;
    transform: translateY(0);
}
```

### Custom JavaScript Functions
The website includes several utility functions:
- `SWGTM.addPortfolioItem(item)` - Add portfolio items programmatically
- `SWGTM.getPortfolioData()` - Get current portfolio data
- `SWGTM.clearPortfolio()` - Clear all portfolio items

## 📱 Mobile Optimization

The website is fully optimized for mobile devices with:
- Responsive breakpoints at 768px and 480px
- Mobile-first navigation menu
- Touch-friendly buttons and interactions
- Optimized typography and spacing

## 🚀 Deployment

### Option 1: Static Hosting
Deploy to any static hosting service:
- **Netlify**: Drag and drop the folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Push to a GitHub repository
- **Firebase Hosting**: Use Firebase CLI

### Option 2: Traditional Web Hosting
Upload files to your web server via FTP or file manager.

### Option 3: Local Development
Use a local server for development:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .

# Using PHP
php -S localhost:8000
```

## 🔍 SEO Optimization

The website includes:
- Meta title and description
- Semantic HTML structure
- Alt text for images
- Structured content
- Fast loading times

### Additional SEO Tips
1. Add Google Analytics tracking code
2. Submit sitemap to search engines
3. Optimize images for web
4. Add Open Graph meta tags for social sharing

## 🛡️ Security Considerations

- Form validation on both client and server side
- Sanitize user inputs
- Use HTTPS in production
- Regular security updates

## 📞 Support

For technical support or customization requests:
- **Phone/WhatsApp**: +8801969716508
- **Email**: aiswagotom@gmail.com

## 📄 License

This project is created for SWGTM. All rights reserved.

## 🔄 Version History

### v1.2.0 (Current)
- Removed pricing display for more professional appearance
- Enhanced service cards with modern design and animations
- Added professional CTA section with dual action buttons
- Improved visual hierarchy and spacing
- Better hover effects and transitions

### v1.1.0
- Updated with comprehensive service list (16 services)
- Organized services into two categories
- Updated contact information
- Added pricing note section
- Enhanced service descriptions

### v1.0.0
- Initial release
- Complete landing page with all sections
- Admin panel for portfolio management
- Responsive design
- Contact form with validation
- WhatsApp integration

---

**SWGTM** - From Offline to Online – Fast and Easy 