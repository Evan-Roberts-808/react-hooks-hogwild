import React, { useState } from "react";
import Nav from "./Nav";
import Tile from "./Tile";
import FilterNSort from "./FilterNSort";
import hogs from "../porkers_data";

function App() {
	const [greased, setGreased] = useState(false);
	const [sort, setSort] = useState("name");

	function filterHogs(){
		if(greased) {
			return hogs.filter((hog) => hog.greased)
		}
		return hogs
	}

	return (
		<div className="App">
			<Nav />
			<FilterNSort setGreased={setGreased} greased={greased} setSort={setSort} sort={sort}/>
			<Tile hogs={filterHogs()} sort={sort}/>
		</div>
	);
}

export default App;
