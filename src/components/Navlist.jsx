import PropTypes from 'prop-types';

const Navlist = ({ children }) => {
	return <div className="capitalize text-black-dark text-sm">{children}</div>;
};

Navlist.propTypes = {
	children: PropTypes.string,
};

export default Navlist;
