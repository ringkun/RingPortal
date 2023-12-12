
<script>
    import PageDefault from "../layouts/PageDefault.svelte";
    import ExampleVideo from "./ExampleVideo.svelte";
</script>

<PageDefault> 
</PageDefault>

<div class = "Category">Misc. Editing Work
    <hr>
    <div>
        <ExampleVideo 
            videoLink = "https://www.youtube.com/embed/VfPUgsD-9Ck/?controls=0" 
            videoTitle = "All My Fellas Video compilation" 
            videoDesc = "A compilation of Roblox made animations set to the track of 'All My Fellas' by Frizk">
        </ExampleVideo>
        <ExampleVideo 
            videoLink = "https://www.youtube.com/embed/Z9v2dsgH3KA?start=0&end=72&vq=hd1080&modestbranding=1&rel=0&iv_load_policy=3&fs=0&color=white&controls=0"
            videoTitle = "End of Roblox Google Plus" 
            videoDesc = "A video which was a compilation of previous work done up to July 16 of 2023 set to the song 'Locket' by the band 'Crumb' ">
        </ExampleVideo>
    </div>
</div>

<div class = "Category">Animation
    <hr>
    <div>
        <ExampleVideo 
            videoLink = "https://www.youtube.com/embed/rkURiiBngac?start=0&end=72&vq=hd1080&modestbranding=1&rel=0&iv_load_policy=3&fs=0&color=white&controls=0" 
            videoTitle = "Silverhands Collaboration Trailer" 
            videoDesc = "A trailer for a video project among friends">
        </ExampleVideo>
    </div>
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
    scrollbar-color: red orange;
    scrollbar-width: thin;
}

</style>