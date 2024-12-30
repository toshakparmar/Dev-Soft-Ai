import { Contact } from "lucide-react";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import DeviAi from "./components/DeviAi";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";
import ContactUs from "./components/Contact";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <DeviAi />
        <Benefits />
        <Collaboration />
        <Services />
        <Pricing />
        <Roadmap />
        <ContactUs />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
