import dynamic from "next/dynamic";

const AboutInnerbaner = dynamic(
  () => import("../../component/aboutus/about-innerbaner")
);
const AboutIntro = dynamic(() => import("../../component/aboutus/about-intro"));
const Corevalues = dynamic(() => import("../../component/aboutus/corevalues"));
export default function AboutUs() {
  return (
    <>
      <AboutInnerbaner />
      <AboutIntro />
      <Corevalues />
    </>
  );
}
