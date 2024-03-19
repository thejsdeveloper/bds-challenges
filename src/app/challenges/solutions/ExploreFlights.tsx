"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { format, subDays } from "date-fns";

import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarIcon } from "lucide-react";
import { useFieldArray, useForm } from "react-hook-form";
import { HiSwitchHorizontal } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { MdFlight, MdFlightLand, MdFlightTakeoff } from "react-icons/md";
import { IssueData, z } from "zod";

export const ExploreFlights = () => {
  return (
    <div className="flex  justify-center gap-4 md:gap-6 mx-2 px-2 md:px-6  | rounded-xl | overflow-clip">
      <FlightBooking />
      {/* <RadioGroupForm /> */}
    </div>
  );
};

const Flight = z.object({
  origin: z.string({
    required_error: "You need to enter where are you flying from",
  }),
  destination: z.string({
    required_error: "You need to enter where are you flying to",
  }),
  from: z.date(),
  to: z.date().optional(),
});

const FormSchema = z.object({
  tripType: z.enum(["oneWay", "roundTrip", "multiCity"], {
    required_error: "You need to select a trip type type.",
  }),
  flights: z.array(Flight),
});

const FlightBooking = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      tripType: "oneWay",
      flights: [
        {
          origin: "New York",
          destination: "London",
          from: new Date(),
        },
      ],
    },
    mode: "onChange",
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "flights",
  });

  console.log({
    value: form.getValues().tripType,
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "Flight Search",
      description: "You just searched for a flight",
    });
    form.reset();
  }

  return (
    <div className="flex flex-col gap-6 w-full bg-white  rounded-2xl p-4">
      <header>
        <h1 className="text-black text-2xl font-semibold">
          Discover your next destination
        </h1>
      </header>
      <main>
        <Form {...form}>
          <form
            className="flex flex-col gap-4"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              control={form.control}
              name="tripType"
              render={({ field: { onChange, value, ...rest } }) => (
                <FormItem className="flex flex-row items-center">
                  <FormControl>
                    <RadioGroup
                      onValueChange={onChange}
                      defaultValue={value}
                      {...rest}
                      className="flex flex-row items-center gap-4"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="roundTrip" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          Round trip
                        </FormLabel>
                      </FormItem>

                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="oneWay" />
                        </FormControl>
                        <FormLabel className="font-normal">One Way</FormLabel>
                      </FormItem>

                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="multiCity" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          Multi City
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {fields.map((flight, index) => {
              return (
                <div
                  key={flight.id}
                  className="p-4 bg-stone-300 rounded-md flex items-center justify-around gap-2"
                >
                  <FormField
                    control={form.control}
                    name={`flights.${index}.origin`}
                    render={({ field }) => {
                      return (
                        <FormControl>
                          <div className="flex-1 flex items-center rounded relative">
                            <MdFlightTakeoff className="absolute top-1/2 left-6 -translate-x-1/2 -translate-y-1/2" />
                            <Input
                              className="pl-10"
                              placeholder="Where From?"
                              {...field}
                            />
                          </div>
                        </FormControl>
                      );
                    }}
                  />

                  <Button
                    className="rounded-full  bg-white hover:bg-accent"
                    size="icon"
                    type="button"
                  >
                    <HiSwitchHorizontal className="fill-black" />
                  </Button>

                  <FormField
                    control={form.control}
                    name={`flights.${index}.destination`}
                    render={({ field }) => {
                      return (
                        <FormControl>
                          <div className="flex-1 flex items-center  rounded relative">
                            <MdFlightLand className="absolute top-1/2 left-6 -translate-x-1/2 -translate-y-1/2" />
                            <Input
                              className="pl-10"
                              placeholder="Where to ?"
                              {...field}
                            />
                          </div>
                        </FormControl>
                      );
                    }}
                  />

                  <FormField
                    control={form.control}
                    name={`flights.${index}.from`}
                    render={({ field }) => (
                      <FormItem className="flex flex-col  flex-1 ">
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "text-left font-normal text-black flex gap-2 justify-start",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                <CalendarIcon className="h-4 w-4 opacity-50" />

                                {field.value ? (
                                  <span>{format(field.value, "E dd MMM")}</span>
                                ) : (
                                  <span>Pick a date</span>
                                )}
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              disabled={(date) =>
                                date <= subDays(new Date(), 1)
                              }
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={`flights.${index}.to`}
                    render={({ field }) => (
                      <FormItem className="flex flex-col  flex-1">
                        <Popover>
                          <PopoverTrigger
                            asChild
                            disabled={form.getValues().tripType !== "roundTrip"}
                          >
                            <FormControl>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "text-left font-normal text-black flex gap-2 justify-start",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                <CalendarIcon className="h-4 w-4 opacity-50" />

                                {field.value ? (
                                  <span>{format(field.value, "E dd MMM")}</span>
                                ) : (
                                  <span>Pick a date</span>
                                )}
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              disabled={(date) =>
                                date <= form.getValues().flights[index].from
                              }
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="button"
                    className="rounded-full  bg-white hover:bg-accent"
                    size="icon"
                    disabled={index === 0}
                    onClick={() => remove(index)}
                  >
                    <IoClose className="fill-black" />
                  </Button>
                </div>
              );
            })}

            <div className="flex justify-between items-center">
              <Button
                type="button"
                onClick={() =>
                  append({
                    origin: "",
                    destination: "",
                    from: new Date(),
                  })
                }
                variant="ghost"
              >
                Add a flight
              </Button>

              <Button
                type="submit"
                variant="default"
                className="flex flex-row gap-2 items-center ml-auto"
              >
                <MdFlight />
                Search
              </Button>
            </div>
          </form>
        </Form>
      </main>
    </div>
  );
};
