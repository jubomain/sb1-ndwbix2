import { Metadata } from 'next';
import { CourseDetail } from '@/components/courses/course-detail';
import { getCourse } from '@/lib/courses';
import { notFound } from 'next/navigation';

interface CoursePageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: CoursePageProps): Promise<Metadata> {
  const course = getCourse(params.id);
  if (!course) return { title: 'Course Not Found' };
  
  return {
    title: `${course.title} - Uhuru Learning System`,
    description: course.description,
  };
}

export default function CoursePage({ params }: CoursePageProps) {
  const course = getCourse(params.id);
  if (!course) return notFound();

  return <CourseDetail course={course} />;
}