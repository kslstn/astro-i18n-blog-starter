export type navigationItem = Readonly<{
	path: string,
	label: string,
}>

export const headerMenu: Record<string, Record<string, navigationItem[]>> = {
	en: {
		items: [{
			path: '/',
			label: 'Home',
		},
		{
			path: '/blog',
			label: 'Blog'
		},
		{
			path: '/tag',
			label: 'Tags'
		},
		{
			path: '/about',
			label: 'About'
		}]
	},
	de: {
		items: [{
			path: '/de/',
			label: 'Home'
		},
		{
			path: '/de/blog',
			label: 'Blog'
		},
		{
			path: '/de/thema',
			label: 'Themen'
		},]
	},
};
