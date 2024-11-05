import { Metadata } from 'next';
import { VirtualClassroom } from '@/components/dashboard/virtual-classroom';

export const metadata: Metadata = {
  title: 'Virtual Classroom - Uhuru Learning System',
  description: 'Join your virtual classroom session',
};

export default function ClassroomPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="space-y-4">
            <h1 className="font-lora text-4xl font-bold">Virtual Classroom</h1>
            <p className="text-muted-foreground text-lg">
              Welcome to your interactive learning session
            </p>
          </div>
          <VirtualClassroom />
        </div>
      </div>
    </div>
  );
}