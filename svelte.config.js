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
        })
    }
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        prerender: {
            handleHttpError: ({ path, referrer, message }) => {
                // ignore deliberate link to shiny 404 page
                if (path === '/not-found' && referrer === '/blog/how-we-built-our-404-page') {
                    return;
                }

                // otherwise fail the build
                throw new Error(message);
            }
        }
    }
};