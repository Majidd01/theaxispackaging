import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import fs from 'fs'
import Sitemap from 'vite-plugin-sitemap'
import { PRODUCT_CATEGORIES, INDUSTRIES } from './src/lib/constants'

function getBlogRoutes(): string[] {
	try {
		const raw = fs.readFileSync(path.resolve(__dirname, 'public/blogs-data/blogs.json'), 'utf-8')
		const blogs = JSON.parse(raw) as Array<{ slug?: string; isPublished?: boolean }>
		return blogs
			.filter((b) => b.isPublished && b.slug)
			.map((b) => `/blog/${b.slug}`)
	} catch {
		return []
	}
}

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
	'/blog',
	...PRODUCT_CATEGORIES.map((product) => `/products/${product.slug}`),
	...INDUSTRIES.map((industry) => `/industries/${industry.slug}`),
	...getBlogRoutes(),
]

export default defineConfig({
	plugins: [
		react(),
		Sitemap({
			hostname: 'https://www.theaxispackaging.com',
			dynamicRoutes,
			generateRobotsTxt: false,
			readable: true,
			exclude: ['/admin', '/admin/blog'],
		}),
	],
	resolve: {
		alias: [
			{ find: '@/lib', replacement: path.resolve(__dirname, 'src/lib') },
			{ find: '@', replacement: path.resolve(__dirname, '.') },
		],
	},
	build: {
		cssCodeSplit: true,
		sourcemap: false,
		rollupOptions: {
			output: {
				manualChunks: {
					vendor: ['react', 'react-dom', 'react-router-dom'],
					helmet: ['react-helmet-async'],
				},
			},
		},
	},
	server: {
		port: 5173,
	},
})
