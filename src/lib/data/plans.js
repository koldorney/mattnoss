// Full custom-home plan catalog. Gallery/elevation/floor-plan images are
// referenced from the existing hosted URLs so they render identically; the
// shared branding images live in /static/images. Localize later if desired.
const U = '/images/';
const u = (n) => U + n;

export const plans = [
	{
		slug: 'mid-century-modern-home',
		name: 'Mid-Century Modern Home',
		title: 'Mid-Century Modern Home',
		card: 'A great blend of value and space — a large vaulted open great room and kitchen separating the guest quarters from the master suite.',
		cardImage: u('Karas.jpg'),
		hero: u('352-seven-oaks-1001.jpg'),
		description: [
			'This take on a Mid Century Modern home offers a great blend of value and space. A large vaulted open great room and kitchen separate the guests’ quarters with two bedrooms and a bathroom to the master suite on the other side which has a spacious bathroom, custom walk-in shower, closets, and access to the laundry room. A large basement below offers much more room for entertaining, storage, and even a large space for hobbies. Hardiplank siding and a mix of modern stone with large open glass give this home a modern and refined feel.'
		],
		specs: ['Main Floor: 2,285 sqft', 'Lower Level: 1,635 sqft', 'Garage: 704 sqft', 'Total Heated: 3,920 sqft'],
		photos: Array.from({ length: 27 }, (_, i) => u(`352-seven-oaks-10${String(i + 1).padStart(2, '0')}.jpg`)),
		elevations: [],
		floorplans: []
	},
	{
		slug: 'meet-me-on-the-mountain',
		name: 'Meet Me On The Mountain',
		title: 'Meet ME On The Mountain',
		card: 'The perfect home for building lasting memories — 3 bedrooms, 2½ baths, a main-level master, and a dramatic vaulted Great Room with exposed timber trusses.',
		cardImage: u('9b3b423be13262fe50c45d21e83457a6l-m2319184991rd-w1280_h960.webp'),
		hero: u('9b3b423be13262fe50c45d21e83457a6l-m2319184991rd-w1280_h960.webp'),
		description: [
			'Meet Me on the Mountain by MossCreek is the perfect home for building lasting memories with friends and family. The design features 3 bedrooms, 2-1/2 baths, with a Master Bedroom on the main level. A large story and a half vaulted Great Room with exposed timber trusses and an open Kitchen / Dining Room complete a dramatic interior. Exterior timber, stone, and log detailing complete the feel of a highly prized family meeting place.'
		],
		specs: ['Main Floor: 1,887 sqft', 'Lower Level: 1,635 sqft', 'Bedrooms: 3', 'Bathrooms: 2.5'],
		photos: [
			'm2319184991', 'm1382524666', 'm1468275063', 'm2339157710', 'm2182028417', 'm3007132900',
			'm162306864', 'm1946270532', 'm1979753249', 'm2974908279', 'm3638252514', 'm4084838459',
			'm2780923964', 'm2996196781', 'm3721581773', 'm3545921761', 'm2355475583', 'm2105512033',
			'm811411830', 'm281216479', 'm470499749', 'm612543316', 'm255924359', 'm4190447817'
		].map((m) => u(`9b3b423be13262fe50c45d21e83457a6l-${m}rd-w1280_h960.webp`)),
		elevations: [],
		floorplans: []
	},
	{
		slug: 'bitterroot',
		name: 'Bitterroot',
		title: 'Bitterroot',
		card: 'A true rustic American-style home — 3 bedrooms, 3.5 baths, a main-level master suite, and a gracious screened porch.',
		cardImage: u('bitterroot.jpg'),
		hero: u('3-Teal-by-MossCreek-Front-Elevation-EXP.jpg'),
		description: [
			'The Bitterroot, by MossCreek, is a true rustic American-style home. The design features 3 bedrooms, 3.5 baths, and a master suite on the main level. The “open plan” design lives like a home many times its true size. A gracious screened porch creates outdoor opportunities free from insects.',
			'The Bitterroot’s earthy exterior is defined by wood siding, timbers, glass, and stone.'
		],
		specs: ['Main Level: 1,575 sqft', 'Upper Level: 804 sqft', 'Total: 2,379 sqft'],
		photos: [
			'3-Teal-by-MossCreek-Front-Elevation-EXP.jpg', '18-Teal-By-MossCreek-Rear-Elevation-EXP.jpg',
			'10-Teal-By-MossCreek-Interior3-exp.jpg', '5-Teal-By-MossCreek-Interior6-exp.jpg',
			'12-Teal-By-MossCreek-Interior4-exp.jpg', '8-Teal-By-MossCreek-Interior14-exp.jpg',
			'4-Teal-By-MossCreek-Interior2-exp.jpg', '6-Teal-By-MossCreek-Interior9-exp.jpg',
			'9-Teal-By-MossCreek-Interior8-exp.jpg', '11-Teal-by-MossCreek-Interior12-exp.jpg',
			'13-Teal-By-MossCreek-Interior5-exp.jpg', '14-Teal-By-MossCreek-Interior11-exp.jpg',
			'15-Teal-By-MossCreek-Interior7-exp.jpg', '17-Teal-By-MossCreek-Interior13-exp.jpg'
		].map(u),
		elevations: [],
		floorplans: [
			{ label: 'Lower Level', src: u('Bitterroot-8x10-Beige-lower.png') },
			{ label: 'Upper Level', src: u('Bitterroot-8x10-Beige-Upper-1.png') }
		]
	},
	{
		slug: 'dobro-iii',
		name: 'Dobro III',
		title: 'Dobro III',
		card: 'A relaxed farmhouse exterior with a layout suited for modern living — perfectly suited for a sloping lot.',
		cardImage: u('1487HickoryPointe-98-scaled-1.png'),
		hero: u('1487HickoryPointe-85-n.jpg'),
		description: [
			'The Dobro is an American instrument that became a staple in bluegrass music after its introduction by Lester Flatt and Earl Scruggs in the 1950s.',
			'Today, the Dobro III design by MossCreek follows in its namesake’s footsteps by creating a relaxed farmhouse exterior, while offering a layout suited for modern living.',
			'Perfectly suited for a sloping lot, the Dobro III is a Main and Lower level home that maximizes space and budget. The main level interior features a vaulted great room ceiling, open plan living, a walk-in pantry, a master suite, and connected laundry and mud rooms. The gracious screened porch is complete with an outdoor kitchen.',
			'On the lower level, the Dobro provides three guest bedroom suites, a family den, and a kitchenette.'
		],
		specs: ['Main Level: 1,575 sqft', 'Lower Level: 1,575 sqft', 'Total Heated: 3,150 sqft'],
		photos: [
			'1487HickoryPointe-85-n', '1487HickoryPointe-12-n', '1487HickoryPointe-98', '1487HickoryPointe-94',
			'1487HickoryPointe-86', '1487HickoryPointe-84', '1487HickoryPointe-81', '1487HickoryPointe-79',
			'1487HickoryPointe-78', '1487HickoryPointe-57', '1487HickoryPointe-55', '1487HickoryPointe-48',
			'1487HickoryPointe-44', '1487HickoryPointe-42', '1487HickoryPointe-40', '1487HickoryPointe-38',
			'1487HickoryPointe-37', '1487HickoryPointe-32', '1487HickoryPointe-31', '1487HickoryPointe-30'
		].map((n) => u(n + '.jpg')),
		elevations: [],
		floorplans: []
	},
	{
		slug: 'dulcimer',
		name: 'Dulcimer',
		title: 'Dulcimer',
		card: 'A glass entrance gallery, open plan living, three generous master suites, an upper-level Den, and generous outdoor living with a fireplace.',
		cardImage: u('DSC_41472.png'),
		hero: u('DSC_41472.jpg'),
		description: [
			'The Dulcimer’s humble origins began in the Appalachian mountains as a musical instrument to lift the spirits of the early Scotch-Irish mountain settlers.',
			'Today, the Dulcimer home design by MossCreek follows in its namesake’s footsteps, perfectly at home in any mountain or natural setting.',
			'The Dulcimer features a glass entrance gallery, open plan living, large view glass in the Great Room, three generous master suites, and an upper-level Den.',
			'On the exterior, the Dulcimer features generous outdoor living with a fireplace. For quick getaways, or long term living, the Dulcimer is ideally suited for living for just about any natural setting.'
		],
		specs: ['Main Floor: 1,885 sqft', 'Upper Level: 866 sqft', 'Total: 2,751 sqft'],
		photos: [
			'DSC_41472', 'DSC_41282', 'DSC_41482', 'DSC_41562', 'DSC_41512', 'DSC_41582', 'DSC_41592',
			'DSC_41212', 'DSC_41302', 'DSC_41092', 'DSC_41542', 'DSC_41372', 'DSC_40813', 'DSC_40962',
			'DSC_40773', 'DSC_41072'
		].map((n) => u(n + '.jpg')),
		elevations: [],
		floorplans: [
			{ label: 'Main Floor', src: u('F_Dulcimer-8x10-Beige-Gray-Main-Floor.png') },
			{ label: 'Upper Floor', src: u('F_Dulcimer-8x10-Beige-Gray-upperfloor.png') }
		]
	},
	{
		slug: 'modern-home',
		name: 'Modern',
		title: 'Modern',
		subtitle: 'Modern Home',
		card: 'An excellent plan for those wanting to downsize — a large vaulted great room, three bedrooms, and ultra-high efficiency throughout.',
		cardImage: u('IMG_3069-scaled-5.png'),
		hero: u('1164es-front-rendering_r1200.jpg'),
		description: [
			'This smaller modern home is an excellent plan for those wanting to downsize. It is packed with luxurious features including a large vaulted great room and kitchen, three bedrooms with the master having its own suite, and vaulted ceilings throughout the house. A large sliding glass door unit invites you outside to an elegant patio and timber awning to relax.',
			'Modern panelized siding, flat roofs, and modern decor make this home a definite head-turner from the road. Given the smaller SQ/FT, foam insulation, and ultra-high efficient Mini-split A/C system, this home offers the best in energy efficiency and low utility costs.'
		],
		specs: ['Main Floor: 1,613 sqft', 'Garage: 751 sqft', 'Total Heated: 1,613 sqft'],
		renderings: [u('1164es-front-rendering_r1200.jpg'), u('1164es-rear-rendering_r1200.jpg')],
		photos: ['IMG_2988', 'IMG_2991', 'IMG_3020', 'IMG_3005', 'IMG_3069', 'IMG_3014', 'IMG_3017', 'IMG_3027', 'IMG_3036', 'IMG_3042', 'IMG_3045', 'IMG_3079'].map((n) => u(n + '.jpg')),
		elevations: [],
		floorplans: [{ label: 'Floor Plan', src: u('1164es-floor-plan-min_compr.png') }]
	},
	{
		slug: 'mackaye-shelter',
		name: 'Mackaye Shelter',
		title: 'Mackaye Shelter',
		card: 'Expresses the spirit of the early structures of the Appalachian Mountains — English half-timbering, stone, and hand-split cedar shake roofing.',
		cardImage: u('mackay.jpg'),
		hero: u('DSC_41472.jpg'),
		description: [
			'The MacKaye Shelter, by MossCreek, expresses the spirit of the early structures of the Appalachian Mountains. Architectural features include English half-timbering with stone and antique white oak infill, hand-split cedar shake roofing, deep overhangs, natural cedar posts, handrails, and tobacco stick pickets.',
			'Benton MacKaye was the naturalist who first proposed what became the Appalachian Trail. In his honor, we dedicate the MacKaye Shelter.'
		],
		specs: ['Main Level: 1,008 sqft', 'Front Deck: 360 sqft'],
		photos: ['DSC_41472', 'DSC_41282', 'DSC_41482', 'DSC_41562', 'DSC_41512', 'DSC_41582', 'DSC_41592', 'DSC_41212', 'DSC_41302', 'DSC_41092', 'DSC_41542', 'DSC_41372', 'DSC_40813', 'DSC_40962', 'DSC_40773', 'DSC_41072'].map((n) => u(n + '.jpg')),
		elevations: [
			u('MACKAYE-SHELTER-NEW-VERSION-WITH-BR_left_elevation.jpeg'),
			u('MACKAYE-SHELTER-NEW-VERSION-WITH-BR_front-elevation.jpeg'),
			u('MACKAYE-SHELTER-NEW-VERSION-WITH-BR_right_elevation.jpeg')
		],
		floorplans: [{ label: 'Main Level Plan', src: u('MACKAYE-SHELTER-NEW-VERSION-WITH-BR_main_level_plab.jpeg') }]
	},
	{
		slug: 'abrams-creek',
		name: 'Abram’s Creek',
		title: 'Abram’s Creek',
		card: 'Classic early-20th-century bungalow character — low-pitched roofs, exposed rafter tails, large front porches, and stone masses.',
		cardImage: u('abrams.jpg'),
		hero: u('IMG_3714-as-Smart-Object-1.jpg'),
		description: [
			'Abram’s Creek-style homes inevitably bring to mind the classic, early 20th-century bungalows that arose from the Arts & Crafts movement. Features such as low-pitched roofs, exposed rafter tails, large front porches, and larger masses of stone in columns, fireplaces, and foundation strike a more rustic, utilitarian tone than the Adirondack style which preceded it.',
			'The Abram’s Creek by MossCreek hearkens back to the same architectural elements. The interior plan features two large bedrooms on the main level and a third on the upper level. An open living plan with vaulted ceilings in the Kitchen / Dining / Great Room areas brings a lot of living into the modest square footage.'
		],
		specs: ['Main Level: 2,188 sqft', 'Upper Level: 916 sqft', 'Total: 3,104 sqft', 'Covered Porch: 888 sqft', 'Decks: 505 sqft'],
		photos: [
			'IMG_3714-as-Smart-Object-1', 'IMG_3761-as-Smart-Object-1', 'IMG_3686-as-Smart-Object-1', 'IMG_3726-as-Smart-Object-1',
			'IMG_3674-as-Smart-Object-1-edit2', 'IMG_3682-as-Smart-Object-1', 'IMG_3690-as-Smart-Object-1', 'IMG_3691-as-Smart-Object-1',
			'IMG_3694-as-Smart-Object-1', 'IMG_3695-as-Smart-Object-1', 'IMG_3699-as-Smart-Object-1', 'IMG_3703-as-Smart-Object-1',
			'IMG_3707-as-Smart-Object-1', 'IMG_3715-as-Smart-Object-1', 'IMG_3717-as-Smart-Object-1', 'IMG_3731-as-Smart-Object-1',
			'IMG_3736-as-Smart-Object-1', 'IMG_3756-as-Smart-Object-1', 'IMG_3758-as-Smart-Object-1', 'IMG_3766-as-Smart-Object-1'
		].map((n) => u(n + '.jpg')),
		elevations: [
			u('ABRAMS-CREEK-PRESENTATION_left-elevation.jpeg'),
			u('ABRAMS-CREEK-PRESENTATION_font-elevation.jpeg'),
			u('ABRAMS-CREEK-PRESENTATION_right-elevation.jpeg'),
			u('ABRAMS-CREEK-PRESENTATION_rear-elevation.jpeg')
		],
		floorplans: [
			{ label: 'Main Level', src: u('ABRAMS-CREEK-PRESENTATION_main-level.jpeg') },
			{ label: 'Upper Level', src: u('ABRAMS-CREEK-PRESENTATION_upper-level.jpeg') }
		]
	}
];

export const planMap = Object.fromEntries(plans.map((p) => [p.slug, p]));
