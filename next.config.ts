import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	eslint: {
		ignoreDuringBuilds: true,
	},
	typescript: {
		ignoreBuildErrors: true,
	},
	// Optimisation pour accélérer la compilation
	images: {
		formats: ['image/avif', 'image/webp'],
		deviceSizes: [640, 750, 828, 1080, 1200],
		imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
	},
	// Désactiver la mise en cache navigateur pour l'icône en développement
	async headers() {
		if (process.env.NODE_ENV !== 'development') return [];
		return [
			{
				source: '/favicon.ico',
				headers: [
					{ key: 'Cache-Control', value: 'no-store, no-cache, must-revalidate, proxy-revalidate' },
					{ key: 'Pragma', value: 'no-cache' },
					{ key: 'Expires', value: '0' },
				],
			},
			{
				source: '/icon.png',
				headers: [
					{ key: 'Cache-Control', value: 'no-store, no-cache, must-revalidate, proxy-revalidate' },
					{ key: 'Pragma', value: 'no-cache' },
					{ key: 'Expires', value: '0' },
				],
			},
		];
	},
	// Ignorer les gros fichiers vidéo pendant la compilation
	webpack: (config, { isServer }) => {
		if (!isServer) {
			config.resolve.fallback = {
				...config.resolve.fallback,
				fs: false,
			};
		}
		return config;
	},
	// Optimisations pour le mode développement
	...(process.env.NODE_ENV === 'development' && {
		// Désactiver certaines optimisations qui ralentissent en dev
		transpilePackages: [],
	}),
};

export default nextConfig;
