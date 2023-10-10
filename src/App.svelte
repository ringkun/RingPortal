<script>
	export let name;
	export let job;
	var count = 0;
	const jobs = ["Software Engineer","Full Stack", "Developer", "Modeler"];
	const clickMe = () => {
		count = (count+1)%jobs.length;
		job = jobs[count];

	}
</script>

<main>
	<h1>Hello {name}!</h1>
	<h1>I hear you want to be a {job}!</h1>
	<button on:click={clickMe}>Press Me</button>
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