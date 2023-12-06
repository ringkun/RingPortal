
<script src="https://webglfundamentals.org/webgl/resources/webgl-utils.js">
    import PageDefault from "./PageDefault.svelte";
</script>
<!--
for most samples webgl-utils only provides shader compiling/linking and
canvas resizing because why clutter the examples with code that's the same in every sample.
See https://webglfundamentals.org/webgl/lessons/webgl-boilerplate.html
and https://webglfundamentals.org/webgl/lessons/webgl-resizing-the-canvas.html
for webgl-utils, m3, m4, and webgl-lessons-ui.
-->
<PageDefault> 
    
</PageDefault>
<canvas id="canvas"></canvas>
<h1 class = "BigandLoud">WILLIAM XUE</h1>
<h1 class = "BigandLoud">Index</h1>
<div class = "BodyText">
    <p>
        Welcome to my website
    </p>
</div>
<style>
    .BigandLoud{
        color: aliceblue;
        width: 100%;
        font-size: 100px;
        text-align: center;
        outline: auto;
        background-color: rgba(0, 183, 255, 0.479);
        text-shadow: 2px 2px rgb(100, 100, 100);
        font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    .BodyText{
        /* box-sizing: border-box; */
        left: 10%;
        right: 10%;
        width: 80%;
        position: absolute;
        font-size: 20px;
        font-family: sans-serif;
        background-color: rgba(100, 100, 100, 0.562);
        padding: 20px;
        border-radius: 10px;
    }
    
</style>