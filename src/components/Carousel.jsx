import { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { testimoniesData } from '../data/data';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/variants';

export const EmblaCarousel = () => {
	const [emblaRef, emblaApi] = useEmblaCarousel();

	const scrollPrev = useCallback(() => {
		if (emblaApi) emblaApi.scrollPrev();
	}, [emblaApi]);

	const scrollNext = useCallback(() => {
		if (emblaApi) emblaApi.scrollNext();
	}, [emblaApi]);

	return (
		<div className="embla max-w-2xl w-full mx-auto">
			<motion.div
				variants={fadeIn('up', 0.2, 2)}
				initial="offscreen"
				whileInView={'onscreen'}
				viewport={{ once: true, amount: 0.7 }}
				className="embla__viewport"
				ref={emblaRef}
			>
				<div className="embla__container">
					{testimoniesData.map((item, index) => (
						<div className="embla__slide" key={index}>
							<div className="p-4 min-h-[200px]">
								<div className="relative shadow-lg rounded-2xl px-8 py-6 max-w-lg w-full mx-auto">
									<img
										src={item.image}
										alt={item.image}
										className="absolute -top-6 -left-5 w-14 h-14 rounded-full object-cover"
									/>
									<article className="text-black-light mb-4 text-sm font-poppins">
										{item.article}
									</article>
									<div>
										<p className="font-semibold text-black-dark text-sm font-poppins">
											{item.name}
										</p>
										<p className="text-black-light text-sm font-poppins">{item.address}</p>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</motion.div>
			<motion.button
				variants={fadeIn('up', 0.2, 2)}
				initial="offscreen"
				whileInView={'onscreen'}
				viewport={{ once: true, amount: 0.7 }}
				className="embla__prev"
				onClick={scrollPrev}
			>
				<IoIosArrowBack className="text-2xl" />
			</motion.button>
			<motion.button
				variants={fadeIn('up', 0.2, 2)}
				initial="offscreen"
				whileInView={'onscreen'}
				viewport={{ once: true, amount: 0.7 }}
				className="embla__next"
				onClick={scrollNext}
			>
				<IoIosArrowForward className="text-2xl" />
			</motion.button>
		</div>
	);
};
