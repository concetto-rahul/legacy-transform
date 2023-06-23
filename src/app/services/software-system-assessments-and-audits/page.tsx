import dynamic from "next/dynamic";

const AuditInnerBanner = dynamic(
  () => import("../../../component/services/audit/audit_innerbanner")
);
const SystemAudit = dynamic(
  () => import("../../../component/services/audit/system-audit")
);
const AuditPointPart = dynamic(
  () => import("../../../component/services/audit/audit_point_part")
);

const AuditWeCheck = dynamic(
  () => import("../../../component/services/audit/audit_we_check")
);
const AuditWeCanHelp = dynamic(
  () => import("../../../component/services/audit/audit_we_can_help")
);
const AuditWhyChoosePart = dynamic(
  () => import("../../../component/services/audit/audit_why_choose_part")
);

const LegacyAudit = dynamic(
  () => import("../../../component/services/audit/legacy_audit")
);
const AuditServicesListing = dynamic(
  () => import("../../../component/services/audit/audit_services_listing")
);
const AuditTechnologyPart = dynamic(
  () => import("../../../component/services/audit/audit_technology_part")
);

const AuditModernizationPart = dynamic(
  () => import("../../../component/services/audit/audit_modernization_part")
);
const AuditCostPart = dynamic(
  () => import("../../../component/services/audit/audit_cost_part")
);

const FrequentlyQuestions = dynamic(
  () => import("../../../component/home/frequently-questions")
);
const GetContact = dynamic(() => import("../../../component/home/get-contact"));

export default function SoftwareSystemAssessmentsAndAudits() {
  return (
    <>
      <AuditInnerBanner />
      <SystemAudit />
      <AuditPointPart />
      <AuditWeCheck />
      <AuditWeCanHelp />
      <AuditWhyChoosePart />
      <LegacyAudit />
      <AuditServicesListing />
      <AuditTechnologyPart />
      <AuditModernizationPart />
      <AuditCostPart />
      <FrequentlyQuestions pageName="audit" />
      <GetContact />
    </>
  );
}
