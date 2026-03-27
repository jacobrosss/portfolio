// =============================================================
// portfolioData.ts — All your portfolio content lives here.
//
// Think of this like a database for your site. Components just
// read from these arrays. To add a new project or skill, you
// only edit THIS file — no touching components.
// =============================================================

// ── Types ────────────────────────────────────────────────────

/** HTTP methods — used for color-coding endpoint rows */
export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

/** A single "endpoint" in your portfolio */
export interface Endpoint {
	method: HttpMethod;
	path: string;
	summary: string;
	tag: string; // which TagGroup this belongs to
	detail: EndpointDetail;
}

/** The expanded content shown when you click an endpoint */
export interface EndpointDetail {
	description: string;
	responseBody: Record<string, unknown>; // displayed as JSON
	links?: { label: string; url: string }[];
}

/** A tag group (category header) */
export interface Tag {
	name: string;
	description: string;
}

// ── API Info (shown in the header) ───────────────────────────

export const apiInfo = {
	title: 'Jacob Ross',
	version: '1.0.0',
	description: 'Backend Developer — Personal Portfolio API'
};

// ── Tags (categories) ────────────────────────────────────────
// Order here = order on the page

export const tags: Tag[] = [
	{ name: 'About', description: 'Who I am' },
	{ name: 'Projects', description: 'Things I have built' },
	{ name: 'Skills', description: 'Technologies and tools' },
	{ name: 'Experience', description: 'Work history' },
	{ name: 'Contact', description: 'Get in touch' }
];

// ── Endpoints (portfolio items) ──────────────────────────────
// Each endpoint belongs to one tag via the `tag` field.

export const endpoints: Endpoint[] = [
	// ── About ──
	{
		method: 'GET',
		path: '/about/me',
		summary: 'Get a brief introduction',
		tag: 'About',
		detail: {
			description: 'Returns basic information about me.',
			responseBody: {
				name: 'Jacob Ross',
				role: 'Backend Developer',
				location: 'Your City, ST',
				bio: 'I enjoy building robust APIs and scalable systems.'
			}
		}
	},

	// ── Projects ──
	{
		method: 'GET',
		path: '/projects/portfolio-site',
		summary: 'This very website',
		tag: 'Projects',
		detail: {
			description: 'A personal portfolio styled like Swagger UI, built with SvelteKit.',
			responseBody: {
				name: 'Portfolio Site',
				stack: ['SvelteKit', 'TypeScript', 'CSS'],
				status: 'In Progress'
			},
			links: [
				{ label: 'GitHub', url: 'https://github.com/jacobrosss/portfolio' }
			]
		}
	},
	{
		method: 'POST',
		path: '/projects/ecommerce-api',
		summary: 'Full-stack e-commerce platform',
		tag: 'Projects',
		detail: {
			description: 'A RESTful API for an e-commerce platform with admin dashboard.',
			responseBody: {
				name: 'E-Commerce API',
				stack: ['ASP.NET Core', 'PostgreSQL', 'Docker'],
				status: 'Completed'
			},
			links: [
				{ label: 'GitHub', url: 'https://github.com/jacobrosss' }
			]
		}
	},

	// ── Skills ──
	{
		method: 'GET',
		path: '/skills/languages',
		summary: 'Programming languages I use',
		tag: 'Skills',
		detail: {
			description: 'A list of programming languages I work with regularly.',
			responseBody: {
				languages: ['C#', 'TypeScript', 'Python', 'SQL']
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
				frameworks: ['ASP.NET Core', 'SvelteKit'],
				databases: ['PostgreSQL', 'SQL Server'],
				devops: ['Docker', 'GitHub Actions', 'CI/CD']
			}
		}
	},

	// ── Experience ──
	{
		method: 'PUT',
		path: '/experience/current-role',
		summary: 'Current position',
		tag: 'Experience',
		detail: {
			description: 'Details about my current role.',
			responseBody: {
				title: 'Your Title',
				company: 'Your Company',
				period: '2024 – Present',
				highlights: [
					'Built RESTful APIs serving N requests/day',
					'Implemented CI/CD pipelines'
				]
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
				email: 'your.email@example.com',
				github: 'https://github.com/jacobrosss',
				linkedin: 'https://linkedin.com/in/yourprofile'
			}
		}
	}
];

// ── Helper: get endpoints by tag ────────────────────────────
// Used by TagGroup component to filter endpoints

export function getEndpointsByTag(tagName: string): Endpoint[] {
	return endpoints.filter((e) => e.tag === tagName);
}
