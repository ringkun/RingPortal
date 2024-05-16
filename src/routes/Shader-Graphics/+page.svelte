<script>
    import PageDefault from "../layouts/PageDefault.svelte";
</script>
<PageDefault> 
    
</PageDefault>
<div class="BodyText">A showcase of computer graphics made using WebGL, hosted on Shadertoy.com. Unfortunately this is not a showcase for CSS, which scares me as of now.
</div>
<div class="BodyText">Please save me Gina.
</div>
<div>
    <iframe id="toggleBG" title = "funky backdrop" frameborder="0" src="https://www.shadertoy.com/embed/mldBRn?gui=false&t=10&paused=false&muted=false" allowfullscreen></iframe>
    <iframe id="toggleBG" title = "Dotted Matrix" frameborder="0" src="https://www.shadertoy.com/embed/XcdSWN?gui=false&t=10&paused=false&muted=false" allowfullscreen></iframe>
    <iframe id="toggleBG" title = "Flamey" frameborder="0" src="https://www.shadertoy.com/embed/lf3XDX?gui=false&t=10&paused=false&muted=false" allowfullscreen></iframe>
    </div>
<style>


    iframe {
        position: relative; 
        width: 40%; 
        height: 20%; 
        top: 20px; 
        right: 0; 
        bottom: 0; 
        left: 0; 
        z-index: -1; 
        pointer-events: none; 
    }    

</style>