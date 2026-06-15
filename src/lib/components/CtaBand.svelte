<script>
	let { heading = 'Like what you see?', highlight = 'Contact us', tail = 'today for a free estimate!' } =
		$props();
</script>

<section class="bg-[var(--color-slate)]">
	<div class="container-wide flex flex-col items-center gap-6 py-14 text-center">
		<h2 class="text-2xl text-white md:text-3xl">
			{heading}
			<a href="/contact" class="text-[var(--color-gold)] underline-offset-4 hover:underline">{highlight}</a>
			{tail}
		</h2>
		<div class="flex flex-wrap justify-center gap-4">
			<a href="/contact" class="btn btn-light">Get a Free Estimate <span class="arrow">›</span></a>
			<a href="/contact" class="btn btn-gold">Schedule a Consultation <span class="arrow">›</span></a>
		</div>
	</div>
</section>
