/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: {
					orange: 'hsl(26, 100%, 55%)',
					pale: 'hsl(25, 100%, 94%)'
				},
				grayBlue: {
					100: ' hsl(223, 64%, 98%)',
					500: 'hsl(220, 14%, 75%)',
					700: 'hsl(219, 9%, 45%)',
					900: 'hsl(220, 13%, 13%)'
				}
			},
			fontFamily: {
				body: ['Kumbh Sans']
			}
		}
	},
	plugins: []
}
