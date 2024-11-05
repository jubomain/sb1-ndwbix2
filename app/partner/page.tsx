'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { FileUpload, BookOpen, DollarSign, Users } from 'lucide-react';
import Image from 'next/image';

export default function PartnerPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-12">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h1 className="font-lora text-4xl font-bold">Become a Teaching Partner</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Share your expertise in African education and culture with young learners worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 text-center animate-slide-up">
              <BookOpen className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Create Courses</h3>
              <p className="text-muted-foreground">Design engaging educational content for young minds</p>
            </Card>
            <Card className="p-6 text-center animate-slide-up [animation-delay:200ms]">
              <DollarSign className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Earn Revenue</h3>
              <p className="text-muted-foreground">Receive 70% of revenue from your course sales</p>
            </Card>
            <Card className="p-6 text-center animate-slide-up [animation-delay:400ms]">
              <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Impact Lives</h3>
              <p className="text-muted-foreground">Shape the future of African education</p>
            </Card>
          </div>

          <Card className="p-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold mb-6">Partner Application</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="expertise">Area of Expertise</Label>
                    <Input id="expertise" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="experience">Teaching Experience</Label>
                    <Textarea id="experience" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="course-idea">Course Proposal</Label>
                    <Textarea id="course-idea" required />
                  </div>
                  <Button type="submit" className="w-full">Submit Application</Button>
                </form>
              </div>
              <div className="space-y-6">
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80"
                    alt="Teaching partner"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Why Partner With Us?</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <span>Access to a growing community of young learners</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <span>Professional course development support</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <span>Marketing and promotion of your courses</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <span>Competitive revenue sharing model</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}