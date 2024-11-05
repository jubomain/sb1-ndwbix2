import { Metadata } from 'next';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog - Uhuru Learning System',
  description: 'Insights, updates, and stories from the Uhuru Learning community',
};

const posts = [
  {
    id: 1,
    title: 'The Importance of African-Centered Education',
    excerpt: 'Exploring how cultural connection enhances learning outcomes and builds stronger communities.',
    image: 'https://images.unsplash.com/photo-1503428593586-e225b39bddfe?auto=format&fit=crop&q=80',
    author: 'Dr. Amina Diallo',
    date: '2024-01-15',
    readTime: '5 min read',
    category: 'Education'
  },
  {
    id: 2,
    title: 'Technology and Traditional Learning Methods',
    excerpt: 'How AI and digital tools can complement traditional African teaching approaches.',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80',
    author: 'Prof. Kwame Mensah',
    date: '2024-01-10',
    readTime: '4 min read',
    category: 'Technology'
  },
  {
    id: 3,
    title: 'Student Success Stories',
    excerpt: 'Meet the young learners who are embracing their heritage while excelling academically.',
    image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80',
    author: 'Ms. Fatima Sy',
    date: '2024-01-05',
    readTime: '6 min read',
    category: 'Community'
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h1 className="font-lora text-4xl font-bold">Uhuru Blog</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Insights, stories, and updates from our learning community
            </p>
          </div>

          <div className="grid gap-8">
            {posts.map((post) => (
              <Card key={post.id} className="overflow-hidden">
                <div className="md:grid md:grid-cols-2 gap-6">
                  <div className="relative h-48 md:h-full">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 space-y-4">
                    <Badge>{post.category}</Badge>
                    <h2 className="text-2xl font-bold font-lora">
                      <Link href={`/blog/${post.id}`} className="hover:text-primary">
                        {post.title}
                      </Link>
                    </h2>
                    <p className="text-muted-foreground">{post.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </div>
                    </div>
                    <div className="pt-2">
                      <p className="text-sm font-medium">By {post.author}</p>
                    </div>
                    <Button variant="ghost" className="group" asChild>
                      <Link href={`/blog/${post.id}`}>
                        Read More
                        <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg">
              Load More Posts
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}