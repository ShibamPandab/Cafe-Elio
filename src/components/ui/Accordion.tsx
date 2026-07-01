import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function AccordionItem({ question, answer, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div className="border-b hairline">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="focus-ring flex w-full items-center justify-between gap-6 py-6 text-left"
      >
        <span className="text-xl md:text-2xl font-serif">{question}</span>
        <span
          className={clsx(
            "shrink-0 text-2xl font-light text-accent transition-transform duration-300",
            isOpen && "rotate-45",
          )}
          aria-hidden="true"
        >
          +
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 max-w-2xl font-light text-dark/70 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Accordion({ items }: { items: { question: string; answer: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <div>
      {items.map((item, i) => (
        <AccordionItem
          key={item.question}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? null : i)}
        />
      ))}
    </div>
  );
}
