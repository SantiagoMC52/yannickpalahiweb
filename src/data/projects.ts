export interface Project {
	slug: string;
	title: string;
	description: string;
}

export const PROJECTS: Project[] = [
	{
		slug: 'portfolio',
		title: 'Portfolio',
		description: 'project description'
	},
	{
		slug: 'ecommerce',
		title: 'E-commerce App',
		description: 'project description'
	}
];
