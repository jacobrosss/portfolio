import type { Endpoint } from './types';
import { endpoints } from './data';

// Tag helper function
export function getEndpointsByTag(tagName: string): Endpoint[] {
	return endpoints.filter((e) => e.tag === tagName);
}
