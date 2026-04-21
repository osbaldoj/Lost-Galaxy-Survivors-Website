# Lost Galaxy: Survivors Website

A promotional website for the sci-fi top-down survival shooter game **Lost Galaxy: Survivors**. The site showcases gameplay features, screenshots, and provides links to wishlist on Steam and playtest on itch.io.

## Features

- **Modern Design**: Dark sci-fi aesthetic with gradient accents and smooth animations
- **Responsive Layout**: Fully responsive design that works on desktop, tablet, and mobile
- **Interactive Gallery**: Screenshot gallery with smooth transitions and thumbnail navigation
- **Performance Optimized**: Optimized images (85% size reduction) and efficient CSS/JS
- **Analytics**: Google Analytics integration for visitor tracking
- **Accessibility**: Semantic HTML, ARIA labels, and keyboard navigation support

## Technologies Used

- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Custom properties (CSS variables), modern grid/flexbox layouts, animations
- **JavaScript**: Vanilla JS for dynamic content rendering and interactions
- **Google Analytics**: GA4 tracking for visitor analytics
- **Image Optimization**: Custom script for converting PNG to optimized JPEG/WebP

## Project Structure

```
├── index.html              # Main HTML document
├── styles.css             # All styles and animations
├── main.js                # JavaScript for dynamic content
├── game-data.js           # Content configuration and data
├── assets/                # Optimized images and icons
│   ├── screenshot-*.jpg   # Game screenshots (optimized)
│   ├── steam-icon.png     # Steam platform icon
│   ├── trailer-poster.jpg # Trailer poster image
│   └── header.jpg         # Header background
├── optimize-images.sh     # Image optimization script
├── IMPROVEMENTS.md        # Detailed improvement documentation
└── .gitignore            # Git ignore configuration
```

## Getting Started

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/osbaldoj/Lost-Galaxy-Survivors-Website.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Lost-Galaxy-Survivors-Website
   ```

3. Open `index.html` in your browser or use a local server:
   ```bash
   python3 -m http.server 8000
   ```

### Image Optimization

The project includes an optimization script to convert large PNG screenshots to optimized JPEG format:

```bash
./optimize-images.sh
```

This script:
- Converts PNG screenshots to JPEG with 85% quality
- Resizes images to maximum width of 1920px
- Creates WebP versions if `cwebp` is installed
- Outputs optimized images to `assets/optimized/`

## Design Enhancements

Recent improvements include:

- **Smooth animations** with custom easing curves
- **Enhanced hover states** for buttons and cards
- **Improved typography** with better contrast and spacing
- **Mobile touch optimizations** with proper tap targets
- **Visual feedback** with pulse animations and glow effects

See [IMPROVEMENTS.md](IMPROVEMENTS.md) for detailed documentation of all enhancements.

## Deployment

The site is designed to be deployed as static files. No build process required.

### GitHub Pages

This repository can be easily deployed to GitHub Pages:

1. Go to repository **Settings** → **Pages**
2. Select **main** branch as source
3. Select root folder (`/`)
4. Save and wait for deployment

### Custom Domain

To use a custom domain:

1. Add a `CNAME` file with your domain name
2. Configure DNS records as per GitHub Pages instructions

## Analytics

Google Analytics is integrated with measurement ID `G-1YSBHK52GT`. To change the tracking ID, update the script in `index.html`.

## License

All game assets and content are property of After The Singularity Games. Website code is provided for reference and promotional purposes.

## Contact

- **Game Developer**: After The Singularity Games
- **Website**: [Lost Galaxy: Survivors on Steam](https://store.steampowered.com/app/4019660)
- **Playtest**: [itch.io page](https://jorge-osbaldo.itch.io/lost-galaxy-survivors)