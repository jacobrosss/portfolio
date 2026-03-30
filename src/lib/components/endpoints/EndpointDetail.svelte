<script lang="ts">
	import type { Endpoint as EndpointType } from '$lib/types';
	import { submitMockRequest } from '$lib/wordle';

	let { endpoint }: { endpoint: EndpointType } = $props();
	let detail = $derived(endpoint.detail);

	// Try it out State
	let isTryingItOut = $state(false);
	let inputValues = $state<Record<string, string>>({});
	
	// Start with the default static response body
	let currentResponseBody = $state(detail.responseBody);

	function startTryItOut() {
		isTryingItOut = true;
		if (detail.parameters) {
			detail.parameters.forEach(p => {
				inputValues[p.name] = '';
			});
		}
	}

	function cancelTryItOut() {
		isTryingItOut = false;
		inputValues = {};
	}

	function executeRequest() {
		const response = submitMockRequest(endpoint.path, inputValues);
		currentResponseBody = response;
	}
</script>

<div class="endpoint-detail">
	<!-- Description -->
	<div class="detail-section">
		<h4 class="detail-heading">Description</h4>
		<p class="detail-text">{detail.description}</p>
	</div>

	<!-- Parameters Table -->
	{#if detail.parameters && detail.parameters.length > 0}
		<div class="detail-section parameters-section">
			<div class="section-header-row">
				<h4 class="detail-heading">Parameters</h4>
				{#if !isTryingItOut}
					<button class="try-btn" onclick={startTryItOut}>Try it out</button>
				{/if}
			</div>

			<table class="params-table">
				<thead>
					<tr>
						<th>Name</th>
						<th>Description</th>
					</tr>
				</thead>
				<tbody>
					{#each detail.parameters as param}
						<tr>
							<td class="param-name-cell">
								<span class="param-name">{param.name}</span>
								{#if param.required}<span class="required">* required</span>{/if}
								<div class="param-type">{param.type}</div>
								<div class="param-in">({param.in})</div>
							</td>
							<td class="param-desc-cell">
								<div class="param-desc">{param.description}</div>
								{#if isTryingItOut}
									<input 
										type="text" 
										class="param-input" 
										placeholder={param.name}
										bind:value={inputValues[param.name]} 
									/>
								{/if}
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
			
			{#if isTryingItOut}
				<div class="execute-row">
					<button class="execute-btn" onclick={executeRequest}>
						{'Execute'}
					</button>
					<button class="cancel-btn" onclick={cancelTryItOut}>Cancel</button>
				</div>
			{/if}
		</div>
	{/if}

	<!-- Response body (rendered as formatted JSON) -->
	<div class="detail-section">
		<h4 class="detail-heading">Response body</h4>
		<pre class="json-response"><code>{JSON.stringify(currentResponseBody, null, 2)}</code></pre>
	</div>

	<!-- Links -->
	{#if detail.links && detail.links.length > 0}
		<div class="detail-section">
			<h4 class="detail-heading">Links</h4>
			<div class="detail-links">
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
		margin-bottom: 1.5rem;
	}

	.detail-section:last-child {
		margin-bottom: 0;
	}

	.section-header-row {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 0.5rem;
	}

	.detail-heading {
		font-size: 0.8rem;
		font-weight: 700;
		color: var(--text-primary);
		text-transform: uppercase;
		letter-spacing: 0.05em;
		margin: 0;
	}

	.detail-text {
		color: var(--text-primary);
		font-size: 0.9rem;
		margin: 0;
		line-height: 1.5;
	}

	/* Parameters Table */
	.params-table {
		width: 100%;
		border-collapse: collapse;
		margin-bottom: 1rem;
	}

	.params-table th {
		text-align: left;
		font-size: 0.8rem;
		color: var(--text-primary);
		padding: 0.5rem;
		border-bottom: 1px solid var(--border-color);
	}

	.params-table td {
		padding: 1rem 0.5rem;
		border-bottom: 1px solid var(--border-color);
		vertical-align: top;
	}

	.param-name-cell {
		width: 30%;
	}

	.param-name {
		font-weight: 700;
		color: var(--text-primary);
		font-size: 0.9rem;
	}

	.required {
		color: #f93e3e;
		font-size: 0.75rem;
		font-weight: 700;
		margin-left: 0.25rem;
	}

	.param-type, .param-in {
		font-size: 0.75rem;
		color: var(--text-secondary);
		margin-top: 0.2rem;
		font-family: var(--font-mono, monospace);
	}

	.param-desc {
		font-size: 0.85rem;
		color: var(--text-primary);
		margin-bottom: 0.5rem;
	}

	.param-input {
		width: 100%;
		padding: 0.5rem;
		border: 1px solid var(--border-color);
		border-radius: 4px;
		background: var(--bg-page);
		color: var(--text-primary);
		font-family: inherit;
		font-size: 0.85rem;
	}

	.param-input:focus {
		outline: none;
		border-color: var(--swagger-green);
	}

	/* Try / Execute Buttons */
	.try-btn {
		background: #fff;
		border: 1px solid var(--text-secondary);
		color: var(--text-secondary);
		border-radius: 4px;
		padding: 0.25rem 0.75rem;
		font-size: 0.8rem;
		font-weight: 700;
		cursor: pointer;
		transition: all 0.2s;
	}

	.try-btn:hover {
		border-color: var(--text-primary);
		color: var(--text-primary);
	}

	.execute-row {
		display: flex;
		gap: 0.5rem;
	}

	.execute-btn, .cancel-btn {
		border: none;
		border-radius: 4px;
		padding: 0.4rem 1rem;
		font-size: 0.85rem;
		font-weight: 700;
		cursor: pointer;
		transition: background 0.2s;
	}

	.execute-btn {
		background: var(--method-get);
		color: #fff;
		width: 100%;
	}

	.execute-btn:hover {
		background: #4A90E2; /* Slightly darker */
	}

	.execute-btn:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}

	.cancel-btn {
		background: transparent;
		color: var(--text-secondary);
		border: 1px solid var(--border-color);
	}

	.cancel-btn:hover {
		background: var(--bg-tag-header);
	}

	/* JSON response block */
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

	/* Action links */
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
