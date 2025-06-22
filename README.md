# Netflix Clone

Netflix Clone is a responsive web application built with React and Vite that replicates the core Netflix UI, allowing users to browse categories of movies and TV shows fetched from the TMDB API and watch trailers.

## Features

- Responsive navigation bar with scroll-based styling  
- Hero banner showcasing a featured Netflix original  
- Horizontal scrollable rows of movies by category (Trending, Top Rated, Action, Comedy, Horror, Romance, Documentaries)  
- Clickable movie posters open a trailer modal using `react-youtube` and `movie-trailer`  
- Configurable category endpoints in `requests.js`  
- Smooth animations and responsive design  

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
│   │   ├── Nav.jsx
│   │   ├── Nav.css
│   │   ├── Banner.jsx
│   │   ├── Banner.css
│   │   ├── Row.jsx
│   │   └── Row.css
│   ├── requests.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── How_to_Run_Project_Netflix_Clone.pdf
├── .eslintrc.cjs
├── .gitignore
├── package.json
├── package-lock.json
└── vite.config.js
```

## Getting Started

### Prerequisites

- Node.js (>=14.x)  
- npm or yarn  

### Clone the Repository

```bash
git clone https://github.com/Jose-Pimenta/netflix-clone.git
cd netflix-clone
```

### Installation

```bash
npm install
# or
yarn install
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
# or
yarn dev
```

Open `http://localhost:5173` in your browser.

### Build for Production

```bash
npm run build
# or
yarn build
npm run preview
# or
yarn preview
```

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License.

## Author

Jose Pimenta
