<script>
    import Hero from "$lib/Hero.svelte";
    import Button from "$lib/Button.svelte";
    import AboutPage from "$lib/AboutPage.svelte";
  </script>
  
  <Hero heroTitle="Welcome to <em class='bg-emphasis text-primary'>Curious Minds</em>."
    heroSubtitle="The network for underutilized high potentials."
    ><Button label="Find out more" link="about"/> 
  </Hero>

  <AboutPage />