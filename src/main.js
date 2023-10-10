import App from './App.svelte';

const app = new App({
    target: document.body,
    props: {
        name: 'Me',
        job: 'Software Engineer'
    }
});
const Docket = new Docket({
    target: document.body,
    props: {
        hello: 'no'
    }
});

export default app;
// export Docket;