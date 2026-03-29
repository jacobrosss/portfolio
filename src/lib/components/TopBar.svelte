<script lang="ts">
	let { title }: {
		title: string;
	} = $props();
</script>

<script module>
	let isDarkMode = $state(false);

	export function toggleTheme() {
		isDarkMode = !isDarkMode;
		if (isDarkMode) {
			document.documentElement.setAttribute('data-theme', 'dark');
		} else {
			document.documentElement.removeAttribute('data-theme');
		}
	}
</script>
<header class="topbar">
	<div class="topbar-inner">
		<span class="topbar-title">{title}</span>
		<button class="theme-toggle" onclick={toggleTheme}>
			{isDarkMode ? 'Light' : 'Dark'}
		</button>
	</div>
</header>

<style>
	.topbar {
		background-color: var(--swagger-green); 
		padding: 0.5rem 1rem;
	}

	.topbar-inner {
		max-width: 1460px;
		width: 100%;
		margin: 0 auto;
	}

	.topbar-title {
		color: var(--topbar-text);
		font-size: 1rem;
		font-weight: 700;
	}

	.topbar-inner {
		display: flex;
		justify-content: space-between;
		align-items: center;
		max-width: 1460px;
		width: 100%;
		margin: 0 auto;
	}

	.theme-toggle {
		background: var(--toggle-bg);
		border: none;
		color: var(--topbar-text);
		padding: 0.25rem 0.5rem;
		border-radius: 4px;
		cursor: pointer;
		font-size: 0.8rem;
		font-weight: 600;
	}

	.theme-toggle:hover {
		background: var(--toggle-bg-hover);
	}
</style>
