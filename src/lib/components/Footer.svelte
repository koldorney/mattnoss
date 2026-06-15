<script>
	import { nav, company } from '$lib/site.js';
	import Social from './Social.svelte';
	const year = 2026;
</script>

<!-- Secondary gray nav bar -->
<nav class="bg-[#c9c9c9]">
	<div class="container-wide flex flex-wrap justify-center gap-x-7 gap-y-2 py-3">
		{#each nav as item}
			<a
				href={item.href}
				class="font-display text-sm font-medium tracking-wide text-[var(--color-slate)] uppercase transition hover:text-white"
			>
				{item.label}
			</a>
		{/each}
	</div>
</nav>

<footer class="bg-[var(--color-slate)] text-white">
	<div class="container-wide grid items-center gap-10 py-14 text-center md:grid-cols-2 md:text-left">
		<div class="flex flex-col items-center md:items-start">
			<img src={company.footerLogo} alt={company.name} class="h-24 w-auto" />
			<address class="mt-4 space-y-1 text-sm not-italic text-white/85">
				<p>{company.address1}</p>
				<p>{company.address2}</p>
				<p class="pt-1"><a href={company.phoneHref} class="transition hover:text-[var(--color-gold)]">{company.phone}</a></p>
			</address>
		</div>

		<div class="flex flex-col items-center md:items-end">
			<h4 class="font-display text-xl tracking-wide text-white">Get Social</h4>
			<div class="mt-3 text-[var(--color-gold)]">
				<Social size="lg" />
			</div>
		</div>
	</div>

	<div class="border-t border-white/10">
		<div class="container-wide py-5 text-center text-xs text-white/60">
			All content Copyright © {year}, Matt Noss Construction.
		</div>
	</div>
</footer>
