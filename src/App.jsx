import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';

import Decore from './assets/svg/Decore.svg';
import HeroContent from './components/HeroContent';
import Category from './components/Category';

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
            <section className="wrapper pt-20 mb-10" id="home">
                <HeroContent />
            </section>
            <section className="wrapper pt-20 mb-10" id="category">
                <Category />
            </section>
            <section
                className="wrapper min-h-screen pt-20 mb-10 bg-slate-500"
                id="desitnations"
            ></section>
            <section
                className="wrapper min-h-screen pt-20 mb-10 bg-violet-500"
                id="bookings"
            ></section>
            <section
                className="wrapper min-h-screen pt-20 mb-10 bg-indigo-500"
                id="testimonials"
            ></section>
            <section
                className="wrapper min-h-screen pt-20 mb-10 bg-teal-500"
                id="contact"
            ></section>
        </React.Fragment>
    );
}

export default App;
