import CommunityCTA from "./components/CommunityCTA";
import Footer from "./components/Footer";
import Fundraising from "./components/Fundraising";
import Hero from "./components/Hero";
import Journey from "./components/Journey";
import OurPurpose from "./components/OurPurpose";
import PracticeSessions from "./components/PracticeSessions";
import OurStory from "./components/OurStory";
import BandMembers from "./components/BandMembers";

export default function Home() {
  return (
    <main>
      <Hero />
      <OurPurpose />
      <OurStory />
      <BandMembers />
      <Fundraising />
      <Journey />
      <PracticeSessions />
      <CommunityCTA />
      <Footer />
    </main>
  );
}