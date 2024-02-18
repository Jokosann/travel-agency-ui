import { svg } from '../utils/assets';
import { img } from '../utils/assets';

export const dataNavlist = [
	{ id: 1, name: 'category', href: '#category', scroll: '1' },
	{ id: 2, name: 'desitnations', href: '#desitnations', scroll: '2' },
	{ id: 3, name: 'bookings', href: '#bookings', scroll: '3' },
	{ id: 4, name: 'testimonials', href: '#testimonials', scroll: '4' },
];

export const dataCategory = [
	{
		icon: svg.Weathers,
		title: 'calculated weather',
		fill: 'Built Wicket longer admire do barton vanity itself do in it.',
	},
	{
		icon: svg.Flights,
		title: 'best flights',
		fill: 'Engrossed listening. Park gate sell they west hard for the.',
	},
	{
		icon: svg.Events,
		title: 'local events',
		fill: 'Barton vanity itself do in it. Preferd to men it engrossed listening.',
	},
	{
		icon: svg.Custumizations,
		title: 'custumizations',
		fill: 'We deliver outsourced aviation services for military customers',
	},
];

export const dataDestinations = [
	{ id: 1, img: img.Italy, place: 'Rome, Italy', price: '$5,42k', trip: '10 Days Trip' },
	{ id: 2, img: img.London, place: 'London, UK', price: '$4,2k', trip: '12 Days Trip' },
	{ id: 3, img: img.Europe, place: 'Full Europe', price: '$15k', trip: '28 Days Trip' },
];

export const dataBooking = [
	{
		svg: svg.Chosse,
		title: 'Chosse Destination',
		value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. ',
	},
	{
		svg: svg.Payment,
		title: 'Make Payment',
		value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. ',
	},
	{
		svg: svg.Airport,
		title: 'Reach Airport on Selected Date',
		value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. ',
	},
];

export const testimoniesData = [
	{
		image: img.Profile01,
		article:
			'“On the Windows talking painted pasture yet its express parties use. Surelast upon he same as knew next. Of believed or diverted no.”',
		name: 'John Deaa',
		address: 'Pekanbaru, Indonesia',
	},
	{
		image: img.Profile02,
		article:
			'“On the Windows talking painted pasture yet its express parties use. Surelast upon he same as knew next. Of believed or diverted no.”',
		name: 'James Bond',
		address: 'Jakarta, Indonesia',
	},
	{
		image: img.Profile03,
		article:
			'“On the Windows talking painted pasture yet its express parties use. Surelast upon he same as knew next. Of believed or diverted no.”',
		name: 'Prabowo Gibran',
		address: 'Solo, Indonesia',
	},
];

export const LogoData = [
	img.Logo01,
	img.Logo02,
	img.Logo03,
	img.Logo04,
	img.Logo05,
	img.Logo01,
	img.Logo02,
	img.Logo03,
	img.Logo04,
	img.Logo05,
];

export const footerData = [
	{ name: 'Company', items: ['About', 'Careers', 'Mobile'] },
	{ name: 'Contact', items: ['Help/FAQ', 'Prees', 'Affilates'] },
	{ name: 'More', items: ['Airlinefess', 'Airline', 'Low fare tips'] },
];
