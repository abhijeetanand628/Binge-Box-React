# 🎬 BingeBox - Movie App

A modern, responsive movie discovery application built with React and Vite. Browse movies, search for your favorites, and explore detailed information about films and TV series using the OMDb API.

## ✨ Features

- **🔍 Search Functionality**: Real-time movie search with autocomplete suggestions
- **🎥 Movie Discovery**: Browse popular movies and TV series
- **📱 Responsive Design**: Fully responsive layout that works on all devices
- **🎬 Movie Details**: Detailed information pages for each movie including:
  - Ratings, runtime, and release date
  - Cast and crew information
  - Plot summaries
  - Genre tags
  - Awards and box office data
- **🎞️ Movie Slider**: Interactive carousel showcasing featured movies
- **🧭 Navigation**: Smooth navigation with React Router
- **🌙 Dark Theme**: Modern dark-themed UI for comfortable viewing

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
The header includes a search bar with debounced autocomplete suggestions that appear as you type, making it easy to find movies quickly.

### Movie Slider
The home page features an interactive movie slider showcasing the top 6 results from your search or default movies.

### Movie Details Page
Click on any movie poster to view comprehensive details including ratings, cast, plot, and more.

### Responsive Navigation
- Desktop: Full navigation menu in the header
- Mobile: Hamburger menu for easy access on smaller screens

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

The project uses Tailwind CSS for styling, providing:
- Utility-first CSS approach
- Responsive design utilities
- Dark theme support
- Custom color schemes

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 👤 Author

Built with ❤️ using React and Vite

---

**Happy Movie Browsing! 🍿**
