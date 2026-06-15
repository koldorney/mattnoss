<script>
	import { onMount } from 'svelte';
	import {
		coreValues,
		projects,
		testimonials,
		serviceAreas,
		heroSlides,
		images
	} from '$lib/site.js';

	let slide = $state(0);
	let tIndex = $state(0);

	onMount(() => {
		const a = setInterval(() => (slide = (slide + 1) % heroSlides.length), 5000);
		const b = setInterval(() => (tIndex = (tIndex + 1) % testimonials.length), 7000);
		return () => {
			clearInterval(a);
			clearInterval(b);
		};
	});
</script>

<svelte:head>
	<title>Matt Noss Construction | Custom Home Builder in Knoxville TN</title>
	<meta
		name="description"
		content="Matt Noss Construction is the top custom home builder in Knoxville, TN — modern, farmhouse, lakefront, and everything in between."
	/>
</svelte:head>

<!-- HERO SLIDER -->
<section class="relative flex h-screen min-h-[600px] items-center overflow-hidden">
	{#each heroSlides as src, i}
		<img
			{src}
			alt=""
			class="absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 {i === slide
				? 'opacity-100'
				: 'opacity-0'}"
		/>
	{/each}
	<div class="absolute inset-0 bg-black/30"></div>
	<div class="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-transparent"></div>

	<div class="container-wide relative z-10 max-w-3xl text-white [text-shadow:0_2px_18px_rgba(0,0,0,0.85)]">
		<h1 class="text-4xl leading-[1.1] text-white sm:text-5xl md:text-6xl">Custom Home Builder in Knoxville TN</h1>
		<p class="mt-5 font-serif text-2xl font-light italic md:text-3xl" style="font-family:var(--font-serif)">
			Build the home of your dreams with a flexible and personalized plan.
		</p>
		<div class="mt-8 flex flex-wrap gap-4">
			<a href="/contact" class="btn btn-light">Let’s Get Started! <span class="arrow">›</span></a>
			<a href="/contact" class="btn btn-light">Schedule a Consultation <span class="arrow">›</span></a>
		</div>
	</div>

	<div class="absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 gap-2.5">
		{#each heroSlides as _, i}
			<button
				aria-label="Slide {i + 1}"
				onclick={() => (slide = i)}
				class="h-2.5 w-2.5 rounded-full border border-white transition {i === slide ? 'bg-white' : 'bg-transparent'}"
			></button>
		{/each}
	</div>
</section>

<!-- INTRO -->
<section class="section bg-[var(--color-cream)]">
	<div class="container-wide text-center">
		<h2 class="text-3xl md:text-5xl">Top Custom Home Builder in Knoxville, TN!</h2>
		<p class="subhead mt-3">High-Quality Luxury Homes</p>
	</div>
	<div class="container-wide mt-12 grid items-center gap-10 md:grid-cols-2">
		<img src={images.intro} alt="Custom home builder Knoxville TN" class="aspect-[4/3] w-full rounded-sm object-cover shadow-xl" />
		<div>
			<p class="text-lg leading-relaxed">
				Matt Noss Construction specializes in building high quality custom homes in Knoxville, TN. We
				specialize in building everything from custom modern homes, lake front homes, farmhouse
				style, and everything in between.
			</p>
			<a href="/contact" class="btn btn-dark mt-7">Get a Free Estimate! <span class="arrow">›</span></a>
		</div>
	</div>
</section>

<!-- WHAT MAKES US STAND OUT -->
<section class="section bg-white">
	<div class="container-wide grid items-center gap-12 md:grid-cols-2">
		<div>
			<h2 class="text-3xl md:text-4xl">What Makes Us Stand Out</h2>
			<p class="subhead mt-2">Knoxville Custom Home Builders</p>
			<p class="mt-6 text-lg leading-relaxed">
				Minimal regulation, skill, and experience in the residential construction industry make
				building a custom dream home a risky endeavor for families to pursue. However, we’re on a
				mission to change that.
			</p>
			<p class="mt-4 text-lg leading-relaxed">
				At Matt Noss Custom Homes, we have spent over 20 years developing the experience and knowledge
				needed to build beautiful, functional homes and providing unparalleled service to our clients.
			</p>
			<a href="/about" class="btn btn-dark mt-7">Learn More <span class="arrow">›</span></a>
		</div>
		<img src={images.standOut} alt="Custom home builders Knoxville TN" class="aspect-[4/3] w-full rounded-sm object-cover shadow-xl" />
	</div>
</section>

<!-- DELIVERING HIGH-QUALITY + CORE VALUES -->
<section class="section bg-[var(--color-cream)]">
	<div class="container-wide grid items-center gap-12 md:grid-cols-2">
		<img src={images.difference} alt="Custom homes Knoxville TN" class="aspect-[4/3] w-full rounded-sm object-cover shadow-xl" />
		<div>
			<h2 class="text-3xl md:text-4xl">Delivering High-Quality Custom Homes to Knoxville</h2>
			<div class="mt-6 space-y-4 text-lg leading-relaxed">
				{#each coreValues as v}
					<p><span class="font-semibold text-[var(--color-gold)]">{v.title}</span> — {v.body}</p>
				{/each}
				<p>
					Simply put, expertise and communication are at the heart of what we do. Our goal is to build
					a home you and your family can thrive in for years to come.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- RECENT WORK -->
<section class="section bg-white">
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

<!-- WHERE WE SERVE -->
<section class="section bg-[var(--color-cream)]">
	<div class="container-wide text-center">
		<h2 class="text-3xl md:text-4xl">Where We Serve</h2>
		<div class="divider"></div>
		<div class="mt-12 grid grid-cols-2 gap-y-6 md:grid-cols-4">
			{#each serviceAreas as area}
				<p class="font-display text-base font-medium tracking-wide text-[var(--color-slate)] uppercase">{area}</p>
			{/each}
		</div>
	</div>
</section>

<!-- THE MATT NOSS DIFFERENCE -->
<section class="section bg-white">
	<div class="container-wide grid items-center gap-12 md:grid-cols-2">
		<img src={images.closet} alt="The Matt Noss difference" class="aspect-[4/3] w-full rounded-sm object-cover shadow-xl" />
		<div>
			<h2 class="text-3xl md:text-4xl">The Matt Noss Difference</h2>
			<p class="subhead mt-2">Built for the way you live…</p>
			<p class="mt-6 text-lg leading-relaxed">
				At Matt Noss Custom Homes, we understand your investment and are committed to building the home
				of your dreams. We make sure you have the most quality for your money. Our goal is to create
				quality projects the way our customers want them.
			</p>
			<a href="/contact" class="btn btn-dark mt-7">Get a Free Estimate! <span class="arrow">›</span></a>
		</div>
	</div>
</section>

<!-- MEET THE BUILDER -->
<section class="section bg-[var(--color-cream)]">
	<div class="container-wide text-center">
		<h2 class="text-3xl md:text-4xl">Meet the Builder</h2>
		<p class="mt-2 font-display text-lg tracking-wide text-[var(--color-slate)]">Matt Noss, Owner</p>
	</div>
	<div class="container-wide mt-10 grid items-start gap-12 lg:grid-cols-5">
		<div class="lg:col-span-3">
			<h3 class="subhead !text-2xl">From Aussie Farms to Knoxville Homes: My Journey</h3>
			<div class="mt-5 space-y-4 leading-relaxed">
				<p>
					My journey to becoming a custom home builder in Knoxville took a slightly unexpected
					turn—or perhaps it was fate. You see, I grew up on a farm in Australia, and while I loved
					the wide-open spaces, I had a yearning to explore the world before settling down.
				</p>
				<p>
					In 2000, I set my sights on Europe, but a summer job driving ski boats at a US summer camp
					proved too tempting to resist. It was there, under the summer sun, that I met my wife, Emily.
					Needless to say, Europe would have to wait!
				</p>
				<p>
					We married in 2003, and while navigating the complexities of obtaining my US visa, I found
					myself drawn to the construction industry. Starting with small jobs, I learned the trade
					from the ground up, gradually taking on larger and more challenging projects. By 2008, I had
					the opportunity to build my first new home, and I haven’t looked back since.
				</p>
				<p>
					Today, Emily and I are proud to call Knoxville home, where we’re raising our three sons,
					Abram (15), Andrew (12), and Adam (6). When we’re not busy building dream homes for our
					clients, we love spending time with our family, enjoying the beautiful lakes around
					Knoxville, surfing, and soaking up the summer sun on our boat.
				</p>
			</div>
			<a href="/about" class="btn btn-dark mt-7">Read My Full Story <span class="arrow">›</span></a>
		</div>
		<div class="lg:col-span-2">
			<img src={images.builder} alt="Matt Noss and family" class="aspect-[3/4] w-full rounded-sm object-cover shadow-xl" />
		</div>
	</div>
</section>

<!-- TESTIMONIALS -->
<section class="bg-[var(--color-cream)]">
	<div class="grid items-stretch lg:grid-cols-2">
		<div class="flex flex-col justify-center px-6 py-16 lg:pl-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))]">
			<div class="max-w-xl">
				<h2 class="text-3xl md:text-4xl">Testimonials</h2>
				<div class="divider !mx-0"></div>
				{#key tIndex}
					<blockquote class="mt-8 text-xl leading-relaxed italic" style="font-family:var(--font-serif)">
						“{testimonials[tIndex].quote}”
					</blockquote>
					<p class="mt-6 font-display text-lg tracking-wide text-[var(--color-slate)]">
						{testimonials[tIndex].author}
					</p>
					<p class="text-sm text-[var(--color-gold)]">{testimonials[tIndex].role}</p>
				{/key}
				<div class="mt-6 flex gap-2">
					{#each testimonials as _, i}
						<button
							aria-label="Testimonial {i + 1}"
							onclick={() => (tIndex = i)}
							class="h-2.5 w-2.5 rounded-full transition {i === tIndex ? 'bg-[var(--color-gold)]' : 'bg-[var(--color-line)]'}"
						></button>
					{/each}
				</div>
				<a href="/about" class="btn btn-outline mt-8 text-[var(--color-slate)]">View All Testimonials</a>
			</div>
		</div>
		<div class="min-h-[320px] bg-cover bg-center" style="background-image:url('{images.testimonialsBg}')"></div>
	</div>
</section>

<!-- MOSSCREEK PARTNER -->
<section class="section bg-white">
	<div class="container-narrow text-center">
		<h2 class="text-3xl md:text-4xl">Premier Custom Home Builder For</h2>
		<div class="divider"></div>
		<img src={images.mossCreek} alt="MossCreek" class="mx-auto mt-8 h-20 w-auto" />
		<p class="mx-auto mt-6 max-w-2xl leading-relaxed">
			Matt Noss Custom Homes is a premier custom home builder working alongside
			<span class="font-semibold text-[var(--color-gold)]">MossCreek</span> to provide customers with
			beautiful, quality custom homes. As a nationally recognized leader in rustic home design, modern
			farmhouses, and contemporary design homes, their work has been featured in the New York Times and
			the Wall Street Journal. By working with MossCreek, Matt Noss can connect customers to a design
			world beyond the ordinary.
		</p>
	</div>
</section>
