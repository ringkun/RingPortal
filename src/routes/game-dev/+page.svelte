
<script>
    import PageDefault from "../layouts/PageDefault.svelte";
</script>

<PageDefault> 
</PageDefault>






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