<script>
	import { page } from '$app/stores';
	import { nav, company } from '$lib/site.js';
	import Social from './Social.svelte';

	let open = $state(false);
	let scrolled = $state(false);

	function onScroll() {
		scrolled = window.scrollY > 40;
	}
</script>

<svelte:window on:scroll={onScroll} />

<header
	class="fixed inset-x-0 top-0 z-50 transition-all duration-300 {scrolled
		? 'bg-[var(--color-slate)] shadow-lg'
		: 'bg-gradient-to-b from-black/55 to-transparent'}"
>
	<!-- Utility bar -->
	<div class="hidden border-b border-white/10 lg:block">
		<div class="container-wide flex items-center justify-end gap-6 py-1.5 text-sm text-white">
			<a href={company.phoneHref} class="flex items-center gap-2 font-medium transition hover:text-[var(--color-gold)]">
				<svg class="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 16 16"><path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58z"/></svg>
				{company.phone}
			</a>
			<Social size="sm" />
		</div>
	</div>

	<!-- Main row -->
	<div class="container-wide flex items-center justify-between {scrolled ? 'py-2' : 'py-3'}">
		<a href="/" class="flex items-center">
			<img src={company.logoWhite} alt={company.name} class="{scrolled ? 'h-12' : 'h-16'} w-auto transition-all" />
		</a>

		<nav class="hidden items-center gap-7 lg:flex">
			{#each nav as item}
				<div class="group relative">
					<a
						href={item.href}
						class="font-display flex items-center gap-1 text-[0.95rem] font-medium tracking-wide uppercase transition hover:text-[var(--color-gold)] {$page.url.pathname === item.href
							? 'text-[var(--color-gold)] underline underline-offset-8'
							: 'text-white'}"
					>
						{item.label}
						{#if item.children}
							<svg class="h-3 w-3" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6" /></svg>
						{/if}
					</a>
					{#if item.children}
						<div class="invisible absolute left-1/2 top-full z-50 w-60 -translate-x-1/2 pt-4 opacity-0 transition group-hover:visible group-hover:opacity-100">
							<ul class="bg-[var(--color-slate)] py-2 shadow-xl">
								{#each item.children as child}
									<li>
										<a href={child.href} class="font-display block px-5 py-2.5 text-sm tracking-wide text-white uppercase transition hover:bg-black/30 hover:text-[var(--color-gold)]">
											{child.label}
										</a>
									</li>
								{/each}
							</ul>
						</div>
					{/if}
				</div>
			{/each}
		</nav>

		<button class="text-white lg:hidden" aria-label="Toggle menu" onclick={() => (open = !open)}>
			{#if open}
				<svg class="h-7 w-7" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" /></svg>
			{:else}
				<svg class="h-7 w-7" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16" /></svg>
			{/if}
		</button>
	</div>

	{#if open}
		<nav class="bg-[var(--color-slate)] lg:hidden">
			<div class="container-wide flex flex-col py-3">
				{#each nav as item}
					<a
						href={item.href}
						onclick={() => (open = false)}
						class="font-display border-b border-white/10 py-3 text-base font-medium tracking-wide text-white uppercase"
					>
						{item.label}
					</a>
					{#if item.children}
						{#each item.children as child}
							<a
								href={child.href}
								onclick={() => (open = false)}
								class="font-display border-b border-white/5 py-2.5 pl-4 text-sm tracking-wide text-white/70 uppercase"
							>
								{child.label}
							</a>
						{/each}
					{/if}
				{/each}
				<a href={company.phoneHref} class="btn btn-gold mt-4 justify-center">{company.phone}</a>
			</div>
		</nav>
	{/if}
</header>
