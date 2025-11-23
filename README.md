# 🎬 BingeBox - Movie App

A modern, responsive movie discovery application built with React and Vite. Browse movies, search for your favorites, and explore detailed information about films and TV series using the OMDb API.

## ✨ Features

- **🔍 Search Functionality**: Real-time movie search with debounced autocomplete suggestions
- **🎥 Movie Discovery**: Browse movies and TV series with dedicated pages
  - **Movies Page**: Displays action movies by default
  - **Series Page**: Displays comedy TV series by default
- **📱 Responsive Design**: Fully responsive layout optimized for all devices (mobile, tablet, desktop)
- **🎬 Movie Details**: Comprehensive information pages for each movie/TV show including:
  - IMDb ratings, runtime, and release date
  - Cast and crew information
  - Plot summaries
  - Genre tags
  - Awards and box office data
  - Language and country information
- **🎞️ Movie Slider**: Interactive carousel with:
  - Auto-play functionality (5-second intervals)
  - Swipe gestures for mobile devices
  - Navigation arrows for manual control
  - Dot indicators for current position
  - High-resolution poster backgrounds
- **📋 Contact Form**: Contact Us page with form for user inquiries
- **📜 Terms of Service**: Comprehensive terms and conditions page
- **🧭 Navigation**: Smooth navigation with React Router and scroll-to-section functionality
- **🌙 Dark Theme**: Modern dark-themed UI with red accent colors for comfortable viewing
- **🎯 Interactive Posters**: Movie posters with hover effects, HD badges, and type indicators

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Movie-App
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173` (or the port shown in your terminal).

## 📦 Available Scripts

- `npm run dev` - Start the development server with hot module replacement
- `npm run build` - Build the app for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## 🛠️ Tech Stack

- **React 19.1.1** - UI library
- **Vite 7.1.7** - Build tool and dev server
- **React Router DOM 7.9.4** - Client-side routing
- **Tailwind CSS 4.1.14** - Utility-first CSS framework
- **React Icons 5.5.0** - Icon library
- **React Swipeable 7.0.2** - Swipe gestures for mobile
- **OMDb API** - Movie database API

## 🗺️ Routes

The application includes the following routes:

- `/` - Home page with movie slider and search results grid
- `/movies` - Movies page displaying action movies
- `/series` - TV Series page displaying comedy series
- `/contactus` - Contact Us page with contact form
- `/terms` - Terms of Service page
- `/movie/:imdbID` - Dynamic route for individual movie/TV show details

## 📁 Project Structure

```
Movie-App/
├── public/           # Static assets
├── src/
│   ├── assets/       # Images and other assets
│   ├── components/   # Reusable React components
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── MovieSlider.jsx
│   │   └── Poster.jsx
│   ├── pages/        # Page components
│   │   ├── ContactUs.jsx
│   │   ├── Home.jsx
│   │   ├── MovieDetails.jsx
│   │   ├── Movies.jsx
│   │   ├── Series.jsx
│   │   └── TermsOfService.jsx
│   ├── App.jsx       # Main app component
│   ├── App.css       # App styles
│   ├── index.css     # Global styles
│   └── main.jsx      # Entry point
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🎯 Key Features Explained

### Search with Autocomplete
The header includes a search bar with debounced autocomplete suggestions (300ms delay) that appear as you type. Suggestions are clickable and automatically navigate to the home page with search results. The search supports Enter key submission and click-to-search functionality.

### Movie Slider
The home page features an interactive movie slider showcasing the top 6 results from your search or default "Avengers" movies. Features include:
- Auto-advance every 5 seconds
- Swipe gestures for mobile (left/right)
- Navigation arrows for manual control
- Dot indicators showing current slide
- High-resolution poster backgrounds with gradient overlays
- Smooth transitions between slides

### Movies & Series Pages
- **Movies Page**: Displays action movies fetched from OMDb API, filtered by type "movie"
- **Series Page**: Displays comedy TV series fetched from OMDb API, filtered by type "series"
- Both pages feature responsive grid layouts that adapt to screen size

### Movie Details Page
Click on any movie poster to view comprehensive details including:
- Large poster image with fallback placeholder
- Title, rating, runtime, and release year
- Genre tags displayed as badges
- Full plot description
- Cast, director, and production details
- Awards and box office information
- Back to home navigation button

### Contact Us Page
A fully styled contact form with fields for:
- Full name
- Email address
- Message (textarea)
- Form validation and styling

### Terms of Service Page
Comprehensive terms of service document covering:
- Service description
- User conduct guidelines
- Third-party links disclaimer
- Warranty and liability information

### Footer (About Us)
The footer section includes:
- About Us description with background image
- Feature highlights (High quality, Free forever, Fast load, Multi subtitles)
- Navigation links to all main pages
- Responsive design with overlay effects

### Responsive Navigation
- **Desktop**: Full navigation menu in the header with active state indicators
- **Mobile**: Hamburger menu (☰) for easy access on smaller screens
- Smooth scroll-to-section functionality for footer navigation
- Active link highlighting with red accent color

## 🔑 API Configuration

This app uses the OMDb API. The API key is currently hardcoded in the components. For production use, consider:

1. Moving the API key to environment variables
2. Creating a `.env` file:
```env
VITE_OMDB_API_KEY=your_api_key_here
```
3. Accessing it via `import.meta.env.VITE_OMDB_API_KEY`

**Note**: Get your free API key from [OMDb API](http://www.omdbapi.com/apikey.aspx)

## 🎨 Styling

The project uses Tailwind CSS 4.1.14 for styling, providing:
- Utility-first CSS approach
- Responsive design utilities (sm, md, lg breakpoints)
- Dark theme with black (#000000) and dark gray (#121212, #1e1e1e) backgrounds
- Red accent color (#red-600) for interactive elements
- Smooth transitions and hover effects
- Gradient overlays for visual depth
- Custom spacing and typography scales

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 👤 Author

Built with ❤️ using React and Vite

---

**Happy Movie Browsing! 🍿**
