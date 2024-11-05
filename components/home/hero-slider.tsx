'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const slides = [
  {
    url: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80',
    alt: 'Students collaborating on digital projects',
  },
  {
    url: 'https://images.unsplash.com/photo-1503945839639-aea48daa250f?auto=format&fit=crop&q=80',
    alt: 'Young learners using educational tablets',
  },
  {
    url: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80',
    alt: 'Cultural learning through technology',
  },
  {
    url: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80',
    alt: 'Interactive classroom session',
  },
];

export function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((curr) => (curr - 1 + slides.length) % slides.length);
  const next = () => setCurrent((curr) => (curr + 1) % slides.length);

  return (
    <div className="relative h-[90vh] w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.url}
          className={cn(
            'absolute inset-0 transition-transform duration-500 ease-in-out',
            index === current ? 'translate-x-0' : 'translate-x-full'
          )}
          style={{ transform: `translateX(${(index - current) * 100}%)` }}
        >
          <Image
            src={slide.url}
            alt={slide.alt}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/20 hover:bg-background/40 backdrop-blur-sm"
        onClick={prev}
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/20 hover:bg-background/40 backdrop-blur-sm"
        onClick={next}
      >
        <ChevronRight className="h-8 w-8" />
      </Button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={cn(
              'w-2 h-2 rounded-full transition-all',
              index === current ? 'bg-white w-4' : 'bg-white/50'
            )}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
}