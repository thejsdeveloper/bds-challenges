"use client";
import waveSrc from "#/assets/challenge/waves.svg";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ElementType } from "react";
import { IconType } from "react-icons";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { TiEye } from "react-icons/ti";
import { pageVisitVariant } from "../animate";
function Challenge7() {
  return (
    <motion.section
      variants={pageVisitVariant}
      initial="initial"
      animate="animate"
      className="my-4 pl-20 md:rounded-lg flex-1 flex items-center bg-white relative"
    >
      <div className="absolute right-0 h-full w-1/2">
        <Image src={waveSrc} alt="waves background" fill />
      </div>

      <form
        className="flex flex-col gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          alert("Your Form is submitted successfully");
        }}
      >
        <h2 className="text-zinc-500 uppercase text-base font-[600]">
          Start For Free
        </h2>
        <h1 className="text-black font-bold text-4xl">Create new account</h1>
        <div className="flex flex-col gap-4 mt-10">
          <div className="flex gap-4">
            <FormInput
              label="First name"
              id="firstName"
              Icon={BsFillPersonVcardFill}
              required={true}
            />

            <FormInput
              label="Last Name"
              id="lastName"
              Icon={BsFillPersonVcardFill}
              required={true}
            />
          </div>
          <FormInput
            label="Email"
            id="email"
            Icon={HiOutlineMail}
            required={true}
          />
          <FormInput
            label="Password"
            id="password"
            type="password"
            Icon={TiEye}
            required={true}
          />
          <div className="text-sm text-zinc-500 flex gap-1">
            <p>Already have an account? </p>
            <Link href="/challenge/7" className="text-sky-500">
              Sign In
            </Link>
          </div>
        </div>

        <button
          type="submit"
          className="rounded-full text-white bg-sky-500 py-2 | hover:shadow-lg  focus:shadow-lg shadow-sky-500/50"
        >
          Create account
        </button>
      </form>
    </motion.section>
  );
}

export default Challenge7;

type FormInputProps = Partial<ElementType<HTMLInputElement>> & {
  label: string;
  Icon: IconType;
  type?: "text" | "password";
  id: string;
  required?: boolean;
};

const FormInput = ({
  label,
  Icon,
  id,
  type = "text",
  required = false,
  ...props
}: FormInputProps) => {
  return (
    <div
      className="bg-sky-100 p-2 rounded-lg  | flex flex-row items-center gap-2"
      tabIndex={0}
      arial-label={label}
    >
      <div className="flex flex-col text-zinc-500 gap-1  flex-1">
        <label htmlFor={id} className="text-[12px]">
          {label}
        </label>
        <input
          id={id}
          type={type}
          className="bg-inherit flex-1"
          tabIndex={2}
          {...props}
        />
      </div>
      <Icon className="text-zinc-500 mx-auto" />
    </div>
  );
};
