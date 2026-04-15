import React from 'react';
import { Star } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const testimonials = [
  {
    id: 1,
    name: 'Lauren Sanjat',
    role: 'CEO, Beauty and Spa',
    feedback: '"The quality of my LUXE CROWN wig is absolutely incredible! It looks and feels just like my natural hair. I get compliments everywhere I go."',
    rating: 5,
  },
  {
    id: 2,
    name: 'Sisca Markonah',
    role: 'Founder, Glow Studio',
    feedback: '"The HD lace is undetectable! I\'ve tried many wigs before but nothing compares to the seamless, natural look of LUXE CROWN. Truly premium quality."',
    rating: 5,
  },
  {
    id: 3,
    name: 'Amara Okafor',
    role: 'Hair Influencer',
    feedback: '"From ordering to delivery, the experience was flawless. The wig arrived beautifully packaged and the hair quality exceeded all my expectations."',
    rating: 4,
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="flex w-full flex-col items-center gap-12 px-4 py-12 md:px-16 md:py-20 mx-auto max-w-7xl">
      <h2 className="font-sans text-3xl font-normal leading-9 text-[#3d2b1f] text-center md:text-5xl md:font-bold md:leading-tight">
        Our Customer Feedback
      </h2>
      <div className="flex w-full flex-col flex-nowrap gap-4 items-stretch justify-center md:flex-row md:flex-wrap md:gap-6">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="flex min-w-72 grow shrink-0 basis-0 flex-col items-center gap-4 rounded-3xl bg-[#f5ede4] px-8 py-10 text-center">
            <Avatar className="w-16 h-16">
              <AvatarImage src="" alt={testimonial.name} className="object-cover" />
              <AvatarFallback className="bg-gray-200 text-[#3d2b1f] font-semibold">{testimonial.name.slice(0, 2)}</AvatarFallback>
            </Avatar>
            <span className="font-semibold text-[#3d2b1f]">
              {testimonial.name}
            </span>
            <span className="text-xs text-[#8b7b6b]">
              {testimonial.role}
            </span>
            <span className="font-sans text-sm font-normal leading-relaxed text-[#6b5b4f] italic">
              {testimonial.feedback}
            </span>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  className={`w-5 h-5 ${index < testimonial.rating ? 'fill-[#d4a574] text-[#d4a574]' : 'text-[#8b7b6b]'}`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
