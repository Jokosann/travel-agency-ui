import Logo from '../assets/svg/logo.svg';
import Navlist from './Navlist';

import { dataNavlist } from '../data/data';

const Navbar = () => {
	return (
		<header className="w-full h-20 fixed top-0 left-0 flex items-center">
			<nav className="wrapper flex justify-between">
				<div>
					<img className="" src={Logo} alt="logo" />
				</div>
				<div className="flex items-center gap-16">
					<div className="flex gap-12">
						{dataNavlist.map((item) => (
							<Navlist key={item.id}>{item.name}</Navlist>
						))}
					</div>
					<div className="flex items-center gap-6 text-sm text-black-dark">
						<button
							type="submit"
							className="w-[73px] h-[30px] cursor-pointer bg-yellow rounded-sm text-white"
						>
							Login
						</button>
						<button
							type="submit"
							className="w-[72px] h-[29px] border border-black-dark rounded-sm cursor-pointer"
						>
							Sign up
						</button>
						<select className="text-xs">
							<option value="">EN</option>
							<option value="">ID</option>
						</select>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
