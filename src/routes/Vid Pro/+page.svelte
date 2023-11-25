
<script>
    import PageDefault from "../PageDefault.svelte";
</script>

<PageDefault> 
</PageDefault>

<div class = "Category">Misc. Editing Work
    <hr>
    <div>
        <div class = "ExampleVideo"> 
            <iframe src="https://www.youtube.com/embed/VfPUgsD-9Ck/?controls=0" title="YouTube video player" frameborder="0" ></iframe>
            <div class = "VideoInfo">
                <h1>All My Fellas Video compilation</h1>
                <p>A compilation of Roblox made animations set to the track of "All My Fellas" by Frizk</p>
            </div>
        </div>
        <div>
            <div class = "ExampleVideo"> 
                <iframe src="https://www.youtube.com/embed/Z9v2dsgH3KA?start=0&end=72&vq=hd1080&modestbranding=1&rel=0&iv_load_policy=3&fs=0&color=white&controls=0"  title="The End of Roblox Google Plus" frameborder="0"></iframe>
                <div class = "VideoInfo">
                    <h1>End of Roblox Google Plus</h1>
                    <p>A video which was a compilation of previous work done up to July 16 of 2023 set to the song "Locket" by the band "Crumb" </p>
                </div>
            </div>
        </div>
    </div>
</div>

<div class = "Category">Animation
    <hr>
    <div>

        <div>
            <div class = "ExampleVideo"> 
                <iframe src="https://www.youtube.com/embed/rkURiiBngac?start=0&end=72&vq=hd1080&modestbranding=1&rel=0&iv_load_policy=3&fs=0&color=white&controls=0" width="560" height="315" title="A YouTube video" frameborder="0"></iframe>               <div class = "VideoInfo">
                    <h1>Silverhands Collaboration Trailer</h1>
                    <p>A trailer for a video project among friends</p>
                </div>
            </div>
        </div>
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
    background-color: #000000;
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
.ExampleVideo {
    box-sizing: border-box ;
    font-family: Arial, Helvetica, sans-serif;
    color: aqua;
    box-shadow: 0px 0px 10px 10px #0ff;
    /* border: 2px solid #dadada;
    border-color: rgb(30, 138, 233);
    border-width: 10px;
    border-style: solid;
    border-radius: 10px; */
    margin: 10px;
    padding: 20px;
    /* height: 400px; */
    width: 400px;
}
.ExampleVideo iframe{
    /* box-sizing: border-box ; */
    /* display: block; */
    /* float: left; */
    /* margin: 10px; */
    /* border-color: rgb(50, 160, 255);
    border-width: 5px;
    border-style: solid; */
    bottom: 0%;
    width: 100%;
    height: 200px;
}
.VideoInfo h1{
    font-size: 20px;
}
.VideoInfo p {
    float: bottom;
    color: azure;
    font-size: 15px;
}

</style>