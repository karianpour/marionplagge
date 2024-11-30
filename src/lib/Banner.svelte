<script lang="ts">
	import { onMount } from 'svelte';
	import { setBanner, bannerStore } from '$lib/banner-store.js';

	interface Props {
		title: string;
		sub_title?: string | undefined;
		image?: string;
	}

	let { title, sub_title = undefined, image = '' }: Props = $props();

	let mounted = $state(false);

	$effect(() => {
		if (mounted) {
			setBanner({ title, sub_title, image });
		}
	});

	onMount(() => {
		const prev_title = $bannerStore.title;
		const prev_sub_title = $bannerStore.sub_title;
		const prev_image = $bannerStore.image;
		setBanner({ title, sub_title, image });
		mounted = true;
		return () => {
			setBanner({
				title: prev_title,
				sub_title: prev_sub_title,
				image: prev_image
			});
		};
	});
</script>
