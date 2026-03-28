<script lang="ts">
	let { title }: {
		title: string;
	} = $props();
</script>

<header class="topbar">
	<div class="topbar-inner">
		<span class="topbar-title">{title}</span>
	</div>
</header>

<style>
	.topbar {
		background-color: #547f00; 
		padding: 0.5rem 1rem;
	}

	.topbar-inner {
		width: 80%;
		margin: 0 auto;
	}

	.topbar-title {
		color: #fff;
		font-size: 1rem;
		font-weight: 700;
	}
</style>
