
<script lang="ts">
	import TagGroup from '$lib/components/endpoints/TagGroup.svelte';

	import { tags } from '$lib/data';
	import { getEndpointsByTag } from '$lib/utils';
</script>

<div class="content">
	{#each tags as tag (tag.name)}
		<TagGroup {tag} endpoints={getEndpointsByTag(tag.name)} />
	{/each}
</div>

<style>
	.content {
		max-width: 1460px;
		width: 100%;
		margin: 0 auto;
		padding: 1rem;
		box-sizing: border-box;
	}
</style>
