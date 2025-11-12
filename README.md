🎬Movix — React Movie App

Movix is a modern, responsive React app that displays movies fetched from an external API with the help of Appwrite as the backend service.
Users can explore trending, popular, and upcoming movies in a clean, dynamic UI.

🔗 Live Demo: https://your-deployed-site-link.com

🚀 Features
🎞️ Fetches and displays real-time movie data using Appwrite
🔍 Search and filter through movies
⚡ Fast, responsive UI built with React + Tailwind CSS
🧠 Uses Appwrite for backend API management and secure fetching
💾 Optional favorite/watchlist feature

🧰 Tech Stack
Category	Tools / Libraries
Frontend	React.js
Backend	Appwrite
Styling	Tailwind CSS
API Source	Appwrite Functions / Movie API (e.g. TMDB)
Deployment	Vercel

⚙️ Getting Started
1️⃣ Clone the repository
git clone https://github.com/keliaa1/movix.git
cd movix

2️⃣ Install dependencies
npm install

3️⃣ Add environment variables

Create a .env file in your project root:

VITE_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
VITE_APPWRITE_PROJECT_ID=your_project_id
VITE_APPWRITE_API_KEY=your_api_key
VITE_MOVIE_API_URL=https://api.themoviedb.org/3
VITE_MOVIE_API_KEY=your_movie_api_key

4️⃣ Run locally
npm run dev


Then open http://localhost:5173/
 in your browser.


🧠 How It Works

The app connects to Appwrite which handles API calls and securely fetches movie data from an external source (like TMDB).
This keeps your API keys safe and allows backend logic control.

Example:

import { Client, Functions } from "appwrite";

const client = new Client()
  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

const functions = new Functions(client);

export const getMovies = async () => {
  const response = await functions.createExecution('fetchMovies');
  return JSON.parse(response.response);
};

📸 Preview
Home Page	Movie Details


💡 Future Improvements
🔐 User authentication (login/signup with Appwrite Auth)
💬 Reviews and ratings
🔁 Pagination or infinite scroll
🧾 Personalized recommendations
👩‍💻 Author

Kelia Simbi
Frontend Developer
📫 simbikelia@gmail.com

🪪 License
Licensed under the MIT License — free to use and modify.
