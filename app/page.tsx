
import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';
import AppShowcase from './components/AppShowcase';
import ContactSection from './components/ContactSection';

export default function Home() {
	return (
		<main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white overflow-x-hidden">
			<HeroSection />
			<SkillsSection />
			<AppShowcase />
			<ContactSection />
		</main>
	);
}
