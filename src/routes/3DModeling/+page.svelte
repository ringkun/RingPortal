<script>
    import PageDefault from "../layouts/PageDefault.svelte";
    import Durandal from "/Durandal View.png";
</script>

<PageDefault> 
</PageDefault>
<div class = "Gallery">
    <!-- <video width="50%" height="240" autoplay loop>
        <track kind="captions">
        <source src="src\lib\Assets\Animation\Sunshine.mp4" type="video/mp4">
    </video> -->
  <!-- <img  alt = "Durandal" src = "src\lib\Assets\ModelShowcase\Durandal View.png" height = 240px>
  <img alt = "Laevatinn" src = "src\lib\Assets\ModelShowcase\Laevatinn View.png" height = 240px>
  <img alt ="mimicry" src = "src\lib\Assets\ModelShowcase\Mimicry View.png" width = 500px class="centered"> -->
  <img  alt = "Durandal" src = {Durandal} height = 240px>
  <!-- <img alt = "Laevatinn" src = "src\lib\Assets\ModelShowcase\Laevatinn View.png" height = 240px>
  <img alt ="mimicry" src = "src\lib\Assets\ModelShowcase\Mimicry View.png" width = 500px class="centered"> -->
</div>
<style>
    .BodyText{
        /* box-sizing: border-box; */
        left: 10%;
        right: 10%;
        width: 80%;
        /* position: absolute; */
        font-size: 20px;
        font-family: sans-serif;
        background-color: rgb(18, 129, 163);
        padding: 20px;
        margin: 0 auto;
        border-radius: 10px;
        /* box-shadow: 0px 0px 10px 10px rgb(0, 0, 0) inset; */
    }

</style>