export interface Project {
	slug: string;
	name: string;
	image: string;
	/** Fields below are only present once a project's page is published. */
	title?: string;
	type?: string;
	year?: string;
	description?: string;
	link?: string;
	director?: string;
	producer?: string;
	creator?: string;
	dop?: string;
	artDirection?: string;
	focus?: string;
	camAssistant?: string;
	artAssistant?: string;
	productionAssistant?: string;
	car?: string;
	music?: string;
	color?: string;
	graphicDesigner?: string;
	compositing?: string;
	matte?: string;
	editing?: string;
	artSupplier?: string;
}

/**
 * Ordered list of credit lines shown on a project's detail page.
 * Only entries whose field is present on the project are rendered.
 * `producer` intentionally appears twice: "Written, directed and produced by X"
 * and, further down, a standalone "Production X" credit.
 */
export const CREDITS: {
	key: keyof Project;
	label: (value: string) => string;
}[] = [
	{ key: 'director', label: v => `Directed by ${v}` },
	{ key: 'producer', label: v => `Written, directed and produced by ${v}` },
	{ key: 'creator', label: v => `.Futuro is ${v}` },
	{ key: 'dop', label: v => `DOP, ${v}` },
	{ key: 'artDirection', label: v => `Art direction, ${v}` },
	{ key: 'focus', label: v => `Focus puller, ${v}` },
	{ key: 'camAssistant', label: v => `Camera assistant, ${v}` },
	{ key: 'artAssistant', label: v => `Art assistant, ${v}` },
	{ key: 'producer', label: v => `Production ${v}` },
	{ key: 'productionAssistant', label: v => `Production assistant, ${v}` },
	{ key: 'car', label: v => `Car by, ${v}` },
	{ key: 'music', label: v => `Music, ${v}` },
	{ key: 'color', label: v => `Color grading, ${v}` },
	{ key: 'graphicDesigner', label: v => `Graphic designer, ${v}` },
	{ key: 'compositing', label: v => `Compositing, ${v}` },
	{ key: 'matte', label: v => `Matte Painting, ${v}` },
	{ key: 'editing', label: v => `Editing, ${v}` },
	{ key: 'artSupplier', label: v => `Art supplier, ${v}` }
];

export const PROJECTS: Project[] = [
	{
		slug: 'pantocrator',
		name: 'pantocrator',
		title: 'pantocrator | el gobierno de china',
		type: 'music video',
		year: '2021',
		producer: '.Futuro',
		creator: 'Martí Colomer & Nil Pagès',
		dop: 'Joan Agramunt',
		artDirection: 'Yannick Palahí',
		focus: 'Joaquim Vinyes',
		camAssistant: 'Maxym Visual',
		artAssistant: 'Alicia Bullich',
		productionAssistant: 'Guillem Salellas',
		car: 'Auto 3 Domeny',
		graphicDesigner: 'Aleix Planas',
		color: 'Biel Geli',
		compositing: 'Nacho Naya',
		matte: 'Albert Palahí',
		editing: 'Adrià Expòsit & Martí Colomer',
		artSupplier: 'Art estudi & Seis Studi',
		link: 'https://player.vimeo.com/video/571717641',
		image: 'https://i.ibb.co/ZxdSyc8/PANTOCRATOR.jpg'
	},
	{
		slug: 'gaspar',
		name: 'gaspar',
		title: 'gaspar | no autotune ft lauren nine',
		type: 'music video',
		year: '2021',
		producer: '.Futuro',
		creator: 'Martí Colomer & Nil Pagès',
		dop: 'Joan Agramunt',
		artDirection: 'Yannick Palahí',
		focus: 'Joaquim Vinyes',
		camAssistant: 'Maxym Visual',
		artAssistant: 'Alicia Bullich',
		productionAssistant: 'Guillem Salellas',
		car: 'Auto 3 Domeny',
		graphicDesigner: 'Aleix Planas',
		color: 'Biel Geli',
		editing: '.Futuro',
		artSupplier: 'Art estudi',
		link: 'https://player.vimeo.com/video/574060554',
		image: 'https://i.ibb.co/YN7FLDw/gaspar.jpg'
	},
	{
		slug: 'honey-coupons',
		name: 'honey coupons',
		image: 'https://i.ibb.co/CtwP32B/honey.png'
	},
	{
		slug: 'herbert',
		name: 'herbert',
		title: 'herbert | shortfilm teaser',
		type: 'shortfilm',
		year: '2019 | 2020',
		description:
			'Teaser was drawn up by the financing plan for the short film Herbert (2020) which will soon be released at several national film festivals.',
		director: 'Adrià Expòsit Goy',
		dop: 'Jordi Sánchez Prada',
		artDirection: 'Anna Albert & Yannick Palahí',
		music: 'Andreu Roig',
		color: 'Biel Geli',
		graphicDesigner: 'Alícia Bullich',
		link: 'https://player.vimeo.com/video/432920204',
		image: 'https://i.ibb.co/TmKqXLF/HERBERT.png'
	}
];
