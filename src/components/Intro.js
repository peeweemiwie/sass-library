import Card from './Card';
const Intro = () => {
	return (
		<>
			<Card
				classNames='Colors'
				cardTitle='Design System with className approach'
				cardBody={
					<>
						<div className='container mb-2'>
							I started building this design system awhile ago using className
							approach inspired by Bootstrap. However I realized that it seems
							like componentized approach is well-suited for customized design
							applications.
						</div>
						<div className='container mb-2'>
							I restarted this project using styled-components and Storybook. It
							is still work in process at this moment. I will post a link once
							it is completed. Stay tuned!
						</div>
					</>
				}
			/>
		</>
	);
};

export default Intro;
