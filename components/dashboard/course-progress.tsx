'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

interface CourseProgressProps extends React.HTMLAttributes<HTMLDivElement> {}

export function CourseProgress({ className, ...props }: CourseProgressProps) {
  const courses = [
    {
      id: 1,
      title: 'African Philosophy and Ethics',
      progress: 65,
      totalLessons: 12,
      completedLessons: 8,
    },
    {
      id: 2,
      title: 'Traditional African Art Forms',
      progress: 30,
      totalLessons: 10,
      completedLessons: 3,
    },
  ];

  return (
    <Card className={className} {...props}>
      <CardHeader>
        <CardTitle>Course Progress</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {courses.map((course) => (
            <div key={course.id} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="font-medium leading-none">{course.title}</p>
                  <p className="text-sm text-muted-foreground">
                    {course.completedLessons} of {course.totalLessons} lessons completed
                  </p>
                </div>
                <span className="text-sm font-medium">{course.progress}%</span>
              </div>
              <Progress value={course.progress} />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}