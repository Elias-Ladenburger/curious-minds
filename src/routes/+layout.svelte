<script>
    import Header from "$lib/Header.svelte";
    import Footer from "$lib/Footer.svelte";

</script>

<div class="bg-dark text-light">
    <Header />
    <slot />
    <Footer/>
</div>