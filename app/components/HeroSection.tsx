'use client';
import Link from 'next/link';

const HeroSection = () => {
	return (
		<section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden py-16 sm:py-20">
			<div className="absolute inset-0 z-0">
				<div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent"></div>
				<div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent"></div>
			</div>

			<div className="container mx-auto px-4 z-10">
				<div className="text-center mb-8">
					<span className="text-lg md:text-xl text-gray-400 mb-2 block">Hi, I&apos;m</span>
					<h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-4">
						<span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 text-transparent bg-clip-text bg-[size:200%] animate-gradient">
							Ciociu Cosmin
						</span>
					</h1>
					<h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-300">
						Full Stack Software Developer
					</h2>
					<p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed px-4">
						Full-stack developer with 4+ years of experience, specializing in PHP (Laravel, Symfony, CodeIgniter) and modern JavaScript frameworks like Vue 3. I build robust, user-friendly applications, taking ownership from solution design to delivery. Skilled in communicating with non-technical stakeholders and delivering tailored software for B2B clients. Recent projects include complex API integrations, invoicing systems, and CRM modules. Bachelor’s in Software Development (Brasov). Open to B2B collaborations.
					</p>
				</div>

				{/* App Store Stats */}
				<div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-12 px-2">
					{[
						{
							label: 'Apps Published',
							value: '5+',
							icon: (
								<svg className="w-8 h-8 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
									<path d="M17,1H7A2,2 0 0,0 5,3V21A2,2 0 0,0 7,23H17A2,2 0 0,0 19,21V3A2,2 0 0,0 17,1M17,19H7V5H17V19M16,13H8V11H16V13M16,9H8V7H16V9M7,24H9V22H7V24M11,24H13V22H11V24M15,24H17V22H15V24" />
								</svg>
							),
						},
						{
							label: 'Total Repositories',
							value: '25+',
							icon: (
								<svg className="w-8 h-8 text-purple-400" viewBox="0 0 24 24" fill="currentColor">
									<path d="M12 2C6.48 2 2 6.48 2 12c0 4.84 3.68 8.84 8.38 9.74.61.11.84-.26.84-.58v-2.02c-3.4.74-4.12-1.41-4.12-1.41-.56-1.41-1.36-1.79-1.36-1.79-1.11-.76.08-.75.08-.75 1.23.09 1.88 1.26 1.88 1.26 1.09 1.87 2.86 1.33 3.56 1.02.11-.79.43-1.33.78-1.64-2.71-.31-5.56-1.36-5.56-6.06 0-1.34.47-2.43 1.24-3.29-.12-.31-.54-1.56.12-3.25 0 0 1.02-.33 3.34 1.25a11.5 11.5 0 0 1 3.04-.41c1.03.01 2.07.14 3.04.41 2.32-1.58 3.34-1.25 3.34-1.25.66 1.69.24 2.94.12 3.25.77.86 1.24 1.95 1.24 3.29 0 4.71-2.86 5.75-5.58 6.06.44.38.83 1.13.83 2.28v3.38c0 .32.22.7.85.58C18.32 20.84 22 16.84 22 12c0-5.52-4.48-10-10-10z" />
								</svg>
							),
						},
						{
							label: 'APIs Integrations',
							value: '+10',
							icon: (
								<svg className="w-8 h-8 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
									<path d="M17 7a5 5 0 0 0-10 0c0 2.21 1.45 4.07 3.5 4.72V15H7a3 3 0 1 0 0 6h10a3 3 0 1 0 0-6h-3.5v-3.28C15.55 11.07 17 9.21 17 7zm-5-3a3 3 0 0 1 3 3c0 1.31-.84 2.42-2 2.83A2.99 2.99 0 0 1 9 7a3 3 0 0 1 3-3zm5 15a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-10 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
								</svg>
								),
						},
						{
							label: 'PHP Frameworks',
							value: '5+',
							icon: (
								<svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
									<path d="m18 16 4-4-4-4"></path>
									<path d="m6 8-4 4 4 4"></path>
									<path d="m14.5 4-5 16"></path>
								</svg>
							),
						},
					].map((stat, index) => (
						<div
							key={index}
							className="group relative bg-gray-800/30 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300"
						>
							{/* Decorative gradient background */}
							<div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

							{/* Content */}
							<div className="relative z-10">
								<div className="mb-2 sm:mb-4 transform group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
								<div className="space-y-0.5 sm:space-y-1">
									<div className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text group-hover:from-blue-300 group-hover:to-purple-300 transition-all duration-300">
										{stat.value}
									</div>
									<div className="text-xs sm:text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{stat.label}</div>
								</div>
							</div>

							{/* Decorative corner accents */}
							<div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-transparent group-hover:border-blue-500/30 rounded-tl-xl transition-colors duration-500"></div>
							<div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-transparent group-hover:border-purple-500/30 rounded-br-xl transition-colors duration-500"></div>

							{/* Hover glow effect */}
							<div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-15 blur-lg transition-opacity duration-500"></div>
						</div>
					))}
				</div>

				<Link href="/itp">

				{/* Featured App Preview */}
				<div className="max-w-lg mx-auto px-4">
					<div className="group relative bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-2xl p-1 hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-500">
						<div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>

						<div className="bg-gradient-to-b from-gray-900 to-gray-800 rounded-2xl overflow-hidden relative">
							{/* Decorative Pattern */}
							<div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.05]">
								<svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
									<pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
										<path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
									</pattern>
									<rect width="100" height="100" fill="url(#grid)" />
								</svg>
							</div>
							<div className="relative p-8 cursor-pointer" >
								{/* Badge */}
								<div className="flex justify-center">
									<div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 group-hover:border-blue-400/30 transition-colors">
										<span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
										<span className="text-blue-400 text-sm font-medium">Featured App</span>
									</div>
								</div>

								{/* App Info */}
								<div className="text-center mt-6 ">
									<h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
										ITP App 
									</h3>
									<p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors">Sending sms/email notifications in order to keep you updated with your tehnical periodical inspections.</p> 

									{/* Stats Grid */}
									<div className="grid grid-cols-3 gap-4 mb-6">
										<div className="space-y-1">
											<div className="flex items-center justify-center gap-1 text-yellow-400">
												<svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
													<path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
												</svg>
												<span className="font-semibold">Laravel</span>
											</div>
											<p className="text-xs text-gray-500">Backend</p>
										</div>
										<div className="space-y-1">
											<div className="flex items-center justify-center gap-1 text-blue-400">
												<svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
													<path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
												</svg>
												<span className="font-semibold">Vue3</span>
											</div>
											<p className="text-xs text-gray-500">Frontend</p>
										</div>
										<div className="space-y-1">
											<div className="flex items-center justify-center gap-1 text-green-400">
												<svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
													<path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
												</svg>
												<span className="font-semibold">Sms + Email </span>
											</div>
											<p className="text-xs text-gray-500">Integrations</p>
										</div>
									</div>

									{/* Features Pills */}
									<div className="flex flex-wrap justify-center gap-2">
										{['Tailwind', 'SQL', 'Api', 'Php8', 'DevOps','Stripe', 'WebHooks', 'Excel','Email Templates' ].map((feature, index) => (
											<span
												key={index}
												className="px-3 py-1 text-sm rounded-full bg-gray-800 text-gray-400 border border-gray-700/50 group-hover:border-gray-600/50 group-hover:text-gray-300 transition-colors"
											>
												{feature}
											</span>
										))}
									</div>
								</div>
							</div>

							{/* Decorative Corner Elements */}
							<div className="absolute top-0 left-0 w-16 h-16 overflow-hidden">
								<div className="absolute top-0 left-0 w-[2px] h-8 bg-gradient-to-b from-blue-500/50 to-transparent"></div>
								<div className="absolute top-0 left-0 h-[2px] w-8 bg-gradient-to-r from-blue-500/50 to-transparent"></div>
							</div>
							<div className="absolute bottom-0 right-0 w-16 h-16 overflow-hidden">
								<div className="absolute bottom-0 right-0 w-[2px] h-8 bg-gradient-to-t from-purple-500/50 to-transparent"></div>
								<div className="absolute bottom-0 right-0 h-[2px] w-8 bg-gradient-to-l from-purple-500/50 to-transparent"></div>
							</div>
						</div>
					</div>
				</div>
				</Link>


				<div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
					<svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
					</svg>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
