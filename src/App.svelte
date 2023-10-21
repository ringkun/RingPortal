<script>

import { Router, Link, Route } from "svelte-routing";
  import About from "./routes/About.svelte";

  export let url = "";

  import Modal from './Modal.svelte';
	export let name;
	export let job;
	var count = 0;
	const jobs = ["Software Engineer","Full Stack", "Developer", "Modeler"];
	const clickMe = () => {
		count = (count+1)%jobs.length;
		job = jobs[count];

	}
</script>

<Router {url}>
	<nav>
	  <Link to="/">Home</Link>
	  <Link to="/About">About</Link>
	</nav>
	<div>
	  <Route path="/About" component={About} />
	  <Route path="/"></Route>
	</div>
  </Router>
<Modal></Modal>
<main>
	<h1>Hello, you.</h1>
	<h1>I'm looking to be hired as a {job}!</h1>
	<button on:click={clickMe}>Press Me</button>
	<a href="About.html">Click me</a>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ae00ff;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>