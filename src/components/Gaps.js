import Card from './Card';
import './Gaps.scss';

const Gaps = () => {
	const gap = [...Array(7)].map((_, index) => (
		<div key={`gap${index}`} className={`container g-${index} p-1 border-gray`}>
			<span className='border-white'>g-{index}</span>
			<span className='border-white'>g-{index}</span>
			<span className='border-white'>g-{index}</span>
			<span className='border-white'>g-{index}</span>
			<span className='border-white'>g-{index}</span>
			<span className='border-white'>g-{index}</span>
		</div>
	));
	const gapRow = [...Array(7)].map((_, index) => (
		<div
			className={`d-flex rg-${index} p-1 border-gray flex-dir-col`}
			style={{ maxWidth: '12rem' }}
		>
			<span className='border-white'>rg-{index}</span>
			<span className='border-white'>rg-{index}</span>
			<span className='border-white'>rg-{index}</span>
		</div>
	));
	const gapCol = [...Array(7)].map((_, index) => (
		<div className={`d-flex cg-${index} p-1 border-gray flex-dir-row`}>
			<span className='border-white'>cg-{index}</span>
			<span className='border-white'>cg-{index}</span>
			<span className='border-white'>cg-{index}</span>
		</div>
	));
	return (
		<>
			<Card
				classNames={'Gaps'}
				cardTitle={'gap'}
				cardBody={
					<div
						className='g-1 d-flex flex-dir-col'
						style={{
							maxWidth: '20rem',
						}}
					>
						{gap}
					</div>
				}
			/>
			<Card
				classNames={'Gaps'}
				cardTitle={'row-gap'}
				cardBody={<div className='g-1 d-flex flex-dir-row'>{gapRow}</div>}
			/>
			<Card
				classNames={'Gaps'}
				cardTitle={'column-gap'}
				cardBody={<div className='g-1 d-flex flex-dir-col'>{gapCol}</div>}
			/>
		</>
	);
};

export default Gaps;
