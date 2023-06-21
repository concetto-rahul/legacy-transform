import dynamic from "next/dynamic";
import { Metadata } from "next";

const ContactCountry = dynamic(
  () => import("../../component/contactus/contact-country")
);
const GetContact = dynamic(
  () => import("../../component/contactus/get-contact")
);
export const metadata: Metadata = {
  title: "Conatc us",
};
export default function ContactUs() {
  return (
    <>
      <GetContact />
      <ContactCountry />
    </>
  );
}
