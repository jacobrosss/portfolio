<script lang="ts">
	import type { EndpointDetail as DetailType } from '$lib/types';

	let { detail }: { detail: DetailType } = $props();
</script>

<div class="endpoint-detail">
	<!-- Description -->
	<div class="detail-section">
		<h4 class="detail-heading">Description</h4>
		<p class="detail-text">{detail.description}</p>
	</div>

	<!-- Response body (rendered as formatted JSON) -->
	<div class="detail-section">
		<h4 class="detail-heading">Response body</h4>
		<pre class="json-response"><code>{JSON.stringify(detail.responseBody, null, 2)}</code></pre>
	</div>

	<!-- Links (only rendered if they exist) -->
	<!-- {#if ...} is Svelte's conditional block — only renders if true -->
	{#if detail.links && detail.links.length > 0}
		<div class="detail-section">
			<h4 class="detail-heading">Links</h4>
			<div class="detail-links">
				<!-- {#each ...} loops over an array -->
				{#each detail.links as link}
					<a href={link.url} target="_blank" rel="noopener noreferrer" class="link-btn">
						{link.label} ↗
					</a>
				{/each}
			</div>
		</div>
	{/if}
</div>

<style>
	.endpoint-detail {
		padding: 1rem 1.25rem;
		border-top: 1px solid var(--border-color);
		background: var(--bg-section);
	}

	.detail-section {
		margin-bottom: 1rem;
	}

	.detail-section:last-child {
		margin-bottom: 0;
	}

	.detail-heading {
		font-size: 0.8rem;
		font-weight: 700;
		color: var(--text-primary);
		text-transform: uppercase;
		letter-spacing: 0.05em;
		margin: 0 0 0.5rem;
	}

	.detail-text {
		color: var(--text-primary);
		font-size: 0.9rem;
		margin: 0;
		line-height: 1.5;
	}

	/* JSON response block — looks like Swagger's response viewer */
	.json-response {
		background: var(--bg-code);
		color: var(--code-text);
		padding: 1rem;
		border-radius: 4px;
		font-family: 'Fira Mono', 'Courier New', monospace;
		font-size: 0.8rem;
		overflow-x: auto;
		margin: 0;
		line-height: 1.6;
	}

	.json-response code {
		color: inherit;
	}

	/* Action links styled as buttons */
	.detail-links {
		display: flex;
		gap: 0.5rem;
		flex-wrap: wrap;
	}

	.link-btn {
		display: inline-block;
		padding: 0.4rem 1rem;
		background: var(--swagger-green);
		color: #fff;
		border-radius: 3px;
		font-size: 0.85rem;
		font-weight: 600;
		text-decoration: none;
		transition: background 0.2s;
	}

	.link-btn:hover {
		background: var(--swagger-green-dark);
		text-decoration: none;
	}
</style>
