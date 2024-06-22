
import React from "react"
import Card from './Card'
import "../App.css"
import kidsData from "./scripts/data-kids"
import teensData from "./scripts/data-teens"
import adultsData from "./scripts/data-adults"

let arrayToBeTraversed = []

export default function ImageList(props) {

	let ageGroup = props.ageGroup.toLowerCase();

	if (ageGroup === "kids") {
		arrayToBeTraversed = kidsData
	} else if (ageGroup === "teens") {
		arrayToBeTraversed = teensData
	} else {
		arrayToBeTraversed = adultsData
	}


	// Map and create array with all card data
	const cards = arrayToBeTraversed.map(card => {
		return <Card
			img={card.img}
			title={card.title}
		/>
	})

	return (
		<div className="image-text-wrapper">
			<h2>{props.ageRange} </h2>
			<div className="images-list">
				{/* Renders all the cards, oof , the efficiency !! */}
				{cards}
			</div>

			<div class="slider-scrollbar">
				<div class="scrollbar-track">
					<div class="scrollbar-thumb"></div>
				</div>
			</div>
		</div>
	)
}