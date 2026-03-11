"use client";

import Image from "next/image";
import { useState } from "react";
import { funnelSans } from "@/app/fonts";

export function PricingSection() {
  const faqItems = [
    {
      question: "Who is this for?",
      answer:
        "Loops House is for ambitious builders who want to iterate in public with a supportive, high-conviction community.",
    },
    {
      question: "What is Loops?",
      answer:
        "Loops is a space to experiment, ship, and refine your product using real feedback and Loops AI signals.",
    },
    {
      question: "What is the Active Score?",
      answer:
        "Your Active Score reflects how consistently you build, share progress, and engage with the ecosystem.",
    },
    {
      question: "What happens at Loops House?",
      answer:
        "You join a cohort, meet other founders, get access to loops, and showcase what you've built on demo day.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div
      id="faq"
      className="flex h-full w-full flex-col items-center justify-center bg-[#0F2C23] px-4 py-10 md:h-screen md:px-6 md:py-0"
    >
      <div className="flex w-full max-w-[960px] flex-col items-center gap-10 md:gap-20">
        <h2
          className={`${funnelSans.className} text-center font-extrabold uppercase leading-none tracking-[-0.04em] text-[#E2FEA5] text-[28px] sm:text-[36px] md:text-[44px] lg:text-[56px]`}
        >
          FREQUENTLY ASKED QUESTIONS
        </h2>

        <div className="grid w-full grid-cols-1 place-items-center gap-4 sm:grid-cols-2">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.question}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full min-h-[160px] cursor-pointer items-center gap-4 rounded-[28px] bg-[#F8FFE8] px-5 py-5 sm:min-h-[210px] sm:gap-8 sm:rounded-[40px] sm:px-[40px] sm:py-0 sm:h-[210px] sm:w-[472px]"
              >
                <div className="flex shrink-0 items-center justify-center">
                  <Image
                    src="/assets/main/plusIcon.svg"
                    alt=""
                    width={44}
                    height={44}
                    className="h-8 w-8 transform transition-transform duration-200 sm:h-11 sm:w-11"
                    style={{ transform: isOpen ? "rotate(45deg)" : "none" }}
                  />
                </div>
                <div
                  className={`${funnelSans.className} flex-1 text-left text-base text-[#0F2C23] sm:text-xl`}
                >
                  {isOpen ? item.answer : item.question}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
