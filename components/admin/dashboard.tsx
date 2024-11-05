'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { NotificationCenter } from '@/components/admin/notification-center';
import { CourseGenerator } from '@/components/admin/course-generator';
import { BlogGenerator } from '@/components/admin/blog-generator';
import { ApiKeysManager } from '@/components/admin/api-keys';

export function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="container py-8">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold font-lora">Admin Dashboard</h1>
          <p className="text-muted-foreground">Manage your educational platform</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="blog">Blog</TabsTrigger>
            <TabsTrigger value="shop">Shop</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <Card className="p-6">
              <h2 className="text-2xl font-bold font-lora mb-4">Platform Overview</h2>
              {/* Overview content */}
            </Card>
          </TabsContent>

          <TabsContent value="courses">
            <CourseGenerator />
          </TabsContent>

          <TabsContent value="blog">
            <BlogGenerator />
          </TabsContent>

          <TabsContent value="notifications">
            <NotificationCenter />
          </TabsContent>

          <TabsContent value="settings">
            <ApiKeysManager />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}