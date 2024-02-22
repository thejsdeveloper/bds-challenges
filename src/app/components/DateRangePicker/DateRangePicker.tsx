import {
  Button,
  ButtonProps,
  CalendarCell,
  CalendarGrid,
  CalendarGridBody,
  CalendarGridHeader,
  CalendarHeaderCell,
  DateInputProps,
  DateSegmentProps,
  DateValue,
  Dialog,
  FieldError,
  Group,
  Heading,
  Label,
  PopoverProps,
  RangeCalendar,
  DateInput as ReactAriaDateInput,
  DateRangePicker as ReactAriaDateRangePicker,
  DateRangePickerProps as ReactAriaDateRangePickerProps,
  DateSegment as ReactAriaDateSegment,
  Popover as ReactAriaPopover,
  ValidationResult,
} from "react-aria-components";
import { FaCalendarAlt } from "react-icons/fa";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { twMerge } from "tailwind-merge";

interface DateRangePickerProps<T extends DateValue>
  extends ReactAriaDateRangePickerProps<T> {
  label?: string;
  showStart?: boolean;
  showEnd?: boolean;
  errorMessage?: string | ((validation: ValidationResult) => string);
}
// TODO: type the show start and end better
export const DateRangePicker = <T extends DateValue>({
  label,
  errorMessage,
  ...props
}: DateRangePickerProps<T>) => {
  return (
    <ReactAriaDateRangePicker
      {...props}
      className="
        group flex flex-col gap-1 min-w-72
      "
    >
      <Label className="text-base text-black font-medium cursor-default">
        {label}
      </Label>
      <Group
        className="
      flex items-center justify-between rounded-lg 
    bg-zinc-100
      transition px-3 py-2
    text-gray-700 focus-within:ring-2 
      focus-visible:ring-2 ring-orange-500
    "
      >
        <DateInput slot="start">
          {(segment) => {
            return <DateSegment segment={segment} />;
          }}
        </DateInput>
        <span aria-hidden="true" className="inline-block">
          –
        </span>
        <DateInput slot="end">
          {(segment) => <DateSegment segment={segment} />}
        </DateInput>
        <Button className="outline-none p-1 focus-visible:bg-zinc-300 rounded-sm">
          <FaCalendarAlt className="size-4 group-focus-within:text-orange-700 " />
        </Button>
      </Group>
      <FieldError>{errorMessage}</FieldError>
      <Popover>
        <Dialog className="p-6 text-gray-600">
          <RangeCalendar>
            <header className="flex items-center justify-between gap-2 pb-4 w-full">
              <IconButton slot="previous">
                <MdKeyboardArrowLeft className="size-6" />
              </IconButton>
              <Heading className="flex-1 font-semibold text-center  text-black text-base mx-2" />
              <IconButton slot="next">
                <MdKeyboardArrowRight className="size-6" />
              </IconButton>
            </header>
            <CalendarGrid>
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
                    className={({
                      isSelectionStart,
                      isSelectionEnd,
                      isSelected,
                    }) => {
                      // TODO: Need to figure out why there is gap between cells
                      return twMerge(
                        `flex items-center justify-center 
                          w-9 h-9 outline-none cursor-default 
                          rounded-sm outside-month:text-gray-300
                          disabled:text-gray-300
                        hover:bg-orange-400 
                        focus-visible:ring ring-orange-500/70 ring-offset-1
                        selected-start:bg-red-500
                          `,
                        isSelected && "bg-zinc-200",
                        (isSelectionStart || isSelectionEnd) &&
                          "bg-orange-500 text-white hover:bg-orange-600"
                      );
                    }}
                  />
                )}
              </CalendarGridBody>
            </CalendarGrid>
          </RangeCalendar>
        </Dialog>
      </Popover>
    </ReactAriaDateRangePicker>
  );
};

const IconButton = (props: ButtonProps) => {
  return (
    <Button
      {...props}
      className="outline-none focus:text-orange-500 rounded-sm focus:ring-1 ring-orange-500"
    />
  );
};

const DateInput = (props: DateInputProps) => {
  return (
    <ReactAriaDateInput
      {...props}
      className="
        flex items-center py-2
        "
    />
  );
};

const DateSegment = (props: DateSegmentProps) => {
  return (
    <ReactAriaDateSegment
      {...props}
      className="
                  px-0.5 tabular-nums outline-none rounded-sm focus:bg-orange-500 focus:text-white
                  caret-transparent placeholder-shown:italic
              "
    />
  );
};

function Popover(props: PopoverProps) {
  return (
    <ReactAriaPopover
      {...props}
      className="
      overflow-auto rounded-lg drop-shadow-lg ring-1 ring-black/10 bg-white
      "
    />
  );
}
