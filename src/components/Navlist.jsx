import PropTypes from 'prop-types';

const Navlist = ({ children, onClick, isActive, id }) => {
	return (
		<div
			onClick={onClick}
			className={`navlist ${
				isActive === id ? 'active' : ''
			} relative capitalize text-black-dark text-sm font-medium cursor-pointer`}
		>
			{children}
		</div>
	);
};

Navlist.propTypes = {
	children: PropTypes.string,
	onClick: PropTypes.func,
	isActive: PropTypes.number,
	id: PropTypes.number,
};

export default Navlist;
