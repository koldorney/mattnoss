<script>
	import { onMount } from 'svelte';
	import { testimonials, images } from '$lib/site.js';

	let { bg = images.testimonialsBg } = $props();
	let i = $state(0);
	onMount(() => {
		const t = setInterval(() => (i = (i + 1) % testimonials.length), 7000);
		return () => clearInterval(t);
	});
</script>

<section class="bg-[var(--color-cream)]">
	<div class="grid items-stretch lg:grid-cols-2">
		<div
			class="relative flex flex-col justify-center bg-[length:auto_100%] bg-left bg-no-repeat px-6 py-16 lg:pl-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))]"
			style="background-image:url('{images.testimonialsBg}')"
		>
			<div class="max-w-xl">
				<h2 class="text-3xl md:text-4xl">Testimonials</h2>
				<div class="divider !mx-0"></div>
				{#key i}
					<blockquote class="mt-8 text-xl leading-relaxed italic" style="font-family:var(--font-serif)">
						“{testimonials[i].quote}”
					</blockquote>
					<p class="mt-6 font-display text-lg tracking-wide text-[var(--color-slate)]">{testimonials[i].author}</p>
					<p class="text-sm text-[var(--color-gold)]">{testimonials[i].role}</p>
				{/key}
				<div class="mt-6 flex gap-2">
					{#each testimonials as _, n}
						<button
							aria-label="Testimonial {n + 1}"
							onclick={() => (i = n)}
							class="h-2.5 w-2.5 rounded-full transition {n === i ? 'bg-[var(--color-gold)]' : 'bg-[var(--color-line)]'}"
						></button>
					{/each}
				</div>
				<a href="/testimonials" class="btn btn-outline mt-8 text-[var(--color-slate)]">View All Testimonials</a>
			</div>
		</div>
		<div class="min-h-[320px] bg-cover bg-center" style="background-image:url('{bg}')"></div>
	</div>
</section>
