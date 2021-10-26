import Navigation from './Navigation'
import ColorThemeFormik from './ColorThemeFormik'

export default function Header() {
	return (
		<div>
			<h1>
				<span style={{color: 'red'}}>Indian</span>
				<span style={{fontstyle: 'italic'}}>FUSION</span>
			</h1>
			<Navigation />
			<ColorThemeFormik />
		</div>
	)
}
			


