<!--
  SwaggerHeader.svelte
  ====================
  The dark green top bar + info section, just like Swagger UI.

  Svelte 5 key concepts shown here:
  - $props()  → how components receive data from their parent
  - {expression} → how you insert JS values into HTML
-->
<script lang="ts">
	// ── Props ─────────────────────────────────────────────────
	// $props() is Svelte 5's way of declaring component inputs.
	// The parent passes these in like HTML attributes:
	//   <SwaggerHeader title="My API" version="1.0" description="..." />

	let { title, version, description }: {
		title: string;
		version: string;
		description: string;
	} = $props();
</script>

<!-- Top green bar (like Swagger UI's header) -->
<header class="swagger-topbar">
	<div class="topbar-inner">
		<span class="topbar-title">📋 {title}</span>
	</div>
</header>

<!-- Info section below the bar -->
<div class="swagger-info">
	<h1 class="info-title">
		{title}
		<span class="version-badge">{version}</span>
	</h1>
	<p class="info-description">{description}</p>
</div>

<style>
	/* ── Top bar ────────────────────────────────────────────── */
	.swagger-topbar {
		background-color: #547f00; /* Swagger's signature green */
		padding: 0.5rem 1rem;
	}

	.topbar-inner {
		max-width: 64rem;
		margin: 0 auto;
	}

	.topbar-title {
		color: #fff;
		font-size: 1rem;
		font-weight: 700;
	}

	/* ── Info block ─────────────────────────────────────────── */
	.swagger-info {
		max-width: 64rem;
		margin: 0 auto;
		padding: 1.5rem 1rem 1rem;
	}

	.info-title {
		font-size: 2rem;
		font-weight: 700;
		color: #3b4151;
		margin: 0;
		display: flex;
		align-items: center;
		gap: 0.75rem;
	}

	.version-badge {
		background-color: #547f00;
		color: #fff;
		font-size: 0.75rem;
		font-weight: 700;
		padding: 0.25rem 0.6rem;
		border-radius: 3px;
		vertical-align: middle;
	}

	.info-description {
		color: #3b4151;
		font-size: 0.95rem;
		margin-top: 0.5rem;
	}
</style>
