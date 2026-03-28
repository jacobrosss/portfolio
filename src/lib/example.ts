/*
This file contains example data to populate the page content.
*/
import type { Endpoint, Tag } from './types';

// Banner Info
// This is the content shown on the banner of the page
export const BannerInfo = {
	title		: 'First Last',	// The name of the API
	version		: '0.0.0',		// The 'version' number of the project. 
	description	: '/site/link'	// This is the hyperlink under the title. 
};

// Tags
// This is the order of how the groupings are displayed
export const tags: Tag[] = [
	{ name: 'Tag1', description: 'Tag 1 Description' },
	{ name: 'Tag2', description: 'Tag 2 Description' },
];

// Endpoints
export const endpoints: Endpoint[] = [
	// Tag 1  Example
	{
		method	: 'GET',			// The HTTP method, changes the colour (GET, POST, PUT, DELETE)
		path	: '/tag1/example',	// The endpoint route
		summary	: 'Summary',		// The text beside the endpoint
		tag		: 'Tag1',			// What tag grouping to show as
		detail	: {					// Example 'Json' field response
			description	: 'Example endpoint description',	// These can be anything
			responseBody: {
				field1	: 'First Last',
				field2	: 'Software Developer',
				field3	: '...',
			},
			links		: [
				{ label: 'GitHub', url: 'https://github.com/profile' }	// Optional field to add links to content
			]
		}
	},

	// Tag 2  Example
	{
		method	: 'POST',			
		path	: '/tag2/example',	
		summary	: 'Example',		
		tag		: 'Tag2',			// This will change the grouping to TAG2
		detail	: {					
			description	: 'Example endpoint description',
			responseBody: {
				field1	: 'TODO',
				field2	: 'TODO',
				field3	: '...',
			},
		}
	},

	// Any other 'endpoints' here
];
