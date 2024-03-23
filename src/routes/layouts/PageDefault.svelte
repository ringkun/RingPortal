<TopBar>

</TopBar>

<button on:click={()=>toggleBG()} id = "toggleButton">Toggle Background if it is too annoying</button>
<hr>


<AffiliateLink></AffiliateLink>

<iframe id="toggleBG" title = "funky backdrop" frameborder="0" src="https://www.shadertoy.com/embed/mldBRn?gui=false&t=10&paused=false&muted=false" allowfullscreen></iframe>

<script>
    import './global.scss'
    import TopBar from "./TopBar.svelte";
    import AffiliateLink from "./AffiliateLink.svelte";
    function toggleBG() {
        console.log("Working");
        let tBG = document.getElementById("toggleBG");
        if (tBG === null){
            alert("Doesn't exist");
        }
        else{        
            if (tBG.style.display === "none") {
                tBG.style.display = "block";
            } else {
                tBG.style.display = "none";
            };
        }

    };
</script>
<style>


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