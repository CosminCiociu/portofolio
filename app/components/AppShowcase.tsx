'use client';
import Link from 'next/link';

interface App {
	id: number;
	name: string;
	description: string;
	technologies: string[];
	platforms: string[];
	url: string;
	downloads?: string;
	rating?: number;
}

const apps: App[] = [
	{
		id: 1,
		name: 'Terapie.ro',
		description: 'Terapie.ro is Romania’s largest platform for online therapy, connecting users with licensed therapists for video, audio, and chat sessions. Secure, confidential, and easy to use.',
		technologies: [
			'5 Dashboards App',
			'Google Services',
			'Zoom API',
			'Stripe',
			'Afiliate System',
			'Custom Email System',
			'Invoicing',
			'Custom CMS',
			'Captcha',
			'Subscriptions System',
			"SEO",
			"Advertising System",
			"Language Switcher",
			"WhatsApp Integration",
			"Cookie Consent",
			"Coupon System",
		],
		platforms: ['Laravel', 'Bootstrap', 'SQL'],
		url: 'https://terapie.ro',
		
	},
	{
		id: 2,
		name: 'CryptoWatch',
		description: 'Real-time cryptocurrency tracking and portfolio management',
		technologies: ['Flutter', 'Dart', 'Firebase'],
		platforms: ['iOS', 'Android'],
		downloads: '50K+',
		url: 'https://cryptowatch.example.com',
		rating: 4.7,
	},
];

const AppShowcase = () => {
	return (
		<section className="py-16 md:py-20 relative">
			<div className="container mx-auto px-4">
				<h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">Featured Apps</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
					{apps.map((app) => (
						<Link href={app.url} target="_blank" className="group" key={app.id}>
						<div key={app.id} className="group bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-xl sm:rounded-2xl p-1">
							<div className="bg-gradient-to-b from-gray-900 to-gray-800 rounded-xl sm:rounded-2xl overflow-hidden p-4 sm:p-6 relative">
								<div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
									{/* App Icon */}
									<div className="w-16 sm:w-20 h-16 sm:h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 p-1 flex-shrink-0">
										<div className="w-full h-full rounded-xl bg-gray-900 flex items-center justify-center overflow-hidden relative">
											{app.id === 1 ? (
												<svg className="w-10 h-10 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														d="M11 2c4.068 0 7.426 3.036 7.934 6.965l2.25 3.539c.148.233.118.58-.225.728L19 14.07V17c0 1.105-.895 2-2 2h-1.999L15 22H6v-3.694c0-1.18-.436-2.297-1.244-3.305C3.657 13.631 3 11.892 3 10c0-4.418 3.582-8 8-8zm0 5c-.552 0-1 .448-1 1v.999L9 9c-.552 0-1 .448-1 1s.448 1 1 1l1-.001V12c0 .552.448 1 1 1s1-.448 1-1v-1h1c.552 0 1-.448 1-1s-.448-1-1-1h-1V8c0-.552-.448-1-1-1z"
													/>
												</svg>
											) : (
												<svg className="w-10 h-10 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
													/>
												</svg>
											)}
											{/* Animated Glow Effect */}
											<div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-purple-500/0 animate-shimmer"></div>
										</div>
										{/* Corner Decorations */}
										<div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full blur-[2px]"></div>
										<div className="absolute -bottom-1 -left-1 w-3 h-3 bg-purple-400 rounded-full blur-[2px]"></div>
									</div>

									{/* App Info */}
									<div className="flex-grow w-full sm:w-auto">
										<div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 mb-2">
											<h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors text-center sm:text-left break-words">{app.name}</h3>
											<span className="px-2 py-0.5 rounded-full text-xs bg-blue-500/10 text-blue-400 border border-blue-500/20 whitespace-nowrap">
												{app.id === 1 ? 'Featured' : 'New'}
											</span>
										</div>
										<p className="text-gray-400 mb-4 text-center sm:text-left">{app.description}</p>

										{/* Technologies */}
										<div className="flex flex-wrap justify-center sm:justify-start gap-2 mb-4">
											{app.technologies.map((tech) => (
												<span
													key={tech}
													className="px-3 py-1 text-sm rounded-full bg-gray-800 text-gray-400 border border-gray-700/50 group-hover:border-gray-600/50 group-hover:text-gray-300 transition-colors whitespace-nowrap"
												>
													{tech}
												</span>
											))}
										</div>

										{/* Stats */}
										<div className="flex flex-wrap justify-center sm:justify-start gap-4 text-sm text-gray-400">
											{app.platforms.map((platform) => (
												<div key={platform} className="flex items-center gap-1.5">
													<svg className="w-4 h-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
														<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.97c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.97a1 1 0 00-.364-1.118L2.049 9.397c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.97z" />
													</svg>
													<span>{platform}</span>
												</div>
											))}
										</div>
									</div>
								</div>
							</div>
						</div>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
};

export default AppShowcase;
