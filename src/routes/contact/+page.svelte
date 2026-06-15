<script>
	import { enhance } from '$app/forms';
	import PageHero from '$lib/components/PageHero.svelte';
	import { company, estimateOptions } from '$lib/site.js';
	import { pageImages } from '$lib/data/imageData.js';

	let { form } = $props();
	let submitting = $state(false);
</script>

<svelte:head>
	<title>Contact | Matt Noss Construction</title>
	<meta name="description" content="Schedule a consultation or request an estimate from Matt Noss Construction in Knoxville, TN." />
</svelte:head>

<PageHero title="Contact Us" image={pageImages.contact} />

<!-- Schedule a consultation (live Acuity scheduler) -->
<section class="section bg-[var(--color-cream)]">
	<div class="container-wide text-center">
		<h2 class="text-3xl md:text-4xl">Schedule a Consultation</h2>
		<div class="divider"></div>
		<div class="mx-auto mt-8 max-w-4xl overflow-hidden rounded-sm bg-white shadow-sm">
			<iframe
				title="Schedule a consultation with Matt Noss"
				src="https://app.acuityscheduling.com/schedule.php?owner=28947335"
				width="100%"
				height="960"
				frameborder="0"
			></iframe>
		</div>
		<p class="mt-6 text-sm text-[var(--color-body)]">
			Prefer to talk? Call <a href={company.phoneHref} class="font-semibold text-[var(--color-gold)]">{company.phone}</a>.
		</p>
	</div>
</section>

<!-- Request an estimate -->
<section class="section bg-white">
	<div class="container-wide">
		<div class="text-center">
			<h2 class="text-3xl md:text-4xl">Request an Estimate</h2>
			<div class="divider"></div>
		</div>

		<div class="mt-12 grid gap-10 lg:grid-cols-3">
			<!-- Form -->
			<div class="lg:col-span-2">
				{#if form?.success}
					<div class="rounded-sm border-t-4 border-[var(--color-gold)] bg-[var(--color-cream)] p-10 text-center">
						<h3 class="text-2xl">Thank You!</h3>
						<p class="mt-3 leading-relaxed">
							Your request has been received. We’ll reach out soon. For anything urgent, call
							<a href={company.phoneHref} class="font-semibold text-[var(--color-gold)]">{company.phone}</a>.
						</p>
					</div>
				{:else}
					<form
						method="POST"
						use:enhance={() => {
							submitting = true;
							return async ({ update }) => {
								await update();
								submitting = false;
							};
						}}
						class="space-y-6"
					>
						{#if form?.formError}
							<p class="rounded-sm bg-red-50 px-4 py-3 text-sm text-red-700">{form.formError}</p>
						{/if}

						<input type="text" name="company_website" tabindex="-1" autocomplete="off" class="hidden" aria-hidden="true" />

						<div>
							<label class="mb-2 block font-medium text-[var(--color-ink)]" for="name">Name</label>
							<div class="grid gap-4 sm:grid-cols-2">
								<input id="name" name="first_name" placeholder="First" value={form?.values?.first_name ?? ''} class="w-full border border-[var(--color-line)] bg-white px-4 py-3 outline-none focus:border-[var(--color-gold)]" />
								<input name="last_name" placeholder="Last" value={form?.values?.last_name ?? ''} class="w-full border border-[var(--color-line)] bg-white px-4 py-3 outline-none focus:border-[var(--color-gold)]" />
							</div>
							{#if form?.errors?.name}<p class="mt-1 text-sm text-red-600">{form.errors.name}</p>{/if}
						</div>

						<div>
							<label class="mb-2 block font-medium text-[var(--color-ink)]" for="email">Email</label>
							<input id="email" name="email" type="email" value={form?.values?.email ?? ''} class="w-full border border-[var(--color-line)] bg-white px-4 py-3 outline-none focus:border-[var(--color-gold)]" />
							{#if form?.errors?.email}<p class="mt-1 text-sm text-red-600">{form.errors.email}</p>{/if}
						</div>

						<div>
							<label class="mb-2 block font-medium text-[var(--color-ink)]" for="phone">Phone</label>
							<input id="phone" name="phone" type="tel" value={form?.values?.phone ?? ''} class="w-full border border-[var(--color-line)] bg-white px-4 py-3 outline-none focus:border-[var(--color-gold)]" />
						</div>

						<fieldset>
							<legend class="mb-2 font-medium text-[var(--color-ink)]">What do you need an estimate for?</legend>
							<div class="space-y-2">
								{#each estimateOptions as opt}
									<label class="flex items-center gap-3">
										<input type="radio" name="project_type" value={opt} checked={form?.values?.project_type === opt} class="accent-[var(--color-gold)]" />
										<span>{opt}</span>
									</label>
								{/each}
							</div>
							{#if form?.errors?.project_type}<p class="mt-1 text-sm text-red-600">{form.errors.project_type}</p>{/if}
						</fieldset>

						<div>
							<label class="mb-2 block font-medium text-[var(--color-ink)]" for="referral_source">How did you hear about us?</label>
							<input id="referral_source" name="referral_source" value={form?.values?.referral_source ?? ''} class="w-full border border-[var(--color-line)] bg-white px-4 py-3 outline-none focus:border-[var(--color-gold)]" />
						</div>

						<div>
							<label class="mb-2 block font-medium text-[var(--color-ink)]" for="message">Additional info about project.</label>
							<textarea id="message" name="message" rows="5" class="w-full border border-[var(--color-line)] bg-white px-4 py-3 outline-none focus:border-[var(--color-gold)]">{form?.values?.message ?? ''}</textarea>
						</div>

						<button type="submit" class="btn btn-dark" disabled={submitting}>
							{submitting ? 'Sending…' : 'Submit'} <span class="arrow">›</span>
						</button>
					</form>
				{/if}
			</div>

			<!-- Info card -->
			<aside class="flex flex-col items-center justify-center rounded-sm bg-[var(--color-slate)] p-10 text-center text-white">
				<img src={company.footerLogo} alt={company.name} class="h-24 w-auto" />
				<address class="mt-5 space-y-1 not-italic text-white/85">
					<p>{company.address1}</p>
					<p>{company.address2}</p>
					<p class="pt-2"><a href={company.phoneHref} class="text-lg transition hover:text-[var(--color-gold)]">{company.phone}</a></p>
				</address>
			</aside>
		</div>
	</div>
</section>
