import Card from './Card';
import './Paddings.scss';

const Paddings = () => {
	const padding = [...Array(7)].map((_, index) => (
		<span key={`padding${index}`} className={`p-${index} border-white`}>
			p-{index}
		</span>
	));
	const paddingTop = [...Array(7)].map((_, index) => (
		<span key={`paddingTop${index}`} className={`pt-${index} border-white`}>
			pt-{index}
		</span>
	));
	const paddingRight = [...Array(7)].map((_, index) => (
		<span key={`paddingRight${index}`} className={`pr-${index} border-white`}>
			pr-{index}
		</span>
	));
	const paddingBottom = [...Array(7)].map((_, index) => (
		<span key={`paddingBottom${index}`} className={`pb-${index} border-white`}>
			pb-{index}
		</span>
	));
	const paddingLeft = [...Array(7)].map((_, index) => (
		<span key={`paddingLeft${index}`} className={`pl-${index} border-white`}>
			pl-{index}
		</span>
	));

	return (
		<>
			<Card
				classNames={'Padding'}
				cardTitle={'padding'}
				cardBody={<div className='container'>{padding}</div>}
			/>
			<Card
				classNames={'PaddingTop'}
				cardTitle={'padding-top'}
				cardBody={<div className='container'>{paddingTop}</div>}
			/>
			<Card
				classNames={'PaddingRight'}
				cardTitle={'padding-right'}
				cardBody={<div className='container'>{paddingRight}</div>}
			/>
			<Card
				classNames={'PaddingBottom'}
				cardTitle={'padding-bottom'}
				cardBody={<div className='container'>{paddingBottom}</div>}
			/>
			<Card
				classNames={'PaddingLeft'}
				cardTitle={'padding-left'}
				cardBody={<div className='container'>{paddingLeft}</div>}
			/>
		</>
	);
};

export default Paddings;
