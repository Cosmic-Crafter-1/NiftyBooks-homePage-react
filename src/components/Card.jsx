
import React from "react";
import image1 from "../assets/story-covers/for-teens/2.jpg"

export default function Card(props) {
	console.log(props)
	return (
		<div className="card">
			<h1> {props.title} </h1>
			<img src={props.img} alt={`Image of ${props.title}`} />
		</div>
	)
}