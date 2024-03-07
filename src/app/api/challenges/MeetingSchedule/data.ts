export type Status = "Done" | "In progress" | "Not Started";
export type MeetingScheduleType = {
  id: string | number;
  title: string;
  date: Date;
  time: {
    start: string;
    end: string;
  };
  status: Status;
};

export const MEETINGS: MeetingScheduleType[] = [
  {
    id: 1,
    title: "Sprint Planning",
    date: new Date(),
    time: {
      start: "10:00 am",
      end: "11:00 am",
    },
    status: "Done",
  },
  {
    id: 2,
    title: "Bug Bash",
    date: new Date(),
    time: {
      start: "01:00 pm",
      end: "02:00 pm",
    },
    status: "In progress",
  },
  {
    id: 3,
    title: "Meetup - UI",
    date: new Date(),
    time: {
      start: "04:00 pm",
      end: "04:30 pm",
    },
    status: "Not Started",
  },
];
