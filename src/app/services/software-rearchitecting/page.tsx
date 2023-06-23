import dynamic from "next/dynamic";

const RearchitectingInnerBanner = dynamic(
  () =>
    import(
      "../../../component/services/rearchitecting/rearchitecting_inner_banner"
    )
);
const RearchitectingSystemAudit = dynamic(
  () =>
    import(
      "../../../component/services/rearchitecting/rearchitecting_system_audit"
    )
);
const RearchitectingTable = dynamic(
  () =>
    import("../../../component/services/rearchitecting/rearchitecting_table")
);
const RearchitectingWeCheck = dynamic(
  () =>
    import("../../../component/services/rearchitecting/rearchitecting_we_check")
);
const RearchitectingWeCanHelp = dynamic(
  () =>
    import(
      "../../../component/services/rearchitecting/rearchitecting_we_can_help"
    )
);
const RearchitectingWhyChoosePart = dynamic(
  () =>
    import(
      "../../../component/services/rearchitecting/rearchitecting_why_choose_part"
    )
);
const RearchitectingServicesListing = dynamic(
  () =>
    import(
      "../../../component/services/rearchitecting/rearchitecting_services_listing"
    )
);
const RearchitectingModernizationPart = dynamic(
  () =>
    import(
      "../../../component/services/rearchitecting/rearchitecting_modernization_part"
    )
);
const RearchitectingProcess = dynamic(
  () =>
    import("../../../component/services/rearchitecting/rearchitecting_process")
);
const FrequentlyQuestions = dynamic(
  () => import("../../../component/home/frequently-questions")
);
const GetContact = dynamic(() => import("../../../component/home/get-contact"));

export default function SoftwareRearchitecting() {
  return (
    <>
      <RearchitectingInnerBanner />
      <RearchitectingSystemAudit />
      <RearchitectingTable />
      <RearchitectingWeCheck />
      <RearchitectingWeCanHelp />
      <RearchitectingWhyChoosePart />
      <RearchitectingServicesListing />
      <RearchitectingModernizationPart />
      <RearchitectingProcess />
      <FrequentlyQuestions pageName="rearchitecting" />
      <GetContact />
    </>
  );
}
