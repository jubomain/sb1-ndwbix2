'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Loader2, Wand2 } from 'lucide-react';
import { toast } from 'sonner';

interface GeneratedCourse {
  title: string;
  description: string;
  modules: {
    title: string;
    lessons: {
      title: string;
      content: string;
      duration: string;
      resources: string[];
    }[];
  }[];
}

export function CourseGenerator() {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedCourse, setGeneratedCourse] = useState<GeneratedCourse | null>(null);

  const generateCourse = async () => {
    if (!prompt) {
      toast.error('Please enter a course prompt');
      return;
    }

    setIsGenerating(true);
    try {
      // This would be replaced with actual API call to OpenAI
      const response = await fetch('/api/admin/generate-course', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) throw new Error('Failed to generate course');

      const course = await response.json();
      setGeneratedCourse(course);
      toast.success('Course generated successfully');
    } catch (error) {
      toast.error('Failed to generate course');
      console.error(error);
    } finally {
      setIsGenerating(false);
    }
  };

  const saveCourse = async () => {
    if (!generatedCourse) return;

    try {
      const response = await fetch('/api/admin/courses', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(generatedCourse),
      });

      if (!response.ok) throw new Error('Failed to save course');

      toast.success('Course saved successfully');
      setGeneratedCourse(null);
      setPrompt('');
    } catch (error) {
      toast.error('Failed to save course');
      console.error(error);
    }
  };

  return (
    <Card className="p-6">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold font-lora">AI Course Generator</h2>
          <Button
            onClick={generateCourse}
            disabled={isGenerating || !prompt}
          >
            {isGenerating ? (
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
            ) : (
              <Wand2 className="h-4 w-4 mr-2" />
            )}
            Generate Course
          </Button>
        </div>

        <div className="space-y-2">
          <Label htmlFor="prompt">Course Prompt</Label>
          <Textarea
            id="prompt"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe the course you want to generate..."
            className="h-32"
          />
          <p className="text-sm text-muted-foreground">
            Be specific about the target age group, learning objectives, and desired outcomes.
          </p>
        </div>

        {generatedCourse && (
          <div className="space-y-4 border rounded-lg p-4">
            <h3 className="text-xl font-semibold">{generatedCourse.title}</h3>
            <p className="text-muted-foreground">{generatedCourse.description}</p>
            
            <div className="space-y-4">
              {generatedCourse.modules.map((module, index) => (
                <div key={index} className="border-l-2 border-primary pl-4">
                  <h4 className="font-semibold">{module.title}</h4>
                  <ul className="mt-2 space-y-2">
                    {module.lessons.map((lesson, lessonIndex) => (
                      <li key={lessonIndex} className="text-sm">
                        {lesson.title} ({lesson.duration})
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="flex justify-end gap-4 mt-6">
              <Button variant="outline" onClick={() => setGeneratedCourse(null)}>
                Discard
              </Button>
              <Button onClick={saveCourse}>Save Course</Button>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}