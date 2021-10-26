import React, { createContext, useState } from "react"
import axios from "axios"
export const PhotoContext = createContext()

const PhotoContextProvider = props => {
	const [images, setImages] = useState([])
	const [loading, setLoading] = useState(true)
	const runSearch = () => {
		axios
			.get('https://foodish-api.herokuapp.com/api/')
			.then(response => {
				setImages(response.data.image);
				setLoading(false);
			})
			.catch(error => {
				console.log(
					"Encountered an error",
					error
				);
			});
	};
	return (
		<PhotoContext.Provider value={{ images, loading, runSearch }}>
			{props.children}
		</PhotoContext.Provider>
	);
};

export default PhotoContextProvider