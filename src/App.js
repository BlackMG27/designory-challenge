// @see https://create-react-app.dev/docs/adding-images-fonts-and-files/#adding-svgs
import {Fragment} from 'react';
import Navigation from './component/header/navigation';
import Hero from './component/hero/hero';
import Article from './component/articles/articles';
import Footer from './component/footer/footer';
import Articles from './component/articles/articles';
import Feature from './component/feature/feature';
import './App.scss';

function App() {
	return (
		<Fragment>
			<Navigation/>
			<Hero/>
			<Articles/>
			<Feature/>
			<Footer/>
		</Fragment>
		
	);
}

export default App;
