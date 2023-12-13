// import adapter from '@sveltejs/adapter-static';
import adapter from '@sveltejs/adapter-vercel';

import {
    vitePreprocess
} from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: vitePreprocess(),

    kit: {
        adapter: adapter(),
        paths: {
            base: process.env.NODE_ENV === 'production' ? '/ringkun.github.io' : '',
        }
    }
};


export default {
    kit: {
        adapter: adapter({
            // see the 'Deployment configuration' section below
        })
    }
};
// export default config;