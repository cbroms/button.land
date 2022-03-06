import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    // browser: {
    //   hydrate: false,
    //   router: false
    // },
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: null,
      precompress: false
    }),
    prerender: {
      crawl: true
    }
  }
};

export default config;
