/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				system: {
					primary: '#E95A8B',
					dark: {
						900: '#0f0f0f',
						700: '#262626'
					},
					red: '#ff0000'
				}
			},
			spacing: {
				wrap2xl: '220px',
				wrapxl: '180px',
				wraplg: '120px',
				wrapmd: '80px'
			},
			animation: {
				'gradient-x': 'gradient-x 2s ease',
				'gradient-y': 'gradient-y 2s ease',
				'gradient-xy': 'gradient-xy 2s ease'
			}
		}
	},

	plugins: []
};

module.exports = config;
