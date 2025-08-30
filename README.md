# BDP Sells - Real Estate Website

A professional real estate website built with Next.js 15, DaisyUI, and Tailwind CSS. Features a modern design with video hero section, property listings, and comprehensive real estate services.

## Features

- 🎥 **Video Hero Section** - Eye-catching background video for the homepage
- 🏠 **Property Listings** - Comprehensive property search and display
- 📱 **Responsive Design** - Mobile-first approach with DaisyUI components
- 🔍 **Advanced Search** - Property filters and search functionality
- 📧 **Contact Forms** - Multiple contact methods and inquiry forms
- 🎨 **Modern UI** - Beautiful design using DaisyUI theme system
- 📊 **SEO Optimized** - Meta tags, Open Graph, and structured data
- 🚀 **Fast Performance** - Built with Next.js 15 and optimized for speed

## Pages

- **Home** - Video hero, featured properties, quick search
- **Properties** - Property listings with advanced filters
- **About** - Company information, team, and credentials
- **Services** - Real estate services and pricing
- **Contact** - Contact forms and office information

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS v4 + DaisyUI
- **Icons**: React Icons
- **Language**: TypeScript
- **Deployment**: Ready for Vercel, Netlify, or any hosting platform

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd bdpsells
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── components/          # Shared components
│   │   ├── Navigation.tsx  # Main navigation
│   │   └── Footer.tsx      # Site footer
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage
│   ├── properties/         # Properties page
│   ├── about/              # About page
│   ├── services/           # Services page
│   └── contact/            # Contact page
├── public/                 # Static assets
└── package.json
```

## Customization

### DaisyUI Theme

The website uses DaisyUI's "cupcake" theme by default. You can change this in `src/app/layout.tsx`:

```tsx
<html lang="en" data-theme="cupcake">
```

Available themes: `light`, `dark`, `cupcake`, `bumblebee`, `emerald`, `corporate`, `synthwave`, `retro`, `cyberpunk`, `valentine`, `halloween`, `garden`, `forest`, `aqua`, `lofi`, `pastel`, `fantasy`, `wireframe`, `black`, `luxury`, `dracula`, `cmyk`, `autumn`, `business`, `acid`, `lemonade`, `night`, `coffee`, `winter`

### Company Information

Update the following files with your company details:

- `src/app/layout.tsx` - Company name, description, and contact info
- `src/app/components/Navigation.tsx` - Company name
- `src/app/components/Footer.tsx` - Contact information
- All page metadata and content

### Video Hero

Replace the video files in the `public/` folder:

- `hero-video.mp4` - Main video file
- `hero-video.webm` - WebM format for better compatibility
- `hero-poster.jpg` - Video poster image

### Property Images

Add your property images to the `public/` folder:

- `property-1.jpg`, `property-2.jpg`, etc.
- `team-1.jpg`, `team-2.jpg`, etc. for team members
- `about-image.jpg` for the about page

## SEO Configuration

The website includes comprehensive SEO features:

- Meta tags for all pages
- Open Graph and Twitter Card support
- Structured data ready for implementation
- Semantic HTML structure
- Fast loading times

Update the metadata in each page's `export const metadata` section with your specific information.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on push

### Other Platforms

The website is compatible with:

- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Any static hosting service

## Content Management

### Properties

Update the properties array in `src/app/properties/page.tsx` with your actual listings.

### Team Members

Modify the team array in `src/app/about/page.tsx` with your team information.

### Services

Customize the services in `src/app/services/page.tsx` to match your offerings.

## Performance Optimization

- Images are optimized for web
- CSS is purged and minified
- JavaScript is bundled and optimized
- Lazy loading for better performance

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support or questions:

- Email: info@bdpsells.com
- Phone: (555) 123-4567

## Roadmap

- [ ] Property detail pages
- [ ] User authentication
- [ ] Saved properties feature
- [ ] Advanced search filters
- [ ] Property alerts
- [ ] Virtual tour integration
- [ ] Mortgage calculator
- [ ] Blog/news section

---

Built with ❤️ for the real estate industry
