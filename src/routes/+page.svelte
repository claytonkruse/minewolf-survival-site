<script>
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Carousel from '$lib/components/ui/carousel';
	//const pics = Object.values(import.meta.glob('$lib/screenshots/*', { eager: true, as: 'url' }));
	const pics = Object.values(import.meta.glob('$lib/screenshots/*', { eager: true, as: 'url' }));
</script>

<svelte:head>
	<title>MINEWOLF - Survival Since 2016</title>
</svelte:head>

<div class="text-center">
	<div class="max-w-lg m-auto">
		<h1 class="text-4xl font-bold my-10 mb-2">
			Welcome to <span class="uppercase">Minewolf</span>!
		</h1>
		<p>
			To join the server, connect with <code>mc.minewolf.net</code>.<br />Note: Minewolf supports
			Bedrock Edition crossplay!
		</p>
		<br />
		<p>
			Welcome to Minewolf, the thriving Minecraft server where community, creativity, and adventure
			converge! Since 2016, at Minewolf we have prided ourselves in offering a unique blend of
			features that cater to our players. Whether you are a seasoned builder, a shrewd entrepreneur,
			or a wanderer looking for cool new friends and casual fun, you will find a home here.
		</p>
		<br />
		<nav>
			<ul class="flex gap-1 justify-center">
				<li><Button variant="outline" href="/map/">Check out the map!</Button></li>
				<li><Button variant="outline" href="/discord/">Join us on Discord!</Button></li>
			</ul>
		</nav>
	</div>
	<br /><br />
	<h3 class="text-xl mb-2 font-bold bg-zinc-9">Gallery</h3>
	<Carousel.Root class="max-w-4xl mt-5 w-full">
		<Carousel.Previous></Carousel.Previous>
		<Carousel.Next></Carousel.Next>
		<Carousel.Content>
			{#each pics as src}
				<Carousel.Item class="h-full flex flex-col justify-center">
					<img class="w-full" {src} alt="" />
				</Carousel.Item>
			{/each}
		</Carousel.Content>
	</Carousel.Root>
</div>
