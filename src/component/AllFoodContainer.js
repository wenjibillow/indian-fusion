import React, { useContext, useEffect } from "react"
import { PhotoContext } from "../context/PhotoContext"
import AllFood from './AllFood'
import Loader from "./Loader";

const AllFoodContainer = ({ searchTerm }) => {
	const { images, loading, runSearch } = useContext(PhotoContext);
	useEffect(() => {
		runSearch(searchTerm);
		// eslint-disable-next-line
	}, [searchTerm]);

	return (
		<div>
			{loading ? <Loader /> : <AllFood data={images} />}
		</div>
	);
};

export default AllFoodContainer;