import React from "react";
import logo from "../assets/logo.svg"

export default function Navbar () {
	return (
		<nav>
			<img src={logo} alt="idea bulb logo" className="logo"/>
			<h1> NiftyBooks </h1>
		</nav>
	)
}