import dynamic from "next/dynamic";

const ReengineeringInnerbanner = dynamic(
  () =>
    import(
      "../../../component/services/reengineering/reengineering_innerbanner"
    )
);
const ReengineeringSystemAudit = dynamic(
  () =>
    import(
      "../../../component/services/reengineering/reengineering_system_audit"
    )
);
const ReengineeringPointPart = dynamic(
  () =>
    import("../../../component/services/reengineering/reengineering_point_part")
);
const ReengineeringWeCheck = dynamic(
  () =>
    import("../../../component/services/reengineering/reengineering_we_check")
);
const ReengineeringWeCanHelp = dynamic(
  () =>
    import(
      "../../../component/services/reengineering/reengineering_we_can_help"
    )
);
const ReengineeringWhyChoosePart = dynamic(
  () =>
    import(
      "../../../component/services/reengineering/reengineering_why_choose_part"
    )
);
const ReengineeringServicesListing = dynamic(
  () =>
    import(
      "../../../component/services/reengineering/reengineering_serviceslisting"
    )
);
const ReengineeringTechnologyPart = dynamic(
  () =>
    import(
      "../../../component/services/reengineering/reengineering_technology_part"
    )
);
const ReengineeringModernizationPart = dynamic(
  () =>
    import(
      "../../../component/services/reengineering/reengineering_modernization_part"
    )
);
const ReengineeringCostPart = dynamic(
  () =>
    import("../../../component/services/reengineering/reengineering_cost_part")
);
const FrequentlyQuestions = dynamic(
  () => import("../../../component/home/frequently-questions")
);
const GetContact = dynamic(() => import("../../../component/home/get-contact"));

export default function SoftwareReengineering() {
  return (
    <>
      <ReengineeringInnerbanner />
      <ReengineeringSystemAudit />
      <ReengineeringPointPart />
      <ReengineeringWeCheck />
      <ReengineeringWeCanHelp />
      <ReengineeringWhyChoosePart />
      <ReengineeringServicesListing />
      <ReengineeringTechnologyPart />
      <ReengineeringModernizationPart />
      <ReengineeringCostPart />
      <FrequentlyQuestions pageName="reengineering" />
      <GetContact />
    </>
  );
}
