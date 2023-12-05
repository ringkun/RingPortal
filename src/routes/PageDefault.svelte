<TopBar>
</TopBar>
<hr>


<AffiliateLink></AffiliateLink>
<script>
    import TopBar from "./TopBar.svelte";
    import AffiliateLink from "./AffiliateLink.svelte";
</script>
<iframe title = "funky backdrop" frameborder="0" src="https://www.shadertoy.com/embed/mldBRn?gui=false&t=10&paused=false&muted=false" allowfullscreen></iframe>
<style>
    :global(body) {
        background-color: rgb(0, 0, 0);
    }
    :global(.BodyText){
        /* box-sizing: border-box; */
        left: 10%;
        right: 10%;
        width: 80%;
        position: absolute;
        font-size: 20px;
        font-family: sans-serif;
        background-color: rgb(100, 100, 100);
        padding: 20px;
        border-radius: 10px;
    }
    iframe {
        position: fixed; 
        width: 100%; 
        height: 100%; 
        top: 60px; 
        right: 0; 
        bottom: 0; 
        left: 0; 
        z-index: -1; 
        pointer-events: none; 
    }    
</style>