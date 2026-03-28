import type { Endpoint, Tag } from './types';

// Banner Info
export const BannerInfo = {
	title: 'Jacob Ross',
	version: '1.0.0',
	description: '/github/jacobrosss'
};

// Tags
export const tags: Tag[] = [
	{ name: 'About', description: 'Who I am' },
	{ name: 'Experience', description: 'Work history' },
	{ name: 'Skills', description: 'Technologies and tools' },
	{ name: 'Projects', description: 'Things I have built' },
	{ name: 'Contact', description: 'Get in touch' }
];

// Endpoints
export const endpoints: Endpoint[] = [
	// ── About ──
	{
		method: 'GET',
		path: '/about/me',
		summary: 'Brief introduction',
		tag: 'About',
		detail: {
			description: 'Returns basic information about me.',
			responseBody: {
				name: 'Jacob Ross',
				role: 'Software Developer',
				location: 'Kitchener, ON',
				bio: 'I enjoy designing backend systems, restful APIs and databases.'
			}
		}
	},
	{
		method: 'GET',
		path: '/about/education',
		summary: 'My education',
		tag: 'About',
		detail: {
			description: 'Returns a list of educations.',
			responseBody: {
				education: [
					{
						name: 'Conestoga College',
						degree: 'Bachelor of Applied Computer Science',
						period: '2024 - 2026',
						summary: 'TODO...'
					},
					{
						name: 'Conestoga College',
						diploma: 'Software Engineering Technology (Co-op)',
						period: '2021 - 2025',
						summary: 'TODO...'
					}
				]
			}
		}
	},

	// ── Projects ──
	{
		method: 'GET',
		path: '/projects/portfolio-ui',
		summary: 'This static webpage',
		tag: 'Projects',
		detail: {
			description: 'A personal portfolio styled like Swagger UI, built with SvelteKit.',
			responseBody: {
				name: 'Portfolio Site',
				stack: ['SvelteKit', 'TypeScript', 'CSS', 'GitHub Actions'],
				status: 'In Progress...'
			},
			links: [
				{ label: 'GitHub', url: 'https://github.com/jacobrosss/portfolio' }
			]
		}
	},
	{
		method: 'POST',
		path: '/projects/todo-api',
		summary: 'TODO',
		tag: 'Projects',
		detail: {
			description: 'TODO',
			responseBody: {
				name: 'TODO',
				stack: ['TODO'],
				status: 'TODO'
			},
			links: [
				{ label: 'GitHub', url: 'https://github.com/jacobrosss' }
			]
		}
	},

	// ── Experience ──
	{
		method: 'GET',
		path: '/experience/current-role',
		summary: 'Current position',
		tag: 'Experience',
		detail: {
			description: 'Details about my current role.',
			responseBody: {
				title: 'Student',
				company: 'Conestoga College',
				period: '2024 – Present',
				highlights: [
					'Built RESTful APIs serving N requests/day',
					'Implemented CI/CD pipelines'
				]
			}
		}
	},

	// ── Skills ──
	{
		method: 'GET',
		path: '/skills/languages',
		summary: 'Programming languages I use',
		tag: 'Skills',
		detail: {
			description: 'Returns a list of frequently used languages',
			responseBody: {
				languages: ['C/C++', 'C#', 'Python', 'SQL', 'HTML', 'CSS', 'JavaScript', 'TypeScript']
			}
		}
	},
	{
		method: 'GET',
		path: '/skills/tools',
		summary: 'Tools and frameworks',
		tag: 'Skills',
		detail: {
			description: 'Frameworks, tools, and platforms I have experience with.',
			responseBody: {
				frameworks: ['.NET', 'ASP.NET', 'Svelte', 'TODO...'],
				databases: ['PostgreSQL', 'SQL Server', 'TODO...'],
				software: ['Visual Studio', 'SSMS', 'Git', 'TODO...'],
				devops: ['Docker', 'GitHub Actions', 'Azure', 'Jira', 'TODO...']
			}
		}
	},

	// ── Contact ──
	{
		method: 'POST',
		path: '/contact/send',
		summary: 'Send me a message',
		tag: 'Contact',
		detail: {
			description: 'Reach out via email or social links.',
			responseBody: {
				email: 'jacob01.ross@gmail.com',
				github: 'https://github.com/jacobrosss',
				linkedin: 'https://www.linkedin.com/in/jacobdouglasross/'
			},
			links: [
				{ label: 'GitHub', url: 'https://github.com/jacobrosss' },
				{ label: 'LinkedIn', url: 'https://www.linkedin.com/in/jacobdouglasross/' }
			]
		}
	}
];


