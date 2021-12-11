import Card from './Card';
import { colorThemeArray, colorLightArray, colorDarkArray } from './Arrays';
import './Buttons.scss';

const Buttons = () => {
	const buttonFilledTheme = colorThemeArray.map((color, i) => {
		return (
			<button className={`btn btn-${color}`} key={`ct-${i}`}>
				btn-{color}
			</button>
		);
	});
	const buttonFilledLight = colorLightArray.map((color, i) => {
		return (
			<button className={`btn btn-${color}`} key={`cl-${i}`}>
				btn-{color}
			</button>
		);
	});
	const buttonFilledDark = colorDarkArray.map((color, i) => {
		return (
			<button className={`btn btn-${color}`} key={`cd-${i}`}>
				btn-{color}
			</button>
		);
	});

	return (
		<Card
			classNames='Buttons'
			cardTitle='Buttons'
			cardBody={
				<>
					<h4 className='card-section-title'>Button - filled</h4>
					<div className='container p-1'>{buttonFilledTheme}</div>
					<div className='container p-1'>{buttonFilledLight}</div>
					<div className='container p-1 background-white'>
						{buttonFilledDark}
					</div>
				</>
			}
		/>
	);
};

export default Buttons;
