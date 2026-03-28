<script lang="ts">
	let {title, version, description }: {
		title: string;
		version: string;
		description: string;
	} = $props();
</script>

<div class="banner">
	<h1 class="banner-title">
		{title}
		<span class="banner-version">{version}</span>
	</h1>
	<a class="banner-details" href="https://github.com/jacobrosss">{description}</a>
</div>

<style>
	.banner {
		max-width: 1460px;
		width: 100%;
		margin: 0 auto;
		padding: 1rem;
		text-align: left;
		box-sizing: border-box;
	}

	.banner-title {
		font-size: 2rem;
		font-weight: 700;
		color: #3b4151;
		margin: 0;
		display: flex;
		align-items: center;
		gap: 0.75rem;
	}

	.banner-version {
		background-color: var(--swagger-green-dark);
		color: #fff;
		font-size: 0.75rem;
		font-weight: 700;
		padding: 0.25rem 0.6rem;
		border-radius: 3px;
		vertical-align: middle;
	}

	.banner-details {
		color: #4990e2;
		font-size: 0.95rem;
		margin-top: 0.5rem;
	}
</style>
