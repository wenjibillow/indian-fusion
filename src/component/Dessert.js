import axios from 'axios'
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const P = styled.p`
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

export default function Dessert() {
	const [image, setImage] = useState(null)
	 useEffect(() => {
		 axios.get('https://foodish-api.herokuapp.com/api/images/dessert/'
		 ).then((response) => {
			 setImage(response.data.image)
		 })
	}, [])

return (
		<div>
			<h3>Dessert</h3>
			<P>
				No matter what type of food you like, you would not forget the last cours of a perfect dining: dessert! 🦄
			</P>
			<div>
				{image && 
				<Img src={image} alt="" />}
			</div>
		</div>
	)
}