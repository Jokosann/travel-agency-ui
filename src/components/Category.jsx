import { dataCategory } from '../data/data';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/variants';

const Category = () => {
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
					Category
				</motion.p>
				<motion.h1
					variants={fadeIn('up', 0.2, 1.5)}
					initial="offscreen"
					whileInView={'onscreen'}
					viewport={{ once: true, amount: 0.7 }}
					className="text-center font-volkhov text-4xl font-bold"
				>
					We Offer Best Services
				</motion.h1>
			</div>
			<div className="w-full card__category">
				{dataCategory.map((item, index) => (
					<motion.div
						key={index}
						variants={fadeIn('up', 0.2, index + 1)}
						initial="offscreen"
						whileInView={'onscreen'}
						viewport={{ once: true, amount: 0.7 }}
						className="flex flex-col items-center justify-between gap-4 px-8 py-12 bg-light rounded-2xl shadow-md"
					>
						<div className="flex justify-center items-center h-[154px]">
							<img src={item.icon} alt={item.icon} />
						</div>
						<div className="h-full">
							<p className="text-center text-black-dark font-bold capitalize font-poppins mb-1">
								{item.title}
							</p>
							<p className="text-center text-black-light whitespace-pre-line font-poppins text-sm">
								{item.fill}
							</p>
						</div>
					</motion.div>
				))}
			</div>
		</div>
	);
};

export default Category;
