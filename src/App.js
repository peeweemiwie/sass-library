import { Routes, Route } from 'react-router-dom';
import FontSizes from './components/FontSizes';
import Colors from './components/Colors';
import BorderRadius from './components/BorderRadius';
import Buttons from './components/Buttons';
import Paddings from './components/Paddings';
import Margins from './components/Margins';
import Gaps from './components/Gaps';
import Nav from './components/Nav';
import './App.scss';

function App() {
	return (
		<div className='App'>
			<header className='header'>
				<h1 className='h1'>Design System</h1>
			</header>
			<Nav />
			<main className='main'>
				<Routes>
					<Route path='font-sizes' element={<FontSizes />} />
					<Route path='colors' element={<Colors />} />
					<Route path='border-radius' element={<BorderRadius />} />
					<Route path='buttons' element={<Buttons />} />
					<Route path='paddings' element={<Paddings />} />
					<Route path='margins' element={<Margins />} />
					<Route path='gaps' element={<Gaps />} />
				</Routes>
			</main>
		</div>
	);
}

export default App;
