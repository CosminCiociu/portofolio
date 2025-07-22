import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Ciociu Cosmin - Web Developer',
	description:
		'Welcome to my portfolio! I am a passionate Web Developer crafting beautiful and performant web applications. Specializing in modern web technologies, I create engaging user experiences that users love.',
	keywords: [
		'Web Developer',
		'Frontend Developer',
		'Backend Developer',
		'React',
		'Next.js',
		'JavaScript',
		'TypeScript',
		'Web Apps',
		'UI/UX',
		'Web Architecture',
		'Ciociu Cosmin',
	],
	authors: [{ name: 'Ciociu Cosmin' }],
	creator: 'Ciociu Cosmin',
	openGraph: {
		title: 'Ciociu Cosmin - Portfolio',
		description: 'Passionate Web Developer creating exceptional web applications. Explore my projects and web development expertise.',
		url: 'https://your-domain.com',
		siteName: 'Ciociu Cosmin - Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Ciociu Cosmin - Web Developer Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Ciociu Cosmin - Web Developer',
		description: 'Passionate Web Developer creating exceptional web applications. Explore my projects and web development expertise.',
		creator: '@yourusername',
		images: ['/og-image.jpg'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
