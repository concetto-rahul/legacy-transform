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

export default function Home() {
  return (
    <>
      <HomeLanding />
      <StugalPart />
      <HomeMigrations />
      <OutsourceRequirement />
      <GreatSolution />
      <ApplicationPart />
    </>
  );
}
