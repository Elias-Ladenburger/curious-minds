<script>
	import Hero from '$lib/Hero.svelte';
	let heroTitle = "Get <em class='bg-emphasis'>in touch</em>";
	let heroSubtitle = 'Become part of the community';
</script>

<Hero {heroTitle} {heroSubtitle}>
	<div class="text-center">
		<p class="text-xl text-emphasis">We are there for you</p>
		<p class="text-lg">
			We believe that everybody carries in them the potential for pretty awesome achievements. We
			also understand that it can be extraordinarily difficult to fulfill this potential alone.
		</p>
	</div>
</Hero>
