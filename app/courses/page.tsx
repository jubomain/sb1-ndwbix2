import { Metadata } from 'next';
import { CourseCard } from '@/components/courses/course-card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Filter } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Courses - Uhuru Learning System',
  description: 'Browse our collection of African-centered courses for young learners',
};

const courses = [
  {
    id: '1',
    title: 'African Tales for Kids',
    description: 'Explore magical stories and fables from across Africa, perfect for young readers.',
    image: 'https://images.unsplash.com/photo-1503945839639-aea48daa250f?auto=format&fit=crop&q=80',
    instructor: 'Ms. Amina Diallo',
    duration: '4 weeks',
    level: 'Beginner' as const,
    category: 'Literature',
    ageGroup: '5-8',
  },
  {
    id: '2',
    title: 'Junior African History',
    description: 'Learn about ancient African kingdoms and civilizations in a fun, interactive way.',
    image: 'https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?auto=format&fit=crop&q=80',
    instructor: 'Mr. Kwame Mensah',
    duration: '6 weeks',
    level: 'Intermediate' as const,
    category: 'History',
    ageGroup: '9-12',
  },
  {
    id: '3',
    title: 'African Music & Dance',
    description: 'Experience the rhythm and joy of traditional African music and dance.',
    image: 'https://images.unsplash.com/photo-1516663235285-845fac339ca7?auto=format&fit=crop&q=80',
    instructor: 'Mrs. Fatima Sy',
    duration: '8 weeks',
    level: 'Beginner' as const,
    category: 'Arts',
    ageGroup: '5-12',
  },
  {
    id: '4',
    title: 'Teen Literature Journey',
    description: 'Discover contemporary African literature and develop critical thinking skills.',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80',
    instructor: 'Dr. Chinua Okonkwo',
    duration: '10 weeks',
    level: 'Advanced' as const,
    category: 'Literature',
    ageGroup: '13-18',
  },
  {
    id: '5',
    title: 'African Science & Innovation',
    description: 'Learn about African contributions to science and modern innovations.',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80',
    instructor: 'Prof. Nadia Ahmed',
    duration: '8 weeks',
    level: 'Intermediate' as const,
    category: 'Science',
    ageGroup: '13-18',
  },
  {
    id: '6',
    title: 'African Art for Kids',
    description: 'Create beautiful artwork inspired by African traditions and cultures.',
    image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&q=80',
    instructor: 'Ms. Zara Kone',
    duration: '6 weeks',
    level: 'Beginner' as const,
    category: 'Arts',
    ageGroup: '5-12',
  },
];

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8">
        <div className="flex flex-col gap-8">
          <div className="space-y-4">
            <h1 className="font-lora text-4xl font-bold">Explore Courses</h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Discover our collection of age-appropriate courses designed to connect young learners with African knowledge, wisdom, and culture.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search courses..."
                className="pl-10"
              />
            </div>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filters
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}