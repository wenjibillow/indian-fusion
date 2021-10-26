
import './App.css'
import PhotoContextProvider from "./context/PhotoContext"
import Header from './component/Header'
import Biryani from './component/Biryani'
import ButterChicken from './component/ButterChicken'
import Dosa from './component/Dosa'
import Idly from './component/Idly'
import Samosa from './component/Samosa'
import Dessert from './component/Dessert'
import Footer from './component/Footer'
import AllFoodContainer from './component/AllFoodContainer'

export default function App() {
	return (
		<PhotoContextProvider>
				<div className="App">
					<Header />
					<AllFoodContainer />
					<Biryani />
					<ButterChicken />
					<Dosa />
					<Idly />
					<Samosa />
					<Dessert />
					<Footer />
				</div>
		</PhotoContextProvider>
	);
}
					
					
	

 

			
