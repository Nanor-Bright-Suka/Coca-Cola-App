
import React, { useRef, useState } from "react";
import { FAQs } from "@/Utilities/Utils";

export default function FAQ(){
    const [openIndex, setOpenIndex] = useState<null | number>(null);
    const answerRefs = useRef<{[key: number]: HTMLDivElement | null }>({}); // Store references to each FAQ answer
  
  const toggleAnswer = (index: number) => {
      setOpenIndex(openIndex === index ? null : index);
    }

      return (
        <div className="max-w-2xl mx-auto p-5">
          <h1 className="text-2xl font-bold text-center mb-5">Frequently Asked Questions</h1>
          <div className="space-y-4">
            {FAQs.map((faq, index) => (
              <div key={index} className="overflow-hidden m-5">
                <div
                  className="flex justify-between items-center w-full p-4 text-left"
                  onClick={() => toggleAnswer(index)}
                >
                  <span className="font-medium text-xl">{faq.question}</span>
                  <span
                    className={`transform transition-transform duration-300 ${
                      openIndex === index ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </div>
                <div
                  ref={(el) => {
                    answerRefs.current[index] = el
                  }}
                  style={{
                    maxHeight: openIndex === index ? `${answerRefs.current[index]?.scrollHeight}px` : "0px",
                    transition: "max-height 0.3s ease-in-out",
                  }}
                  className="overflow-hidden bg-white text-gray-700"
                >
                  <div className="p-4">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    };
    
   


