
<script src="https://webglfundamentals.org/webgl/resources/webgl-utils.js">
    import PageDefault from "./PageDefault.svelte";
</script>
<canvas id="canvas"></canvas>
<!--
for most samples webgl-utils only provides shader compiling/linking and
canvas resizing because why clutter the examples with code that's the same in every sample.
See https://webglfundamentals.org/webgl/lessons/webgl-boilerplate.html
and https://webglfundamentals.org/webgl/lessons/webgl-resizing-the-canvas.html
for webgl-utils, m3, m4, and webgl-lessons-ui.
-->
<PageDefault> 
    
</PageDefault>
<div class = "BodyText">
    <p>
        Welcome to my website
    </p>
</div>
<style>
    .BodyText{
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
    
</style>