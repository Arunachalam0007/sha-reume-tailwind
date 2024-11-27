import BioSection from "./components/BioSection";
import ContactForm from "./components/ContactForm";
import EductionSection from "./components/EductionSection";
import FooterSection from "./components/FooterSection";
import HeroSection from "./components/HeroSection";
import NavSection from "./components/NavSection";
import ProjectSections from "./components/ProjectSections";
import SkillsSection from "./components/SkillsSection";
import WorkExperienceSection from "./components/WorkExperienceSection";

export default function App() {
  return (
    <div className="relative overflow-y-auto antialiased">
      {/* Background Image */}
      <div className="fixed inset-0 bg-fixed bg-cover bg-center bg-img" />

      <div className="relative z-10 flex flex-col p-4 container mx-auto">
        <HeroSection />
        <NavSection />
        <ProjectSections />
        <BioSection />
        <SkillsSection />
        <WorkExperienceSection />
        <EductionSection />
        <ContactForm />
        <FooterSection />
      </div>
    </div>
  );
}
