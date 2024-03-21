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
    :global(.BigandLoud){
        color: aliceblue;
        width: 100%;
        font-size: 50px;
        text-align: center;
        outline: auto;
        background-color: rgba(0, 183, 255, 0.479);
        text-shadow: 2px 2px rgb(100, 100, 100);
        font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    :global(.BodyText){
        /* box-sizing: border-box; */
        left: 10%;
        right: 10%;
        width: 80%;
        position: relative;
        font-size: 20px;
        font-family: sans-serif;
        background-color: rgba(42, 150, 177, 1);       
        padding: 10px;
        margin: 10px;
        border-radius: 10px;
        mix-blend-mode: difference;
    }
    :global(.Emphasis){
        font-size: 30px;
        color: rgb(0, 195, 255);
        text-shadow: 0 0 20px #fff, 0 0 30px #4dffff, 0 0 40px #4d94ff, 0 0 50px #4d7cff, 0 0 60px #4d50ff, 0 0 70px #4dafff, 0 0 80px #ff4da6;
    }
    :global(.h1){
        font-size: 30px;
        color: rgb(0, 195, 255);
        text-shadow: 0 0 20px #fff, 0 0 30px #4dffff, 0 0 40px #4d94ff, 0 0 50px #4d7cff, 0 0 60px #4d50ff, 0 0 70px #4dafff, 0 0 80px #ff4da6;
    }
</style>