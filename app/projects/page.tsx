import { Metadata } from 'next';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Leaf, Users, Globe, Heart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from '@/hooks/use-translations';

export const metadata: Metadata = {
  title: 'Projects - Uhuru Learning System',
  description: 'Explore our student-led community projects and initiatives',
};

const projects = [
  {
    id: 1,
    title: 'Environmental Conservation',
    description: 'Students work with local communities to protect and preserve natural resources through sustainable practices.',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80',
    category: 'environment',
    impact: '500+ trees planted',
    participants: 48,
    location: 'Kenya',
    icon: Leaf,
  },
  {
    id: 2,
    title: 'Cultural Heritage Preservation',
    description: 'Documenting and preserving traditional stories, music, and art forms through digital media.',
    image: 'https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?auto=format&fit=crop&q=80',
    category: 'culture',
    impact: '200+ stories archived',
    participants: 35,
    location: 'Tanzania',
    icon: Heart,
  },
  {
    id: 3,
    title: 'Community Health Education',
    description: 'Students lead workshops on health, nutrition, and wellness in local communities.',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80',
    category: 'health',
    impact: '1000+ people reached',
    participants: 62,
    location: 'Uganda',
    icon: Users,
  },
];

export default function ProjectsPage() {
  const { t } = useTranslations();

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="font-lora text-4xl font-bold">{t.projects.title}</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t.projects.subtitle}
            </p>
          </div>

          <div className="grid gap-6">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden">
                <div className="md:grid md:grid-cols-2 gap-6">
                  <div className="relative h-48 md:h-full">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-2">
                      <project.icon className="h-5 w-5 text-primary" />
                      <Badge variant="secondary">
                        {t.projects.categories[project.category]}
                      </Badge>
                    </div>
                    <h2 className="text-2xl font-bold font-lora">{project.title}</h2>
                    <p className="text-muted-foreground">{project.description}</p>
                    <div className="grid grid-cols-2 gap-4 pt-4">
                      <div>
                        <div className="text-sm text-muted-foreground">{t.projects.impact}</div>
                        <div className="font-medium">{project.impact}</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">{t.projects.participants}</div>
                        <div className="font-medium">
                          {project.participants} {t.projects.stats.students}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 pt-2">
                      <Globe className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{project.location}</span>
                    </div>
                    <Button asChild className="w-full">
                      <Link href={`/projects/${project.id}`}>{t.projects.learnMore}</Link>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" asChild>
              <Link href="/partner">{t.projects.startProject}</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}