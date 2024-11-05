'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Loader2, Wand2 } from 'lucide-react';
import { toast } from 'sonner';

interface GeneratedBlog {
  title: string;
  content: string;
  imagePrompt: string;
}

export function BlogGenerator() {
  const [topic, setTopic] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedBlog, setGeneratedBlog] = useState<GeneratedBlog | null>(null);

  const generateBlog = async () => {
    if (!topic) {
      toast.error('Please enter a topic');
      return;
    }

    setIsGenerating(true);
    try {
      // This would be replaced with actual API call to OpenAI
      const response = await fetch('/api/admin/generate-blog', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic }),
      });

      if (!response.ok) throw new Error('Failed to generate blog');

      const blog = await response.json();
      setGeneratedBlog(blog);
      toast.success('Blog post generated successfully');
    } catch (error) {
      toast.error('Failed to generate blog post');
      console.error(error);
    } finally {
      setIsGenerating(false);
    }
  };

  const saveBlog = async () => {
    if (!generatedBlog) return;

    try {
      const response = await fetch('/api/admin/blogs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(generatedBlog),
      });

      if (!response.ok) throw new Error('Failed to save blog');

      toast.success('Blog post saved successfully');
      setGeneratedBlog(null);
      setTopic('');
    } catch (error) {
      toast.error('Failed to save blog post');
      console.error(error);
    }
  };

  return (
    <Card className="p-6">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold font-lora">AI Blog Generator</h2>
          <Button
            onClick={generateBlog}
            disabled={isGenerating || !topic}
          >
            {isGenerating ? (
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
            ) : (
              <Wand2 className="h-4 w-4 mr-2" />
            )}
            Generate Blog
          </Button>
        </div>

        <div className="space-y-2">
          <Label htmlFor="topic">Blog Topic</Label>
          <Input
            id="topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="Enter the blog topic..."
          />
          <p className="text-sm text-muted-foreground">
            Provide a topic related to African education, culture, or student success stories.
          </p>
        </div>

        {generatedBlog && (
          <div className="space-y-4 border rounded-lg p-4">
            <div className="space-y-2">
              <Label>Generated Title</Label>
              <Input value={generatedBlog.title} readOnly />
            </div>
            
            <div className="space-y-2">
              <Label>Generated Content</Label>
              <Textarea 
                value={generatedBlog.content} 
                readOnly 
                className="h-64"
              />
            </div>

            <div className="space-y-2">
              <Label>Image Prompt</Label>
              <Input value={generatedBlog.imagePrompt} readOnly />
              <p className="text-sm text-muted-foreground">
                Use this prompt with DALL-E or Midjourney to generate a relevant image.
              </p>
            </div>

            <div className="flex justify-end gap-4">
              <Button variant="outline" onClick={() => setGeneratedBlog(null)}>
                Discard
              </Button>
              <Button onClick={saveBlog}>Publish Blog</Button>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}