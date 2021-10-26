import axios from 'axios'
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const Img = styled.img`
	display: block;
	margin-left: auto;
	margin-right: auto;
	width: 50%;
`

export default function Biryani() {
	const [image, setImage] = useState(null)
	 useEffect(() => {
		 axios.get('https://foodish-api.herokuapp.com/api/images/biryani/'
		 ).then((response) => {
				setImage(response.data.image)
			})
	 }, [])

	return (
		 <div>
			 <h3>Biryani</h3>
			 <p>
				 An Indian dish made with highly seasoned rice and meat, fish, or vegetables.
			 </p>
			 <div>
				{image && 
				<Img src={image} alt="" />}
			 </div>
		 </div>
	 )
}
			 
			 