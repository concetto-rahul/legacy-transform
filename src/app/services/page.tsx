import dynamic from "next/dynamic";

const ServicesInnerBanner = dynamic(
  () => import("../../component/services/services_inner_banner")
);
const ServicesListing = dynamic(
  () => import("../../component/services/services_listing")
);
const ServicesWeCanHelp = dynamic(
  () => import("../../component/services/services_we_can_help")
);
const ServicesTechexpertise = dynamic(
  () => import("../../component/services/services_techexpertise")
);

const ServicesPopularApproch = dynamic(
  () => import("../../component/services/services_popular_approch")
);
const ServicesOurCapabilities = dynamic(
  () => import("../../component/services/services_our_capabilities")
);

const ServicesWhyChoosePart = dynamic(
  () => import("../../component/services/services_why_choose_part")
);
const ServicesGetInTouch = dynamic(
  () => import("../../component/services/services_get_in_touch")
);
const FrequentlyQuestions = dynamic(
  () => import("../../component/home/frequently-questions")
);
const GetContact = dynamic(() => import("../../component/home/get-contact"));

export default function Services() {
  return (
    <>
      <ServicesInnerBanner />
      <ServicesListing />
      <ServicesWeCanHelp />
      <ServicesTechexpertise />
      <ServicesPopularApproch />
      <ServicesOurCapabilities />
      <ServicesWhyChoosePart />
      <ServicesGetInTouch />
      <FrequentlyQuestions pageName="services" />
      <GetContact />
    </>
  );
}
