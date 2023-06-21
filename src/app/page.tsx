import dynamic from "next/dynamic";

const HomeLanding = dynamic(() => import("../component/home/home-landing"));
const StugalPart = dynamic(() => import("../component/home/stugal-part"));
const HomeMigrations = dynamic(
  () => import("../component/home/home-migrations")
);

const OutsourceRequirement = dynamic(
  () => import("../component/home/outsource-requirement")
);
const GreatSolution = dynamic(() => import("../component/home/great-solution"));
const ApplicationPart = dynamic(
  () => import("../component/home/application-part")
);
const UpgradeSolutions = dynamic(
  () => import("../component/home/upgrade-solutions")
);
const GetInTouch = dynamic(() => import("../component/home/get-in-touch"));
const MigrationSolution = dynamic(
  () => import("../component/home/migration-solution")
);

const UniquePart = dynamic(() => import("../component/home/unique-part"));
const OurWork = dynamic(() => import("../component/home/our-work"));
const WeCanHelp = dynamic(() => import("../component/home/we-can-help"));
const FrequentlyQuestions = dynamic(
  () => import("../component/home/frequently-questions")
);
const GetContact = dynamic(() => import("../component/home/get-contact"));

export default function Home() {
  return (
    <>
      <HomeLanding />
      <StugalPart />
      <HomeMigrations />
      <OutsourceRequirement />
      <GreatSolution />
      <ApplicationPart />
      <UpgradeSolutions />
      <GetInTouch />
      <MigrationSolution />
      <UniquePart />
      <OurWork />
      <WeCanHelp />
      <FrequentlyQuestions />
      <GetContact />
    </>
  );
}
