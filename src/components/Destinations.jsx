import { dataDestinations } from '../data/data';
import { svg } from '../utils/assets';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/variants';

const Destinations = () => {
	return (
		<div className="flex flex-col">
			<div className="w-full mb-14">
				<motion.p
					variants={fadeIn('up', 0.2, 1)}
					initial="offscreen"
					whileInView={'onscreen'}
					viewport={{ once: true, amount: 0.7 }}
					className="text-center font-poppins font-medium text-black-light mb-2"
				>
					Top Selling
				</motion.p>
				<motion.h1
					variants={fadeIn('up', 0.2, 1.5)}
					initial="offscreen"
					whileInView={'onscreen'}
					viewport={{ once: true, amount: 0.7 }}
					className="text-center font-volkhov text-4xl font-bold"
				>
					Top Destinations
				</motion.h1>
			</div>
			<div className="max-w-4xl w-full mx-auto card__destinations">
				{dataDestinations.map((item, index) => (
					<motion.div
						key={item.id}
						variants={fadeIn('up', 0.2, index + 1)}
						initial="offscreen"
						whileInView={'onscreen'}
						viewport={{ once: true, amount: 0.7 }}
						className="aspect-[1/1.5] relative overflow-hidden shadow-lg rounded-2xl"
					>
						<div className="w-full h-full overflow-hidden cursor-pointer">
							<img src={item.img} alt={item.img} className="w-full object-cover" />
						</div>
						<div className="absolute bottom-0 bg-light w-full p-5 flex flex-col gap-3">
							<div className="flex justify-between font-poppins">
								<p className="text-black-light text-base font-medium">{item.place}</p>
								<span className="text-black-light font-medium">{item.price}</span>
							</div>
							<div className="flex items-center gap-2 mb-4 font-poppins">
								<img src={svg.Maps} alt={svg.Maps} className="w-4" />
								<p className="text-black-light font-medium text-sm">{item.trip}</p>
							</div>
						</div>
					</motion.div>
				))}
			</div>
		</div>
	);
};

export default Destinations;
