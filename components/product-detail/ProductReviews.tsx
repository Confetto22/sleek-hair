import React from "react";
import { Star, Check } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const REVIEWS = [
  {
    author: "Lauren S.",
    date: "2 weeks ago",
    verified: true,
    rating: 5,
    text: "Absolutely stunning! The hair is so silky and the lace is truly invisible. I wore it to a wedding and received so many compliments. Best wig purchase I have ever made.",
    image: "https://images.unsplash.com/photo-1611042553365-9b101441c135?w=400&q=80",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80"
  },
  {
    author: "Amara O.",
    date: "1 month ago",
    verified: true,
    rating: 5,
    text: "This is my third LUXE CROWN wig and they never disappoint. The HD lace is truly undetectable — even my hairstylist couldn't tell it was a wig! The density is perfect and the hair has minimal shedding.",
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1bf98c?w=100&q=80"
  },
  {
    author: "Jasmine T.",
    date: "2 months ago",
    verified: true,
    rating: 4,
    text: "Beautiful wig with great quality hair. The pre-plucked hairline saved me so much time. Shipping was fast and the packaging felt very premium. I ordered the 20-inch and the length was exactly as described.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80"
  }
];

export const ProductReviews = () => {
  return (
    <div className="flex w-full flex-col items-start gap-10">
      <h2 className="text-3xl md:text-4xl text-[#3d2b1f] font-normal leading-tight">
        What Our Customers Say
      </h2>

      <div className="flex w-full flex-wrap items-start gap-12 md:flex-row flex-col">
        {/* Left Rating Block */}
        <div className="flex flex-col items-center gap-2">
          <span className="text-6xl text-[#3d2b1f] font-normal">4.8</span>
          <div className="flex items-center gap-0.5">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-5 h-5 text-[#d4a574] fill-[#d4a574]" />
            ))}
          </div>
          <span className="text-sm text-[#8b7b6b] mt-1">Based on 96 reviews</span>
        </div>

        {/* Progress Bars */}
        <div className="flex min-w-[240px] max-w-sm grow flex-col gap-3">
          {[
            { stars: 5, percent: 80 },
            { stars: 4, percent: 15 },
            { stars: 3, percent: 3 },
            { stars: 2, percent: 1 },
            { stars: 1, percent: 1 },
          ].map((row) => (
            <div key={row.stars} className="flex w-full items-center gap-3">
              <span className="w-8 flex-none text-xs text-[#8b7b6b]">{row.stars} ★</span>
              <Progress value={row.percent} />
              <span className="w-8 flex-none text-xs text-[#8b7b6b] text-right">{row.percent}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* Review Cards */}
      <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {REVIEWS.map((review, idx) => (
          <div key={idx} className="flex flex-col items-start gap-4 rounded-2xl bg-white p-6 shadow-sm border border-[#e8d5c4]/50">
            <div className="flex w-full items-center gap-3">
              <Avatar className="w-12 h-12">
                <AvatarImage src={review.avatar} />
                <AvatarFallback>{review.author.substring(0, 2).toUpperCase()}</AvatarFallback>
              </Avatar>
              <div className="flex flex-col grow items-start">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-[#3d2b1f]">{review.author}</span>
                  {review.verified && (
                    <Badge variant="outline" className="text-[10px] h-5 bg-[#e8f5e9] text-[#2e7d32] border-[#2e7d32]/20 font-medium tracking-wide flex items-center shrink-0">
                      <Check className="w-3 h-3 mr-1" />
                      Verified
                    </Badge>
                  )}
                </div>
                <span className="text-xs text-[#8b7b6b]">{review.date}</span>
              </div>
            </div>

            <div className="flex items-center gap-0.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`w-4 h-4 ${star <= review.rating ? "text-[#d4a574] fill-[#d4a574]" : "text-[#8b7b6b]"}`}
                />
              ))}
            </div>

            <p className="text-sm text-[#6b5b4f] leading-relaxed">
              {review.text}
            </p>

            {review.image && (
              <img
                className="mt-2 h-32 w-full rounded-xl object-cover border border-[#e8d5c4]/30"
                src={review.image}
                alt="Review Attachment"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
