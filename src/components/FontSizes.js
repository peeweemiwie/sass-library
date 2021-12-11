import Card from './Card';
import './FontSizes.scss';

const FontSizes = () => {
	const fontSizes = ['xs', 'sm', 'reg', 'md', 'lg', 'xl'];

	return (
		<Card
			classNames='FontSizes'
			cardTitle='Font size'
			cardBody={fontSizes.map((size, i) => (
				<p className={`font-${size}`} key={`fs-${i}`}>
					font-{size}
				</p>
			))}
		/>
	);
};

export default FontSizes;
