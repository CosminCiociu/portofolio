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
		name: 'Notes App',
		description: 'A simple note-taking app built with React. Features include adding, editing, and deleting notes, error handling with alerts notifications, backend build with expressJs, and a responsive design for all devices.',
		technologies: ['React', 'TypeScript', 'CSS', 'MongoDB', 'Node.js', 'Express.js'],
		platforms: ['Express.js', 'React', 'MongoDB'],
		url: '/note-app',
	},
];

const AppShowcase = () => {
	return (
		<section className="py-16 md:py-20 relative">
			<div className="container mx-auto px-4">
				<h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">Featured Apps</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
					{apps.map((app) => (
						<Link 
							href={app.url} 
							{...(app.id === 1 ? { target: "_blank" } : {})} 
							className="group" 
							key={app.id}
						>
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
														<path d="M18.6375 9.04176L13.3875 14.2418C13.3075 14.3218 13.1876 14.3718 13.0676 14.3718H10.1075V11.3118C10.1075 11.1918 10.1575 11.0818 10.2375 11.0018L15.4376 5.84176" stroke="currentColor" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
														<path d="M18.7076 11.9818V21.6618C18.7076 21.9018 18.5176 22.0918 18.2776 22.0918H2.84756C2.60756 22.0918 2.41754 21.9018 2.41754 21.6618V6.23176C2.41754 5.99176 2.60756 5.80176 2.84756 5.80176H12.4875" stroke="currentColor" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
														<path d="M18.3863 2.90824L16.859 4.43558L20.0551 7.63167L21.5824 6.10433L18.3863 2.90824Z" stroke="currentColor" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
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
