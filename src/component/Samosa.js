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

export default function Samosa() {
	const [image, setImage] = useState(null)
	 useEffect(() => {
		 axios.get('https://foodish-api.herokuapp.com/api/images/samosa/'
		 ).then((response) => {
			 setImage(response.data.image)
		 })
	}, [])

	return (
		<div>
			<h3>Samosa</h3>
			<P>
				A South Asian fried or baked pastry with a savory filling like spiced potatoes, onions, peas, beef and other meats, or lentils. It may take different forms, including triangular, cone, or half-moon shapes, depending on the region. Samosas are often accompanied by chutney.(https://en.wikipedia.org/wiki/Samosa).
			</P>
			<div>
				{image && 
				<Img src={image} alt="" />}
			</div>
		</div>
	)
}