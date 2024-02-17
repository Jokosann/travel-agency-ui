import { EmblaCarousel } from './Carousel';

const Testimonials = () => {
	return (
		<div className="flex flex-col gap-10 mb-16">
			<div className="w-full">
				<div>
					<p className="text-center font-poppins font-medium text-black-light mb-2">
						Testimonials
					</p>
					<h1 className="text-center font-volkhov text-4xl font-bold">
						What people say about Us.
					</h1>
				</div>
			</div>
			<EmblaCarousel />
		</div>
	);
};

export default Testimonials;
