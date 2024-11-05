'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { BookOpen, Clock, Users, Award, Play } from 'lucide-react';
import Image from 'next/image';
import { Course } from '@/lib/courses';

interface CourseDetailProps {
  course: Course;
}

export function CourseDetail({ course }: CourseDetailProps) {
  const [selectedTab, setSelectedTab] = useState('overview');

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Hero Section */}
          <div className="relative h-[400px] rounded-lg overflow-hidden animate-scale-up">
            <Image
              src={course.image}
              alt={course.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary">{course.level}</Badge>
                <Badge variant="outline">{course.category}</Badge>
                <Badge variant="primary">Ages {course.ageGroup}</Badge>
              </div>
              <h1 className="text-3xl font-bold text-white font-lora mb-2">
                {course.title}
              </h1>
              <p className="text-white/90 text-lg max-w-2xl">
                {course.description}
              </p>
            </div>
          </div>

          {/* Course Info */}
          <div className="grid md:grid-cols-3 gap-6 stagger-animation">
            <Card className="p-6">
              <Clock className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Duration</h3>
              <p className="text-muted-foreground">{course.duration}</p>
            </Card>
            <Card className="p-6">
              <Users className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Instructor</h3>
              <p className="text-muted-foreground">{course.instructor}</p>
            </Card>
            <Card className="p-6">
              <Award className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Certificate</h3>
              <p className="text-muted-foreground">Upon completion</p>
            </Card>
          </div>

          {/* Course Content */}
          <Card className="animate-slide-up">
            <Tabs defaultValue="overview" className="p-6">
              <TabsList className="grid grid-cols-3 mb-6">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                <TabsTrigger value="resources">Resources</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <div className="prose max-w-none">
                  <h2 className="text-2xl font-bold font-lora mb-4">
                    Course Overview
                  </h2>
                  <p className="text-muted-foreground">
                    This comprehensive course will take you through various aspects
                    of {course.title.toLowerCase()}, providing both theoretical
                    knowledge and practical applications.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="font-semibold">What you'll learn:</h3>
                  <ul className="grid gap-2">
                    <li className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-primary" />
                      <span>Understanding core concepts and principles</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-primary" />
                      <span>Practical applications and exercises</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-primary" />
                      <span>Real-world project implementation</span>
                    </li>
                  </ul>
                </div>
              </TabsContent>

              <TabsContent value="curriculum" className="space-y-6">
                <h2 className="text-2xl font-bold font-lora mb-4">
                  Course Curriculum
                </h2>
                <div className="space-y-4">
                  {[1, 2, 3].map((module) => (
                    <Card key={module} className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold">Module {module}</h3>
                        <Badge variant="secondary">4 Lessons</Badge>
                      </div>
                      <Progress value={33 * module} className="mb-2" />
                      <p className="text-sm text-muted-foreground">
                        {33 * module}% Complete
                      </p>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="resources" className="space-y-6">
                <h2 className="text-2xl font-bold font-lora mb-4">
                  Learning Resources
                </h2>
                <div className="grid gap-4">
                  <Card className="p-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Play className="h-4 w-4 text-primary" />
                      <span>Introduction Video</span>
                    </div>
                    <Button variant="outline" size="sm">Watch</Button>
                  </Card>
                  <Card className="p-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-primary" />
                      <span>Course Workbook</span>
                    </div>
                    <Button variant="outline" size="sm">Download</Button>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </Card>

          {/* Enrollment CTA */}
          <Card className="p-8 animate-slide-up">
            <div className="text-center space-y-4">
              <h2 className="text-2xl font-bold font-lora">
                Ready to Start Learning?
              </h2>
              <p className="text-muted-foreground">
                Join thousands of students already learning on our platform
              </p>
              <Button size="lg" className="mt-4">
                Enroll Now
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}