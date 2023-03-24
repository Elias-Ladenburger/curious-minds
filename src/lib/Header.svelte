<script>
    let home = {name: "Home", slug: ""}
    let about = {name: "About", slug: "about"}
    let community = {name: "Community", slug: "community"}
    let contact = {name: "Contact", slug: "contact"}

    export let menu = [home, about, community, contact]
</script>

<nav>
    <ul class="list-reset md:flex justify-end flex-1 items-center bg-dark text-orangeDark">
        {#each menu as navElem}
        <li class="mr-5">
            <a class="inline-block py-2 px-4 font-bold no-underline hover:opacity-70" href="/{navElem.slug}" on:click={()=>showOnMobile="hidden"}>{navElem.name}</a>
        </li>
        {/each}
    </ul>
</nav>