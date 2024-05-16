<!-- <script src="https://webglfundamentals.org/webgl/resources/webgl-utils.js">
    import PageDefault from "./PageDefault.svelte";
</script> -->
<script>
    import PageDefault from "./layouts/PageDefault.svelte";
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
<!-- <canvas id="canvas"></canvas> -->
<h1 class = "BigandLoud">Welcome!</h1>
<!-- <h1 class = "BigandLoud">Index</h1> -->
<div class = "BodyText">
    <p>
        <h1 class="Emphasis">Hello there new visitor!</h1>  
        I am William Xue, Welcome to my website! 
        I am a Comp Sci student of University of Colorado Boulder, from 2018 to 2022
        <p>I have a passion in <span class="Emphasis"> Programming </span> and <span class="Emphasis">Video Production</span>, but I've had experience in a broad range of fields, Including Robotics, Database Management, Full-stack development, many more</p>
        <p>I've picked up many languages over my experiences, c, c++, c#, Python, Scala, Lua</p>
</div>
<div class = "BodyText">
    <h1 class="Emphasis">Where I began</h1>  
    <p>    I started my career in to computer science when I was in Middle School in 2012, through <span class = "Emphasis">game development</span> on the now massively popular game development platform "Roblox". 
        From producing rudimentary programs to short form experiences, my start into programming was humble but critically formative.
    </p>
    <p>    In highschool I took a <span class="Emphasis">video productions</span> class and found myself in love with post-production through the Final Cut Pro video editing program. Eventually this became a keen interest and a secondary career.
    </p>
</div> 
<div class="BodyText">
    <h1 class="Emphasis">Education</h1>  
    <p>University of Colorado Boulder (2018-2022) Bachelor's Degree in Computer Science Major</p>
</div>
<style>
    .BigandLoud{
        color: aliceblue;
        width: 100%;
        font-size: 50px;
        text-align: center;
        outline: auto;
        background-color: rgba(0, 183, 255, 0.479);
        text-shadow: 2px 2px rgb(100, 100, 100);
        font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    .Emphasis{
        font-size: 20px;
        color: rgb(0, 195, 255);
        text-shadow: 0 0 20px #ffffff00, 0 0 30px #4dffff, 0 0 40px #4d94ff, 0 0 50px #4d7cff, 0 0 60px #4d50ff, 0 0 70px #4dafff, 0 0 80px #ff4da6;
    }
    .h1{
        font-size: 30px;
        color: rgb(0, 195, 255);
        text-shadow: 0 0 20px #fff, 0 0 30px #4dffff, 0 0 40px #4d94ff, 0 0 50px #4d7cff, 0 0 60px #4d50ff, 0 0 70px #4dafff, 0 0 80px #ff4da6;
    }
</style>