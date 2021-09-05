import React from "react";
import "./App.css";
import Header from "./components/Header";
import SideBar from "./components/SideBar";

function App() {
	return (
		<div className="app">
			<Header />
			<div className="app-body">
				<SideBar/>
			</div>

			{/* Left SideBar */}
			{/* Feed */}
			{/* Right Sidebar - widjets */}
		</div>
	);
}

export default App;
