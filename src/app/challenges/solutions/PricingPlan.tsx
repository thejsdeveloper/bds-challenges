"use client";
import { PLANS } from "@/app/api/challenges/PricingPlan/data";
import { Plans } from "@/app/api/challenges/PricingPlan/types";
import { cn } from "@/app/utils/cn";
import React from "react";
import { Switch } from "react-aria-components";

export const PricingPlan = () => {
  const [selectedPlan, setSelectedPlan] = React.useState<Plans>(PLANS[0]);
  return (
    <div className="flex-1 flex flex-col  items-center gap-10 bg-indigo-50 p-10 | rounded-xl | mb-6 relative overflow-clip">
      <h2 className="text-base font-semibold text-black">Find Ideal Plan</h2>
      <h1 className="text-5xl font-bold text-black">
        Unlock <span className="underline text-violet-500">Your Best Fit</span>{" "}
        Plan Today
      </h1>
      <div>
        <Switch className="group flex gap-2 items-center text-black font-semibold text-lg">
          <span>Billed annually</span>
          <div className="flex h-[26px] w-[44px] shrink-0 cursor-default rounded-full shadow-inner bg-clip-padding border border-solid border-white/30 p-[3px] box-border transition duration-200 ease-in-out bg-yellow-500 group-pressed:bg-yellow-800 group-selected:bg-violet-500 group-selected:group-pressed:bg-violet-800 outline-none group-focus-visible:ring-2 ring-black">
            <span className="h-[18px] w-[18px] transform rounded-full bg-white shadow transition duration-200 ease-in-out translate-x-0 group-selected:translate-x-[100%]" />
          </div>
          <span>Billed monthly</span>
        </Switch>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 flex-1 place-content-center">
        {PLANS.map((plan, i) => {
          const selected = plan.id === selectedPlan.id;
          return (
            <PlanCard
              key={i}
              plan={plan}
              selected={selected}
              onPlanSelection={() => setSelectedPlan(plan)}
            />
          );
        })}
      </div>
    </div>
  );
};

type CardProps = {
  plan: Plans;
  selected: boolean;
  onPlanSelection: () => void;
};

const PlanCard: React.FC<CardProps> = ({ plan, selected, onPlanSelection }) => {
  return (
    <div
      className={cn(
        "bg-white  overflow-hidden shadow rounded-lg p-6 transition-all duration-500 cursor-pointer relative",
        selected && "bg-violet-500 text-white scale-110"
      )}
      onClick={onPlanSelection}
    >
      <div className="flex">
        <p className="text-sm">{plan.variation}</p>
        {plan.variation === "All In One" && (
          <div className="text-black bg-amber-300 py-1 flex-1 flex justify-center rotate-45 translate-x-20">
            Best value
          </div>
        )}
      </div>
      <h2 className="text-2xl font-bold mb-4">{plan.title}</h2>
      <p className="text-lg">
        $ {plan.billing.annual}
        <span
          className={cn("text-sm text-gray-400", selected && "text-gray-300")}
        >
          /month
        </span>
      </p>
      <ul
        className={cn(
          "list-disc list-inside text-gray-500",
          selected && "text-gray-200"
        )}
      >
        {plan.features.map((feature, index) => (
          <li key={index} className="mb-1">
            {feature}
          </li>
        ))}
      </ul>
      <button
        className={cn(
          "w-full text py-2 rounded-lg outline-none text-black font-medium mt-24 transition-all duration-700",
          plan.variation === "All In One" && "bg-lime-300",
          plan.variation === "Basic" && "bg-amber-300",
          plan.variation === "Better Results" && "bg-rose-300",
          selected && "bg-white animate-wiggle-2"
        )}
      >
        Try free for 30 days
      </button>
    </div>
  );
};
