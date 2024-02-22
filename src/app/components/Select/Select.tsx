import React from "react";
import {
  Button,
  FieldError,
  Label,
  ListBox,
  ListBoxItem,
  ListBoxItemProps,
  Popover,
  Select as ReactAriaSelect,
  SelectProps as ReactAriaSelectProps,
  SelectValue,
  ValidationResult,
} from "react-aria-components";
import { FaCaretDown, FaCaretUp } from "react-icons/fa6";
import {} from "react-stately";

interface SelectProps<T extends object>
  extends Omit<ReactAriaSelectProps<T>, "children"> {
  label?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
  items?: Iterable<T>;
  children: React.ReactNode | ((item: T) => React.ReactNode);
}

export const Select = <T extends object>({
  label,
  errorMessage,
  children,
  items,
  ...props
}: SelectProps<T>) => {
  return (
    <ReactAriaSelect className="inline-grid gap-2 w-full max-w-sm" {...props}>
      {({ isOpen }) => (
        <>
          <Label className="text-base text-black font-medium cursor-default">
            {label}
          </Label>
          <Button
            className="
                flex items-center cursor-default rounded-lg border-0
                outline-none
                bg-opacity-90 pressed:bg-opacity-100 
                px-3 py-4 text-base text-left 
                leading-normal bg-zinc-100
                transition
              text-gray-700 focus-within:ring-2 
                focus:ring-2 ring-orange-500"
          >
            <SelectValue className="flex-1 truncate placeholder-shown:italic" />
            {isOpen ? (
              <FaCaretUp aria-hidden="true" />
            ) : (
              <FaCaretDown aria-hidden="true" />
            )}
          </Button>
          <FieldError>{errorMessage}</FieldError>
          <Popover
            className="max-h-60 overflow-auto rounded-md bg-white text-base shadow-lg ring-1 ring-black/5
          w-[--trigger-width] entering:animate-in entering:fade-in exiting:animate-out exiting:fade-out
          "
          >
            <ListBox className="outline-none" items={items}>
              {children}
            </ListBox>
          </Popover>
        </>
      )}
    </ReactAriaSelect>
  );
};

export function SelectItem(props: ListBoxItemProps) {
  return (
    <ListBoxItem
      {...props}
      textValue="Select Item"
      className={`
        outline-none focus:bg-zinc-100 p-2 text-lg
      text-gray-600 hover:text-black focus:text-black 
          `}
    />
  );
}
