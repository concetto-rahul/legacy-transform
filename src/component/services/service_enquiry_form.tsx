"use client";

import Image from "next/image";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ReactSelect, { SingleValue } from "react-select";
import { BsArrowRight } from "react-icons/bs";

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

export default function ServiceEnquiryForm() {
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
    <form onSubmit={handleSubmit(onSubmit)} id="inquiryform">
      <div className="row">
        <div className="col-12 ps-icon">
          <div className="formgroup">
            <input
              type="name"
              className="form-control"
              id="inputnamebanner"
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
        </div>
        <div className="col-12 ps-icon">
          <div className="formgroup">
            <input
              type="email"
              className="form-control"
              id="inputemailaddressbanner"
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
        </div>
        <div className="col-12 ps-icon">
          <div className="formgroup">
            <input
              type="text"
              className="form-control"
              id="inputphonebanner"
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
        </div>
        <div className="col-12">
          <div className="formgroup">
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
        </div>
        <div className="col-12">
          <div className="formgroup">
            <textarea
              className="form-control"
              id="projectdescription"
              placeholder="Enter Project Description"
              rows={5}
              {...register("description")}
            ></textarea>
            <p style={{ color: "red" }}>{errors.description?.message}</p>
          </div>
        </div>
        {/* <div className="col-12">
          <div className="formgroup">
            <div
              className="g-recaptcha"
              data-sitekey="6LcaDOEcAAAAAMMMjj-8-BQorfN6X5DJIScfRuFz"
            ></div>
          </div>
        </div> */}
        <div className="col-12">
          <div className="d-flex justify-content-between align-items-center flex-wrap">
            <button className="icon-button d-flex ac-btn-common" title="Submit">
              Submit
              <BsArrowRight size="20" />
            </button>
            <p className="fs-16 fw-600 mt-4 mt-md-0 mobile-auto">
              <Image
                src="/assets/images/100-arrow.svg"
                alt="United States"
                title="United States"
                width={29}
                height={29}
                className="lazy me-2"
              />
              100% Secure and Confidential.
            </p>
          </div>
        </div>
      </div>
    </form>
  );
}
