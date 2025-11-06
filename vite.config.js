import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

export default defineConfig({
	build: {
		chunkSizeWarningLimit: 1500,
	},
	plugins: [
		preact(),
	],
})
