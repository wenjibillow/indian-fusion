import axios from 'axios'
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import SearchBar from './SearchBar'
import Announcer from './Announcer'

const Section = styled.section`
	display: block;
	margin-bottom: 30px;   
	margin-left: auto;
	margin-right: auto;
	width: 50%;
`

const posts = [
		{ id: '1', name: 'Eggplant and Potato (Indian)' },
		{ id: '2', name: 'Indian Potatoes, Peas and Cauliflower' },
		{ id: '3', name: 'Indian Dhal' },
		{ id: '4', name: 'Boka Dushi (Dutch West Indian Chicken Kebabs' },
		{ id: '5', name: 'Spice Islands&#174; Spicy Indian Cauliflower' },
		{ id: '6', name: '\nIndian Stuffed Okra (Bhindi Masala) Recipe\n\n' },
		{ id: '7', name: 'Basic Indian Curry with Paneer' },
		{ id: '8', name: 'Cajun-Creole-Indian?? Cod ??' },
		{ id: '9', name: 'Indian Ghee Rice' },
		{ id: '10', name: 'Indian Potatoes with Mustard Seeds (Sookhi Bhaji)' },
]

const filterPosts = (posts, query) => {
		if (!query) {
				return posts;
		}

		return posts.filter((post) => {
				const postName = post.name.toLowerCase();
				return postName.includes(query);
		});
}

export default function Recipes() {
	const [recipes, setRecipes] = useState(null)
	 useEffect(() => {
		 axios.get('http://www.recipepuppy.com/api/?i=turmeric&q=indian&p=3', 
		 ).then((res) => {
				setRecipes(res.data.results)
			}).catch(error => error)
		
	 }, [])

	 //post search bar
	 const { search } = window.location
	 const query = new URLSearchParams(search).get('s')
	 const [searchQuery, setSearchQuery] = useState(query || '')
	 const filteredPosts = filterPosts(posts, searchQuery)

	return (
		<Section>
			<h1>Indian Cuisine Recipes</h1>
			<div>
				<Announcer
					message={`${filteredPosts.length} recipes`}
				/>
				<SearchBar
						 searchQuery={searchQuery}
						 setSearchQuery={setSearchQuery}
				/>
				<ul>
					{filteredPosts.map((post) => (
						<li key={post.id}>{post.name}</li>
					))}
				</ul>
			</div>
			<div>
			 {recipes && (
				 <ul>
					 {recipes.map((recipe) => (
						 <li key={recipe.title}>
							 <p style={{backgroundColor: 'lavenderblush'}}><b>{recipe.title}</b></p>
							 <p><img src={recipe.thumbnail} alt="" /></p>
							 <p><b>Ingredients:</b> {recipe.ingredients}</p>
							 <p><b>How to:</b> <a target="_blank" rel="noreferrer" href={recipe.href}>read me</a></p>
						 </li>
					 ))}
				 </ul>
			 )}
			</div>
			<div>
				Page data taken from API (recipepuppy): <a target="_blank" rel="noreferrer" href='http://www.recipepuppy.com/about/api/'>To recipepuppy</a>
			</div>
		</Section>
	 )
}
			 
			
		 

			 
			 