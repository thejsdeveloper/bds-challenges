"use client";
import { MEETINGS, Status } from "@/app/api/challenges/MeetingSchedule/data";
import { DatePicker } from "@/app/components/DatePicker/DatePicker";
import { cn } from "@/app/utils/cn";
import { Time, getLocalTimeZone, today } from "@internationalized/date";
import React, { HTMLAttributes, PropsWithChildren } from "react";
import {
  Button,
  ButtonProps,
  Calendar,
  CalendarCell,
  CalendarGrid,
  CalendarGridBody,
  CalendarGridHeader,
  CalendarHeaderCell,
  CalendarProps,
  DateInput,
  DateSegment,
  DateValue,
  Form,
  Heading,
  Input,
  Label,
  TextField,
  TextFieldProps,
  TimeField,
  TimeFieldProps,
  TimeValue,
} from "react-aria-components";
import { IconType } from "react-icons";
import { FaClock } from "react-icons/fa6";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { PiPlus } from "react-icons/pi";
import { SlCalender } from "react-icons/sl";
import { motion } from "framer-motion";
import { CgCheck } from "react-icons/cg";

export const MeetingSchedule = () => {
  const [showDayDetails, setShowDayDetails] = React.useState(false);
  const [showAddForm, setShowAddForm] = React.useState(false);

  return (
    <div
      className={cn(
        "flex-1 flex flex-col items-center justify-center gap-4 md:gap-10 bg-teal-50/90 p-8 | rounded-xl | mb-6 relative overflow-clip"
      )}
    >
      <Skeleton>
        {!showDayDetails && !showAddForm && (
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={{
              initial: {
                opacity: 0,
                y: 500,
              },
              animate: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                  ease: "easeIn",
                },
              },
              exit: {
                opacity: 0,
                y: 500,
              },
            }}
            className="w-full h-full"
          >
            <MeetingCalender onChange={() => setShowDayDetails(true)} />
          </motion.div>
        )}
        {showDayDetails && !showAddForm && (
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={{
              initial: {
                opacity: 0,
                y: 500,
              },
              animate: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                  ease: "easeIn",
                },
              },
              exit: {
                opacity: 0,
                y: 500,
              },
            }}
            className="w-full h-full bg-white"
          >
            <DayDetails onAdd={() => setShowAddForm(true)} />
          </motion.div>
        )}
        {showAddForm && (
          <MeetingForm
            onSubmit={() => {
              setShowDayDetails(false);
              setShowAddForm(false);
            }}
          />
        )}
      </Skeleton>
    </div>
  );
};

const MeetingForm = ({ onSubmit }: { onSubmit: () => void }) => {
  let [startTime, setStartTime] = React.useState(new Time(11, 45));
  let [endTime, setEndTime] = React.useState(new Time(12, 45));
  const [title, setTitle] = React.useState("Meeting with Me");
  return (
    <div className="w-full h-full flex flex-col">
      <motion.p
        initial="initial"
        animate="animate"
        variants={{
          initial: {
            opacity: 0,
            x: 100,
          },
          animate: {
            opacity: 1,
            x: 0,
            transition: {
              duration: 0.5,
              ease: "easeIn",
            },
          },
        }}
        className="text-xl text-white p-6"
      >
        Add meeting
      </motion.p>
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={{
          initial: {
            opacity: 0,
            y: 500,
          },
          animate: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.5,
              ease: "easeIn",
            },
          },
          exit: {
            opacity: 0,
            y: 500,
          },
        }}
        className="w-full h-full rounded-t-3xl overflow-clip bg-white"
      >
        <Form
          className="flex-1 grid gap-4 w-full bg-white p-6"
          onSubmit={onSubmit}
        >
          <FormGroup
            placeholder="Enter the title"
            label="Title"
            name="title"
            isRequired
            value={title}
            onChange={setTitle}
          />
          <DatePicker
            label="Date"
            name="date"
            isRequired
            Icon={SlCalender}
            minValue={today(getLocalTimeZone())}
            value={today(getLocalTimeZone())}
          />
          <div className="grid grid-cols-2 gap-3">
            <TimeGroup
              label="Start"
              name="start"
              isRequired
              Icon={FaClock}
              value={startTime}
              onChange={setStartTime}
            />
            <TimeGroup
              label="End"
              name="end"
              isRequired
              Icon={FaClock}
              value={endTime}
              onChange={setEndTime}
            />
          </div>
          <Button
            type="submit"
            className="w-full py-2 bg-yellow-500 rounded-lg text-black outline-none focus:ring-2 ring-yellow-500 ring-offset-2"
          >
            Save
          </Button>
        </Form>
      </motion.div>
    </div>
  );
};

type FormGroupProps = {
  label: string;
  placeholder: string;
  Icon?: IconType;
} & TextFieldProps;
const FormGroup = ({
  label,
  placeholder,
  className,
  Icon,
  type = "text",
  ...props
}: FormGroupProps) => {
  return (
    <TextField type={type} {...props} className={cn("grid gap-2", className)}>
      <Label className="text-base font-semibold text-black flex gap-2 items-center">
        {Icon && <Icon />}
        {label}
      </Label>
      <Input
        className="w-full bg-neutral-100 p-2 rounded-lg outline-none  focus:ring-2 ring-yellow-500"
        placeholder={placeholder}
      />
    </TextField>
  );
};
type TimeGroupProps<T extends TimeValue> = {
  label: string;
  Icon?: IconType;
} & TimeFieldProps<T>;

export const TimeGroup = <T extends TimeValue>({
  label,
  Icon,
  className,
  ...props
}: TimeGroupProps<T>) => {
  return (
    <TimeField {...props} className={cn("grid gap-2", className)}>
      <Label className="text-base font-semibold text-black flex gap-2 items-center">
        {Icon && <Icon />}
        {label}
      </Label>
      <DateInput className="flex gap-2 px-2 justify-center bg-neutral-100 p-2 rounded-lg text-gray-800">
        {(segment) => (
          <DateSegment
            segment={segment}
            className="outline-none focus:bg-cyan-700 focus:text-white rounded px-1"
          />
        )}
      </DateInput>
    </TimeField>

    // <TimeField {...props} className={cn("grid gap-2", className)}>
    //   <Label className="text-base font-semibold text-black flex gap-2 items-center">
    //     {Icon && <Icon />}
    //     {label}
    //   </Label>
    //   <DateInput
    //     className="w-full bg-neutral-100 p-2 rounded-lg text-gray-500
    //     flex gap-1 "
    //   >
    //     {(segment) => (
    //       <DateSegment
    //         segment={segment}
    //         className="px-2 outline-none focus:ring-1 ring-yellow-500"
    //       />
    //     )}
    //   </DateInput>
    // </TimeField>
  );
};

const DayDetails = ({ onAdd }: { onAdd: () => void }) => {
  return (
    <div className="relative w-full h-full bg-white p-6">
      <Button
        className="absolute bottom-5 right-5 size-10 rounded-lg bg-yellow-300/80 grid place-content-center
        outline-none
        focus:bg-yellow-300
        hover:bg-yellow-300
        transition-all
      "
        aria-label="Add Meeting"
        onPress={onAdd}
      >
        <PiPlus />
      </Button>
      <h2 className="text-xl font-bold">Today</h2>
      <div className="grid h-full">
        {MEETINGS.map((meeting, i) => {
          const first = i === 0;
          const last = i === MEETINGS.length - 1;

          return (
            <div className=" grid grid-cols-[30px_1fr_100px] gap-2 items-center">
              <div className="relative h-[98%] flex items-center justify-center">
                <div
                  className="z-0 absolute top-0 left-1/2 -translate-x-1/2 h-1/2  border-dotted border-l-2  border-gray-400"
                  hidden={first}
                />
                <StatusCircle status={meeting.status}>
                  {meeting.status === "Done" && (
                    <CgCheck className="text-white size-6" />
                  )}
                </StatusCircle>
                <div
                  className="z-0 absolute bottom-0 left-1/2 -translate-x-1/2 h-1/2  border-dotted border-l-2  border-gray-400 "
                  hidden={last}
                />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-lg font-semibold">{meeting.title}</p>
                <div className="flex gap-1">
                  <p className="text-sm text-gray-500">{meeting.time.start}</p>
                  <span className="text-sm text-gray-500">-</span>
                  <p className="text-sm text-gray-500">{meeting.time.end}</p>
                </div>
              </div>
              <StatusTag status={meeting.status}>{meeting.status}</StatusTag>
            </div>
          );
        })}
      </div>
    </div>
  );
};

type CircleProps = { status: Status } & HTMLAttributes<HTMLDivElement>;

const StatusCircle = ({ status, className, ...props }: CircleProps) => {
  return (
    <div
      className={cn(
        " size-6 rounded-full z-50 bg-white flex justify-center items-center",
        status === "Done" && "bg-pink-500",
        status === "In progress" && "border-[3px] border-sky-500",
        status === "Not Started" && "bg-violet-500"
      )}
      {...props}
    />
  );
};

type StatusTagProps = { status: Status } & HTMLAttributes<HTMLDivElement>;

const StatusTag = ({ status, className, ...props }: StatusTagProps) => {
  return (
    <div
      className={cn(
        "p-2 rounded-md text-white text-xs w-fit",
        status === "Done" && "bg-pink-500",
        status === "In progress" && "bg-sky-500",
        status === "Not Started" && "bg-violet-500",
        className
      )}
      {...props}
    />
  );
};

type MeetingCalenderProps<T extends DateValue> = CalendarProps<T>;

const MeetingCalender = <T extends DateValue>(
  props: MeetingCalenderProps<T>
) => {
  return (
    <Calendar className="p-4" {...props}>
      <p className="text-sm text-yellow-400">Calender</p>
      <header className="flex items-center justify-between gap-2 pb-4 w-full">
        <Heading className="flex-1 font-semibold text-cyan-50 text-xl" />
        <IconButton slot="previous">
          <MdKeyboardArrowLeft className="size-6 fill-cyan-700" />
        </IconButton>
        <IconButton slot="next">
          <MdKeyboardArrowRight className="size-6 fill-cyan-700" />
        </IconButton>
      </header>
      <CalendarGrid className="w-full">
        <CalendarGridHeader className="border-b border-cyan-50">
          {(day) => (
            <CalendarHeaderCell className="pb-2 text-base text-cyan-50 font-semibold">
              <div className="size-9 flex items-center justify-center">
                {day}
              </div>
            </CalendarHeaderCell>
          )}
        </CalendarGridHeader>
        <CalendarGridBody>
          {(date) => (
            <CalendarCell
              date={date}
              className={({ isSelected }) => {
                return cn(
                  `text-cyan-50 flex items-center justify-center rounded-full
                    size-9 outline-none cursor-default 
                    outside-month:text-gray-500
                  disabled:text-gray-400
                  hover:bg-cyan-100 
                  hover:text-cyan-900 
                    focus-visible:ring ring-cyan-500/70 ring-offset-1
                    transition-all
                    
                    `,
                  isSelected &&
                    "bg-yellow-500 hover:bg-yellow-700 hover:text-white"
                );
              }}
            />
          )}
        </CalendarGridBody>
      </CalendarGrid>
    </Calendar>
  );
};

const IconButton = (props: ButtonProps) => {
  return (
    <Button
      {...props}
      className="outline-none rounded-full bg-cyan-50 focus:text-yellow-500  focus:ring-1 ring-yellow-500"
    />
  );
};

type SkeletonProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>;

export const Skeleton = ({ className, ...props }: SkeletonProps) => {
  return (
    <div
      {...props}
      className={cn(
        "bg-cyan-800  min-h-[380px] w-full max-w-sm rounded-3xl drop-shadow-2xl overflow-clip flex flex-col gap-4",
        className
      )}
    />
  );
};
