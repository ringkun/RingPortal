<script>
    export let videoLink;
    export let videoTitle;
    export let videoDesc;
</script>

<div class = "ExampleVideo"> 
    <iframe src={videoLink} title="YouTube video player" frameborder="0" ></iframe>
    <div class = "VideoInfo">
        <h1>{videoTitle}</h1>
        <p>{videoDesc}</p>
    </div>
</div>

<style>
 
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