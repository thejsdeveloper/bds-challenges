"use client";
import {
  ACCOUNT,
  Balance,
  Invoice,
  InvoiceStatus,
} from "@/app/api/challenges/Invoices/data";
import { FullPageModal } from "@/app/components/FullPageModal/FullPageModal";
import { cn } from "@/app/utils/cn";
import { formatDate, formatDateLong } from "@/app/utils/dateFormat";
import { formatNumber } from "@/app/utils/number";
import React, { HTMLAttributes } from "react";
import {
  Button,
  Cell,
  CellProps,
  Checkbox,
  CheckboxProps,
  Column,
  ColumnProps,
  ComboBox,
  ComboBoxProps,
  Dialog,
  DialogTrigger,
  Group,
  Input,
  Key,
  ListBox,
  ListBoxItem,
  Popover,
  Row,
  RowProps,
  Table,
  TableBody,
  TableHeader,
  Tag,
  TagProps,
} from "react-aria-components";
import { BiCheck } from "react-icons/bi";
import { BsDashSquareFill } from "react-icons/bs";
import { HiChevronUpDown } from "react-icons/hi2";

export const Invoices = () => {
  const [account, setAccount] = React.useState(() => ACCOUNT);
  const [filterInvoice, setFilterInvoice] = React.useState<FilterKey>("all");

  const { balance, invoices } = account;

  const filteredInvoice = invoices.filter((invoice) => {
    if (filterInvoice === "all") {
      return true;
    }

    if (filterInvoice === "paid") {
      return invoice.status === "Paid";
    }

    if (filterInvoice === "outstanding") {
      return invoice.status === "Outstanding";
    }
    if (filterInvoice === "overdue") {
      return invoice.status === "Overdue";
    }
  });

  return (
    <div className="flex-1 flex flex-col gap-6  w-full self-center p-2 md:p-4 lg:p-6">
      <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
        <Balance balance={balance} />
      </div>
      <div className="flex flex-col gap-6 p-4 rounded-xl bg-white">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
          <h2 className="text-2xl font-semibold">Invoices</h2>
          <div className="flex gap-4 flex-wrap ">
            <FilterCombobox
              defaultSelectedKey={filterInvoice}
              onSelectionChange={(key: Key) => {
                setFilterInvoice(key as FilterKey);
              }}
            />
            <DialogTrigger>
              <Button
                type="button"
                className="px-4 h-10 text-white rounded-lg bg-blue-600  transition   ring-black/50 focus-visible:ring-2 focus-visible:ring-sky-500 ring-offset-2"
              >
                + New Invoices
              </Button>
              <FullPageModal>
                <Dialog role="alertdialog" className="outline-none relative">
                  {({ close }) => (
                    <div className="flex flex-col gap-4 justify-center">
                      <p className="text-xl text-red-400">
                        This functionality is not implemented yet
                      </p>
                      <Button
                        onPress={close}
                        className="px-4 py-1 bg-red-200 text-black rounded"
                      >
                        Close
                      </Button>
                    </div>
                  )}
                </Dialog>
              </FullPageModal>
            </DialogTrigger>
          </div>
        </div>
        <div className="overflow-x-auto">
          <InvoiceTable invoices={filteredInvoice} />
        </div>
      </div>
    </div>
  );
};

const Balance = ({ balance }: { balance: Balance }) => {
  return (
    <>
      <div className="bg-white rounded-2xl p-4 flex-1 space-y-2 ">
        <h2 className="text-lg font-semibold text-black/70">Balance</h2>
        <p className="text-2xl font-bold tracking-wide">
          $ {formatNumber(balance.current).toString().split(".")[0]}.
          <span className="text-black/50">
            {balance.current.toString().split(".")[1]}
          </span>
        </p>
      </div>
      <div className="bg-zinc-950 rounded-2xl p-4 flex-1 text-white space-y-2">
        <h2 className="text-lg font-semibold">Pending</h2>
        <p className="text-2xl font-bold tracking-wide">
          {" "}
          $ {formatNumber(balance.pending).toString().split(".")[0]}.
          <span className="text-white/50">
            {balance.pending.toString().split(".")[1]}
          </span>
        </p>
      </div>
    </>
  );
};

type FilterKey = "all" | "paid" | "overdue" | "outstanding";

type Filter = {
  id: FilterKey;
  value: string;
};

const filters: Filter[] = [
  {
    id: "all",
    value: "View All Invoices",
  },
  {
    id: "paid",
    value: "Paid",
  },
  {
    id: "overdue",
    value: "Overdue",
  },
  {
    id: "outstanding",
    value: "Outstanding",
  },
];
function FilterCombobox<T extends Object>(props: ComboBoxProps<T>) {
  return (
    <ComboBox
      {...props}
      className="group flex flex-col gap-1"
      aria-label="Invoice filter"
    >
      <Group className="h-10 flex rounded-lg bg-white bg-opacity-90 focus-within:bg-opacity-100 transition  ring-1 ring-black/50 focus-visible:ring-2 focus-visible:ring-sky-500">
        <Input className="flex-1 w-full border-none py-2 px-3 leading-5 text-gray-900 bg-transparent outline-none text-base" />
        <Button className="px-3 flex items-center text-gray-700 transition border-0 border-solid border-l border-l-sky-200 bg-transparent rounded-r-lg pressed:bg-sky-100">
          <HiChevronUpDown size={12} />
        </Button>
      </Group>
      <Popover className="max-h-60 w-[--trigger-width] overflow-auto rounded-md bg-white text-base shadow-lg ring-1 ring-black/5 entering:animate-in entering:fade-in exiting:animate-out exiting:fade-out">
        <ListBox className="outline-none p-1" items={filters}>
          {(item) => (
            <ListBoxItem
              textValue={item.value}
              className="group flex items-center gap-2 cursor-default select-none py-2 pl-2 pr-4 outline-none rounded text-gray-900  focus:bg-sky-600 focus:text-white"
            >
              {({ isSelected }) => (
                <>
                  <span className="flex-1 flex items-center gap-3 truncate font-normal group-selected:font-medium ">
                    {item.value}
                  </span>
                  {isSelected && (
                    <span className="w-5 flex items-center text-sky-600 group-focus:text-white">
                      <BiCheck size={24} />
                    </span>
                  )}
                </>
              )}
            </ListBoxItem>
          )}
        </ListBox>
      </Popover>
    </ComboBox>
  );
}

const InvoiceTable = ({ invoices }: { invoices: Invoice[] }) => {
  return (
    <Table aria-label="Invoices" selectionMode="multiple" className="w-full">
      <TableHeader>
        <InvoiceColumn id="checkbox">
          <InvoiceCheckbox slot="selection" />
        </InvoiceColumn>
        <InvoiceColumn id="invoice" isRowHeader>
          Invoice
        </InvoiceColumn>
        <InvoiceColumn id="client">Client</InvoiceColumn>
        <InvoiceColumn id="amount">Amount</InvoiceColumn>
        <InvoiceColumn id="status">Status</InvoiceColumn>
        <InvoiceColumn id="Date">Date</InvoiceColumn>
      </TableHeader>
      <TableBody items={invoices}>
        {(item) => (
          <InvoiceRow>
            <InvoiceCell>
              <InvoiceCheckbox slot="selection" />
            </InvoiceCell>
            <InvoiceCell className="font-semibold">{item.id}</InvoiceCell>
            <InvoiceCell className="text-stone-600 ">{item.client}</InvoiceCell>
            <InvoiceCell className="font-semibold">
              ${formatNumber(item.amount)}
            </InvoiceCell>
            <InvoiceCell>
              <InvoicePill status={item.status}>{item.status}</InvoicePill>
            </InvoiceCell>
            <InvoiceCell className="font-medium">
              {formatDateLong(item.date)}
            </InvoiceCell>
          </InvoiceRow>
        )}
      </TableBody>
    </Table>
  );
};

const InvoicePill = ({
  status,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement> & { status: InvoiceStatus }) => {
  return (
    <div
      {...props}
      className={cn(
        "rounded-full text-white px-3 py-1 w-fit",
        status === "Paid" && "bg-green-500",
        status === "Outstanding" && "bg-orange-500",
        status === "Overdue" && "bg-red-500",
        className
      )}
    />
  );
};

function InvoiceColumn(props: ColumnProps & { children: React.ReactNode }) {
  return (
    <Column
      {...props}
      className="sticky top-0 p-0  text-left cursor-default whitespace-nowrap outline-none uppercase text-black/30 text-sm"
    >
      <div className="flex items-center pl-4 py-1">
        <Group
          role="presentation"
          tabIndex={-1}
          className="flex flex-1 items-center overflow-hidden outline-none rounded focus-visible:ring-2 ring-slate-600"
        >
          <span className="flex-1 truncate">{props.children}</span>
        </Group>
      </div>
    </Column>
  );
}

function InvoiceRow<T extends object>(props: RowProps<T>) {
  return (
    <Row
      {...props}
      className=" selected:bg-stone-200  cursor-default group outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-slate-600 focus-visible:-outline-offset-4 selected:focus-visible:outline-white"
    />
  );
}

function InvoiceCell(props: CellProps) {
  return (
    <Cell
      {...props}
      className={`px-4 py-4 truncate ${props.className} focus-visible:outline focus-visible:outline-2 focus-visible:outline-slate-600 focus-visible:-outline-offset-4 group-selected:focus-visible:outline-white`}
    />
  );
}

function InvoiceCheckbox({ children, ...props }: CheckboxProps) {
  return (
    <Checkbox {...props}>
      {({ isIndeterminate, isSelected }) => (
        <>
          <div
            className={cn(
              "w-5 h-5 border-2 border-gray-300 rounded transition-all flex items-center justify-center",
              isSelected && "bg-blue-500"
            )}
          >
            {isSelected && <BiCheck className="fill-white" />}
            {isIndeterminate && <BsDashSquareFill className="fill-blue-500" />}
          </div>
          {children}
        </>
      )}
    </Checkbox>
  );
}
