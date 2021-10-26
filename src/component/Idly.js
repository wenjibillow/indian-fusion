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

export default function Idly() {
	const [image, setImage] = useState(null)
	 useEffect(() => {
		 axios.get('https://foodish-api.herokuapp.com/api/images/dosa/'
		 ).then((response) => {
			 setImage(response.data.image)
		 })
	}, [])

	return (
		<div>
			<h3>Idly</h3>
			<P>
				A type of savoury rice cake, originating from the Indian subcontinent, popular as breakfast foods in Southern India and in Sri Lanka. The cakes are made by steaming a batter consisting of fermented black lentils (de-husked) and rice.(https://en.wikipedia.org/wiki/Idli).
			</P>
			<div>
			{image && 
			<Img src={image} alt="" />}
			</div>
		</div>
	)
}