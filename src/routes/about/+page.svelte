<script>
	import Button from '$lib/Button.svelte';
	import Hero from '$lib/Hero.svelte';
	let heroCTA = { title: 'Help me?', link: 'contact' };
</script>

<Hero
	heroTitle="Hi! We are <em class='bg-emphasis text-primary'>Curious Minds</em>."
	heroSubtitle="We can probably help you."
>
	<Button label={heroCTA.title} link={heroCTA.link} />
</Hero>
