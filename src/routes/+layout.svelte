<script>
	import { base } from '$app/paths';
	import { bannerStore } from '$lib/banner-store';
	import MenuItem from '$lib/MenuItem.svelte';
	import '../app.css';
	let { children } = $props();

	function showMenu() {
		const index = document.body.className.indexOf(' nav-open');
		if (index > 0) {
			document.body.className = document.body.className.substring(0, index);
		} else {
			document.body.className = document.body.className + ' nav-open';
		}
	}

	function hideMenu() {
		const index = document.body.className.indexOf(' nav-open');
		if (index > 0) {
			document.body.className = document.body.className.substring(0, index);
		}
	}
</script>

<svelte:head>
	{#if import.meta.env.MODE === 'staging'}
		<meta name="robots" content="noindex" />
	{/if}
</svelte:head>

<div class="wrapper">
	<div class="header-wrap">
		<div class="nav-wrap">
			<div id="logo">
				<span class="wsite-logo">
					<a href={base + '/'}>
						<img src="images/MarionPlaggejan_logo_s.jpg?1519046935" alt="Marion Plagge" />
					</a>
				</span>
			</div>
			<label onclick={showMenu} class="hamburger"><span></span></label>
			<div class="menu">
				<div class="container">
					<div class="search"></div>
					<ul class="wsite-menu-default">
						<MenuItem href="/" text="craniosacraal" />
						<MenuItem href="/zouttherapie" text="zouttherapie" />
						<MenuItem href="/over-marion" text="over marion" />
						<!-- <MenuItem href="/waarom-therapie" text="waarom therapie" /> -->
						<MenuItem href="/tarieven" text="tarieven" />
						<MenuItem href="/contact" text="contact" />
					</ul>
				</div>
			</div>
		</div>
		<div class="banner-wrap" onclick={hideMenu}>
			<div class="wsite-elements wsite-not-footer wsite-header-elements">
				<div class="wsite-section-wrap">
					<div
						class="wsite-section wsite-header-section wsite-section-bg-image"
						style="background-image: url('{$bannerStore.image}') ;background-repeat: no-repeat ;background-position: 20.99% 55.66% ;background-color: transparent ;background-size: 140%;"
					>
						<div class="wsite-section-content">
							<div class="container">
								<div class="banner">
									<div class="wsite-section-elements">
										<div class="paragraph" style="text-align:center;">
											<h1>{$bannerStore.title}</h1>
											{#if $bannerStore.sub_title}
												<span>{$bannerStore.sub_title}</span>
											{/if}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div id="main-wrap" onclick={hideMenu}>
		{@render children()}
		<div class="sticky-footer-push">
			<!--here you can say some thing in the footer-->
		</div>
	</div>
	<!--/.wrapper-->
	<div id="footer-wrap" onclick={hideMenu}>
		<div class="container"></div>
	</div>
	<div class="navmobile-wrapper">
		<div id="navmobile" class="nav">
			<ul class="wsite-menu-default">
				<MenuItem href="/" text="craniosacraal" />
				<MenuItem href="/zouttherapie" text="zouttherapie" />
				<MenuItem href="/over-marion" text="over marion" />
				<!-- <MenuItem href="/waarom-therapie" text="waarom therapie" /> -->
				<MenuItem href="/tarieven" text="tarieven" />
				<MenuItem href="/contact" text="contact" />
			</ul>
		</div>
	</div>
</div>
