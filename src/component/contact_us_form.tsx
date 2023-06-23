"use client";

import Image from "next/image";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ReactSelect, { SingleValue } from "react-select";
import { BsArrowRight } from "react-icons/bs";
import ReCAPTCHA from "react-google-recaptcha";

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
    captcha: yup
      .boolean()
      .required("Please confirm that you are not a robot.")
      .oneOf([true], "Please confirm that you are not a robot."),
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

export default function ContactUsForm() {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: any) => console.log("onSubmit", data);

  const onChangeCaptcha = () => {
    console.log("onChangeCaptcha");
    setValue("captcha", true);
  };

  return (
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
            <Image
              src="/assets/images/contactus/rapid-user-name.svg"
              alt="rapid-user-name"
              title="rapid-user-name"
              width={24}
              height={24}
            />
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
            <Image
              src="/assets/images/contactus/rapid-user-email.svg"
              alt="rapid-user-email"
              title="rapid-user-email"
              width={24}
              height={24}
            />
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
            <Image
              src="/assets/images/contactus/rapid-user-phone.svg"
              alt="rapid-user-phone"
              title="rapid-user-phone"
              width={24}
              height={24}
            />
          </span>
          <p style={{ color: "red" }}>{errors.phone_number?.message}</p>
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
                    borderRadius: "6px",
                    "&:hover": {
                      boxShadow: state.isFocused ? "#b9dcff" : "none",
                      borderColor: state.isFocused
                        ? "#b9dcff"
                        : base.borderColor,
                    },
                  }),
                  placeholder: (base) => {
                    return {
                      ...base,
                      color: "#151d41",
                      fontSize: "16px",
                      lineHeight: "25px",
                      padding: "6px 6px",
                      fontWeight: 500,
                    };
                  },
                  dropdownIndicator: (base) => ({
                    ...base,
                    color: "#0b5ed7",
                  }),
                  singleValue: (base, state) => ({
                    ...base,
                    color: "#151d41",
                    fontSize: "16px",
                    lineHeight: "25px",
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
                    color: state.isSelected
                      ? "#fff"
                      : state.isFocused
                      ? "#fff"
                      : "#000",
                    "&:hover": {
                      backgroundColor: state.isFocused ? "#5897fb" : "",
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
          <p style={{ color: "red" }}>{errors.description?.message}</p>
        </div>
        <div className="col-12">
          <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
            onChange={onChangeCaptcha}
          />
          <p style={{ color: "red", width: "100%" }}>
            {errors.captcha?.message}
          </p>
        </div>
        <div className="col-12">
          <div className="d-flex justify-content-between align-items-center flex-wrap">
            <button
              className="icon-button d-flex ac-btn-common"
              title="Submit"
              type="submit"
            >
              Submit
              <BsArrowRight size="20" />
            </button>
            <p className="fs-16 fw-600 mt-4 mt-md-0">
              <Image
                src="/assets/images/contactus/rapid-safe.svg"
                alt="rapid-safe"
                title="rapid-safe"
                width={29}
                height={29}
                className="rapid-safe"
              />
              100% Secure and Confidential.
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
