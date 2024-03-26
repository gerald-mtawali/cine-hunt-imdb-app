import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { HomePage } from "./pages/Home.tsx";
import { SearchPage } from "./pages/SearchResults.tsx";
import { FilmDetailsPage } from "./pages/FilmDetails.tsx";
import NotFoundErrorPage from "./pages/NotFoundError.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <NotFoundErrorPage />,
		children: [
			{
				element: <HomePage />,
				index: true,
			},
			{
				path: "/search/:movieTitle?",
				element: <SearchPage />,
			},
			{
				path: "/film/:imdbId",
				element: <FilmDetailsPage />,
			},
		],
	},
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
);
