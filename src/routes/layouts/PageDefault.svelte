<!-- 
    mldBRn
    XcdSWN
    Mf3XDX
 -->

<TopBar>

</TopBar>

<hr>


<AffiliateLink></AffiliateLink>

<script>
    import './global.scss'
    import TopBar from "./TopBar.svelte";
    import AffiliateLink from "./AffiliateLink.svelte";

    /**
	 * @type {any}
	 */
    let inputX;

    /**
	 * @type {any}
	 */
    let inputY;
    /**
	 * @param {{ clientX: any; clientY: any; }} event
	 */
    // function coordinate(event) {
    //     inputX = event.clientX;
    //     inputY = event.clientY;
    //     console.log(inputX,inputY);
    //     // // @ts-ignore
    //     // document.getElementById("follow").style.left = String(inputX).concat("px");
    //     // // @ts-ignore
    //     // document.getElementById("follow").style.top = String(inputY).concat("px");
    //     var c = document.getElementById("background");
    //     var ctx = c.getContext("2d");
    //     ctx.clearRect(0, 0, c.width, c.height);
    //     ctx.beginPath();
    //     ctx.arc(inputX/2,inputY/2, 20, 0, 2 * Math.PI);
    //     ctx.stroke();  
    // }
    

</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- <canvas id = "background" on:mousemove={coordinate}>

</canvas> -->
    <!-- <div id="follow"></div> -->
<style>

#follow{
  background-color: aliceblue;
  position: absolute;
  right: 0px;
  bottom: 0px;  
  width: 100px;
  height: 100px;
}
#background{

    background-color: aqua;
    height: 100%;
    width: 100%;
    margin: 0;
    /* background-position: center;
    background-repeat: no-repeat;
    background-size: cover; */
}
</style>