import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Globe, Users, Calendar, Target, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectPageProps {
  params: {
    id: string;
  };
}

const projects = [
  {
    id: '1',
    title: 'Environmental Conservation',
    description: 'Students work with local communities to protect and preserve natural resources through sustainable practices.',
    fullDescription: `Our environmental conservation project brings together students and local communities to address pressing ecological challenges. Through a combination of education, hands-on activities, and community engagement, we're working to create sustainable solutions for environmental preservation.

The project focuses on three main areas:
1. Tree planting and forest conservation
2. Waste management and recycling
3. Environmental education and awareness

Students learn valuable skills while making a real difference in their communities, and local residents benefit from improved environmental conditions and sustainable practices.`,
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80',
    category: 'Environment',
    impact: '500+ trees planted',
    participants: 48,
    location: 'Kenya',
    startDate: '2023-09-01',
    endDate: '2024-08-31',
    progress: 65,
    goals: [
      'Plant 1000 indigenous trees',
      'Establish 5 community gardens',
      'Train 200 community members in sustainable practices',
      'Reduce local waste by 30%'
    ],
    updates: [
      {
        date: '2024-01-15',
        title: 'Milestone Reached',
        content: 'Successfully planted our 500th tree with community participation'
      },
      {
        date: '2023-12-01',
        title: 'New Partnership',
        content: 'Formed alliance with local environmental organization'
      }
    ]
  }
];

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = projects.find(p => p.id === params.id);
  if (!project) return { title: 'Project Not Found' };
  
  return {
    title: `${project.title} - Uhuru Learning System`,
    description: project.description,
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find(p => p.id === params.id);
  if (!project) return notFound();

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <Badge variant="secondary" className="mb-4">
                {project.category}
              </Badge>
              <h1 className="text-3xl font-bold text-white font-lora mb-2">
                {project.title}
              </h1>
              <p className="text-white/90 text-lg max-w-2xl">
                {project.description}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6">
              <Users className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Participants</h3>
              <p className="text-2xl font-bold">{project.participants}</p>
              <p className="text-muted-foreground">Active students</p>
            </Card>
            <Card className="p-6">
              <Globe className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-2xl font-bold">{project.location}</p>
              <p className="text-muted-foreground">Project base</p>
            </Card>
            <Card className="p-6">
              <Target className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Progress</h3>
              <Progress value={project.progress} className="mb-2" />
              <p className="text-muted-foreground">{project.progress}% complete</p>
            </Card>
          </div>

          <Tabs defaultValue="overview" className="space-y-8">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="goals">Goals</TabsTrigger>
              <TabsTrigger value="updates">Updates</TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <Card className="p-6">
                <div className="prose max-w-none">
                  <p className="whitespace-pre-line">{project.fullDescription}</p>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="goals">
              <Card className="p-6">
                <h2 className="text-2xl font-bold font-lora mb-4">Project Goals</h2>
                <ul className="space-y-4">
                  {project.goals.map((goal, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-primary" />
                      <span>{goal}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </TabsContent>

            <TabsContent value="updates">
              <Card className="p-6">
                <h2 className="text-2xl font-bold font-lora mb-4">Project Updates</h2>
                <div className="space-y-4">
                  {project.updates.map((update, index) => (
                    <Card key={index} className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span className="text-sm text-muted-foreground">
                          {new Date(update.date).toLocaleDateString()}
                        </span>
                      </div>
                      <h3 className="font-semibold mb-2">{update.title}</h3>
                      <p className="text-muted-foreground">{update.content}</p>
                    </Card>
                  ))}
                </div>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="flex justify-center">
            <Button asChild>
              <Link href="/partner">Get Involved</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}