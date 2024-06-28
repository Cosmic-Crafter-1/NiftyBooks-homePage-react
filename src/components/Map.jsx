import React from "react";
import mapImg from "../assets/map.jpg"
import "./Map.css"

export default function Map() {
	return (
		<div className="map">
			<a href="../interactive-map.html" target="_blank">
				<img src={mapImg} alt="Image of a world map." />
			</a>

			<h1> Interactive Map </h1>
			<p>
				Explore our amazing planet! 
				<br />
				Click on the map to discover cool places and see how climate change is impacting them. Let's be Earth heroes and learn how to help!
			</p>
		</div>
	)
}