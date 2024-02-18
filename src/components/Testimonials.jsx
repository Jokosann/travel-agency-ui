import { EmblaCarousel } from './Carousel';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/variants';

const Testimonials = () => {
	return (
		<div className="flex flex-col gap-10 mb-14">
			<div className="w-full">
				<div>
					<motion.p
						variants={fadeIn('up', 0.2, 1)}
						initial="offscreen"
						whileInView={'onscreen'}
						viewport={{ once: true, amount: 0.7 }}
						className="text-center font-poppins font-medium text-black-light mb-2"
					>
						Testimonials
					</motion.p>
					<motion.h1
						variants={fadeIn('up', 0.2, 1.5)}
						initial="offscreen"
						whileInView={'onscreen'}
						viewport={{ once: true, amount: 0.7 }}
						className="text-center font-volkhov text-4xl font-bold"
					>
						What people say about Us.
					</motion.h1>
				</div>
			</div>
			<EmblaCarousel />
		</div>
	);
};

export default Testimonials;
