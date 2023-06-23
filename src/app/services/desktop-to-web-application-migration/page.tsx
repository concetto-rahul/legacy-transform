import dynamic from "next/dynamic";

const WebApplicationInnerBanner = dynamic(
  () =>
    import(
      "../../../component/services/web_application/web_application_inner_banner"
    )
);
const WebApplicationSystemAudit = dynamic(
  () =>
    import(
      "../../../component/services/web_application/web_application_system_audit"
    )
);
const WebApplicationPointPart = dynamic(
  () =>
    import(
      "../../../component/services/web_application/web_application_point_part"
    )
);
const WebApplicationWeCheck = dynamic(
  () =>
    import(
      "../../../component/services/web_application/web_application_we_check"
    )
);
const WebApplicationWeCanHelp = dynamic(
  () =>
    import(
      "../../../component/services/web_application/web_application_we_can_help"
    )
);
const WebApplicationWhyChoosePart = dynamic(
  () =>
    import(
      "../../../component/services/web_application/web_application_why_choose_part"
    )
);
const WebApplicationServicesListing = dynamic(
  () =>
    import(
      "../../../component/services/web_application/web_application_services_listing"
    )
);
const WebApplicationTechnologyPart = dynamic(
  () =>
    import(
      "../../../component/services/web_application/web_application_technology_part"
    )
);
const WebApplicationModernizationPart = dynamic(
  () =>
    import(
      "../../../component/services/web_application/web_application_modernization_part"
    )
);
const WebApplicationCostPart = dynamic(
  () =>
    import(
      "../../../component/services/web_application/web_application_cost_part"
    )
);

const FrequentlyQuestions = dynamic(
  () => import("../../../component/home/frequently-questions")
);
const GetContact = dynamic(() => import("../../../component/home/get-contact"));

export default function DesktopToWebApplicationMigration() {
  return (
    <>
      <WebApplicationInnerBanner />
      <WebApplicationSystemAudit />
      <WebApplicationPointPart />
      <WebApplicationWeCheck />
      <WebApplicationWeCanHelp />
      <WebApplicationWhyChoosePart />
      <WebApplicationServicesListing />
      <WebApplicationTechnologyPart />
      <WebApplicationModernizationPart />
      <WebApplicationCostPart />
      <FrequentlyQuestions pageName="web_application" />
      <GetContact />
    </>
  );
}
