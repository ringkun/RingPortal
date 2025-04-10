// import adapter from '@sveltejs/adapter-static';


// import {
//     vitePreprocess
// } from '@sveltejs/kit/vite';

// /** @type {import('@sveltejs/kit').Config} */
// const config = {
//     preprocess: vitePreprocess(),

//     kit: {
//         adapter: adapter(),
//         paths: {
//             base: process.env.NODE_ENV === 'production' ? '/ringkun.github.io' : '',
//         }
//     }
// };
// export default config;
import adapter from '@sveltejs/adapter-vercel';
export default {
    kit: {
        adapter: adapter({
            // see the 'Deployment configuration' section below
        }),
        paths: {
            base: ''
        }
    }

};