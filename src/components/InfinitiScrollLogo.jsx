import { LogoData } from '../data/data';

const InfinitiScrollLogo = () => {
	return (
		<div className="wrapper slider overflow-hidden mb-20">
			<div className="infiniti-scroll w-max flex items-center flex-nowrap gap-20 h-32">
				{LogoData.map((item, index) => (
					<div key={index}>
						<img src={item} alt={item} />
					</div>
				))}
			</div>
		</div>
	);
};

export default InfinitiScrollLogo;
