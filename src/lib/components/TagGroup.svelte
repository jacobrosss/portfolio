<!--
  TagGroup.svelte
  ===============
  A collapsible category section — groups endpoints under a tag.
  Like Swagger UI's "pet", "store", "user" groups.

  Svelte 5 key concepts shown here:
  - $state()    → reactive local state
  - {#each ...} → rendering a list of items
  - Component composition (rendering Endpoint children)
-->
<script lang="ts">
	import type { Tag, Endpoint as EndpointType } from '$lib/portfolioData';
	import Endpoint from './Endpoint.svelte';

	// ── Props ─────────────────────────────────────────────────
	// This component receives a tag object and its array of endpoints.

	let { tag, endpoints }: {
		tag: Tag;
		endpoints: EndpointType[];
	} = $props();

	// ── Local state ──────────────────────────────────────────
	// Tag groups start expanded by default

	let expanded = $state(true);

	function toggle() {
		expanded = !expanded;
	}
</script>

<section class="tag-group">
	<!-- Tag header (clickable to collapse/expand) -->
	<button class="tag-header" onclick={toggle}>
		<div class="tag-header-left">
			<h2 class="tag-name">{tag.name}</h2>
			<span class="tag-description">{tag.description}</span>
		</div>
		<span class="tag-chevron" class:rotated={expanded}>▼</span>
	</button>

	<!-- Endpoints list (only shown when expanded) -->
	{#if expanded}
		<div class="tag-endpoints">
			<!--
			  {#each array as item}
			  This is Svelte's loop. It renders one <Endpoint> per item.
			  The (endpoint.path) part is a "key" — it helps Svelte
			  efficiently update the DOM when items change, like
			  React's key={...} prop.
			-->
			{#each endpoints as endpoint (endpoint.path)}
				<Endpoint {endpoint} />
			{/each}
		</div>
	{/if}
</section>

<style>
	.tag-group {
		margin-bottom: 1.5rem;
		border: 1px solid #d8dde7;
		border-radius: 4px;
		overflow: hidden;
	}

	/* ── Tag header ────────────────────────────────────────── */
	.tag-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		padding: 0.75rem 1rem;
		background: #f7f7f7;
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
