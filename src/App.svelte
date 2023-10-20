<script>
	import Modal from './Modal.svelte';
import modal from './Modal.svelte';
	export let name;
	export let job;
	var count = 0;
	const jobs = ["Software Engineer","Full Stack", "Developer", "Modeler"];
	const clickMe = () => {
		count = (count+1)%jobs.length;
		job = jobs[count];

	}
</script>
<Modal></Modal>
<main>
	<h1>Hello, you.</h1>
	<h1>I'm looking to be hired as a {job}!</h1>
	<button on:click={clickMe}>Press Me</button>
	<a href="NewPage.html">Click me</a>
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