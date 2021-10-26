import axios from 'axios'
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const Div = styled.div`
	display: block;
	margin-left: auto;
	margin-right: auto;
	width: 50%;
`
const Img = styled.img`
	display: block;
	margin-left: auto;
	margin-right: auto;
	width: 50%;
`

export default function ButterChicken() {
	const [image, setImage] = useState(null)
	 useEffect(() => {
		 axios.get('https://foodish-api.herokuapp.com/api/images/butter-chicken/'
		 ).then((response) => {
			 setImage(response.data.image)
		 })
	}, [])

return (
		<>
			<h3>Butter-Chicken</h3>
			<Div>
				Similar to Chicken Tikka Masala, Butter Chicken is one of the most popular curries at any Indian restaurant around the world. Aromatic golden chicken pieces in a smooth buttery & creamy tomato based gravy.
			</Div>
			<div>
				{image && 
				<Img src={image} alt="" />}
			</div>
		</>
	)
}
				
			 