
<div class = "ColumnCollection">
    <div class="Columns"><img src="src\Assets\GitHub-Logo.wine.svg"><a class = "hiddenInfo" href="https://github.com/ringkun">Github</a></div>
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
        width: 100px;
    }
    .Columns img{
    width: 25px;
    height: 25px;
    }
    .ColumnCollection{
        position: absolute;
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