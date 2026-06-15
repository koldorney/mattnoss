<script>
	import PageHero from '$lib/components/PageHero.svelte';
	import CtaBand from '$lib/components/CtaBand.svelte';
	import { pageImages } from '$lib/data/imageData.js';
	const photos = pageImages.testimonials.photos;

	const reviews = [
		{ quote: 'We used Matt and his team to build our dream home and we could not be happier with the outcome! His team did amazing work! Matt went above and beyond all the expectations my husband and I had for a builder. He was easy to work with and a great problem solver. He kept us up to date on our budget and each step of the building process. We still have a great relationship with Matt, he is always there for us when we have questions concerning the house. Above all, he is trustworthy and honest. We highly recommend Matt Noss Construction!', author: 'Courtney C.', role: 'Homeowner' },
		{ quote: 'Matt and his team worked with us to construct our custom home on the river. It was an amazing process. He and his team are complete professionals and we thoroughly enjoyed it as well as the outcome.', author: 'Helen B.', role: 'Homeowner' },
		{ quote: 'We had Matt replace a ~20 year old deck and add a roof over it and tie it into the house. He was easy to work with, understood our budget, and handled all of the permits and inspections. We love his exposed LARGE beam design and the deck is much safer, sturdier, and functional than what was there before. I highly recommend him and have been trying to come up with other projects I could have him do for us as well.', author: 'Homeowner', role: 'Deck & Porch' },
		{ quote: 'Matt is a 5 star individual and a pleasure to work with! He has a great eye for design!', author: 'Homeowner', role: 'Client' },
		{ quote: 'Building is always a stressful process, but Matt Noss was exceptional! His calm demeanor was crucial in the construction of our very unique mid-century modern inspired home. He worked well with our West Coast Architect, Robert Nebolon. Matt knows some of the best sub-contractors in the business, and they seemed to trust, and respect him implicitly, showing up on time, and delivering high-quality workmanship. While we are now in our “forever home,” if we DID build again, we wouldn’t hesitate to call Matt!', author: 'Homeowner', role: 'Mid-Century Modern' },
		{ quote: 'Matt built our 4,500 sf Moss Creek designed home on a hillside west of Knoxville and it was a great experience. He was outstanding to work with and employed the best subcontractors in the area. Matt has a knack for leading you through the design & build process, considering cost tradeoffs, and helping you get to the most cost-effective solutions. We highly recommend him to anyone building their own home!', author: 'Homeowner', role: 'Moss Creek Home' },
		{ quote: 'I own a small handyman company and we have customers ask us about larger projects. We always give them Matt’s info knowing he will give them great advice and do the project above and beyond with no surprises. We know our customer will be well taken care of.', author: 'Allen E.', role: 'Small Handyman Company' },
		{ quote: 'We would highly recommend Matt Noss Construction. Matt and his team constructed a beautiful covered patio on the back of our house. Matt listened to what we wanted, worked with us on our budget, was professional, used quality products, and completed the project timely. We enjoyed working with him and will definitely use him again.', author: 'Maria D.', role: 'Homeowner' },
		{ quote: 'They did an outstanding job. Honest, very conscientious, cannot say enough about their work. They were good guys. He was available to call at any time.', author: 'Nikki A.', role: 'Homeowner' }
	];
</script>

<svelte:head>
	<title>Testimonials - Matt Noss Custom Home Builder Knoxville, TN</title>
	<meta name="description" content="Read what East Tennessee families say about building their custom homes with Matt Noss Construction." />
</svelte:head>

<PageHero title="Contact Us" image={pageImages.testimonials.hero} />

<section class="section bg-white">
	<div class="container-wide text-center">
		<h2 class="text-3xl md:text-4xl">What Our Clients Say</h2>
		<div class="divider"></div>
	</div>
	<div class="container-wide mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
		{#each reviews as t, i}
			<figure class="flex flex-col overflow-hidden bg-[var(--color-cream)] shadow-sm">
				{#if photos[i % photos.length]}
					<div class="h-28 overflow-hidden">
						<img src={photos[i % photos.length]} alt="" class="h-full w-full object-cover" loading="lazy" />
					</div>
				{/if}
				<div class="flex flex-1 flex-col p-7">
				<div class="mb-4 text-[var(--color-gold)]">★★★★★</div>
				<blockquote class="flex-1 leading-relaxed text-[var(--color-charcoal)]">“{t.quote}”</blockquote>
				<figcaption class="mt-6 border-t border-[var(--color-line)] pt-4">
					<p class="font-display tracking-wide text-[var(--color-slate)] uppercase">{t.author}</p>
					<p class="text-sm text-[var(--color-gold)]">{t.role}</p>
				</figcaption>
				</div>
			</figure>
		{/each}
	</div>
</section>

<CtaBand />
