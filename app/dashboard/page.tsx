import { Metadata } from 'next';
import { DashboardHeader } from '@/components/dashboard/header';
import { DashboardShell } from '@/components/dashboard/shell';
import { CourseProgress } from '@/components/dashboard/course-progress';
import { RecommendedCourses } from '@/components/dashboard/recommended-courses';
import { LearningStats } from '@/components/dashboard/learning-stats';
import { AITutor } from '@/components/dashboard/ai-tutor';

export const metadata: Metadata = {
  title: 'Dashboard - Uhuru Learning System',
  description: 'Your personalized learning dashboard',
};

export default function DashboardPage() {
  return (
    <DashboardShell>
      <DashboardHeader 
        heading="Welcome back, Learner"
        text="Track your progress and continue your learning journey."
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        <LearningStats className="md:col-span-2 lg:col-span-3" />
        <AITutor className="md:col-span-2 lg:col-span-4" />
        <CourseProgress className="md:col-span-2 lg:col-span-4" />
        <RecommendedCourses className="md:col-span-2 lg:col-span-3" />
      </div>
    </DashboardShell>
  );
}