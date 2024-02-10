import React from 'react';
import Navbar from './components/Navbar';

import Decore from './assets/svg/Decore.svg';
import HeroContent from './components/HeroContent';

function App() {
	return (
		<React.Fragment>
			<Navbar />
			<div className="fixed top-0 right-0 -z-10">
				<img
					src={Decore}
					alt="decore"
					className="w-96 xs:w-[500px] sm:w-[600px] md:w-[500px] lg:w-[600px] xl:w-auto"
				/>
			</div>
			<section className="wrapper min-h-screen pt-20 mb-56">
				<HeroContent />
			</section>
		</React.Fragment>
	);
}

export default App;
