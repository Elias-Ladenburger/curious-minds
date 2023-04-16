<script lang="ts">
	import Hero from '$lib/Hero.svelte';
	import AboutPage from '$lib/AboutPage.svelte';
	import { onMount } from 'svelte';
	import { tsParticles } from 'tsparticles-engine';
	import { loadSlim } from 'tsparticles-slim';
	import { options } from '$lib/particles/options';

	// https://github.com/matteobruni/tsparticles
	// https://dev.to/tsparticles/tsparticles-205-is-out-breaking-changes-ahead-keeping-the-1x-support-2n63

	function adjustParticles() {
		tsParticles.setOnClickHandler((event, particles) => {
			console.log('clicked');
		});
		const particles = tsParticles.domItem(0);
		console.log(particles);
		particles?.play();
	}

	async function loadParticlesOnClient() {
		await loadSlim(tsParticles);
		await tsParticles.load('tsparticles', options);
	}

	onMount(async () => {
		await loadParticlesOnClient();
	});
</script>

<div class="flex justify-around items-center flex-col py-56">
	<div class="font-header text-4xl md:text-8xl pt-16 leading-relaxed py-16">
		Welcome to <em class="bg-emphasis text-primary">Curious Minds</em>.
	</div>
	<div class="font-header text-2xl md:text-3xl">The network for underutilized high potentials.</div>
</div>
<AboutPage />

<div id="tsparticles" />

<style lang="postcss">
	#tsparticles {
		/* access tsparticles container */
		z-index: 1;
	}

	:global(canvas) {
		/* handle particles container directly */
	}
</style>
