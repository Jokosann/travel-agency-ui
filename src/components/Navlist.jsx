import PropTypes from 'prop-types';

const Navlist = ({ children, onClick, isActive, id, href, scroll }) => {
    return (
        <div
            className={`navlist ${
                isActive === id ? 'active' : ''
            } relative capitalize text-black-dark text-sm font-medium cursor-pointer`}
        >
            <a href={href} data-scroll={scroll} onClick={onClick}>
                {children}
            </a>
        </div>
    );
};

Navlist.propTypes = {
    children: PropTypes.string,
    onClick: PropTypes.func,
    isActive: PropTypes.number,
    id: PropTypes.number,
    href: PropTypes.string,
    scroll: PropTypes.string,
};

export default Navlist;
