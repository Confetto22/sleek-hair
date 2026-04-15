import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    id: 'faq-1',
    question: 'Is it 100% human hair?',
    answer: 'Yes! We exclusively use 100% premium virgin human hair. Our wigs are unprocessed, cuticle-aligned, and carefully hand-selected to ensure natural luster, softness, and unmatched longevity.',
  },
  {
    id: 'faq-2',
    question: 'Do you need a head measurement for an order?',
    answer: 'Yes, we require head measurements for our wig orders. Providing your exact measurements guarantees a flawless, custom fit that feels secure and comfortable, preventing any shifting while giving you an undetectable hairline.',
  },
  {
    id: 'faq-3',
    question: 'Do you have a physical shop?',
    answer: 'No, we are an online-exclusive luxury boutique. By operating entirely online without the overhead costs of a physical storefront, we are able to maintain the highest quality standards while offering our premium human hair wigs at competitive prices.',
  },
  {
    id: 'faq-4',
    question: 'Is delivery expensive and do you deliver everywhere?',
    answer: 'We offer affordable, fast delivery straight to your doorstep, anywhere in the world! Physical distance is not a barrier to luxury.',
  },
  {
    id: 'faq-5',
    question: 'How long does shipping and custom curation take?',
    answer: 'Readily available wigs are dispatched and delivered within 48 hours. If you book a consultation for a custom request wig, we require 7 working days to painstakingly craft, treat, and perfect your custom order before delivery.',
  },
];

export const FaqSection = () => {
  return (
    <section className="flex w-full flex-col items-center gap-12 px-4 py-12 md:px-16 md:py-20 mx-auto max-w-7xl">
      <div className="flex flex-col items-center gap-4">
        <h2 className="font-sans text-3xl font-normal leading-9 text-[#3d2b1f] text-center md:text-5xl md:font-bold md:leading-tight">
          Frequently Asked Questions
        </h2>
        <p className="max-w-xl font-sans text-sm font-normal leading-relaxed text-[#8b7b6b] text-center">
          Our mission is to help you discover and enhance your natural radiance.
          Whether you&apos;re looking for skincare solutions, makeup inspiration,
          or wellness tips.
        </p>
      </div>
      <div className="flex w-full max-w-3xl flex-col items-center">
        <Accordion className="w-full space-y-4">
          {faqs.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id} className="border-none rounded-2xl bg-[#f5ede4] px-6">
              <AccordionTrigger className="w-full text-left font-semibold text-[#3d2b1f] hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-[#6b5b4f] pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
