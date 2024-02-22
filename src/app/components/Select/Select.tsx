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
    <ReactAriaSelect {...props} className="group flex flex-col gap-1 flex-1">
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
        {props.isOpen ? (
          <FaCaretUp aria-hidden="true" />
        ) : (
          <FaCaretDown aria-hidden="true" />
        )}
      </Button>
      <FieldError>{errorMessage}</FieldError>
      <Popover className="max-h-60 w-[--trigger-width] overflow-auto rounded-md bg-white text-base shadow-lg ring-1 ring-black/5">
        <ListBox className="outline-none" items={items}>
          {children}
        </ListBox>
      </Popover>
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
