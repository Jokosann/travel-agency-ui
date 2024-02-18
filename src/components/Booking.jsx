import { dataBooking } from '../data/data';
import { img } from '../utils/assets';
import { svg } from '../utils/assets';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/variants';

const Booking = () => {
	return (
		<div className="flex flex-col md:flex-row gap-8">
			<motion.div
				variants={fadeIn('right', 0.2, 1)}
				initial="offscreen"
				whileInView={'onscreen'}
				viewport={{ once: true, amount: 0.7 }}
				className="flex flex-col gap-2  w-full md:w-[1/2]"
			>
				<div>
					<p className="text-left font-poppins font-medium text-black-light mb-2">
						Easy and Fast
					</p>
					<h1 className="text-left font-volkhov text-4xl font-bold">
						Book your next trip in 3 easy steps
					</h1>
				</div>
				<div className="flex flex-col">
					{dataBooking.map((item, index) => (
						<div key={index} className="flex gap-4 py-4">
							<img src={item.svg} alt={item.svg} />
							<div>
								<p className="font-poppins font-medium text-black-light ">{item.title}</p>
								<p className="font-poppins text-black-light text-sm">{item.value}</p>
							</div>
						</div>
					))}
				</div>
			</motion.div>
			<motion.div
				variants={fadeIn('left', 0.2, 1)}
				initial="offscreen"
				whileInView={'onscreen'}
				viewport={{ once: true, amount: 0.7 }}
				className="relative w-full md:w-[1/2] h-[350px]"
			>
				<div className="booking__card w-full max-w-[370px] h-fit absolute -z-[1] md:left-1/2 md:-translate-x-1/2 shadow-2xl  rounded-3xl p-6">
					<img src={img.Greece} alt={img.Greece} />
					<div className="flex flex-col gap-4 mt-5">
						<h1 className="font-semibold text-black-dark text-base font-poppins">
							Trip To Greece
						</h1>
						<p className="text-black-light text-sm font-medium font-poppins -mt-2">
							14-29 June <span>by Joko santoso</span>
						</p>
						<div className="flex gap-4">
							<img src={svg.LEAF} alt={svg.LEAF} />
							<img src={svg.MapIcon} alt={svg.MapIcon} />
							<img src={svg.Send} alt={svg.Send} />
						</div>
						<div className="flex items-center justify-between">
							<div className="flex gap-4">
								<img src={svg.Going} alt={svg.Going} />
								<p className="text-black-light font-poppins text-sm">24 people going</p>
							</div>
							<img src={svg.Love} alt={svg.Love} className="cursor-pointer" />
						</div>
						<div className="absolute bottom-20 -right-16 w-[263px] h-[129px] bg-light shadow-lg rounded-2xl flex flex-col justify-between p-4">
							<div className="flex items-start gap-4">
								<img src={img.Rome} alt={img.Rome} />
								<div className="flex flex-col">
									<p className="font-semibold text-black-light text-base font-poppins">
										Ongoing
									</p>
									<p className="font-medium text-black-dark text-sm mb-2 font-poppins">
										Trip to rome
									</p>
									<p className="text-[#8A79DF] font-medium text-sm mb-2 font-poppins">
										40% <span className="text-black-dark">Completed</span>
									</p>
									<div className="w-full h-[9px] bg-[#f0f0f0] rounded-full shadow-lg overflow-hidden">
										<div className="w-[40%] h-full bg-[#8A79DF]"></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</motion.div>
		</div>
	);
};

export default Booking;
