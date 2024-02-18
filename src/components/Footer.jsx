import { footerData } from '../data/data';
import { TiSocialFacebook } from 'react-icons/ti';
import { FaInstagram, FaTwitter, FaApple } from 'react-icons/fa';
import { BiLogoPlayStore } from 'react-icons/bi';

const Footer = () => {
	const { companyData, ContactData, moreData } = footerData;
	return (
		<footer className="w-full py-10 mt-24">
			<div className="wrapper flex flex-col gap-14">
				<div className="flex flex-col md:flex-row md:justify-between gap-6">
					<div>
						<h1 className="font-poppins font-medium text-5xl mb-4">jadoo.</h1>
						<p className="font-poppins text-sm text-black-light font-medium max-w-[250px]">
							Book your trip in minute, get full Control for much longer.
						</p>
					</div>
					<div>
						<h2 className="font-poppins font-bold mb-4 text-lg">Company</h2>
						<ul className="text-black-light font-poppins text-base font-medium flex flex-col gap-1">
							{companyData.map((item, index) => (
								<li key={index}>{item}</li>
							))}
						</ul>
					</div>
					<div>
						<h2 className="font-poppins font-bold mb-4 text-lg">Contact</h2>
						<ul className="text-black-light font-poppins text-base font-medium flex flex-col gap-1">
							{ContactData.map((item, index) => (
								<li key={index}>{item}</li>
							))}
						</ul>
					</div>
					<div>
						<h2 className="font-poppins font-bold mb-4 text-lg">More</h2>
						<ul className="text-black-light font-poppins text-base font-medium flex flex-col gap-1">
							{moreData.map((item, index) => (
								<li key={index}>{item}</li>
							))}
						</ul>
					</div>
					<div>
						<div className="flex gap-4 mb-4">
							<div className="icon-footer">
								<TiSocialFacebook className="text-2xl" />
							</div>
							<div className="icon-footer">
								<FaInstagram className="text-2xl" />
							</div>
							<div className="icon-footer">
								<FaTwitter className="text-2xl" />
							</div>
						</div>
						<p className="text-black-light font-semibold text-xl mb-4">Discover our app</p>
						<div className="flex gap-2">
							<div className="w-fit py-2 bg-black rounded-full flex items-center gap-2 px-4 shadow-2xl font-poppins">
								<BiLogoPlayStore className="text-light text-4xl" />
								<div>
									<p className="text-light text-[10px] font-bold">GET IN ON</p>
									<p className="text-[10px] text-light uppercase font-[200]">Googleplay</p>
								</div>
							</div>
							<div className="w-fit py-2 bg-black rounded-full flex items-center gap-2 px-4 shadow-2xl font-poppins">
								<FaApple className="text-light text-4xl" />
								<div>
									<p className="text-light text-[10px]">Avalible on the</p>
									<p className="text-xs text-light uppercase font-bold">Apple Store</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<p className="text-black-light text-sm font-poppins text-center">
					All rights jokombur@2024.co
				</p>
			</div>
		</footer>
	);
};

export default Footer;
