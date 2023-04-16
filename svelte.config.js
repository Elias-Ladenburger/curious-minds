import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';


/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// used auto-adapter, see
		// - https://kit.svelte.dev/docs/adapters
		// - https://kit.svelte.dev/docs/adapter-auto
		adapter: adapter(),
		csp: {
			directives: {
				'script-src': ['self']
			},
		},
	},
	preprocess: vitePreprocess()
};

export default config;
