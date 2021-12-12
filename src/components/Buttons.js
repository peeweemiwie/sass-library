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

	// button: border
	const buttonBorderTheme = colorThemeArray.map((color, i) => {
		return (
			<button className={`btn btn-border-${color}`} key={`ctb-${i}`}>
				btn-border-{color}
			</button>
		);
	});
	const buttonBorderLight = colorLightArray.map((color, i) => {
		return (
			<button className={`btn btn-border-${color}`} key={`clb-${i}`}>
				btn-border-{color}
			</button>
		);
	});
	const buttonBorderDark = colorDarkArray.map((color, i) => {
		return (
			<button className={`btn btn-border-${color}`} key={`cdb-${i}`}>
				btn-border-{color}
			</button>
		);
	});

	// button: underline
	const buttonUnderlineTheme = colorThemeArray.map((color, i) => {
		return (
			<button className={`btn btn-underline-${color}`} key={`ctt-${i}`}>
				btn-underline-{color}
			</button>
		);
	});
	const buttonUnderlineLight = colorLightArray.map((color, i) => {
		return (
			<button className={`btn btn-underline-${color}`} key={`clt-${i}`}>
				btn-underline-{color}
			</button>
		);
	});
	const buttonUnderlineDark = colorDarkArray.map((color, i) => {
		return (
			<button className={`btn btn-underline-${color}`} key={`cdt-${i}`}>
				btn-underline-{color}
			</button>
		);
	});

	// button: text
	const buttonTextTheme = colorThemeArray.map((color, i) => {
		return (
			<button className={`btn btn-text-${color}`} key={`ctt-${i}`}>
				btn-text-{color}
			</button>
		);
	});
	const buttonTextLight = colorLightArray.map((color, i) => {
		return (
			<button className={`btn btn-text-${color}`} key={`clt-${i}`}>
				btn-text-{color}
			</button>
		);
	});
	const buttonTextDark = colorDarkArray.map((color, i) => {
		return (
			<button className={`btn btn-text-${color}`} key={`cdt-${i}`}>
				btn-text-{color}
			</button>
		);
	});

	return (
		<>
			<Card
				classNames='Buttons'
				cardTitle='Button - filled'
				cardBody={
					<>
						<div className='container p-1 g-1'>{buttonFilledTheme}</div>
						<div className='container p-1 g-1'>{buttonFilledLight}</div>
						<div className='container p-1 g-1 background-light'>
							{buttonFilledDark}
						</div>
					</>
				}
			/>
			<Card
				classNames='Buttons'
				cardTitle='Button - border'
				cardBody={
					<>
						<div className='container p-1 g-1'>{buttonBorderTheme}</div>
						<div className='container p-1 g-1'>{buttonBorderLight}</div>
						<div className='container p-1 g-1 background-light'>
							{buttonBorderDark}
						</div>
					</>
				}
			/>
			<Card
				classNames='Buttons'
				cardTitle='Button - underline'
				cardBody={
					<>
						<div className='container p-1 g-1'>{buttonUnderlineTheme}</div>
						<div className='container p-1 g-1'>{buttonUnderlineLight}</div>
						<div className='container p-1 g-1 background-light'>
							{buttonUnderlineDark}
						</div>
					</>
				}
			/>
			<Card
				classNames='Buttons'
				cardTitle='Button - text'
				cardBody={
					<>
						<div className='container p-1 g-1'>{buttonTextTheme}</div>
						<div className='container p-1 g-1'>{buttonTextLight}</div>
						<div className='container p-1 g-1 background-light'>
							{buttonTextDark}
						</div>
					</>
				}
			/>
		</>
	);
};

export default Buttons;
