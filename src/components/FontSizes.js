import Card from './Card';
import './FontSizes.scss';

const FontSizes = () => {
	const fontSizes = ['xs', 'sm', 'reg', 'md', 'lg', 'xl'];

	return (
		<Card
			classNames='FontSizes'
			cardTitle='Font size'
			cardBody={fontSizes.map((size, i) => (
				<p className={`font-size-${size}`} key={`fs-${i}`}>
					font-size-{size}
				</p>
			))}
		/>
	);
};

export default FontSizes;
