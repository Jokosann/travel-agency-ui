import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Decore from './assets/svg/Decore.svg';
import HeroContent from './components/HeroContent';
import Category from './components/Category';
import Destinations from './components/Destinations';
import Booking from './components/Booking';
import Testimonials from './components/Testimonials';
import InfinitiScrollLogo from './components/InfinitiScrollLogo';

function App() {
	const [scrollPosition, setScrollPosition] = useState(0);
	useEffect(() => {
		const handleScroll = () => {
			setScrollPosition(window.scrollY);
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const paralaxStyle = {
		transform: `translateY(-${scrollPosition * 1.5}px)`,
	};

	return (
		<React.Fragment>
			<Navbar />
			<div className="fixed top-0 right-0 -z-10">
				<img
					src={Decore}
					alt="decore"
					style={paralaxStyle}
					className="w-96 xs:w-[500px] sm:w-[600px] md:w-[500px] lg:w-[600px] xl:w-auto"
				/>
			</div>
			<section className="wrapper pt-20 mb-8" id="home">
				<HeroContent />
			</section>
			<section className="wrapper pt-20 mb-8" id="category" data-id="1">
				<Category />
			</section>
			<section className="wrapper pt-20 mb-8" id="desitnations" data-id="2">
				<Destinations />
			</section>
			<section className="wrapper pt-20 mb-8" id="bookings" data-id="3">
				<Booking />
			</section>
			<section className="wrapper pt-20 mb-8" id="testimonials" data-id="4">
				<Testimonials />
				<InfinitiScrollLogo />
			</section>
			<section
				className="wrapper min-h-screen pt-20 bg-teal-500"
				id="contact"
				data-id="5"
			></section>
		</React.Fragment>
	);
}

export default App;
