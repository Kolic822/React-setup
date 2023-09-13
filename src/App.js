import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import { Cart } from "./pages/cart/cart";
import { Shop } from "./pages/shop/shop";

const App = () => (
	<div className="App">
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" element={<Shop />}></Route>
				<Route path="/cart" element={<Cart />}></Route>
			</Routes>
		</Router>
	</div>
);

export default App;
