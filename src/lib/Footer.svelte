<script>
    export let menu=[
        {name: "Imprint", slug: "imprint"},
        {name: "Privacy Policy", slug: "privacy"},
        {name: "Contact", slug: "contact"},
]
</script>

<section class="right-0 px-10 pt-8 relative flex md:space-x-6">
    <ul class="md:px-8 list-reset md:flex justify-center text-center flex-1 items-center">
        {#each menu as navItem}
        <li class="mr-5">
            <a 
            href="/{navItem.slug}"
            class="inline-block py-2 px-2 md:px-4 font-bold no-underline hover:opacity-70">
            {navItem.name}</a>
        </li>
        {/each}
        <li class="inline-block py-2 md:px-4">&#169; 2023 Curious Minds. All rights reserved.</li>
    </ul>
</section>