import Link from 'next/link';

export default function NoteApp() {
	return (
		<main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white overflow-x-hidden">
			<div className="flex min-h-screen items-center justify-center w-full">
				{/* Add like to return to the home page */}
				<div className="absolute top-4 left-1/2 transform -translate-x-1/2">
					<Link
						href="/"
						className="px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-semibold shadow-lg hover:from-indigo-500 hover:to-pink-500 transition-all duration-300 hover:scale-105"
					>
						Return to Portfolio
					</Link>
				</div>
				<iframe
					src="https://ciociu-cosmin.eu:8080/"
					title="Note App"
					className="w-full h-screen border-0"
					sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals"
					allow="clipboard-write; fullscreen"
				/>
			</div>
		</main>
	);
}
