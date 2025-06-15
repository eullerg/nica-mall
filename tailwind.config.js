/** @type {import('tailwindcss').Config} */
module.exports = {
	/* 1 ─  darkMode por classe */
	darkMode: 'class',
  
	content: [
	  './src/app/**/*.{js,ts,jsx,tsx,mdx}',
	  './src/components/**/*.{js,ts,jsx,tsx,mdx}',
	],
  
	theme: {
	  extend: {
		backgroundImage: {
			'shopping': "url('/imagem-shopping.jpg')",
		},
		/* 2 ─ tokens que mudam com :root / :root.dark */
		colors: {
		  /* marca turquesa (já existente) */
		  brand: {
			50:  '#f2fcff',
			100: '#dff7ff',
			200: '#c2efff',
			300: '#9be4ff',
			400: '#6fd8ff',
			500: '#42cbff',
			600: '#1ab8f3',
			700: '#0094c2',
			800: '#006a87',
			900: '#003d4b',
		  },
  
		  /* novos aliases = CSS vars */
		  bg:         'var(--bg)',
		  surface:    'var(--surface)',
		  'surface-2':'var(--surface-2)',
		  fg:         'var(--fg)',
		  muted:      'var(--fg-muted)',
  
		  /* shadcn */
		  background: 'hsl(var(--background))',
		  foreground: 'hsl(var(--foreground))',
		  card: {
			DEFAULT: 'hsl(var(--card))',
			foreground: 'hsl(var(--card-foreground))',
		  },
		  popover: {
			DEFAULT: 'hsl(var(--popover))',
			foreground: 'hsl(var(--popover-foreground))',
		  },
		  primary: {
			DEFAULT: 'hsl(var(--primary))',
			foreground: 'hsl(var(--primary-foreground))',
		  },
		  secondary: {
			DEFAULT: 'hsl(var(--secondary))',
			foreground: 'hsl(var(--secondary-foreground))',
		  },
		  muted_: { /* rename to avoid clash with new 'muted' */
			DEFAULT: 'hsl(var(--muted))',
			foreground: 'hsl(var(--muted-foreground))',
		  },
		  accent: {
			DEFAULT: 'hsl(var(--accent))',
			foreground: 'hsl(var(--accent-foreground))',
		  },
		  destructive: {
			DEFAULT: 'hsl(var(--destructive))',
			foreground: 'hsl(var(--destructive-foreground))',
		  },
		  border: 'hsl(var(--border))',
		  input: 'hsl(var(--input))',
		  ring: 'hsl(var(--ring))',
		},
  
		backdropBlur: {
		  xs: '3px',
		},
  
		borderRadius: {
		  lg: 'var(--radius)',
		  md: 'calc(var(--radius) - 2px)',
		  sm: 'calc(var(--radius) - 4px)',
		},
	  },
	},
  
	plugins: [require('tailwindcss-animate')],
  };
  