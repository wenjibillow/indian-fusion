import React from 'react'
import { NavLink, BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import Biryani from './Biryani'
import ButterChicken from './ButterChicken'
import Dessert from './Dessert'
import Dosa from './Dosa'
import Idly from './Idly'
import Samosa from './Samosa'
import Recipes from './Recipes'


const P = styled.p`
	margin-top: 30px;
	margin-bottom: 20px
`
const Span = styled.span`
	margin-left: 25px;
`

export default function Navigation() {
	return (
		<nav className="main-nav">
			<Router>
				<div>
					<P>
						<Span><NavLink style={{color:'dimgrey'}} to="/">Home</NavLink></Span>
						<Span><NavLink style={{color:'dimgrey'}} to="/biryani">Biryani</NavLink></Span>
						<Span><NavLink style={{color:'dimgrey'}} to="/butter-chicken">Butter-Chicken</NavLink></Span>
						<Span><NavLink style={{color:'dimgrey'}} to="/dessert">Dessert</NavLink></Span>
						<Span><NavLink style={{color:'dimgrey'}} to="/dosa">Dosa</NavLink></Span>
						<Span><NavLink style={{color:'dimgrey'}} to="/idly">Idly</NavLink></Span>
						<Span><NavLink style={{color:'dimgrey'}} to="/samosa">Samosa</NavLink></Span>
						<Span><NavLink style={{color:'dimgrey'}} to="/recipes">Recipes</NavLink></Span>
					</P>
					<Switch>
						<Route exact path="/"></Route>
						<Route path="/biryani"><Biryani /></Route>
						<Route path="/butter-chicken"><ButterChicken /></Route>
						<Route path="/dessert"><Dessert /></Route>
						<Route path="/dosa"><Dosa /></Route>
						<Route path="/idly"><Idly /></Route>
						<Route path="/samosa"><Samosa /></Route>
						<Route path="/recipes"><Recipes /></Route>
					</Switch>
				</div>
			</Router>
		</nav>
	)
}
			 
						
						
				
			
			
