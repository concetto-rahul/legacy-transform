"use client";

import Image from "next/image";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ReactSelect, { SingleValue } from "react-select";

const schema = yup
  .object({
    name: yup.string().label("Name").required("Please enter your name."),
    email: yup
      .string()
      .label("Email")
      .email("Must be a valid email")
      .required("Please provide your email."),
    phone_number: yup
      .string()
      .label("Phone number")
      .required("Please provide your phone number."),
    services: yup.string().label("Services").required("Please select service."),
    description: yup
      .string()
      .label("Project Description")
      .required("Please provide project description."),
  })
  .required();

interface ServicesType {
  label: string;
  value: string;
}
const servicesList: ServicesType[] = [
  { label: "Professional", value: "Professional" },
  { label: "Professional 2", value: "Professional 2" },
  { label: "Professional 3", value: "Professional 3" },
];
export default function GetContact() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: any) => console.log("onSubmit", data);
  return (
    <section className="get-contact">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="frequently-details m-auto text-center">
              <h2 className="ac-heading">
                <span>Get In Touch </span>With Us
              </h2>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <div className="row">
            <div className="col-lg-5 col-xl-4">
              <div className="call-us">
                <ul>
                  <li className="contact-number">
                    <a
                      className="d-flex justify-content-start align-items-center mb-lg-0 dark-blue-box"
                      href="https://wa.me/919586777575"
                      target="_blank"
                      title="+91 (95) 867 77575"
                    >
                      <figure className="company-bg me-3">
                        <Image
                          src="/assets/images/WHATSAPP.svg"
                          alt="WHATSAPP"
                          title="WHATSAPP"
                          width={35}
                          height={35}
                        />
                      </figure>
                      <div className="ac-title mt-0">
                        <span>WHATSAPP</span>+91 (95) 867 77575
                      </div>
                    </a>
                  </li>
                  <li className="contact-number">
                    <a
                      className="d-flex justify-content-start align-items-center mb-lg-0 dark-blue-box"
                      href="tel://1(903)200-8801"
                      title="+1 (903) 200 8801"
                    >
                      <figure className="company-bg me-3">
                        <Image
                          src="/assets/images/usa.svg"
                          alt="usa"
                          title="usa"
                          width={35}
                          height={35}
                        />
                      </figure>
                      <div className="ac-title mt-0">
                        <span>USA</span>+1 (903) 200 8801
                      </div>
                    </a>
                  </li>
                  <li className="contact-number">
                    <a
                      className="d-flex justify-content-start align-items-center mb-lg-0 dark-blue-box"
                      href="mailto:info@concettolabs.com"
                      title="info@concettolabs.com"
                    >
                      <figure className="company-bg me-3">
                        <Image
                          src="/assets/images/mail.svg"
                          alt="mail"
                          title="mail"
                          width={35}
                          height={35}
                        />
                      </figure>
                      <div className="ac-title mt-0">
                        <span>MAIL TO OUR DEPARTMENT</span>info@concettolabs.com
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-7 col-xl-8">
              <div className="call-form">
                <form className="row g-3" onSubmit={handleSubmit(onSubmit)}>
                  <div className="col-md-6 ps-icon">
                    <label htmlFor="inputname" className="form-label">
                      name
                    </label>
                    <input
                      type="name"
                      className="form-control"
                      id="inputname"
                      placeholder="Enter Name"
                      {...register("name")}
                    />
                    <span className="contact-icons">
                      <i className="ac-icon" data-icon="rapid-user-name"></i>
                    </span>
                    <p style={{ color: "red" }}>{errors.name?.message}</p>
                  </div>
                  <div className="col-md-6 ps-icon">
                    <label htmlFor="inputemailaddress" className="form-label">
                      email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="inputemailaddress"
                      placeholder="Enter Email Address"
                      {...register("email")}
                    />
                    <span className="contact-icons">
                      <i className="ac-icon" data-icon="rapid-user-email"></i>
                    </span>
                    <p style={{ color: "red" }}>{errors.email?.message}</p>
                  </div>
                  <div className="col-md-6 ps-icon">
                    <label htmlFor="inputphone" className="form-label">
                      Phone
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputphone"
                      placeholder="Enter Phone number"
                      {...register("phone_number")}
                    />
                    <span className="contact-icons">
                      <i className="ac-icon" data-icon="rapid-user-phone"></i>
                    </span>
                    <p style={{ color: "red" }}>
                      {errors.phone_number?.message}
                    </p>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="inputState" className="form-label">
                      Services
                    </label>
                    <Controller
                      control={control}
                      defaultValue={""}
                      name="services"
                      render={({ field: { onChange, value } }) => (
                        <ReactSelect
                          value={servicesList.filter((c) => value === c.value)}
                          options={servicesList}
                          onChange={(val: SingleValue<ServicesType>) =>
                            onChange(val?.value || "")
                          }
                          placeholder="Select Service"
                          styles={{
                            control: (base, state) => ({
                              ...base,
                              height: "56px",
                              boxShadow: state.isFocused
                                ? "0px 3px 8px rgba(0, 0, 0, 0.0705882353)"
                                : "none",
                              borderColor: "#b9dcff",
                              borderRadius: "4px",
                              "&:hover": {
                                boxShadow: state.isFocused ? "#b9dcff" : "none",
                                borderColor: state.isFocused
                                  ? "#b9dcff"
                                  : base.borderColor,
                              },
                            }),
                            singleValue: (base, state) => ({
                              ...base,
                              color: "#212529",
                              fontSize: "14px",
                              lineHeight: "24px",
                              padding: "6px 6px",
                              fontWeight: 500,
                            }),
                            option: (base, state) => ({
                              ...base,
                              fontSize: "18px",
                              backgroundColor: state.isSelected
                                ? "#5897fb"
                                : state.isFocused
                                ? "#5897fb"
                                : "",
                              color: state.isSelected ? "#fff" : "#000",
                              "&:hover": {
                                backgroundColor: state.isFocused
                                  ? "#5897fb"
                                  : "",
                                color: "#fff",
                              },
                            }),
                          }}
                        />
                      )}
                    />
                    <p style={{ color: "red" }}>{errors.services?.message}</p>
                  </div>
                  <div className="col-12">
                    <label htmlFor="description" className="form-label">
                      PROJECT DESCRIPTION
                    </label>
                    <textarea
                      className="form-control"
                      id="description"
                      placeholder="Enter Project Description"
                      rows={5}
                      {...register("description")}
                    ></textarea>
                    <p style={{ color: "red" }}>
                      {errors.description?.message}
                    </p>
                  </div>
                  {/* <div className="col-12">
                    <div
                      className="g-recaptcha"
                      data-sitekey="6LcaDOEcAAAAAMMMjj-8-BQorfN6X5DJIScfRuFz"
                    ></div>
                  </div> */}
                  <div className="col-12">
                    <div className="d-flex justify-content-between align-items-center flex-wrap">
                      <button
                        className="icon-button d-flex ac-btn-common"
                        title="Submit"
                        type="submit"
                      >
                        Submit
                        <i className="ac-icon" data-icon="rapid-contact-us"></i>
                      </button>
                      <p className="fs-16 fw-600 mt-4 mt-md-0">
                        <i className="ac-icon" data-icon="rapid-safe"></i>100%
                        Secure and Confidential.
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
