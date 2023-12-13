<script>
    import GitHubLogo from '$lib/Assets/GitHub-Logo.svg';
    import LinkedinLogo from '$lib/Assets/linkedin-icon-2.svg';
    import GmailLogo from '$lib/Assets/Gmail-Logo.svg';
    import RPGLogo from '$lib/Assets/RPG Gates Logo Faded.svg';
  </script>


<div class = "ColumnCollection" >
    <div class="Columns"><img src={GitHubLogo} alt = "Github"><a class = "hiddenInfo" href="https://github.com/ringkun">Github</a></div>
    <div class="Columns"><img src={LinkedinLogo} alt ="Linkedin"><a class = "hiddenInfo" href="https://www.linkedin.com/in/william-xue-312874186/">Linkedin</a></div>
    <div class="Columns"><img src={GmailLogo} alt = "Gmail"><a class = "hiddenInfo" href="mailto:willjiahuexue@gmail.com">willjiahuexue@gmail.com</a></div>
    <div class="Columns"><img src={RPGLogo} alt = "RPG"><a class = "hiddenInfo" href="https://www.youtube.com/@RingkunProjectGarbage">RPG Youtube Channel</a></div>
</div>

<style>
 
    .Columns{
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        height: 25px;
        transition: 1s;
        background-color: rgb(0, 0, 0);
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
        background-color: rgb(255, 255, 255);
    }
    .hiddenInfo{
        position: relative;
        /* left: 20px; */
        bottom: 6px;
        right: 0px;
    }
</style>