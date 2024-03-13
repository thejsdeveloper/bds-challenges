import { IconType } from "react-icons";
import { BsClipboard2DataFill, BsDatabase } from "react-icons/bs";
import { FaSliders } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";
import { PiMoneyFill } from "react-icons/pi";

export type Item =
  | "dashboard"
  | "reports"
  | "dataSources"
  | "monetise"
  | "filters"
  | "settings"; // Add or remove as per your requirement

export type Nav = {
  id: Item;
  icon?: IconType | string;
  label: string;
};

export const NAVIGATION: Nav[] = [
  {
    id: "dashboard",
    icon: MdSpaceDashboard,
    label: "Dashboard",
  },
  {
    id: "reports",
    icon: BsClipboard2DataFill,
    label: "Reports",
  },
  {
    id: "dataSources",
    icon: BsDatabase,
    label: "Data Sources",
  },
  {
    id: "monetise",
    icon: PiMoneyFill,
    label: "Monetise",
  },
  {
    id: "filters",
    icon: FaSliders,
    label: "Filters",
  },
  {
    id: "settings",
    icon: IoSettingsOutline,
    label: "Settings",
  },
];
