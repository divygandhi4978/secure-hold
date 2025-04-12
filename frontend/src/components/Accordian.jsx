import { useState } from "react";
import { ChevronDown } from "lucide-react";
import AccData from "../constants/AccordianData";

// Individual accordion item component
const AccordionItem = ({ title, children, isOpen, onToggle }) => {
  return (
    <div className="border border-gray-200 rounded-md overflow-hidden mb-2 w-full">
      <button
        className="w-full p-4 text-left bg-white hover:bg-gray-50 flex justify-between items-center"
        onClick={onToggle}
      >
        <span className="font-medium">{title}</span>
        <ChevronDown
          className={`transition-transform duration-300 ${
            isOpen ? "transform rotate-180" : ""
          }`}
          size={20}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-4 bg-gray-50">{children}</div>
      </div>
    </div>
  );
};

// Main accordion component
export default function Accordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  const accordionData = AccData;

  return (
    <div className="w-full max-w-4xl mx-auto p-4 mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">FAQs </h2>
      <div className="w-full">
        {accordionData.map((item, index) => (
          <AccordionItem
            className="w-full"
            key={index}
            title={item.title}
            isOpen={index === openIndex}
            onToggle={() => toggleAccordion(index)}
          >
            {item.content}
          </AccordionItem>
        ))}
      </div>
    </div>
  );
}
