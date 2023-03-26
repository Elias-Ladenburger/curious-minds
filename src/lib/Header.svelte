<script>
   export let menu =[
        {name: "Home", slug: ""},
        {name: "About", slug: "about"},
        //let community = {name: "Community", slug: "community"}
        {name: "Contact", slug: "contact"}
    ]

</script>

<nav>
    <ul class="list-reset md:flex justify-end flex-1 items-center bg-dark text-orangeDark font-header">
        {#each menu as navElem}
        <li class="mr-5">
            <a class="inline-block py-2 px-4 font-bold no-underline hover:opacity-70" href="/{navElem.slug}">{navElem.name}</a>
        </li>
        {/each}
    </ul>
</nav>