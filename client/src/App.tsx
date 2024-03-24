import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Header } from "./components/Header";
import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
	return (
		<>
			<Header />
			<div id="detail">
				<Outlet />
			</div>
		</>
	);
}

export default App;
