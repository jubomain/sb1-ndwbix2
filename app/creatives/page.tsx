import { Metadata } from 'next';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Trophy, Heart, Share2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Creative Showcase - Uhuru Learning System',
  description: 'Discover amazing projects by our talented students',
};

const projects = [
  {
    id: 1,
    title: 'Digital African Art Gallery',
    student: 'Amara K.',
    age: 15,
    description: 'A digital collection of traditional African art recreated using modern tools.',
    image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&q=80',
    likes: 234,
    shares: 45,
    badges: ['Art Excellence', 'Cultural Innovation'],
    achievements: ['Top Creator', 'Community Favorite'],
  },
  {
    id: 2,
    title: 'Traditional Music Remix',
    student: 'Kwame O.',
    age: 16,
    description: 'Blending traditional African rhythms with modern electronic music.',
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80',
    likes: 189,
    shares: 32,
    badges: ['Music Master', 'Digital Innovation'],
    achievements: ['Rising Star', '100 Days Streak'],
  },
];

const achievements = [
  {
    icon: Star,
    title: 'Course Completion',
    description: 'Earn badges for completing courses',
    rewards: ['Knowledge Badge', 'Course Certificate'],
  },
  {
    icon: Trophy,
    title: 'Creative Excellence',
    description: 'Recognition for outstanding projects',
    rewards: ['Excellence Badge', 'Feature Showcase'],
  },
  {
    icon: Heart,
    title: 'Community Impact',
    description: 'Making a difference through creativity',
    rewards: ['Impact Badge', 'Community Award'],
  },
];

export default function CreativesPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container py-12">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h1 className="font-lora text-4xl font-bold">Creative Showcase</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover amazing projects by our talented students and earn rewards for your creativity
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="p-6 text-center">
                <achievement.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                <p className="text-muted-foreground mb-4">{achievement.description}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {achievement.rewards.map((reward, i) => (
                    <Badge key={i} variant="secondary">{reward}</Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          <div className="grid gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden">
                <div className="md:grid md:grid-cols-2 gap-6">
                  <div className="relative h-64 md:h-auto">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.badges.map((badge) => (
                        <Badge key={badge} variant="secondary">{badge}</Badge>
                      ))}
                    </div>
                    <h2 className="text-2xl font-bold font-lora">{project.title}</h2>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{project.student}</span>
                      <span className="text-muted-foreground">• {project.age} years old</span>
                    </div>
                    <p className="text-muted-foreground">{project.description}</p>
                    <div className="flex items-center gap-6">
                      <Button variant="ghost" className="gap-2">
                        <Heart className="h-4 w-4" />
                        {project.likes}
                      </Button>
                      <Button variant="ghost" className="gap-2">
                        <Share2 className="h-4 w-4" />
                        {project.shares}
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.achievements.map((achievement) => (
                        <Badge key={achievement} variant="outline" className="gap-1">
                          <Trophy className="h-3 w-3" />
                          {achievement}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg">
              <Link href="/dashboard">Share Your Project</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}