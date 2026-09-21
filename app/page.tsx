import CommunityCTA from "./components/CommunityCTA";
import Footer from "./components/Footer";
import Fundraising from "./components/Fundraising";
import Hero from "./components/Hero";
import Journey from "./components/Journey";
import Navbar from "./components/Navbar";
import OurPurpose from "./components/OurPurpose";
import PracticeSessions from "./components/PracticeSessions";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <OurPurpose />
      <Fundraising />
      <Journey />
      <PracticeSessions />
      <CommunityCTA />
      <Footer />
    </main>
  );
}