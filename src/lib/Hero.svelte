<script>
    export let heroTitle = "";
    export let heroSubtitle = "";
  </script>
  
  <div class="md:py-50 md:p-10 px-1 py-12 md:h-full  text-left md:text-right">
    <div class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row">
      <!--Left Col-->
      <div class="flex flex-col w-full md:py-20">
        <h1 class="md:text-5xl sm:text-4xl text-3xl font-header leading-tight my-5">
          {@html heroTitle}
        </h1>
        {#if heroSubtitle}
        <p class="leading-normal md:text-2xl text-xl md:mb-8 my-1">
          {@html heroSubtitle}
        </p>
        {/if}
        <slot />
      </div>
    </div>
  </div>