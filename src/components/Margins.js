import Card from './Card';
import './Margins.scss';

const Margins = () => {
	const margin = [...Array(7)].map((_, index) => (
		<span key={`margin${index}`} className={`m-${index} border-white`}>
			m-{index}
		</span>
	));
	const marginTop = [...Array(7)].map((_, index) => (
		<span key={`marginTop${index}`} className={`mt-${index} border-white`}>
			mt-{index}
		</span>
	));
	const marginRight = [...Array(7)].map((_, index) => (
		<span key={`marginRight${index}`} className={`mr-${index} border-white`}>
			mr-{index}
		</span>
	));
	const marginBottom = [...Array(7)].map((_, index) => (
		<div
			style={{ display: 'flex', flexDirection: 'column', gap: 0 }}
			className='background-gray'
			key={`marginBottom${index}`}
		>
			<span className={`mb-${index} border-white`}>mb-{index}</span>{' '}
			<span className={`mb-${index} border-white`}>mb-{index}</span>
		</div>
	));
	const marginLeft = [...Array(7)].map((_, index) => (
		<span key={`marginLeft${index}`} className={`ml-${index} border-white`}>
			ml-{index}
		</span>
	));

	return (
		<>
			<Card
				classNames={'Margin'}
				cardTitle={'margin'}
				cardBody={<div className='container'>{margin}</div>}
			/>
			<Card
				classNames={'MarginTop'}
				cardTitle={'margin-top'}
				cardBody={<div className='container'>{marginTop}</div>}
			/>
			<Card
				classNames={'MarginRight'}
				cardTitle={'margin-right'}
				cardBody={<div className='container'>{marginRight}</div>}
			/>
			<Card
				classNames={'MarginBottom'}
				cardTitle={'margin-bottom'}
				cardBody={<div className='container'>{marginBottom}</div>}
			/>
			<Card
				classNames={'MarginLeft'}
				cardTitle={'margin-left'}
				cardBody={<div className='container'>{marginLeft}</div>}
			/>
		</>
	);
};

export default Margins;
