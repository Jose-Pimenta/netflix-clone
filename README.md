# Netflix Clone

Netflix Clone is a responsive web application built with React and Vite that replicates the core Netflix UI, allowing users to browse categories of movies and TV shows fetched from the TMDB API and watch trailers.  
[![Vercel](https://img.shields.io/badge/Deploy-on_Vercel-000?style=flat&logo=vercel&logoColor=white)](https://netflix-clone.tiagopimenta.pt)

## Features

- Responsive navigation bar with scroll-based styling
- Hero banner showcasing a featured Netflix original
- Horizontal scrollable rows of movies by category (Trending, Top Rated, Action, Comedy, Horror, Romance, Documentaries)
- Clickable movie posters open a trailer modal using `react-youtube` and `movie-trailer`
- Configurable category endpoints in `requests.js`
- Smooth animations and responsive design
- Responsive design for mobile and desktop

## Technologies

- React (v19)
- Vite for development and build tooling
- Axios for HTTP requests
- `react-youtube` for embedding trailers
- `movie-trailer` for fetching trailer URLs
- CSS Modules (or plain CSS) for styling
- TMDB API for movie data

## Project Structure

```
netflix-clone/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── Footer.css
│   │   ├── Navbar.jsx
│   │   ├── Navbar.css
│   │   ├── TitleCards.jsx
│   │   └── TitleCards.css
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Home.css
│   │   ├── Login.jsx
│   │   ├── Login.css
│   │   ├── Player.jsx
│   │   └── Player.css
│   ├── config.js
│   ├── App.jsx
│   ├── main.jsx
│   ├── firebase.js
│   └── index.css
├── .eslintrc.cjs
├── README.md
├── index.html
├── .gitignore
├── vercel.json
├── package.json
├── package-lock.json
└── vite.config.js
```

## Getting Started

### Prerequisites

- Node.js (>=14.x)
- npm

### Clone the Repository

```bash
git clone https://github.com/Jose-Pimenta/netflix-clone.git
cd netflix-clone
```

### Installation

```bash
npm install
```

### Environment Variables

Create a `.env` file in the root directory and add your TMDB API key:

```
VITE_TMDB_API_KEY=your_tmdb_api_key_here
```

Sign up at [TMDB](https://www.themoviedb.org/) to obtain an API key.

### Development

```bash
npm run dev
```

Open `http://localhost:5173` in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License.

## Author

Jose Pimenta
