<script>
	import { projects } from '$lib/site.js';
	let { bg = 'bg-white' } = $props();
</script>

<section class="section {bg}">
	<div class="container-wide text-center">
		<h2 class="text-3xl md:text-4xl">Recent Work</h2>
		<div class="divider"></div>
	</div>
	<div class="container-wide mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
		{#each projects as project}
			<a href="/portfolio" class="group block text-center">
				<div class="aspect-[4/3] overflow-hidden rounded-sm shadow-md">
					<img src={project.image} alt={project.name} class="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
				</div>
				<h3 class="mt-4 text-base leading-snug">{project.name}</h3>
			</a>
		{/each}
	</div>
</section>
