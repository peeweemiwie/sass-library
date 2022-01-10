import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdMenuOpen, MdMenu } from 'react-icons/md';
import './Header.scss';
const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const handleClick = () => {
		isOpen ? setIsOpen(false) : setIsOpen(true);
	};
	return (
		<header className='header' data-isOpen={isOpen}>
			<button className='btn btn-border-primary' onClick={handleClick}>
				{isOpen && <MdMenuOpen />}
				{!isOpen && <MdMenu />}
			</button>
			<h1 className='h1'>
				<Link to='/'>Design System</Link>
			</h1>
		</header>
	);
};

export default Header;
