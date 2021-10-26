import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

const Span = styled.span`
	clip: rect(0 0 0 0);
	clip-path: inset(50%);
	height: 1px;
	overflow: hidden;
	position: absolute;
	white-space: nowrap;
	width: 1px;
`
const SearchBar = ({ searchQuery, setSearchQuery }) => {
		const history = useHistory()
		const onSubmit = (e) => {
				history.push(`?s=${searchQuery}`)
				e.preventDefault()
		}

		return(
			<form
				action="/" 
				method="get"
				autoComplete="off"
				onSubmit={onSubmit}
			>
				<label htmlFor="header-search">
					<Span>Search recipes</Span>
				</label>
				<input
					value={searchQuery} 
					onInput={(e) => setSearchQuery(e.target.value)}
					type="text"
					id="header-search"
					placeholder="Search recipes"
					name="s"
				/>
				<button type="submit">Search</button>
			</form>
		)

}

export default SearchBar