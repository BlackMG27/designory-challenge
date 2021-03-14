// @see https://create-react-app.dev/docs/adding-images-fonts-and-files/#adding-svgs
import {Fragment} from 'react';
import Navigation from './component/header/navigation';
import Hero from './component/hero/hero';
import Footer from './component/footer/footer';

import './App.scss';

function App() {
	return (
		<Fragment>
			<Navigation/>
			<Hero/>
			<Footer/>
		</Fragment>
		
	);
}

export default App;
