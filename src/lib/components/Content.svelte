
<script lang="ts">
	import TagGroup from '$lib/components/TagGroup.svelte';

	import { tags, getEndpointsByTag } from '$lib/portfolioData';
</script>

<div class="content">
	{#each tags as tag (tag.name)}
		<TagGroup {tag} endpoints={getEndpointsByTag(tag.name)} />
	{/each}
</div>

<style>
	.content {
		width: 80%;
		margin: 0 auto;
		padding: 1rem;
	}
</style>
