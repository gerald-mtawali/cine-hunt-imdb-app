import { Header } from "./components/common/Header";
import { SearchBar } from "./components/Search/SearchBar";
import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
	return (
		<>
			<Header />
			<SearchBar />
			<div id="detail">
				<Outlet />
			</div>
		</>
	);
}

export default App;
