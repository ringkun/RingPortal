
<div class = "ColumnCollection" >
    <div class="Columns"><img src="src\Assets\GitHub-Logo.wine.svg"><a class = "hiddenInfo" href="https://github.com/ringkun">Github</a></div>
    <div class="Columns"><img src="src\Assets\linkedin-icon-2.svg"><a class = "hiddenInfo" href="https://www.linkedin.com/in/william-xue-312874186/">Linkedin</a></div>
    <div class="Columns"><img src="src\Assets\Gmail-Logo.wine.svg"><a class = "hiddenInfo" >willjiahuexue@gmail.com</a></div>
    <div class="Columns"><img src="src\Assets\RPG Gates Logo Faded.svg"><a class = "hiddenInfo" href="https://www.youtube.com/@RingkunProjectGarbage">RPG Youtube Channel</a></div>
</div>

<style>
 
    .Columns{
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        height: 25px;
        transition: 1s;
        background-color: aquamarine;
        /* position: absolute; */
        width: 25px;
        outline: 5px;
        outline-color: black;
        overflow:hidden;
    }
    .Columns:hover{
        width: 300px;
    }
    .Columns img{
    width: 25px;
    height: 25px;
    /* float: left; */
    }
    .ColumnCollection{
        position: fixed;
        bottom: 0%;
        left: 0px;
    }
    .Columns:nth-child(odd){
        background-color: rgb(127, 157, 255);
    }
    .hiddenInfo{
        position: relative;
        /* left: 20px; */
        bottom: 6px;
        right: 0px;
    }
</style>