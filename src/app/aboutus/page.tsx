import dynamic from "next/dynamic";
import { Metadata } from "next";

const AboutInnerbaner = dynamic(
  () => import("../../component/aboutus/about-innerbaner")
);
const AboutIntro = dynamic(() => import("../../component/aboutus/about-intro"));
const Corevalues = dynamic(() => import("../../component/aboutus/corevalues"));
const ContactCountry = dynamic(
  () => import("../../component/contactus/contact-country")
);
const AboutMigrationSolution = dynamic(
  () => import("../../component/aboutus/about-migration-solution")
);
const AboutWeCanHelp = dynamic(
  () => import("../../component/aboutus/about-we-can-help")
);
const FrequentlyQuestions = dynamic(
  () => import("../../component/home/frequently-questions")
);
const GetContact = dynamic(() => import("../../component/home/get-contact"));

export const metadata: Metadata = {
  title: "About us",
};
export default function AboutUs() {
  return (
    <>
      <AboutInnerbaner />
      <AboutIntro />
      <Corevalues />
      <ContactCountry />
      <AboutMigrationSolution />
      <AboutWeCanHelp />
      <FrequentlyQuestions pageName="aboutus" />
      <GetContact />
    </>
  );
}
