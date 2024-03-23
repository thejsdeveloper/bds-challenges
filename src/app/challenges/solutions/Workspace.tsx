"use client";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";

import React from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { CgClose } from "react-icons/cg";
import { FaChevronDown } from "react-icons/fa6";
import { z } from "zod";

const INDUSTRIES = [
  {
    id: "1",
    name: "Technology",
    value: "Technology",
  },
  {
    id: "2",
    name: "Finance",
    value: "Finance",
  },
  {
    id: "3",
    name: "Education",
    value: "Education",
  },
  {
    id: "4",
    name: "Design",
    value: "Design",
  },
  {
    id: "5",
    name: "Marketing",
    value: "Marketing",
  },
];

type Member = {
  id: string;
  name: string;
  email: string;
  avatar: string;
};

const validateEmail = (email: string) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const MemberSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  avatar: z.string(),
});

const FormSchema = z.object({
  workspaceName: z
    .string({
      required_error: "Workspace Name is required",
    })
    .min(5, {
      message: "Workspace Name must be at least 5 characters",
    }),

  industry: z.string({
    required_error: "Industry is required",
  }),
  members: z.array(MemberSchema),
});

export const Workspace = () => {
  const { toast } = useToast();
  const [currentMember, setCurrentMember] = React.useState("");

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      workspaceName: "",
      industry: "",
      members: [],
    },
    mode: "onChange",
  });

  const {
    fields: members,
    append,
    remove,
  } = useFieldArray({
    control: form.control,
    name: "members",
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "Setup Workspace",
      description: `Your workspace will be setup soon`,
    });
    form.reset();
  }

  return (
    <div className="flex-1 grid place-items-center p-8 |  rounded-xl | mb-6 relative overflow-clip">
      <Card className="bg-white w-full max-w-lg ">
        <CardHeader>
          <CardTitle>Setup Workspace</CardTitle>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent className="flex flex-col gap-4">
              <FormField
                control={form.control}
                name="workspaceName"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormControl>
                        <div className="grid w-full items-center gap-3">
                          <Label>Workspace name*</Label>
                          <Input {...field} />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />

              <FormField
                control={form.control}
                name="industry"
                render={({ field }) => {
                  return (
                    <FormControl>
                      <div className="grid w-full items-center gap-3">
                        <Label htmlFor="industry">Select your industry</Label>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select your industry" />
                          </SelectTrigger>
                          <SelectContent>
                            {INDUSTRIES.map((industry) => (
                              <SelectItem
                                key={industry.id}
                                value={industry.value}
                              >
                                {industry.value}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </FormControl>
                  );
                }}
              />

              <Separator className="bg-gray-500" />
              <div className="flex justify-between items-center">
                <p className="text-base font-semibold">
                  Add your workspace member
                </p>
                <p className="text-base font-medium">{members.length}/5</p>
              </div>
              <div className="grid w-full items-center gap-3">
                <Label htmlFor="name">Member email</Label>
                <div className="flex items-center gap-4">
                  <div className="flex items-center flex-wrap gap-2 min-h-10 w-full rounded-md border border-input bg-background px-3 py-2">
                    {members.map((member, index) => (
                      <Chip
                        key={member.id}
                        label={member.email}
                        onDelete={() => {
                          remove(index);
                          toast({
                            title: "Delete Member",
                            description: `${member.name} has been Deleted`,
                          });
                        }}
                      />
                    ))}
                    {members.length !== 5 && (
                      <Input
                        className="h-auto py-1 inline-block w-fit"
                        type="email"
                        value={currentMember}
                        onChange={(e) => setCurrentMember(e.target.value)}
                        onKeyDown={(e) => {
                          if (
                            currentMember &&
                            currentMember.length > 3 &&
                            e.code === "Enter"
                          ) {
                            e.preventDefault();
                            if (!validateEmail(currentMember)) {
                              return false;
                            }
                            const member = {
                              id: crypto.randomUUID(),
                              name: currentMember,
                              email: currentMember,
                              avatar:
                                "https://i.pravatar.cc/200?u=" + currentMember,
                            };
                            append(member);
                            setCurrentMember("");
                          }
                        }}
                      />
                    )}
                  </div>
                  <Button type="button">Invite</Button>
                </div>
              </div>
              <div className="grid gap-2">
                {members.map((member) => (
                  <Member
                    key={member.id}
                    member={member}
                    onDelete={() => {
                      const remainingMember = members.filter(
                        (m) => m.id !== member.id
                      );
                      form.setValue("members", remainingMember);
                      toast({
                        title: "Delete Member",
                        description: `${member.name} has been Deleted`,
                      });
                    }}
                    onResendInvite={() =>
                      toast({
                        title: "Reinvitation",
                        description: `Reinvitation has been sent to ${member.name}`,
                      })
                    }
                  />
                ))}
              </div>
              <Button disabled={!form.formState.isValid}>
                Setup workspace
              </Button>
            </CardContent>
          </form>
        </Form>
      </Card>
    </div>
  );
};

type ChipProps = {
  label: string;
  onDelete?: () => void;
};
const Chip = ({ label, onDelete }: ChipProps) => {
  return (
    <div
      className="flex items-center gap-2 ring-1 ring-gray-200 rounded px-1
        focus-within:shadow-lg
        focus-within:ring-gray-500
      "
      aria-label={`user email - ${label}`}
    >
      <p className="text-sm font-medium text-gray-700">{label}</p>
      <button
        type="button"
        className="text-sm font-medium text-gray-700 hover:text-red-500 rounded-full transition-all  focus:text-red-500 focus:ring-1 ring-red-500 outline-none"
        onClick={() => {
          onDelete && onDelete();
        }}
      >
        <CgClose />
      </button>
    </div>
  );
};

const Member = ({
  member,
  onDelete,
  onResendInvite,
}: {
  member: Member;
  onDelete: () => void;
  onResendInvite: () => void;
}) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="flex items-center gap-2">
      <Avatar>
        <AvatarImage src={member.avatar} alt={member.name} />
      </Avatar>
      <div className="flex flex-col gap-0.5">
        <p className="text-sm font-medium text-gray-700">{member.name}</p>
        <p className="text-xs text-gray-500">{member.email}</p>
      </div>
      <div className="ml-auto">
        <Popover onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button type="button" variant="ghost">
              <FaChevronDown
                className={cn(
                  "transition-all",
                  open ? "rotate-180" : "rotate-0"
                )}
              />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-fit p-0" align="end">
            <div className="flex flex-col">
              <Button
                type="button"
                variant="ghost"
                className="font-medium rounded-none"
                onClick={onResendInvite}
              >
                Resend invitation
              </Button>
              <Button
                type="button"
                variant="ghost"
                className="font-medium rounded-none"
                onClick={onDelete}
              >
                Remove
              </Button>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};
