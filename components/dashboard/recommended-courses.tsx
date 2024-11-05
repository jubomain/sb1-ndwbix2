import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface RecommendedCoursesProps extends React.HTMLAttributes<HTMLDivElement> {}

export function RecommendedCourses({ className, ...props }: RecommendedCoursesProps) {
  const recommendations = [
    {
      id: 1,
      title: 'African History Fundamentals',
      description: 'Learn about the rich history of African civilizations',
      level: 'Beginner',
    },
    {
      id: 2,
      title: 'Traditional Art Forms',
      description: 'Explore various African art techniques and their meanings',
      level: 'Intermediate',
    },
  ];

  return (
    <Card className={className} {...props}>
      <CardHeader>
        <CardTitle>Recommended Courses</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recommendations.map((course) => (
            <Card key={course.id} className="p-4">
              <h3 className="font-semibold">{course.title}</h3>
              <p className="text-sm text-muted-foreground mb-2">{course.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm">{course.level}</span>
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/courses/${course.id}`}>View Course</Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}