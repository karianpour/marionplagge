<script>
	import { page } from '$app/stores';
	import { base } from '$app/paths';

	let { href, text, hideMenu } = $props();

	let active_menu = $derived($page.url.pathname === href);
</script>

<li class="wsite-menu-item-wrap" class:active_menu>
	<a href={base + href} class="wsite-menu-item" onclick={()=>hideMenu?.()}> {text} </a>
</li>
