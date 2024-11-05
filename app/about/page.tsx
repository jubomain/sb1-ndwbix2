import { Metadata } from 'next';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Users, Brain, Globe } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About - Uhuru Learning System',
  description: 'Learn about our mission to provide African-centered education',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <div className="container py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Hero Section */}
          <div className="text-center space-y-6 animate-slide-up">
            <h1 className="font-lora text-4xl font-bold">
              Cultivating Freedom Through African-Centered Education
            </h1>
            <p className="text-lg text-muted-foreground">
              At the heart of our mission lies the commitment to nurturing the next generation 
              of self-reliant, socially responsible, and culturally aware individuals.
            </p>
          </div>

          {/* Mission Statement */}
          <Card className="p-8 animate-slide-up [animation-delay:200ms]">
            <div className="flex items-start gap-6">
              <Brain className="h-12 w-12 text-primary flex-shrink-0" />
              <div className="space-y-4">
                <h2 className="text-2xl font-bold font-lora">Our Mission</h2>
                <p className="text-muted-foreground">
                  The term "Uhuru," meaning "freedom" in Swahili, underscores our philosophy—empowering 
                  young learners to lead lives of intellectual and emotional freedom while embracing 
                  responsibility to their communities.
                </p>
              </div>
            </div>
          </Card>

          {/* Key Features */}
          <div className="grid md:grid-cols-2 gap-6 stagger-animation">
            <Card className="p-6">
              <BookOpen className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Project-Based Learning</h3>
              <p className="text-muted-foreground">
                Our educational model emphasizes hands-on, real-world applications of academic concepts,
                ensuring students can apply what they learn to benefit their communities.
              </p>
            </Card>
            <Card className="p-6">
              <Users className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Learning Dojos</h3>
              <p className="text-muted-foreground">
                Specialized learning environments that foster critical thinking, creativity, and 
                self-guided exploration, inspired by both Western and Eastern educational philosophies.
              </p>
            </Card>
          </div>

          {/* Cultural Focus */}
          <div className="relative rounded-lg overflow-hidden animate-scale-up">
            <Image
              src="https://images.unsplash.com/photo-1544928147-79a2dbc1f389?auto=format&fit=crop&q=80"
              alt="African cultural education"
              width={800}
              height={400}
              className="object-cover w-full h-[400px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-8 text-white">
                <h2 className="text-2xl font-bold font-lora mb-4">
                  African Heritage & Global Competence
                </h2>
                <p className="max-w-2xl">
                  We ground students in African heritage, culture, and values while equipping them 
                  with the skills needed to thrive in a globalized world.
                </p>
              </div>
            </div>
          </div>

          {/* Community Impact */}
          <Card className="p-8 animate-slide-up">
            <div className="flex items-start gap-6">
              <Globe className="h-12 w-12 text-primary flex-shrink-0" />
              <div className="space-y-4">
                <h2 className="text-2xl font-bold font-lora">Community Impact</h2>
                <p className="text-muted-foreground mb-6">
                  Students are guided to use their education to impact their communities positively. 
                  Through collaboration with community leaders, organizations, and local experts, 
                  our students address real-world challenges and create meaningful solutions.
                </p>
                <Button asChild>
                  <Link href="/partner">Join Our Mission</Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}