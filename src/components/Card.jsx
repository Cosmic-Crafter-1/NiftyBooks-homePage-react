import "./Card.css"
import React from "react";

export default function Card(props) {
	console.log(props)
	return (
		<div className="card">
			<img src={props.img} alt={`Image of ${props.title}`} />
			<p> Adventure with Elara
				<br />
					(Coming Soon)
			</p>
		</div>
	)
}