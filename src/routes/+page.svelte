<!--
  +page.svelte — The main (and only) page.
  ==========================================
  This is where everything comes together. It:
  1. Imports data from portfolioData.ts
  2. Renders the SwaggerHeader
  3. Loops through tags, rendering a TagGroup for each

  Since this is a single-page portfolio, all content lives here.
-->
<script lang="ts">
	// Import components
	import SwaggerHeader from '$lib/components/SwaggerHeader.svelte';
	import TagGroup from '$lib/components/TagGroup.svelte';

	// Import data
	import { apiInfo, tags, getEndpointsByTag } from '$lib/portfolioData';
</script>

<!-- SEO head tags -->
<svelte:head>
	<title>{apiInfo.title} — Portfolio</title>
	<meta name="description" content="{apiInfo.description}" />
</svelte:head>

<!-- Swagger Header (green bar + info) -->
<SwaggerHeader
	title={apiInfo.title}
	version={apiInfo.version}
	description={apiInfo.description}
/>

<!-- Main content: one TagGroup per category -->
<div class="swagger-content">
	{#each tags as tag (tag.name)}
		<TagGroup {tag} endpoints={getEndpointsByTag(tag.name)} />
	{/each}
</div>

<style>
	.swagger-content {
		max-width: 64rem;
		margin: 0 auto;
		padding: 1rem;
	}
</style>
