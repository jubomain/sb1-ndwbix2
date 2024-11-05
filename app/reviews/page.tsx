import { Metadata } from 'next';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Quote } from 'lucide-react';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Reviews - Uhuru Learning System',
  description: 'See what our students and parents say about Uhuru Learning System',
};

const reviews = [
  {
    id: 1,
    name: 'Sarah M.',
    role: 'Parent',
    avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80',
    rating: 5,
    content: 'My children have grown so much in their understanding of African culture and heritage. The interactive learning approach keeps them engaged and excited to learn.',
    location: 'Nairobi, Kenya'
  },
  {
    id: 2,
    name: 'David O.',
    role: 'Student',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80',
    rating: 5,
    content: 'The virtual classrooms and cultural projects have helped me connect with my roots while learning valuable skills. The AI tutor is incredibly helpful!',
    location: 'Lagos, Nigeria'
  },
  {
    id: 3,
    name: 'Grace T.',
    role: 'Teacher',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80',
    rating: 5,
    content: 'As an educator, I appreciate how Uhuru combines traditional wisdom with modern teaching methods. The platform makes it easy to track student progress.',
    location: 'Accra, Ghana'
  }
];

export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h1 className="font-lora text-4xl font-bold">Student & Parent Reviews</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Hear from our community about their experiences with Uhuru Learning System
            </p>
          </div>

          <div className="grid gap-8">
            {reviews.map((review) => (
              <Card key={review.id} className="p-6">
                <div className="flex items-start gap-4">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={review.avatar}
                      alt={review.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 space-y-4">
                    <div>
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold">{review.name}</h3>
                          <p className="text-sm text-muted-foreground">{review.role}</p>
                        </div>
                        <div className="flex gap-1">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="relative">
                      <Quote className="h-8 w-8 text-primary/20 absolute -top-2 -left-2" />
                      <p className="text-muted-foreground relative z-10 pl-6">
                        {review.content}
                      </p>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {review.location}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg">
              Write a Review
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}