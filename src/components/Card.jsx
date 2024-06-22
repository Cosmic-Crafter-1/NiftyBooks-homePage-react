import "./Card.css"
import React from "react";

export default function Card(props) {
	return (
		<div className="card">
			<img src={props.img} alt={`Image of ${props.title}`} />
			<div className="card-desc">
				<p>{props.title}</p>
			</div>
		</div>
	)
}