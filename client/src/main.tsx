import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Home } from './pages/Home.tsx'
import { SearchResults } from './pages/SearchResults.tsx'
import { FilmDescription } from './pages/FilmDescription.tsx'
import NotFoundErrorPage from './pages/NotFoundError.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; 

const router = createBrowserRouter([
  {
    path: "/", 
    element: <App />,
    errorElement: <NotFoundErrorPage />,
    children: [
      {
        element: <Home />,
        index: true
      }, 
      {
        path: "/search/:movieTitle", 
        element: <SearchResults />,
      }, 
      {
        path: "/film/:movieId",
        element: <FilmDescription />,
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
