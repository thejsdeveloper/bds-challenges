export type InvoiceStatus = "Paid" | "Outstanding" | "Overdue";
export interface Invoice {
  id: string;
  client: string;
  amount: number;
  status: InvoiceStatus;
  date: Date;
}

export interface Balance {
  current: number;
  pending: number;
}

export interface Account {
  balance: Balance;
  invoices: Invoice[];
}

const invoices: Invoice[] = [
  {
    id: "#Mraz-Sons 402",
    client: "Mraz and Sons",
    amount: 3120.98,
    status: "Paid",
    date: new Date("2024-02-24"),
  },
  {
    id: "#Stokes LLC 02",
    client: "Stokes LLC",
    amount: 1327.8,
    status: "Paid",
    date: new Date("2024-02-21"),
  },
  {
    id: "#BBP 16",
    client: "Bergnaum, Blick and Pagac",
    amount: 2700.31,
    status: "Outstanding",
    date: new Date("2024-02-18"),
  },
  {
    id: "#Bash-Grim 01",
    client: "Bashirian-Grimes",
    amount: 4219.58,
    status: "Overdue",
    date: new Date("2024-02-17"),
  },
  {
    id: "#McC-Schinner 09",
    client: "McCullough-Schinner",
    amount: 3230.74,
    status: "Overdue",
    date: new Date("2024-02-16"),
  },
  {
    id: "#Inv 06",
    client: "Client 06",
    amount: 2000.0,
    status: "Paid",
    date: new Date("2024-02-15"),
  },
  {
    id: "#Inv 07",
    client: "Client 07",
    amount: 2500.0,
    status: "Outstanding",
    date: new Date("2024-02-14"),
  },
  {
    id: "#Inv 08",
    client: "Client 08",
    amount: 3000.0,
    status: "Paid",
    date: new Date("2024-02-13"),
  },
  {
    id: "#Inv 09",
    client: "Client 09",
    amount: 3500.0,
    status: "Overdue",
    date: new Date("2024-02-12"),
  },
  {
    id: "#Inv 10",
    client: "Client 10",
    amount: 4000.0,
    status: "Overdue",
    date: new Date("2024-02-11"),
  },
];

const getBalance = (invoices: Invoice[]): Balance => {
  let currentBalance = 0;
  let pendingBalance = 0;

  invoices.forEach((invoice) => {
    switch (invoice.status) {
      case "Paid":
        currentBalance += invoice.amount;
        break;
      case "Outstanding":
      case "Overdue":
        pendingBalance += invoice.amount;
        break;
      default:
        console.log(`Unknown status: ${invoice.status}`);
    }
  });

  return {
    current: parseFloat(currentBalance.toFixed(2)),
    pending: parseFloat(pendingBalance.toFixed(2)),
  };
};

export const ACCOUNT: Account = {
  balance: getBalance(invoices),
  invoices,
};
