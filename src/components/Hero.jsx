import React from "react";
import collage1 from "../assets/collage-1.jpg"
import collage2 from "../assets/collage-2.jpg"
import collage3 from "../assets/collage-3.jpg"


export default function Hero() {
	return (
		<div className="hero-section">
			<img src={collage3} alt="collage of story covers" className="collage-img" />
			<div className="hero-text">
				<h1> Re-Imagine a story.</h1>
				<p>
					Forget the limitations of traditional books. Our interactive platform brings stories to life with captivating features. 
					
					<br></br>
					<br></br>
					
					Explore dynamic illustrations, solve puzzles that propel the narrative, and make choices that shape the characters' destinies.
				</p>
			</div>
		</div>
	)
}