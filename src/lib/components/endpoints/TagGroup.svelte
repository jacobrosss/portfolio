<script lang="ts">
	import type { Tag, Endpoint as EndpointType } from '$lib/types';
	import Endpoint from './Endpoint.svelte';

	let { tag, endpoints }: {
		tag: Tag;
		endpoints: EndpointType[];
	} = $props();

	let expanded = $state(true); // Start Expanded

	function toggle() {
		expanded = !expanded;
	}
</script>

<section class="tag-group">
	<button class="tag-header" onclick={toggle}>
		<div class="tag-header-left">
			<h2 class="tag-name">{tag.name}</h2>
			<span class="tag-description">{tag.description}</span>
		</div>
		<span class="tag-chevron" class:rotated={expanded}>▼</span>
	</button>

	<!-- Expanded View -->
	{#if expanded}
		<div class="tag-endpoints">
			{#each endpoints as endpoint (endpoint.path)}
				<Endpoint {endpoint} />
			{/each}
		</div>
	{/if}
</section>

<style>
	.tag-group {
		margin-bottom: 0;
		border: none;
		border-bottom: none;
		overflow: hidden;
	}

	.tag-group:last-child {
		border-bottom: 1px solid #d1d7e1;
	}

	/* ── Tag header ────────────────────────────────────────── */
	.tag-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		padding: 0.75rem 1rem;
		background: #fff;
		border: none;
		border-bottom: 1px solid #d8dde7;
		cursor: pointer;
		font-family: inherit;
		text-align: left;
	}

	.tag-header:hover {
		background: #efefef;
	}

	.tag-header-left {
		display: flex;
		align-items: baseline;
		gap: 0.75rem;
	}

	.tag-name {
		font-size: 1.25rem;
		font-weight: 700;
		color: #3b4151;
		margin: 0;
	}

	.tag-description {
		font-size: 0.85rem;
		color: #6b7280;
	}

	.tag-chevron {
		font-size: 0.8rem;
		color: #6b7280;
		transition: transform 0.2s;
	}

	.tag-chevron.rotated {
		transform: rotate(180deg);
	}

	/* ── Endpoints container ───────────────────────────────── */
	.tag-endpoints {
		padding: 0.75rem 1rem;
		background: #fff;
	}
</style>
