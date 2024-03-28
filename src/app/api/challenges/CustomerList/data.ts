export interface Customer {
  id: number;
  basicInfo: string;
  email: string;
  companyName: string;
  phoneNumber: string;
  status: "Active" | "Inactive";
  createdDate: string;
  avatar: string;
}

export const CUSTOMERS: Customer[] = [
  {
    id: 1,
    avatar: `https://i.pravatar.cc/200?u=1`,
    email: "john@example.com",
    basicInfo: "John Doe",
    companyName: "Hartmann Group",
    phoneNumber: "+68 574 01 68",
    status: "Active",
    createdDate: "16 Oct 2023",
  },
  {
    id: 2,
    avatar: `https://i.pravatar.cc/200?u=2`,
    basicInfo: "GR&R",
    email: "GR&R@example.com",
    companyName: "Gaylord, Reichel and Rosen",
    phoneNumber: "+81 906 68 07",
    status: "Active",
    createdDate: "16 Oct 2023",
  },
  {
    id: 3,
    avatar: `https://i.pravatar.cc/200?u=3`,
    email: "Bergnaum@example.com",
    basicInfo: "Bergnaum Group",
    companyName: "Bergnaum Group",
    phoneNumber: "+222880491",
    status: "Active",
    createdDate: "23 Oct 2023",
  },
  {
    id: 4,
    avatar: `https://i.pravatar.cc/200?u=4`,
    email: "pi@example.com",
    basicInfo: "(oa) pi",
    companyName: "D'Amore PLC",
    phoneNumber: "+66 372 55 58",
    status: "Inactive",
    createdDate: "2 Nov 2023",
  },
  {
    id: 5,
    avatar: `https://i.pravatar.cc/200?u=5`,
    email: "Eric@example.com",
    basicInfo: "Eric Dyer",
    companyName: "Hammes Ltd",
    phoneNumber: "+87 5182393",
    status: "Active",
    createdDate: "10 Nov 2023",
  },
  {
    id: 6,
    avatar: `https://i.pravatar.cc/200?u=6`,
    email: "hr@example.com",
    basicInfo: "HR&L",
    companyName: "Hermann, Rutherford and L",
    phoneNumber: "+90 545 13 52",
    status: "Active",
    createdDate: "4 Dec 2023",
  },
  {
    id: 7,
    avatar: `https://i.pravatar.cc/200?u=7`,
    email: "Auer@example.com",
    basicInfo: "Auer-OKon",
    companyName: "Auer-0'on",
    phoneNumber: "+46146 83 44",
    status: "Inactive",
    createdDate: "13 Dec 2023",
  },
  {
    id: 8,
    avatar: `https://i.pravatar.cc/200?u=8`,
    email: "Mosciski@example.com",
    basicInfo: "Mosciski-Denesik",
    companyName: "Mosciski-Denesik",
    phoneNumber: "+53 532 55 82",
    status: "Active",
    createdDate: "6 Jan 2024",
  },
];
