<script lang="ts">
	import { page } from '$app/state';
	import '../app.css';
	import Button from '$lib/components/ui/button/button.svelte';
	import logo from './logo_sharpen1.png';
	let { children } = $props();
</script>

<div class="flex h-full min-h-fit flex-col">
	<header class="flex px-10 bg-zinc-900 w-full">
		<a href="/"><img src={logo} alt="Minewolf Logo" /></a>
		<nav class="grow">
			<ul class="flex">
				<li><Button variant="ghost" href="/map/">Map</Button></li>
				<li><Button variant="ghost" href="/vote/">Vote</Button></li>
			</ul>
		</nav>
		<nav>
			<ul>
				<li>
					<Button variant="ghost" href="/discord/" rel="noopener nofollow" target="_blank"
						>Discord</Button
					>
				</li>
			</ul>
		</nav>
	</header>
	{#if page.route.id === '/map'}
		<main id="main" class="grow">
			{@render children()}
		</main>
	{:else}
		<main id="main" class="grow m-auto">
			{@render children()}
		</main>
		<footer class="px-10 py-2">
			<small>Join with <code>mc.minewolf.net</code></small>
			<small class="float-right"
				>Website created by <a href="https://claytonkruse.com/">Clayton Kruse</a></small
			>
		</footer>
	{/if}
</div>
