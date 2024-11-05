import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import Link from 'next/link';

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  instructor: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  category: string;
  ageGroup: string;
}

export function CourseCard({
  id,
  title,
  description,
  image,
  instructor,
  duration,
  level,
  category,
  ageGroup,
}: CourseCardProps) {
  return (
    <Card className="overflow-hidden flex flex-col">
      <div className="relative h-48">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex flex-wrap gap-2 mb-3">
          <Badge variant="secondary">{level}</Badge>
          <Badge variant="outline">{category}</Badge>
          <Badge variant="primary">Ages {ageGroup}</Badge>
        </div>
        <h3 className="font-lora text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4 flex-1">{description}</p>
        <div className="space-y-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">By {instructor}</span>
            <span className="text-muted-foreground">{duration}</span>
          </div>
          <Button asChild className="w-full">
            <Link href={`/courses/${id}`}>View Course</Link>
          </Button>
        </div>
      </div>
    </Card>
  );
}