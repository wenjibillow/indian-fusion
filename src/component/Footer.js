import styled from 'styled-components'

const Div = styled.div`
	margin-top: 20px;
	margin-bottom: 30px;
	display: block;
	margin-left: auto;
	margin-right: auto;
	width: 50%;
	font-size: 12px
`

export default function Footer() {
	return (
		<Div>
			<p>
				Designed and Coded by : Wenji © 2021
			</p>
			<p>
				All images are taken from API (Foodish): <a target="_blank" rel="noreferrer" href='https://foodish-api.herokuapp.com/api/'> To foodish</a> 
			</p>
		</Div>
	)
}


