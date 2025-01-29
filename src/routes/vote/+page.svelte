<script lang="ts">
	const listings = [
		{
			name: 'Planet Minecraft',
			href: 'https://www.planetminecraft.com/server/minewolf-5894685/vote'
		},
		{
			name: 'Minecraft.Buzz',
			href: 'https://minecraft.buzz/vote/10775'
		},
		{
			name: 'Minecraft Server List',
			href: 'https://minecraft-server-list.com/server/495208/vote/'
		},
		{
			name: 'MinecraftServers.org',
			href: 'https://minecraftservers.org/vote/648677'
		},
		{
			name: 'Minecraft-MP',
			href: 'https://minecraft-mp.com/server/317926/vote/'
		}
	];
</script>

<h1 class="text-4xl mb-2 font-bold">Vote Links</h1>
<nav>
	<ul class="flex flex-col gap-1">
		{#each listings as { name, href }}
			<li>
				<a rel="nofollow noopener" target="_blank" class="underline-offset-4 hover:underline" {href}
					>{name}</a
				>
			</li>
		{/each}
	</ul>
</nav>

<h3 class="text-lg font-bold align-baseline mt-10 mb-2">Other Stuff</h3>
<nav>
	<ul class="flex flex-col gap-1">
		<li><a class="underline-offset-4 hover:underline" href="/discord/">Join us on Discord</a></li>
		<li><a class="underline-offset-4 hover:underline" href="/map/">Check out the map</a></li>
	</ul>
</nav>
