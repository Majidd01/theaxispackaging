import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import Sitemap from 'vite-plugin-sitemap'
import { PRODUCT_CATEGORIES, INDUSTRIES } from './lib/constants'

// Construct standard and dynamic routes for the sitemap
const dynamicRoutes = [
	'/about',
	'/contact',
	'/faqs',
	'/products',
	'/industries',
	'/quote',
	'/sustainability',
	'/terms',
	'/privacy',
	'/moq',
	...PRODUCT_CATEGORIES.map(product => `/products/${product.slug}`),
	...INDUSTRIES.map(industry => `/industries/${industry.slug}`)
];

export default defineConfig({
	plugins: [
		react(),
		Sitemap({
			hostname: 'https://theaxispackaging.com',
			dynamicRoutes,
			generateRobotsTxt: false, // We already have a custom robots.txt
			readable: true
		})
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, '.')
		}
	},
	server: {
		port: 5173
	}
}) 