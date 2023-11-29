import React, { useEffect, useState } from "react";
import "./App.css";

function Gallery() {
	//declare data var and setData function
	const [data, setData] = useState(null);

	//fetch data from API
	useEffect(() => {
		fetch(
			"https://raw.githubusercontent.com/firmusgrid/firmus-web-challenge-data/main/index.json"
		)
			.then((response) => response.json())
			//set modified response data
			.then((data) => setData(data))
			.catch((error) => console.error(error));
	}, []);

	return (
		<div id="frame">
			<div id="gallery">
				{data &&
					// If data exists, create each as img
					data.map((item, index) => (
						<img
							loading="lazy"
							src={
								"https://raw.githubusercontent.com/firmusgrid/firmus-web-challenge-data/main/" +
								item.thumbnailUrl
							}
							alt={item.title}
							key={index}
							height="256"
							width="256"
						/>
					))}
			</div>
		</div>
	);
}

export default Gallery;
