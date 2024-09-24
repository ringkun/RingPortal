
<script>
    import PageDefault from "../layouts/PageDefault.svelte";
</script>

<PageDefault> 
</PageDefault>
<div class="BodyText">
  <p>
  
    When I started off programming, like many other, I did some light game development. Eventually at some point as I became more ambitious with my development, I refined my workflow which lead me to develop my own plugins, addons, and macros to expediate my development process. For example I made my own custom 3D skeleton rigging utility that effectively reduce my work time by half. I always found the process rewarding. Even further more when I shared my tools for others to use. I felt fulfillment in being able to help others like this. That's the reason I pursued computer science as a major, since I believe that was the pathway into how I can help others in the world, a grand mission for me. 
    
    I think this company will allow me to gain experience in the real world to pursue this mission. 
    
  </p>
</div>





<style>
    /* width */
::-webkit-scrollbar {
  width: 2px;
  height: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #000000;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #05e9e9;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #026280;
}
.Category{
    font-family: Arial, Helvetica, sans-serif;
    color: aqua;
    font-size: 30px;
    margin: 20px;
    padding: 10px;
    background-color: #00000086;
    border-radius: 20px;
}
.Category>div{
    padding: 5px;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 2px;
    overflow: scroll;
    scrollbar-color: rgb(153, 0, 255) rgb(0, 102, 255);
    scrollbar-width: thin;
}

</style>