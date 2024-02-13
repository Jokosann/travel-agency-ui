import { dataBooking } from '../data/data';

const Booking = () => {
	return (
		<div className="flex flex-col">
			<div className="flex flex-col gap-2 min-h-[500px]">
				<div>
					<p className="text-left font-poppins font-medium text-black-light mb-2">
						Easy and Fast
					</p>
					<h1 className="text-left font-volkhov text-3xl font-bold">
						Book your next trip in 3 easy steps
					</h1>
				</div>
				<div className="flex flex-col">
					{dataBooking.map((item, index) => (
						<div key={index} className="flex gap-4 py-4">
							<img src={item.svg} alt={item.svg} />
							<div>
								<p className="font-poppins font-medium text-black-light">{item.title}</p>
								<p className="font-poppins text-black-light text-sm">{item.value}</p>
							</div>
						</div>
					))}
				</div>
			</div>
			<div></div>
		</div>
	);
};

export default Booking;
