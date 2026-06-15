// Central content for the site. Images are the real assets pulled from the
// original site into /static/images.

export const company = {
	name: 'Matt Noss Construction',
	logoWhite: '/images/Matt-Noss-Custom-Homes-White.png',
	footerLogo: '/images/Matt-Noss-Construction-white.png',
	phone: '(865) 696-6535',
	phoneHref: 'tel:+18656966535',
	address1: '712 Coventry Creek Lane',
	address2: 'Knoxville, TN 37919',
	email: 'info@mattnossconstruction.com',
	social: {
		facebook: 'https://facebook.com',
		twitter: 'https://twitter.com',
		youtube: 'https://youtube.com',
		instagram: 'https://instagram.com'
	}
};

export const nav = [
	{ label: 'Home', href: '/' },
	{ label: 'Services', href: '/custom-homes' },
	{
		label: 'Plans',
		href: '/plans',
		children: [
			{ label: 'Mid Century Modern Home', href: '/plans/mid-century-modern-home' },
			{ label: 'Meet Me On The Mountain', href: '/plans/meet-me-on-the-mountain' },
			{ label: 'BitterRoot', href: '/plans/bitterroot' },
			{ label: 'Dobro III', href: '/plans/dobro-iii' },
			{ label: 'Dulcimer', href: '/plans/dulcimer' },
			{ label: 'Modern Home', href: '/plans/modern-home' },
			{ label: 'Mackaye Shelter', href: '/plans/mackaye-shelter' },
			{ label: 'Abram’s Creek', href: '/plans/abrams-creek' }
		]
	},
	{ label: 'Portfolio', href: '/portfolio' },
	{
		label: 'Why Us',
		href: '/why-us',
		children: [
			{ label: 'Why Us', href: '/why-us' },
			{ label: 'About Us', href: '/about-us' },
			{ label: 'Testimonials', href: '/testimonials' }
		]
	},
	{ label: 'Process', href: '/process' },
	{ label: 'Contact', href: '/contact' }
];

export const heroSlides = [
	'/images/IMG_2466-scaled.jpg',
	'/images/20240807_150807-1-scaled.jpg',
	'/images/20240822_1042312-scaled.jpg',
	'/images/9b3b423be13262fe50c45d21e83457a6l-m2319184991rd-w1280_h960-1.webp'
];

export const serviceAreas = [
	'Knoxville, TN',
	'Maryville, TN',
	'Lenoir City, TN',
	'Oak Ridge, TN',
	'Louisville, TN',
	'Farragut, TN',
	'Powell, TN',
	'Tellico Village, TN'
];

// Core values are rendered as a styled paragraph list (matching the original)
export const coreValues = [
	{
		title: 'Curious & Innovative',
		body: 'we stay up to date on emerging trends to improve our skills and options, including eco-friendly alternatives, to create results that meet your needs and vision.'
	},
	{
		title: 'Team-Focused',
		body: 'we believe that surrounding ourselves with the experts in their trade is the key to honoring our mission.'
	},
	{
		title: 'Flexible & Personalized',
		body: 'we understand that building a true custom home means the process won’t look identical each time. So, we maintain constant communication to deliver a bespoke experience that best suits you.'
	}
];

export const projects = [
	{ name: 'River Side Modern Farmhouse', image: '/images/IMG_2339.jpg' },
	{ name: 'Mountain Zen by Moss Creek', image: '/images/20240807_150807-1.jpg' },
	{ name: 'Ashland Springs Modern Farmhouse', image: '/images/1.jpg' },
	{ name: 'Post and Beam Modern Home', image: '/images/MO3A5391.jpg' }
];

export const testimonials = [
	{
		quote: 'We used Matt and his team to build our dream home and we could not be happier with the outcome! His team did amazing work! Matt went above and beyond all the expectations my husband and I had for a builder.',
		author: 'Courtney C.',
		role: 'Homeowner'
	},
	{
		quote: 'I own a small handyman company and we have customers ask us about larger projects. We always give them Matt’s info knowing he will give them great advice and do the project above and beyond with no surprises.',
		author: 'Allen E.',
		role: 'Small Handyman Company'
	},
	{
		quote: 'Matt and his team worked with us to construct our custom home on the river. It was an amazing process. He and his team are complete professionals and we thoroughly enjoyed it as well as the outcome.',
		author: 'Helen B.',
		role: 'Homeowner'
	},
	{
		quote: 'We would highly recommend Matt Noss Construction. Matt and his team constructed a beautiful covered patio on the back of our house. Matt listened to what we wanted, worked with us on our budget, was professional, used quality products, and completed the project timely.',
		author: 'Maria D.',
		role: 'Homeowner'
	},
	{
		quote: 'They did an outstanding job. Honest, very conscientious, cannot say enough about their work. They were good guys.',
		author: 'Nikki A.',
		role: 'Homeowner'
	}
];

export const estimateOptions = [
	'Custom Home',
	'Kitchen Remodel',
	'Bathroom Remodel',
	'Home Addition',
	'Deck or Porch',
	'Sunroom',
	'Other'
];

export const builderBio = [
	'My journey to becoming a custom home builder in Knoxville took a slightly unexpected turn—or perhaps it was fate. You see, I grew up on a farm in Australia, and while I loved the wide-open spaces, I had a yearning to explore the world before settling down.',
	'In 2000, I set my sights on Europe, but a summer job driving ski boats at a US summer camp proved too tempting to resist. It was there, under the summer sun, that I met my wife, Emily. Needless to say, Europe would have to wait!',
	'We married in 2003, and while navigating the complexities of obtaining my US visa, I found myself drawn to the construction industry. Starting with small jobs, I learned the trade from the ground up, gradually taking on larger and more challenging projects. By 2008, I had the opportunity to build my first new home, and I haven’t looked back since.',
	'Today, Emily and I are proud to call Knoxville home, where we’re raising our three sons, Abram (15), Andrew (12), and Adam (6). When we’re not busy building dream homes for our clients, we love spending time with our family, enjoying the beautiful lakes around Knoxville, surfing, and soaking up the summer sun on our boat.',
	'This experience has shaped not only my life but also my approach to building. I understand that a home is more than just four walls and a roof—it’s a sanctuary, a place where memories are made and families grow. That’s why I’m passionate about creating custom homes that reflect the unique personalities and lifestyles of my clients.'
];

export const servicesList = [
	{ title: 'Plans Design', body: 'Whether you have a plan or need help designing your vision, we can help. Often, pre-purchased plans need some additional help or re-work. We have you covered!' },
	{ title: 'Engineering', body: 'All our homes are built to above-code specifications no matter where we build. While a certain level of engineering is included, we offer more in-depth structural services to our clients who see the value in ensuring those details are checked and individualized to your particular situation.' },
	{ title: 'Site plans, assessments, and surveys', body: 'Difficult terrain can cause havoc on a budget and the process. Detailed site plans and surveys give us the accuracy we need on the front end to be able to plan for all the contingencies and issues that can and will arise.' },
	{ title: 'Budgeting', body: 'An open, honest budgeting review is a big factor in client success. Being educated to understand where all the costs are going allows you to make informed decisions about your home.' },
	{ title: 'Home Design services at all levels', body: 'Do you need someone to help you from start to finish or do you just need help in a few areas? We allow a lot of flexibility here to ensure you are taken care of in the manner that suits you best.' }
];

export const perfectClient = [
	'Family oriented. This is much more than a project, this is a long-term home that will be the center of living well and cherished memories.',
	'Has concerns about complexity and finding a builder who can confidently address these.',
	'Wants to find a team-based approach. A builder who will help them reach a goal, and solve problems in an environment of integrity and honesty.',
	'Needs flexibility and wants to avoid the “one-process-fits-all” approach of the repetition builders.'
];

export const brandValues = [
	{ title: 'Communication', body: 'The heart of every successful build begins with clear communication and a willingness to explore every possible solution to help our clients achieve their goals.' },
	{ title: 'Collaboration', body: 'We believe a true dream home is a “co-creation” of the builder and client, and is fueled by the unique goals and needs of every customer we serve.' },
	{ title: 'Trust', body: 'We remove the fear and doubt from the modern building process and forge a partnership with every client based on trust and consistency.' },
	{ title: 'Helpfulness', body: 'Providing solutions, staying within the budget, and helping our clients achieve their goals are the essence of our work and the foundation of our why.' },
	{ title: 'Profitability', body: 'In an industry known for widespread failure and questionable business ethics, we strive to do business the right way to ensure our legacy of customer service and exceptional work for years to come.' }
];

// Portfolio project gallery — names from the live portfolio page.
const PU = 'https://www.mattnossconstruction.com/wp-content/uploads/';
export const portfolioProjects = [
	'Meet Me On The Mountain', 'Dobro 3 Modern Farmhouse', 'Post and Beam', 'Modern Home',
	'Ashland Springs', 'Modern Farmhouse', 'Mountain Zen by Moss Creek', 'Farmhouse Dulcimer by Moss Creek',
	'Riverside Modern Farmhouse', 'Mid Century Modern', 'Bitterroot by Moss Creek',
	'MacKaye Shelter by Moss Creek', 'Abram’s Creek by Moss Creek', 'Modern Mid Century', 'Ravens Nest'
];

export const mossCreekText =
	'Matt Noss Custom Homes is a premier custom home builder working alongside MossCreek to provide customers with beautiful, quality custom homes. As a nationally recognized leader in rustic home design, modern farmhouses, and contemporary design homes, their work has been featured in the New York Times and the Wall Street Journal. By working with MossCreek, Matt Noss can connect customers to a design world beyond the ordinary.';

export const images = {
	intro: '/images/IMG_2357.jpg',
	standOut: '/images/1487HickoryPointe-40.jpg',
	difference: '/images/MO3A5429.jpg',
	builder: '/images/0A9A7256.jpg',
	testimonialsBg: '/images/Testimonials-bg-1.jpg',
	closet: '/images/custom-closet-background-1-scaled.jpg',
	mossCreek: '/images/MossCreek-logo.jpg',
	contactHero: '/images/IMG_2357.jpg',
	processHero: '/images/IMG_2357.jpg'
};
