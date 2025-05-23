const {
	default: flattenColorPalette,
  } = require("tailwindcss/lib/util/flattenColorPalette");
  
  /** @type {import('tailwindcss').Config} */
  module.exports = {
	content: [
	  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
	  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
	  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  
	  // Or if using `src` directory:
	  "./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	darkMode: "class",
	theme: {
	  extend: {
		
		animation: {
			shimmer: "shimmer 2s linear infinite",
		  },
		  keyframes: {
			shimmer: {
			  from: {
				backgroundPosition: "0 0",
			  },
			  to: {
				backgroundPosition: "-200% 0",
			  },
			},
		  },
	  },
	},
	plugins: [addVariablesForColors,
		function ({ addUtilities }) {
			addUtilities({
			  '.text-stroke': {
				'-webkit-text-stroke': '1px',
			  },
			  '.text-stroke-black': {
				'-webkit-text-stroke': '1px black',
			  },
			});
		  },
	],
  };
  
  // This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
  function addVariablesForColors({
	addBase,
	theme
  }) {
	let allColors = flattenColorPalette(theme("colors"));
	let newVars = Object.fromEntries(Object.entries(allColors).map(([key, val]) => [`--${key}`, val]));
  
	addBase({
	  ":root": newVars,
	});
  }
  