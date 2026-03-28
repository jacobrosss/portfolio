<script lang="ts">
	import TopBar from '$lib/components/TopBar.svelte';
	import Banner from '$lib/components/Banner.svelte';
	import Content from '$lib/components/Content.svelte';

	import { BannerInfo } from '$lib/portfolioData';
</script>

<svelte:head>
	<title>{BannerInfo.title} — Portfolio</title>
	<meta name="description" content="{BannerInfo.description}" />
</svelte:head>

<TopBar
	title={BannerInfo.title}
/>

<Banner
	title={BannerInfo.title}
	version={BannerInfo.version}
	description={BannerInfo.description}
/>

<Content 
/>