<script lang="ts">
	import type { Endpoint as EndpointType } from '$lib/types';
	import EndpointDetail from './EndpointDetail.svelte';

	let { endpoint }: { endpoint: EndpointType } = $props();

	let expanded = $state(false);

	function toggle() {
		expanded = !expanded;
	}

	function methodClass(method: string): string {
		return `method-${method.toLowerCase()}`;
	}
</script>


<div class="endpoint-row {methodClass(endpoint.method)}" class:expanded>
	<button class="endpoint-summary" onclick={toggle}>
	
		<span class="method-badge {methodClass(endpoint.method)}">
			{endpoint.method}
		</span>

		<span class="endpoint-path">{endpoint.path}</span>

		<span class="endpoint-summary-text">{endpoint.summary}</span>

		<span class="chevron" class:rotated={expanded}>▼</span>
	</button>

	{#if expanded}
		<EndpointDetail {endpoint} />
	{/if}
</div>

<style>
	.endpoint-row {
		border: 1px solid var(--border-color);
		background-color: var(--bg-section);
		border-radius: 4px;
		margin-bottom: 0.5rem;
		overflow: hidden;
		transition: box-shadow 0.2s;
	}

	.endpoint-row:hover {
		box-shadow: 0 1px 4px var(--shadow-color);
	}

	/* ── Method-based background tints ─────────────────────── */
	.endpoint-row.method-get    { border-color: var(--method-get); background: var(--method-get-bg); }
	.endpoint-row.method-post   { border-color: var(--method-post); background: var(--method-post-bg); }
	.endpoint-row.method-put    { border-color: var(--method-put); background: var(--method-put-bg); }
	.endpoint-row.method-delete { border-color: var(--method-delete); background: var(--method-delete-bg); }

	.endpoint-row.expanded {
		box-shadow: 0 2px 8px var(--shadow-color);
	}

	/* ── Summary button (the clickable bar) ───────────────── */
	.endpoint-summary {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		padding: 0.6rem 1rem;
		width: 100%;
		border: none;
		background: transparent;
		cursor: pointer;
		font-family: inherit;
		font-size: 0.9rem;
		text-align: left;
	}

	/* ── Method badge ──────────────────────────────────────── */
	.method-badge {
		font-size: 0.7rem;
		font-weight: 700;
		text-transform: uppercase;
		padding: 0.25rem 0.6rem;
		border-radius: 3px;
		min-width: 4.5rem;
		text-align: center;
		color: #fff;
		flex-shrink: 0;
	}

	.method-badge.method-get    { background: var(--method-get); }
	.method-badge.method-post   { background: var(--method-post); }
	.method-badge.method-put    { background: var(--method-put); }
	.method-badge.method-delete { background: var(--method-delete); }

	/* ── Path and summary text ─────────────────────────────── */
	.endpoint-path {
		font-weight: 600;
		color: var(--text-primary);
		font-family: 'Fira Mono', monospace;
		font-size: 0.85rem;
		flex-shrink: 0;
	}

	.endpoint-summary-text {
		color: var(--text-secondary);
		font-size: 0.85rem;
		flex: 1;
	}

	/* ── Chevron ───────────────────────────────────────────── */
	.chevron {
		font-size: 0.7rem;
		color: var(--text-secondary);
		transition: transform 0.2s;
		flex-shrink: 0;
	}

	.chevron.rotated {
		transform: rotate(180deg);
	}
</style>
