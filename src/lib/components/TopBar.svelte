<script lang="ts">
	let { title }: {
		title: string;
	} = $props();
</script>

<script module>
	export function setTheme(event: Event) {
		const target = event.target as HTMLSelectElement;
		const isDark = target.value === 'dark';
		if (isDark) {
			document.documentElement.setAttribute('data-theme', 'dark');
		} else {
			document.documentElement.removeAttribute('data-theme');
		}
	}
</script>
<header class="topbar">
	<div class="topbar-inner">
		<span class="topbar-title">{title}</span>
		<div class="download-url-wrapper">
			<span class="select-label">Select a definition</span>
			<select class="download-url-input" onchange={setTheme}>
				<option value="light">Light Mode</option>
				<option value="dark">Dark Mode</option>
			</select>
		</div>
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

	.download-url-wrapper {
		display: flex;
		align-items: center;
	}

	.select-label {
		color: var(--topbar-text);
		font-size: 0.85rem;
		font-weight: 700;
		margin-right: 0.5rem;
	}

	.download-url-input {
		background: var(--bg-section);
		border: 1px solid var(--border-color);
		border-radius: 4px;
		padding: 0.3rem 0.5rem;
		font-family: inherit;
		font-weight: 700;
		color: var(--text-primary);
		cursor: pointer;
		min-width: 15rem;
		font-size: 0.85rem;
	}

	.download-url-input:focus {
		outline: none;
		border-color: var(--text-primary);
	}
</style>
