<script>
    import {base} from '$app/paths'
</script>
<div class = "index">
    <a href="{base}/">Home</a>
    <a href="{base}/comp-sci">Comp Sci.</a>
    <a href="{base}/vid-pro">Vid Pro.</a>
    <a href="{base}/game-dev">Game Dev.</a>
    <a href="{base}/3D-Modeling">3D Modeling.</a>
    <!-- <a >Links</a> -->
</div>
<style>
    .index {
        /* text-align: center; */
        display: block;
        flood-color: rgb(75, 194, 224);
        background-color: rgb(50, 164, 230);
        display: inline-block;
        position: relative;
        font-family:Verdana;
        font-size: 15px;
        border-style: solid;
        /* border-radius: 10px; */
        border-color: rgb(8, 102, 184);
        padding: 2px;
        /* margin: 5px; */
        box-shadow: 0px 0px 10px 10px rgb(14, 148, 148);
        /* width: 50%; */
        
    }
    .index a{
        /* background-color: aqua; */
        border-radius: 5px;
        transition: 1s;
        padding: 10px;
    }
    .index a:hover{
        box-shadow: 0px 0px 10px 10px rgb(14, 148, 148);
        background-color: rgb(11, 206, 255);
    }
</style>