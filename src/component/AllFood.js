import axios from 'axios'
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const Img = styled.img`
	display: block;
	margin-left: auto;
	margin-right: auto;
	width: 50%;  
`
const Button = styled.button`
	display: block;
	margin-bottom: 30px;
	margin-left: auto;
	margin-right: auto;
	width: 50%; 
`

export default function AllFood() {
	const [image, setImages] = useState(null)
	 useEffect(() => {
		 axios.get('https://foodish-api.herokuapp.com/api/'
		 ).then((response) => {
			 setImages(response.data.image)
		 })
	}, [])

	const refresh = () => {
		window.location.reload()
	}
 
	return (
		<div>
			<h3>Indian Food Collection</h3>
			<Button onClick={refresh}>
				Click me to see more random food images
			</Button>
			<div>
				{image && 
				<Img src={image} alt="" />}
			</div>
		</div>
	)
}
	
			 
				
			 
			 

 
