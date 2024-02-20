"use client";
import yoda from "#/assets/challenge/yoda.png";

import { motion } from "framer-motion";
import { Silkscreen } from "next/font/google";
import Image from "next/image";
import React, { useEffect } from "react";
import {
  Button,
  Form,
  Group,
  Label,
  Slider,
  SliderProps,
  SliderThumb,
  SliderTrack,
  Switch,
  SwitchProps,
} from "react-aria-components";
import { IoIosCopy } from "react-icons/io";
import { IoReloadSharp } from "react-icons/io5";
import { twMerge } from "tailwind-merge";
import { pageVisitVariant } from "../animate";

const headlineFont = Silkscreen({
  subsets: ["latin"],
  style: "normal",
  weight: "400",
});

export const PasswordGenerator = () => {
  const [state, dispatch] = React.useReducer(
    passwordStateReducer,
    initialState
  );

  const {
    characterLength,
    includeUppercase,
    includeLowercase,
    includeNumber,
    includeSymbol,
  } = state;

  const [generatedPassword, setGeneratedPassword] = React.useState(() => {
    return generatePassword(
      DEFAULT_VALUE,
      includeUppercase,
      includeLowercase,
      includeNumber,
      includeSymbol
    );
  });

  const [showCopied, setSetShowCopied] = React.useState(false);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setSetShowCopied(false);
    }, 2000);

    return () => {
      clearTimeout(timerId);
    };
  }, [showCopied]);

  const handleCharacterLength = (characterLength: number) => {
    dispatch({
      type: "SET_CHARACTER_LENGTH",
      characterLength,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setGeneratedPassword(
      generatePassword(
        characterLength,
        includeUppercase,
        includeLowercase,
        includeNumber,
        includeSymbol
      )
    );
  };

  const isSubmitButtonDisabled =
    !includeUppercase && !includeLowercase && !includeNumber && !includeSymbol;

  return (
    <motion.section
      variants={pageVisitVariant}
      initial="initial"
      animate="animate"
      className="flex-1 md:grid grid-cols-2 | mb-4  |  bg-[#090212] text-slate-300 | md:rounded-lg overflow-hidden"
    >
      <div className="relative md:block">
        <Image
          src={yoda}
          alt="Yoda with Password Generator"
          fill
          className="object-cover"
        />
      </div>
      <div className="p-8 grid">
        <h1
          className={twMerge(
            "text-3xl md:text-5xl font-bold text-center text-green-400",
            headlineFont.className
          )}
        >
          Generate password
        </h1>
        <Form className="grid gap-6 mt-6" onSubmit={handleSubmit}>
          <Group className="space-y-4">
            <div className="flex justify-between">
              <Label className="uppercase">Generated Password</Label>
              {showCopied && <p className="text-green-500">Copied!</p>}
            </div>
            <div className="flex items-center justify-between bg-orange-300 p-4 text-black sm:text-lg rounded-xl">
              <p className="text-xl font-semibold">{generatedPassword}</p>
              <div className="space-x-2 text-amber-700">
                <Button
                  type="button"
                  onPress={() => {
                    setSetShowCopied(true);
                    navigator.clipboard.writeText(generatedPassword);
                  }}
                  className="outline-none p-1 rounded-full focus-visible:border focus-visible:border-amber-700 focus-visible:ring-2  ring-offset-2 ring-amber-700  "
                >
                  <IoIosCopy />
                </Button>
                <Button
                  type="reset"
                  className="outline-none p-1 rounded-full focus-visible:border focus-visible:border-amber-700 focus-visible:ring-2  ring-offset-2 ring-amber-700  "
                >
                  <IoReloadSharp />
                </Button>
              </div>
            </div>
          </Group>
          <Group className="space-y-4">
            <div className="flex justify-between">
              <Label className="uppercase">Character length</Label>
              <p className="text-lg text-amber-700 font-bold">
                {characterLength}
              </p>
            </div>
            <div className="flex  bg-orange-300 p-4 text-black sm:text-lg rounded-xl">
              <CharacterSlider
                label="Character Length"
                minValue={MIN_VALUE}
                maxValue={MAX_VALUE}
                onChange={(value) =>
                  typeof value === "number" && handleCharacterLength(value)
                }
                value={characterLength}
              />
            </div>
          </Group>

          <Group className="space-y-4">
            <Label className="uppercase">Settings</Label>
            <div className="flex items-center  bg-orange-300 p-4 text-black sm:text-lg rounded-xl">
              <SettingSwitch
                label="Include uppercase letters"
                defaultSelected={includeUppercase}
                onChange={(isSelected) =>
                  dispatch({
                    type: "SET_INCLUDE_UPPERCASE",
                    includeUppercase: isSelected,
                  })
                }
              />
            </div>
            <div className="flex items-center  bg-orange-300 p-4 text-black sm:text-lg rounded-xl">
              <SettingSwitch
                label="Include lower letters"
                defaultSelected={includeLowercase}
                onChange={(isSelected) =>
                  dispatch({
                    type: "SET_INCLUDE_LOWERCASE",
                    includeLowercase: isSelected,
                  })
                }
              />
            </div>
            <div className="flex items-center  bg-orange-300 p-4 text-black sm:text-lg rounded-xl">
              <SettingSwitch
                label="Include numbers"
                defaultSelected={includeNumber}
                onChange={(isSelected) =>
                  dispatch({
                    type: "SET_INCLUDE_NUMBER",
                    includeNumber: isSelected,
                  })
                }
              />
            </div>
            <div className="flex items-center  bg-orange-300 p-4 text-black sm:text-lg rounded-xl">
              <SettingSwitch
                label="Include symbols"
                defaultSelected={includeSymbol}
                onChange={(isSelected) =>
                  dispatch({
                    type: "SET_INCLUDE_SYMBOL",
                    includeSymbol: isSelected,
                  })
                }
              />
            </div>
          </Group>

          <Button
            type="submit"
            isDisabled={isSubmitButtonDisabled}
            className="bg-green-400 rounded-xl
            text-black text-xl font-bold py-4 mt-auto
            hover:bg-white hover:text-green-500 shadow-lg hover:shadow-green-400
            focus-visible:bg-white focus-visible:text-green-500  focus-visible:shadow-green-400
            disabled:bg-green-100 disabled:ring-0 disabled:text-black/50 disabled:shadow-none
            outline-none
          "
          >
            Generate Password
          </Button>
        </Form>
      </div>
    </motion.section>
  );
};

const CharacterSlider = ({
  label,
  ...props
}: { label: string } & SliderProps) => {
  return (
    <Slider
      {...props}
      className="flex-1 flex items-center gap-4 text-base text-black/90"
    >
      <Label className="hidden">{label}</Label>
      <p className="text-base text-black font-semibold">{props.minValue}</p>
      <SliderTrack className="relative w-full h-7">
        {({ state }) => (
          <>
            {/* track */}
            <div className="absolute h-2 top-[50%] translate-y-[-50%] w-full rounded-full bg-slate-500" />
            {/* fill */}
            <div
              className="absolute h-2 top-[50%] translate-y-[-50%] rounded-full bg-amber-700"
              style={{ width: state.getThumbPercent(0) * 100 + "%" }}
            />
            <SliderThumb className="h-7 w-7 top-[50%] rounded-full border border-solid border-orange-300 bg-white transition dragging:bg-purple-100 outline-none focus-visible:ring-2 ring-amber-700 ring-offset-2" />
          </>
        )}
      </SliderTrack>
      <p className="text-base text-black font-semibold">{props.maxValue}</p>
    </Slider>
  );
};

const SettingSwitch = ({
  label,
  ...props
}: { label: string } & SwitchProps) => {
  return (
    <Switch
      className="group flex-1 flex justify-between items-center text-black font-semibold text-lg
        
      "
      aria-label={label}
      {...props}
    >
      <p className="text-base text-black font-semibold">{label}</p>
      <div className="flex h-[26px] w-[44px] shrink-0 cursor-default rounded-full shadow-inner bg-clip-padding border border-solid border-white/30 p-[3px] box-border transition duration-200 ease-in-out bg-slate-500 group-pressed:bg-yellow-700 group-selected:bg-amber-700 group-selected:group-pressed:bg-amber-900 outline-none group-focus-visible:ring-2 ring-amber-700 ring-offset-2">
        <span className="h-[18px] w-[18px] transform rounded-full bg-white shadow transition duration-200 ease-in-out translate-x-0 group-selected:translate-x-[100%]" />
      </div>
    </Switch>
  );
};

function generatePassword(
  length: number,
  includeUppercase: boolean,
  includeLowercase: boolean,
  includeNumbers: boolean,
  includeSymbols: boolean
): string {
  let password = "";
  const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+~{[]:;><,./-=";

  let characters = "";

  if (includeUppercase) {
    characters += uppercaseLetters;
  }
  if (includeLowercase) {
    characters += lowercaseLetters;
  }
  if (includeNumbers) {
    characters += numbers;
  }
  if (includeSymbols) {
    characters += symbols;
  }

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  return password;
}

const MIN_VALUE = 12;
const MAX_VALUE = 32;
const DEFAULT_VALUE = 15;

type PasswordState = {
  characterLength: number;
  includeUppercase: boolean;
  includeLowercase: boolean;
  includeNumber: boolean;
  includeSymbol: boolean;
};

type PasswordAction =
  | {
      type: "SET_CHARACTER_LENGTH";
      characterLength: number;
    }
  | {
      type: "SET_INCLUDE_UPPERCASE";
      includeUppercase: boolean;
    }
  | {
      type: "SET_INCLUDE_LOWERCASE";
      includeLowercase: boolean;
    }
  | {
      type: "SET_INCLUDE_NUMBER";
      includeNumber: boolean;
    }
  | {
      type: "SET_INCLUDE_SYMBOL";
      includeSymbol: boolean;
    }
  | {
      type: "RESET";
    };

const initialState: PasswordState = {
  characterLength: DEFAULT_VALUE,
  includeUppercase: true,
  includeLowercase: true,
  includeNumber: true,
  includeSymbol: false,
};

const passwordStateReducer = (
  state: PasswordState,
  action: PasswordAction
): PasswordState => {
  switch (action.type) {
    case "SET_CHARACTER_LENGTH":
      return {
        ...state,
        characterLength: action.characterLength,
      };
    case "SET_INCLUDE_UPPERCASE":
      return {
        ...state,
        includeUppercase: action.includeUppercase,
      };
    case "SET_INCLUDE_LOWERCASE":
      return {
        ...state,
        includeLowercase: action.includeLowercase,
      };
    case "SET_INCLUDE_NUMBER":
      return {
        ...state,
        includeNumber: action.includeNumber,
      };
    case "SET_INCLUDE_SYMBOL":
      return {
        ...state,
        includeSymbol: action.includeSymbol,
      };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};
