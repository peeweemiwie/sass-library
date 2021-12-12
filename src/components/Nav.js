import { NavLink } from 'react-router-dom';
import Card from './Card';
import './Nav.scss';

const Nav = () => {
	return (
		<Card
			cardBody={
				<nav className='Nav d-flex flex-dir-col'>
					<NavLink className='text-primary font-sm mb-1' to='/font-sizes'>
						Font Size
					</NavLink>
					<NavLink className='text-primary font-sm mb-1' to='/colors'>
						Colors
					</NavLink>
					<NavLink className='text-primary font-sm mb-1' to='/border-radius'>
						BorderRadius
					</NavLink>
					<NavLink className='text-primary font-sm mb-1' to='/buttons'>
						Buttons
					</NavLink>
					<NavLink className='text-primary font-sm mb-1' to='/paddings'>
						Paddings
					</NavLink>
					<NavLink className='text-primary font-sm mb-1' to='/margins'>
						Margins
					</NavLink>
					<NavLink className='text-primary font-sm mb-1' to='/gaps'>
						Gaps
					</NavLink>
				</nav>
			}
		/>
	);
};

export default Nav;
