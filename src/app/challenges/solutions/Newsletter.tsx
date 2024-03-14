"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail } from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";
import { FaEnvelopeOpenText } from "react-icons/fa6";
import { SlEnvolopeLetter } from "react-icons/sl";
import { z } from "zod";

const FormSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
    })
    .email({
      message: "Email is not valid",
    }),
});

export const Newsletter = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = () => {
    toast({
      title: "Newletter Subcription",
      description: "Thanks for subscribing to our newsletter",
    });
    form.reset();
  };

  return (
    <div className="flex-1 grid grid-flow-row md:grid-flow-col | mb-6 rounded-xl |  bg-white shadow-lg">
      <div className="flex justify-center items-center p-6 md:p-20 gap-6 ">
        <FaEnvelopeOpenText
          size={300}
          className="fill-yellow-500 size-[100px] sm:size-[200px] lg:size-[300px]"
        />
      </div>
      <div className="flex flex-col md:justify-center p-6 lg:p-20 gap-2 md:gap-6 ">
        <h2 className="text-base md:text-3xl font-bold">Sign up to our</h2>
        <h1 className="text-2xl md:text-6xl font-bold">Newsletter</h1>
        <p className="text-muted-foreground text-xs md:text-sm">
          Subscribe to our newsletter and stay updated.
        </p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="relative">
                      <Mail className="absolute size-6 z-50 left-4 top-1/2 -translate-y-1/2 fill-muted-foreground stroke-white" />
                      <Input
                        type="email"
                        required
                        placeholder="Your email"
                        {...field}
                        className="focus-visible:ring-yellow-500 pl-12"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="bg-yellow-400 text-black w-full hover:bg-yellow-500 py-1 text-l focus-visible:ring-yellow-500"
              disabled={!form.formState.isValid}
            >
              Sign Up
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};
