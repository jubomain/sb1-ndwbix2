'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Mail, 
  Bell, 
  Users,
  Loader2,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { toast } from 'sonner';

export function NotificationCenter() {
  const [type, setType] = useState<'email' | 'in-app'>('email');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [recipientType, setRecipientType] = useState<'all' | 'students' | 'parents' | 'teachers'>('all');
  const [isSending, setIsSending] = useState(false);

  const handleSend = async () => {
    if (!subject || !message) {
      toast.error('Please fill in all fields');
      return;
    }

    setIsSending(true);
    try {
      const response = await fetch('/api/admin/notifications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type,
          subject,
          message,
          recipientType,
        }),
      });

      if (!response.ok) throw new Error('Failed to send notification');

      toast.success('Notification sent successfully');
      setSubject('');
      setMessage('');
    } catch (error) {
      toast.error('Failed to send notification');
      console.error(error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <Card className="p-6">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold font-lora">Notification Center</h2>
          <Button
            onClick={handleSend}
            disabled={isSending || !subject || !message}
          >
            {isSending ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Bell className="h-4 w-4 mr-2" />
                Send Notification
              </>
            )}
          </Button>
        </div>

        <Tabs defaultValue="compose" className="space-y-4">
          <TabsList>
            <TabsTrigger value="compose">Compose</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>

          <TabsContent value="compose" className="space-y-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Notification Type</Label>
                <RadioGroup
                  defaultValue="email"
                  onValueChange={(value) => setType(value as 'email' | 'in-app')}
                  className="flex gap-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="email" id="email" />
                    <Label htmlFor="email" className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      Email
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="in-app" id="in-app" />
                    <Label htmlFor="in-app" className="flex items-center gap-2">
                      <Bell className="h-4 w-4" />
                      In-App
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label>Recipients</Label>
                <RadioGroup
                  defaultValue="all"
                  onValueChange={(value) => setRecipientType(value as any)}
                  className="flex flex-wrap gap-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="all" id="all" />
                    <Label htmlFor="all">All Users</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="students" id="students" />
                    <Label htmlFor="students">Students Only</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="parents" id="parents" />
                    <Label htmlFor="parents">Parents Only</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="teachers" id="teachers" />
                    <Label htmlFor="teachers">Teachers Only</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Enter notification subject..."
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Enter your message..."
                  className="h-32"
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="history">
            <div className="space-y-4">
              {/* Example notification history items */}
              <Card className="p-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-primary" />
                      <span className="font-medium">Welcome to Uhuru Learning</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Sent to: All Users
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Sent at: {new Date().toLocaleDateString()}
                    </p>
                  </div>
                  <CheckCircle className="h-5 w-5 text-green-500" />
                </div>
              </Card>
              
              <Card className="p-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Bell className="h-4 w-4 text-primary" />
                      <span className="font-medium">New Course Available</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Sent to: Students
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Sent at: {new Date().toLocaleDateString()}
                    </p>
                  </div>
                  <CheckCircle className="h-5 w-5 text-green-500" />
                </div>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Card>
  );
}