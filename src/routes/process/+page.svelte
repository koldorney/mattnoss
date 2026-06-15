<script>
	import PageHero from '$lib/components/PageHero.svelte';
	import CtaBand from '$lib/components/CtaBand.svelte';
	import { pageImages } from '$lib/data/imageData.js';

	const steps = [
		{
			label: 'Step 1',
			title: 'Needs Assessment',
			body: 'One of the most critical elements to getting off on the right foot is to fully understand exactly what you are wanting, and it’s much more than just a house plan. Why are you building this house? What features of a home are important to you? There are many questions to ask to find out how you live and how this home can serve you the best. Also, if you have a lot or need help looking at one, we can help! Making sure the lot and the plan are compatible with each other is a very important step!'
		},
		{
			label: 'Step 2',
			title: 'Plan Exploration and the “20-Minute Dirty Budget”',
			body: 'If you don’t have a plan already then we can explore some styles and sizes that appeal to you. Once we find one you like, we start the “20-Minute Dirty Budget”. My goal here is to give you a very rough line item budget based on the plan that has a bunch of presumptions about the finished quality. It’s a conversation starter to talk about price, gauge reactions, and guide you to the plan that gets you the right mix of size, quality, and budget.'
		},
		{
			label: 'Step 3',
			title: 'Plan Development and Pricing',
			body: 'During this phase, we will help you through finalizing the plans and getting our budget firmed up. We have an open book policy for our pricing and budgets. We have nothing to hide and believe the budget is a partnership with contractor and homeowner to ensure we get the right mix of budget and quality.'
		}
	];

	const subSteps = [
		{ label: 'Step 4a', title: 'Site Work', body: 'Your lot will have its own set of unique qualities and potential issues. Our goal is to ensure a quality and lasting foundation. No corners cut! Site costs are always variable and unknown so we try to plan for the worst and then hope for the best!' },
		{ label: 'Step 4b', title: 'Rough Construction', body: 'Again, we have a no corners cut mentality. #1-grade lumber, engineered construction and all the elements needed to make this home well built and long-lasting.' },
		{ label: 'Step 4c', title: 'Finish Stage', body: 'It’s time for the windows, cabinets, flooring, siding, light, tubs, paint, etc … all the fun stuff! We have all the vendors ready to serve you and give you a hassle-free experience, and our promise is to make it look great!' }
	];
</script>

<svelte:head>
	<title>Our Process - Matt Noss - Home Builder Near You</title>
	<meta name="description" content="A transparent, open-book building process — from needs assessment to home completion." />
</svelte:head>

<PageHero title="Our Process" image={pageImages.process} />

<!-- Intro band -->
<section class="bg-[var(--color-slate)] py-16 text-center text-white">
	<div class="container-narrow">
		<h2 class="text-3xl text-white md:text-4xl">Process</h2>
		<p class="mx-auto mt-5 max-w-3xl leading-relaxed text-white/80">
			Throughout these phases of construction, there will be multiple sites and budget meetings where we
			are there to help you with decisions and budget issues to ensure we remain on task. This will be
			elevated to another level with our online construction management portal that serves as the home
			base to almost every aspect of the build — from budget tracking to selections and all the
			communication that will go with it. <a href="/process/management-software" class="text-[var(--color-gold)] underline-offset-4 hover:underline">To learn more about our unique management software click here.</a>
		</p>
	</div>
</section>

{#snippet circle(label, sizeClass, dark)}
	<div
		class="mx-auto flex {sizeClass} flex-col items-center justify-center rounded-full leading-none shadow-lg {dark
			? 'bg-white text-[var(--color-slate)] ring-4 ring-white/30'
			: 'bg-[var(--color-slate)] text-white ring-4 ring-[var(--color-slate)]/15'}"
	>
		<span class="font-display text-[0.6rem] tracking-[0.18em] uppercase opacity-70">{label.split(' ')[0]}</span>
		<span class="font-display text-2xl font-bold">{label.split(' ').slice(1).join(' ') || label.split(' ')[0]}</span>
	</div>
{/snippet}

{#each steps as step, i}
	{@const dark = i % 2 === 1}
	<section class="{dark ? 'bg-[var(--color-slate)] text-white' : 'bg-white'} py-28">
		<div class="container-narrow text-center">
			{@render circle(step.label, 'h-24 w-24', dark)}
			<h3 class="mt-6 text-2xl md:text-3xl {dark ? 'text-white' : ''}">{step.title}</h3>
			<p class="mx-auto mt-4 max-w-2xl leading-relaxed {dark ? 'text-white/85' : ''}">{step.body}</p>
		</div>
	</section>
{/each}

<!-- Step 4: Construction with sub-steps (dark) -->
<section class="bg-[var(--color-slate)] py-28 text-white">
	<div class="container-wide text-center">
		{@render circle('Step 4', 'h-24 w-24', true)}
		<h3 class="mt-6 text-2xl text-white md:text-3xl">Construction</h3>
		<p class="mx-auto mt-4 max-w-2xl leading-relaxed text-white/85">
			We are ready to start building! We simplify the construction phase into three areas:
		</p>
		<div class="mt-14 grid gap-10 md:grid-cols-3">
			{#each subSteps as s}
				<div>
					{@render circle(s.label, 'h-20 w-20', true)}
					<h4 class="mt-5 text-xl text-white">{s.title}</h4>
					<p class="mt-3 leading-relaxed text-white/80">{s.body}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Final step (white) -->
<section class="bg-white py-28">
	<div class="container-narrow text-center">
		{@render circle('Final Step', 'h-28 w-28', false)}
		<h3 class="mt-6 text-2xl md:text-3xl">Home Completion</h3>
		<p class="mx-auto mt-4 max-w-2xl leading-relaxed">
			Your home is finished but we are not done with you yet! With anything new, there is a period of
			adjustment and fine-tuning to make sure everything is working as intended. We will be there every
			step of the way to ensure you settle in!
		</p>
	</div>
</section>

<CtaBand />
