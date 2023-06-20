import dynamic from "next/dynamic";

const ContactCountry = dynamic(
  () => import("../../component/contactus/contact-country")
);
const GetContact = dynamic(
  () => import("../../component/contactus/get-contact")
);
export default function ContactUs() {
  return (
    <>
      <GetContact />
      <ContactCountry />
    </>
  );
}
