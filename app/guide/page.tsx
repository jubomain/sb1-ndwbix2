import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookOpen, Video, Users, Calendar, Settings, Banknote } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function GuidePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h1 className="font-lora text-4xl font-bold">Platform Guide</h1>
            <p className="text-muted-foreground text-lg">
              Learn how to make the most of the Uhuru Learning System
            </p>
          </div>

          <Tabs defaultValue="students" className="space-y-8">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <TabsTrigger value="students">For Students</TabsTrigger>
              <TabsTrigger value="parents">For Parents</TabsTrigger>
              <TabsTrigger value="teachers">For Teachers</TabsTrigger>
              <TabsTrigger value="partners">For Partners</TabsTrigger>
            </TabsList>

            <TabsContent value="students" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="p-6 space-y-4">
                  <BookOpen className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-semibold">Getting Started</h3>
                  <ul className="space-y-2">
                    <li>• Create your student account</li>
                    <li>• Complete your profile</li>
                    <li>• Browse available courses</li>
                    <li>• Join your first class</li>
                  </ul>
                </Card>
                <Card className="p-6 space-y-4">
                  <Video className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-semibold">Virtual Classroom</h3>
                  <ul className="space-y-2">
                    <li>• Join live sessions</li>
                    <li>• Participate in discussions</li>
                    <li>• Submit assignments</li>
                    <li>• Track your progress</li>
                  </ul>
                </Card>
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80"
                  alt="Student learning"
                  fill
                  className="object-cover"
                />
              </div>
            </TabsContent>

            <TabsContent value="parents" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="p-6 space-y-4">
                  <Settings className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-semibold">Account Management</h3>
                  <ul className="space-y-2">
                    <li>• Set up parent account</li>
                    <li>• Add children profiles</li>
                    <li>• Manage subscriptions</li>
                    <li>• Monitor progress</li>
                  </ul>
                </Card>
                <Card className="p-6 space-y-4">
                  <Calendar className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-semibold">Schedule & Progress</h3>
                  <ul className="space-y-2">
                    <li>• View class schedules</li>
                    <li>• Track assignments</li>
                    <li>• Review performance</li>
                    <li>• Contact teachers</li>
                  </ul>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="teachers" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="p-6 space-y-4">
                  <Users className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-semibold">Class Management</h3>
                  <ul className="space-y-2">
                    <li>• Create virtual classrooms</li>
                    <li>• Manage student roster</li>
                    <li>• Schedule sessions</li>
                    <li>• Grade assignments</li>
                  </ul>
                </Card>
                <Card className="p-6 space-y-4">
                  <BookOpen className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-semibold">Course Creation</h3>
                  <ul className="space-y-2">
                    <li>• Design curriculum</li>
                    <li>• Upload materials</li>
                    <li>• Create assessments</li>
                    <li>• Track progress</li>
                  </ul>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="partners" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="p-6 space-y-4">
                  <BookOpen className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-semibold">Course Publishing</h3>
                  <ul className="space-y-2">
                    <li>• Submit course proposals</li>
                    <li>• Create course content</li>
                    <li>• Set pricing</li>
                    <li>• Publish courses</li>
                  </ul>
                </Card>
                <Card className="p-6 space-y-4">
                  <Banknote className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-semibold">Revenue & Analytics</h3>
                  <ul className="space-y-2">
                    <li>• Track enrollments</li>
                    <li>• Monitor revenue</li>
                    <li>• View analytics</li>
                    <li>• Manage payments</li>
                  </ul>
                </Card>
              </div>
            </TabsContent>
          </Tabs>

          <div className="text-center">
            <Button asChild>
              <Link href="/partner">Become a Partner</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}