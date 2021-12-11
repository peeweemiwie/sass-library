import Card from './Card';
import './Colors.scss';
import { colorThemeArray, colorLightArray, colorDarkArray } from './Arrays';

const Colors = () => {
	// text colors
	const textThemeColors = colorThemeArray.map((color, i) => (
		<span className={`span text-${color}`} key={`ct-${i}`}>
			text-{color}
		</span>
	));
	const textLightColors = colorLightArray.map((color, i) => (
		<span className={`span text-${color}`} key={`ct-${i}`}>
			text-{color}
		</span>
	));
	const textDarkColors = colorDarkArray.map((color, i) => (
		<span className={`span text-${color}  background-white`} key={`ct-${i}`}>
			text-{color}
		</span>
	));

	// border colors
	const borderThemeColors = colorThemeArray.map((color, i) => (
		<span className={`span border-${color}`} key={`cb-${i}`}>
			border-{color}
		</span>
	));
	const borderLightColors = colorLightArray.map((color, i) => (
		<span className={`span border-${color}`} key={`cb-${i}`}>
			border-{color}
		</span>
	));
	const borderDarkColors = colorDarkArray.map((color, i) => (
		<span className={`span border-${color} text-dark`} key={`cb-${i}`}>
			border-{color}
		</span>
	));

	// background color
	// border colors
	const backgroundThemeColors = colorThemeArray.map((color, i) => (
		<span className={`span background-${color}`} key={`cbg-${i}`}>
			background-{color}
		</span>
	));
	const backgroundLightColors = colorLightArray.map((color, i) => (
		<span className={`span background-${color} text-dark`} key={`cbg-${i}`}>
			background-{color}
		</span>
	));
	const backgroundDarkColors = colorDarkArray.map((color, i) => (
		<span className={`span background-${color} text-white`} key={`cbg-${i}`}>
			background-{color}
		</span>
	));

	// const contentBg = colorArray.map((color, i) => {
	// 	if (color === 'white' || color === 'light') {
	// 		return (
	// 			<span className={`span background-${color} text-black`} key={`cb-${i}`}>
	// 				background-{color}
	// 			</span>
	// 		);
	// 	} else {
	// 		return (
	// 			<span className={`span background-${color} text-white`} key={`cb-${i}`}>
	// 				background-{color}
	// 			</span>
	// 		);
	// 	}
	// });

	return (
		<Card
			classNames='Colors'
			cardTitle='Colors'
			cardBody={
				<>
					<h4 className='card-section-title'>Color: text</h4>
					<div className='container g-1'>{textThemeColors}</div>
					<div className='container g-1'>{textLightColors}</div>
					<div className='container g-1'>{textDarkColors}</div>
					<h4 className='card-section-title'>Color: border</h4>
					<div className='container g-1 p-1'>{borderThemeColors}</div>
					<div className='container g-1 p-1'>{borderLightColors}</div>
					<div className='container g-1 p-1 background-white'>
						{borderDarkColors}
					</div>
					<h4 className='card-section-title'>Color: background</h4>
					<div className='container g-1 p-1'>{backgroundThemeColors}</div>
					<div className='container g-1 p-1'>{backgroundLightColors}</div>
					<div className='container g-1 p-1 background-white'>
						{backgroundDarkColors}
					</div>
				</>
			}
		/>
	);
};

export default Colors;
