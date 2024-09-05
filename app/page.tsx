import HomeJumbotron from "./_components/home-page/HomeJumbotron";
import BentoDashboard from "./_components/home-page/BentoDashboard";
import AboutSection from "./_components/home-page/AboutSection";
import TravelSection from "./_components/home-page/TravelSection";
import PortfolioSection from "./_components/home-page/PortfolioSection";

export default function Home() {
  return (
    <main className="py-4">
      <HomeJumbotron />

      <BentoDashboard />

      <AboutSection />

      <PortfolioSection />

      <TravelSection />
    </main>
  );
}
