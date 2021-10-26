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

export default function Dosa() {
	const [image, setImage] = useState(null)
	 useEffect(() => {
		 axios.get('https://foodish-api.herokuapp.com/api/images/dosa/'
		 ).then((response) => {
			 setImage(response.data.image)
		 })
	}, [])

return (
		<>
			<h3>Dosa</h3>
			<Div>(in southern Indian cooking) a pancake made from rice flour and ground pulses, typically served with a spiced vegetable filling.</Div>
			<div>
			{image && 
			<Img src={image} alt="" />}
			</div>
		</>
	)
}