import '../styles/components/card.scss';
import './Card.scss';

const Card = ({ classNames, cardTitle, cardBody, cardFooter }) => {
	return (
		<div className={`card ${classNames}`}>
			{cardTitle && <h3 className='card-title'>{cardTitle}</h3>}
			{cardBody && <div className='card-body'>{cardBody}</div>}
			{cardFooter && <footer className='card-footer'>{cardFooter}</footer>}
		</div>
	);
};

export default Card;
