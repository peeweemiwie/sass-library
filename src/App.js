import { Routes, Route, Link } from 'react-router-dom';
import FontSizes from './components/FontSizes';
import Colors from './components/Colors';
import BorderRadius from './components/BorderRadius';
import Buttons from './components/Buttons';
import Paddings from './components/Paddings';
import Margins from './components/Margins';
import Gaps from './components/Gaps';
import Nav from './components/Nav';
import './App.scss';
import Intro from './components/Intro';

function App() {
	return (
		<div className='App'>
			<header className='header'>
				<h1 className='h1'>
					<Link to='/'>Design System</Link>
				</h1>
			</header>
			<section className='content'>
				<Nav />
				<main className='main'>
					<Routes>
						<Route path='/' element={<Intro />} />
						<Route path='font-sizes' element={<FontSizes />} />
						<Route path='colors' element={<Colors />} />
						<Route path='border-radius' element={<BorderRadius />} />
						<Route path='buttons' element={<Buttons />} />
						<Route path='paddings' element={<Paddings />} />
						<Route path='margins' element={<Margins />} />
						<Route path='gaps' element={<Gaps />} />
					</Routes>
				</main>
			</section>
		</div>
	);
}

export default App;
