<script lang="ts">
	import type { Endpoint as EndpointType } from '$lib/portfolioData';
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
		<EndpointDetail detail={endpoint.detail} />
	{/if}
</div>

<style>
	.endpoint-row {
		border: 1px solid #d8dde7;
		border-radius: 4px;
		margin-bottom: 0.5rem;
		overflow: hidden;
		transition: box-shadow 0.2s;
	}

	.endpoint-row:hover {
		box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
	}

	/* ── Method-based background tints ─────────────────────── */
	.endpoint-row.method-get    { border-color: #61affe; background: rgba(97, 175, 254, 0.1); }
	.endpoint-row.method-post   { border-color: #49cc90; background: rgba(73, 204, 144, 0.1); }
	.endpoint-row.method-put    { border-color: #fca130; background: rgba(252, 161, 48, 0.1); }
	.endpoint-row.method-delete { border-color: #f93e3e; background: rgba(249, 62, 62, 0.1); }

	.endpoint-row.expanded {
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
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

	.method-badge.method-get    { background: #61affe; }
	.method-badge.method-post   { background: #49cc90; }
	.method-badge.method-put    { background: #fca130; }
	.method-badge.method-delete { background: #f93e3e; }

	/* ── Path and summary text ─────────────────────────────── */
	.endpoint-path {
		font-weight: 600;
		color: #3b4151;
		font-family: 'Fira Mono', monospace;
		font-size: 0.85rem;
		flex-shrink: 0;
	}

	.endpoint-summary-text {
		color: #6b7280;
		font-size: 0.85rem;
		flex: 1;
	}

	/* ── Chevron ───────────────────────────────────────────── */
	.chevron {
		font-size: 0.7rem;
		color: #6b7280;
		transition: transform 0.2s;
		flex-shrink: 0;
	}

	.chevron.rotated {
		transform: rotate(180deg);
	}
</style>
