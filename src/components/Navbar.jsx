import Logo from '../assets/images/Logo.png';
import Navlist from './Navlist';
import { HiMenu } from 'react-icons/hi';
import { BiX } from 'react-icons/bi';
import { dataNavlist } from '../data/data';
import { useEffect, useState } from 'react';

const Navbar = () => {
	const [isMenu, setIsMenu] = useState(false);
	const [isNavbar, setIsNavbar] = useState(false);
	const [isLayer, setIsLayer] = useState(false);
	const [isActive, setIsActive] = useState(null);

	const handleScroll = () => {
		const sections = document.querySelectorAll('section');
		const navlink = document.querySelectorAll('nav a');
		const { scrollY } = window;
		sections.forEach((section) => {
			const { offsetTop, clientHeight } = section;
			const offset = offsetTop - 100;

			if (scrollY >= offset && scrollY < offset + clientHeight) {
				navlink.forEach((link) => {
					if (link.dataset.scroll === section.dataset.id) {
						setIsActive(Number(link.dataset.scroll));
					}
				});
			}
		});
		if (scrollY > 0) {
			setIsNavbar(true);
			setIsLayer(false);
			setIsMenu(false);
		} else {
			setIsActive(null);
			setIsNavbar(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<header
			className={`${
				isNavbar ? 'active' : ''
			} w-full pt-4 fixed z-50 top-0 left-0 flex items-center`}
		>
			<nav className="wrapper flex items-center justify-between gap-6">
				<img
					onClick={() => {
						setIsActive(null);
						window.scrollTo({
							top: 0,
							behavior: 'smooth',
						});
					}}
					className="w-24 cursor-pointer"
					src={Logo}
					alt="logo"
				/>
				<div
					className={`navlist__menu ${
						isMenu ? 'open' : ''
					} fixed lg:relative top-0 right-0 z-50 translate-x-full lg:translate-x-0 w-64 lg:w-auto h-full lg:h-auto bg-light lg:bg-transparent flex flex-col lg:flex-row justify-start gap-10 xl:gap-16 py-20 lg:py-0 px-8 lg:px-0 shadow-lg lg:shadow-none`}
				>
					<div
						onClick={() => {
							setIsMenu(false);
							setIsLayer(false);
						}}
						className="absolute lg:hidden top-5 right-8 cursor-pointer"
					>
						<BiX className="text-3xl" />
					</div>
					<div className="flex flex-col lg:flex-row items-center gap-8 xl:gap-11 font-poppins">
						{dataNavlist.map((item) => (
							<Navlist
								key={item.id}
								onClick={(e) => {
									e.preventDefault();
									setIsMenu(false);
									setIsLayer(false);
									const targetElement = document.querySelector(item.href);
									if (targetElement) {
										targetElement.scrollIntoView({
											behavior: 'smooth',
										});
									}
								}}
								isActive={isActive}
								id={item.id}
								href={item.href}
								scroll={item.scroll}
							>
								{item.name}
							</Navlist>
						))}
					</div>
					<div className="flex flex-col lg:flex-row items-center gap-6 xl:gap-6 text-sm font-medium text-black-dark font-poppins">
						<button
							type="submit"
							className="w-full lg:w-[73px] h-[35px] lg:h-[30px] outline-none  cursor-pointer bg-yellow hover:opacity-90 active:scale-95 transition-all rounded-sm text-white"
						>
							Login
						</button>
						<button
							type="submit"
							className="w-full lg:w-[73px] h-[34px] lg:h-[29px] outline-none border border-black-dark active:scale-95 transition-all rounded-sm cursor-pointer"
						>
							Sign up
						</button>
						<select className="bg-transparent cursor-pointer">
							<option value="">EN</option>
							<option value="">ID</option>
						</select>
					</div>
				</div>
				<div
					onClick={() => {
						setIsMenu(!isMenu);
						setIsLayer(!isLayer);
					}}
					className="lg:hidden cursor-pointer"
				>
					<HiMenu className="text-3xl" />
				</div>
			</nav>
			<div
				onClick={() => {
					setIsMenu(false);
					setIsLayer(false);
				}}
				className={`layer__opacity ${isLayer ? 'apper' : ''}`}
			></div>
		</header>
	);
};

export default Navbar;
