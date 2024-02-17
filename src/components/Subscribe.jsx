import { HiOutlineMail } from 'react-icons/hi';
import SendSubscribe from '../assets/svg/send-subscribe.svg';

const Subscribe = () => {
	return (
		<div className="subscribe max-w-4xl mx-auto bg-bg-contact rounded-2xl px-4 py-16 relative">
			<h1 className="max-w-2xl mx-auto text-center text-2xl font-bold text-black-light mb-14 font-poppins">
				Subscribe to get information, latest news and other interesting offers about Cobham
			</h1>
			<div className="max-w-xl h-12 mx-auto flex items-center gap-2">
				<div className="w-3/4 h-full bg-light rounded-lg shadow-sm relative">
					<input
						type="email"
						name="email"
						id="email"
						placeholder="Your email"
						autoComplete="off"
						className="w-full h-full bg-transparent px-10 placeholder:text-black-light text-black-dark text-xs font-medium outline-none font-poppins placeholder:font-poppins"
					/>
					<HiOutlineMail className="absolute left-4 top-1/2 -translate-y-1/2 text-black-light text-lg" />
				</div>
				<button className="w-32 h-full rounded-lg px-2 bg-yellow text-light cursor-pointer font-poppins active:scale-90 transition-all">
					Subscribe
				</button>
			</div>
			<img
				src={SendSubscribe}
				alt={SendSubscribe}
				className="absolute -top-2 -right-2 w-10 z-10"
			/>
		</div>
	);
};

export default Subscribe;
