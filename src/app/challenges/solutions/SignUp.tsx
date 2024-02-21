"use client";
import { motion } from "framer-motion";
import { pageVisitVariant } from "../animate";
import React, { PropsWithChildren, useId } from "react";
import {
  Button,
  ButtonProps,
  Form,
  Group,
  Input,
  InputProps,
  Label,
  TextField,
  TextFieldProps,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";
import { FcGoogle } from "react-icons/fc";
import { CiMail } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { IconType } from "react-icons";
import { RiEyeCloseLine } from "react-icons/ri";

export const SignUp = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <motion.section
      variants={pageVisitVariant}
      initial="initial"
      animate="animate"
      className="flex-1 flex justify-center items-center | p-10  mb-4  |  bg-purple-50 | md:rounded-lg overflow-hidden"
    >
      <div className="flex flex-col sm:flex-row gap-10">
        <SignUpFormContainer>
          <SignUpWithGoogle aria-label="Sign up with Gmail" />
          <SingUpButton aria-label="Sign up with email">
            <CiMail className="size-5" /> Sign up with Email
          </SingUpButton>
          <HaveAccount />
        </SignUpFormContainer>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            alert(
              `You have submitted form for Sign Up. This feature functionality is not implemented`
            );
          }}
        >
          <SignUpFormContainer>
            <SingUpInput
              label="Name"
              aria-label="name"
              type="text"
              isRequired
            />
            <SingUpInput
              label="Email"
              type="email"
              aria-label="email"
              isRequired
            />
            <SingUpInput
              label="Password"
              type={showPassword ? "text" : "password"}
              aria-label="password"
              isRequired
              Icon={() => {
                return showPassword ? (
                  <IoEyeOutline
                    className="size-5"
                    onClick={() => setShowPassword(false)}
                  />
                ) : (
                  <RiEyeCloseLine
                    className="size-5"
                    onClick={() => setShowPassword(true)}
                  />
                );
              }}
            />
            <SingUpButton aria-label="Sign up" type="submit">
              Sign up
            </SingUpButton>
            <HaveAccount />
            <ORSection />
            <SignUpWithGoogle aria-label="Sign up with Gmail" />
          </SignUpFormContainer>
        </Form>
      </div>

      {/**/}
    </motion.section>
  );
};

const ORSection = () => {
  return (
    <div className="flex items-center">
      <hr className="flex-1" />
      <p className="text-gray-500">or</p>
      <hr className="flex-1" />
    </div>
  );
};

type SingUpInputProps = {
  label: string;
  Icon?: IconType;
} & TextFieldProps;

const SingUpInput = ({ label, Icon, ...props }: SingUpInputProps) => {
  return (
    <TextField
      className="
      relative z-0 w-full mb-5 group flex items-center
      border border-gray-300 rounded-lg
      has-[:focus]:outline-none
      has-[:focus]:border-blue-600
      has-[:focus]:ring-0 
      px-2
      "
      {...props}
    >
      <Input
        placeholder=" "
        className={`
            py-2.5 flex-1 text-sm text-gray-900
            bg-transparent border-0 
            outline-none
            peer
            `}
      />
      <Label
        className="
          px-2
          absolute top-3
          text-sm text-gray-500 
          -z-10
          bg-white
          duration-300 transform -translate-y-6 origin-[0] scale-75  
          peer-focus:start-2
        peer-focus:text-blue-600 
          peer-focus:font-medium 
          peer-placeholder-shown:scale-100 
          peer-placeholder-shown:translate-y-0 
          peer-focus:scale-75
          peer-focus:-translate-y-6
          peer-focus:z-10
          "
      >
        {label}
      </Label>
      {Icon && <Icon />}
    </TextField>
  );
};

type SignUpFormContainerProps = PropsWithChildren;

const SignUpFormContainer = ({ children }: SignUpFormContainerProps) => {
  return (
    <div className="rounded-xl drop-shadow-2xl bg-white p-6 space-y-6 h-fit">
      <div className="space-y-2">
        <h1 className="text-center text-2xl text-black font-semibold">
          Sign Up
        </h1>
        <p className="text-center text-gray-800 text-base font-medium">
          Join us now! Sign up to kick-start your journey
        </p>
      </div>
      {children}
    </div>
  );
};

type SingUpButton = {
  variants?: "primary" | "secondary";
} & ButtonProps;

const SignUpWithGoogle = (props: ButtonProps) => {
  return (
    <SingUpButton variants="secondary" {...props}>
      <FcGoogle className="size-5" /> Sign up with google
    </SingUpButton>
  );
};

const SingUpButton = ({ variants = "primary", ...props }: SingUpButton) => {
  return (
    <Button
      {...props}
      className={twMerge(
        `py-3 w-full rounded-lg shadow flex justify-center items-center gap-2 text-base font-medium
        outline-none focus:ring-2 ring-blue-600 ring-offset-1 
        focus:scale-105 duration-300 transform 
        `,
        variants === "primary"
          ? "bg-gray-700 text-white"
          : "bg-white border border-gray-300 text-black"
      )}
    />
  );
};

const HaveAccount = () => {
  return (
    <div className="flex justify-center gap-1  text-base font-medium">
      <p>Already have account?</p>
      <Button
        onPress={() =>
          alert(
            "This action will take you to login flow. Functionality not implemented yet"
          )
        }
        className="text-blue-600 rounded-sm outline-none focus:ring-2 ring-blue-600 ring-offset-1"
      >
        Log In
      </Button>
    </div>
  );
};
