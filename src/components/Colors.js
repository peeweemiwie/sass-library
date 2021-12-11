import Card from './Card';
import './Colors.scss';
import { colorArray } from './Arrays';

const Colors = () => {
	const contentText = colorArray.map((color, i) => {
		if (color === 'black' || color.includes('gray')) {
			return (
				<span className={`span text-${color} background-white`} key={`ct-${i}`}>
					text-{color}
				</span>
			);
		} else {
			return (
				<span className={`span text-${color}`} key={`ct-${i}`}>
					text-{color}
				</span>
			);
		}
	});
	const contentBorder = colorArray.map((color, i) => (
		<span className={`span border-${color}`} key={`cb-${i}`}>
			border-{color}
		</span>
	));
	const contentBg = colorArray.map((color, i) => {
		if (color === 'white' || color === 'light') {
			return (
				<span className={`span background-${color} text-black`} key={`cb-${i}`}>
					background-{color}
				</span>
			);
		} else {
			return (
				<span className={`span background-${color} text-white`} key={`cb-${i}`}>
					background-{color}
				</span>
			);
		}
	});

	return (
		<Card
			classNames='Colors'
			cardTitle='Colors'
			cardBody={
				<>
					<h4 className='card-section-title'>Color: text</h4>
					<div className='container'>{contentText}</div>
					<h4 className='card-section-title'>Color: border</h4>
					<div className='container'>{contentBorder}</div>
					<h4 className='card-section-title'>Color: background</h4>
					<div className='container'>{contentBg}</div>
				</>
			}
		/>
	);
};

export default Colors;
