/** HTTP methods for color-coding endpoint rows */
export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

/** Endpoint Row */
export interface Endpoint {
	method: HttpMethod;
	path: string;
	summary: string;
	tag: string; // which TagGroup this belongs to
	detail: EndpointDetail;
}

export interface Parameter {
	name: string;
	description: string;
	in: 'query' | 'body' | 'path';
	type: 'string' | 'number' | 'boolean';
	required: boolean;
}

/** Endpoint Expanded View */
export interface EndpointDetail {
	description: string;
	parameters?: Parameter[];
	responseBody: Record<string, unknown>; // displayed as JSON
	links?: { label: string; url: string }[];
}

/* Tag Group */
export interface Tag {
	name: string;
	description: string;
}
