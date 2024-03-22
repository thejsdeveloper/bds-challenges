"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQType, minionTrivia } from "@/app/api/challenges/FAQ/data";
import { cn } from "@/lib/utils";

export const FAQ = () => {
  return (
    <div className="flex-1 flex flex-col p-8 | rounded-xl | mb-6 relative overflow-clip">
      <div className="h-56 bg-gradient-to-t to-sky-500 from-fuchsia-400"></div>
      <div className="flex-1 bg-white flex justify-center">
        <QuestionAccordion questions={minionTrivia} />
      </div>
    </div>
  );
};

export function QuestionAccordion({ questions }: { questions: FAQType }) {
  const [selectedId, setSelectedId] = React.useState(questions[0].id);

  return (
    <div className="p-4 bg-white shadow-xl  h-fit rounded-lg -mt-20">
      <h1 className="text-3xl font-bold my-8">❓ FAQs</h1>
      <Accordion
        type="single"
        collapsible
        className="space-y-4"
        onValueChange={setSelectedId}
        value={selectedId}
      >
        {questions.map((trivia) => {
          return (
            <AccordionItem
              key={trivia.id}
              value={trivia.id}
              className={cn(
                "rounded-lg px-2 shadow-md",
                selectedId === trivia.id && " bg-sky-500 text-white"
              )}
            >
              <AccordionTrigger>
                <p className="px-2">{trivia.question}</p>
              </AccordionTrigger>
              <AccordionContent className="px-2">
                {trivia.answer}
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}
