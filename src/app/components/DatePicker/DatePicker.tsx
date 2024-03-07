import {
  Button,
  Calendar,
  CalendarCell,
  CalendarGrid,
  CalendarGridBody,
  CalendarGridHeader,
  CalendarHeaderCell,
  DateInput,
  DatePicker as RADatePicker,
  DateSegment,
  Dialog,
  Group,
  Heading,
  Label,
  Popover,
} from "react-aria-components";
import type {
  ButtonProps,
  DatePickerProps as RADatePickerProps,
  DateValue,
  PopoverProps,
} from "react-aria-components";
import { IconType } from "react-icons";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { HiChevronUpDown } from "react-icons/hi2";

type DatePickerProps<T extends DateValue> = RADatePickerProps<T> & {
  label?: string;
  Icon?: IconType;
};
export function DatePicker<T extends DateValue>({
  label,
  Icon,
  ...props
}: DatePickerProps<T>) {
  return (
    <RADatePicker className="group flex flex-col gap-1 w-full " {...props}>
      <Label className="flex gap-2 items-center font-semibold text-black cursor-default">
        {Icon && <Icon />}
        {label}
      </Label>
      <Group className="flex bg-neutral-100  rounded-lg   focus-within:focus:ring-2 ring-yellow-500  transition pl-3  text-gray-700 focus-visible:ring-2">
        <DateInput className="flex flex-1 py-2">
          {(segment) => (
            <DateSegment
              segment={segment}
              className="px-1 tabular-nums  outline-none rounded-sm focus:bg-cyan-700 focus:text-white caret-transparent placeholder-shown:italic"
            />
          )}
        </DateInput>
        <Button className="outline-none px-3 flex items-center text-gray-700 transition border-0 border-solid border-l focus:border-l-0 border-l-cyan-600 bg-transparent rounded-r-lg pressed:bg-cyan-700  pressed:text-white focus-visible:ring-2 ring-yellow-500">
          <HiChevronUpDown className="size-6" />
        </Button>
      </Group>
      <DatePopover>
        <Dialog className="p-6 text-gray-600">
          <Calendar>
            <header className="flex items-center gap-1 pb-4 px-1 font-serif w-full">
              <Heading className="flex-1 font-semibold text-2xl ml-2" />
              <RoundButton slot="previous">
                <BiChevronLeft className="size-6" />
              </RoundButton>
              <RoundButton slot="next">
                <BiChevronRight className="size-6" />
              </RoundButton>
            </header>
            <CalendarGrid className="border-spacing-1 border-separate">
              <CalendarGridHeader>
                {(day) => (
                  <CalendarHeaderCell className="text-xs text-gray-500 font-semibold">
                    {day}
                  </CalendarHeaderCell>
                )}
              </CalendarGridHeader>
              <CalendarGridBody>
                {(date) => (
                  <CalendarCell
                    date={date}
                    className="w-9 h-9 outline-none cursor-default rounded-full flex items-center justify-center disabled:text-gray-300 outside-month:text-gray-300 hover:bg-gray-100 pressed:bg-gray-200 selected:bg-cyan-700 selected:text-white focus-visible:ring ring-cyan-600/70 ring-offset-2"
                  />
                )}
              </CalendarGridBody>
            </CalendarGrid>
          </Calendar>
        </Dialog>
      </DatePopover>
    </RADatePicker>
  );
}

function RoundButton(props: ButtonProps) {
  return (
    <Button
      {...props}
      className=" disabled:text-gray-300 w-9 h-9 outline-none cursor-default bg-transparent text-gray-600 border-0 rounded-full flex items-center justify-center hover:bg-cyan-600/40 pressed:bg-cyan-600/60 focus-visible:ring ring-cyan-600/70 ring-offset-2"
    />
  );
}

function DatePopover(props: PopoverProps) {
  return (
    <Popover
      {...props}
      className={({ isEntering, isExiting }) => `
        overflow-auto rounded-lg drop-shadow-lg ring-1 ring-black/10 bg-white
        ${
          isEntering
            ? "animate-in fade-in placement-bottom:slide-in-from-top-1 placement-top:slide-in-from-bottom-1 ease-out duration-200"
            : ""
        }
        ${
          isExiting
            ? "animate-out fade-out placement-bottom:slide-out-to-top-1 placement-top:slide-out-to-bottom-1 ease-in duration-150"
            : ""
        }
      `}
    />
  );
}
