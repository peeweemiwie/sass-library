import Card from './Card';
import './BorderRadius.scss';

const BorderRadius = () => {
	const radiusArray = ['sm', 'md', 'lg', 'xl', 'round'];
	const content = radiusArray.map((radius, i) => (
		<span
			className={`span border-radius-${radius} border-white text-white`}
			key={`radius-${i}`}
		>
			border-radius-{radius}
		</span>
	));
	return (
		<Card
			classNames='borderRadius'
			cardTitle='Border Radius'
			cardBody={<div className='container g-1'>{content}</div>}
		/>
	);
};

export default BorderRadius;
