'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  Compass, BookOpen, Users, Brain, Video, BookOpenCheck, 
  GraduationCap, Globe2, Lightbulb, Menu, Scroll, Heart,
  BookMarked, Music, Palette, Sprout
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { useState } from 'react';
import { Header } from '@/components/home/header';
import { HeroSlider } from '@/components/home/hero-slider';

export default function HomeContent() {
  const [isSwahili, setIsSwahili] = useState(false);

  const translations = {
    hero: {
      title: isSwahili 
        ? "Kugundua Urithi Wako Kupitia Kujifunza" 
        : "Discover Your Heritage Through Learning",
      subtitle: isSwahili
        ? "Jukwaa la elimu linalotumia AI linalochanganya hekima ya Kiafrika na mbinu za kisasa za kujifunza, limeundwa kwa ajili ya akili changa zenye umri wa miaka 5-18"
        : "An AI-powered educational platform that combines African wisdom with modern learning techniques, designed for young minds aged 5-18",
      cta: {
        start: isSwahili ? "Anza Kujifunza" : "Start Learning",
        browse: isSwahili ? "Vinjari Kozi" : "Browse Courses"
      }
    },
    sections: {
      learningDojos: {
        title: isSwahili ? "Dojo za Kujifunza" : "Learning Dojos",
        subtitle: isSwahili 
          ? "Mazingira maalum ya kujifunza yanayokuza fikra za kina, ubunifu, na kujifunza kwa kujielekeza"
          : "Specialized learning environments that foster critical thinking, creativity, and self-guided exploration"
      },
      culturalArts: {
        title: isSwahili ? "Programu za Sanaa za Kitamaduni" : "Cultural Arts Programs",
        music: {
          title: isSwahili ? "Muziki wa Kiafrika" : "African Music",
          desc: isSwahili
            ? "Ngoma za jadi, kuimba, na mafunzo ya ala"
            : "Traditional drumming, singing, and instrumental instruction"
        },
        visualArts: {
          title: isSwahili ? "Sanaa za Kuona" : "Visual Arts",
          desc: isSwahili
            ? "Mbinu za sanaa za jadi na za kisasa za Kiafrika"
            : "Traditional and contemporary African art techniques"
        },
        dance: {
          title: isSwahili ? "Ngoma" : "Dance",
          desc: isSwahili
            ? "Aina za ngoma za jadi na za kisasa za Kiafrika"
            : "Traditional and modern African dance forms"
        },
        cultural: {
          title: isSwahili ? "Masomo ya Kitamaduni" : "Cultural Studies",
          desc: isSwahili
            ? "Uchunguzi wa kina wa mila na maadili ya Kiafrika"
            : "Deep exploration of African traditions and values"
        }
      },
      community: {
        title: isSwahili ? "Kuathiri Jamii" : "Impacting Communities",
        description: isSwahili
          ? "Wanafunzi wetu wanafanya kazi kwenye miradi halisi inayoshughulikia changamoto za ndani na kuleta mabadiliko chanya katika jamii zao"
          : "Our students work on real projects that address local challenges and create positive change in their communities",
        projects: {
          environmental: isSwahili ? "Miradi ya uhifadhi wa mazingira" : "Environmental conservation initiatives",
          farming: isSwahili ? "Mbinu za kilimo endelevu" : "Sustainable farming techniques",
          preservation: isSwahili ? "Miradi ya uhifadhi wa tamaduni" : "Cultural preservation projects",
          health: isSwahili ? "Programu za afya ya jamii" : "Community health programs"
        },
        cta: isSwahili ? "Chunguza Miradi Yetu" : "Explore Our Projects"
      },
      footer: {
        about: {
          title: isSwahili ? "Kuhusu Uhuru" : "About Uhuru",
          story: isSwahili ? "Historia Yetu" : "Our Story",
          team: isSwahili ? "Timu" : "Team",
          careers: isSwahili ? "Kazi" : "Careers"
        },
        rights: isSwahili ? "Haki zote zimehifadhiwa" : "All rights reserved"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <Header isSwahili={isSwahili} setIsSwahili={setIsSwahili} />

      <main className="pb-12">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center">
          <HeroSlider />
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="max-w-4xl mx-auto text-center text-white px-4">
              <h1 className="font-lora text-4xl lg:text-6xl font-bold mb-6 animate-slide-up">
                {translations.hero.title}
              </h1>
              <p className="text-lg lg:text-xl mb-8 lg:mb-12 animate-slide-up [animation-delay:200ms] px-4">
                {translations.hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 animate-slide-up [animation-delay:400ms]">
                <Button size="lg" asChild className="animate-pulse w-full sm:w-auto">
                  <Link href="/signup">{translations.hero.cta.start}</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="w-full sm:w-auto">
                  <Link href="/courses">{translations.hero.cta.browse}</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Learning Dojos Section */}
        <section className="container mx-auto px-4 py-12 lg:py-24">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-lora text-3xl lg:text-4xl font-bold mb-6">
              {translations.sections.learningDojos.title}
            </h2>
            <p className="text-lg text-muted-foreground">
              {translations.sections.learningDojos.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-animation">
            <Card className="p-6 hover:scale-105 transition-transform duration-300">
              <Scroll className="h-12 w-12 text-primary mb-4" />
              <h3 className="font-lora text-xl font-semibold mb-2">
                {isSwahili ? "Kujifunza Kwa Kujitegemea" : "Independent Study"}
              </h3>
              <p className="text-muted-foreground">
                {isSwahili 
                  ? "Chukua hatamu ya safari yako ya kujifunza"
                  : "Take charge of your learning journey with self-paced exploration"}
              </p>
            </Card>
            <Card className="p-6 hover:scale-105 transition-transform duration-300">
              <Heart className="h-12 w-12 text-primary mb-4" />
              <h3 className="font-lora text-xl font-semibold mb-2">
                {isSwahili ? "Uhusiano wa Kitamaduni" : "Cultural Connection"}
              </h3>
              <p className="text-muted-foreground">
                {isSwahili
                  ? "Unganisha na urithi wako kupitia uzoefu wa kitamaduni"
                  : "Connect with your heritage through immersive cultural experiences"}
              </p>
            </Card>
            <Card className="p-6 hover:scale-105 transition-transform duration-300">
              <BookMarked className="h-12 w-12 text-primary mb-4" />
              <h3 className="font-lora text-xl font-semibold mb-2">
                {isSwahili ? "Kujifunza kwa Miradi" : "Project-Based"}
              </h3>
              <p className="text-muted-foreground">
                {isSwahili
                  ? "Jifunze kupitia miradi inayotatua changamoto za jamii"
                  : "Learn through hands-on projects that solve real community challenges"}
              </p>
            </Card>
          </div>
        </section>

        {/* Cultural Arts Programs */}
        <section className="container mx-auto px-4 py-12 lg:py-24 bg-background rounded-3xl shadow-lg">
          <h2 className="font-lora text-3xl lg:text-4xl font-bold text-center mb-12">
            {translations.sections.culturalArts.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-animation">
            <Card className="p-6 hover:scale-105 transition-transform duration-300">
              <Music className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-lora text-lg font-semibold mb-2">
                {translations.sections.culturalArts.music.title}
              </h3>
              <p className="text-muted-foreground">
                {translations.sections.culturalArts.music.desc}
              </p>
            </Card>
            <Card className="p-6 hover:scale-105 transition-transform duration-300">
              <Palette className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-lora text-lg font-semibold mb-2">
                {translations.sections.culturalArts.visualArts.title}
              </h3>
              <p className="text-muted-foreground">
                {translations.sections.culturalArts.visualArts.desc}
              </p>
            </Card>
            <Card className="p-6 hover:scale-105 transition-transform duration-300">
              <Users className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-lora text-lg font-semibold mb-2">
                {translations.sections.culturalArts.dance.title}
              </h3>
              <p className="text-muted-foreground">
                {translations.sections.culturalArts.dance.desc}
              </p>
            </Card>
            <Card className="p-6 hover:scale-105 transition-transform duration-300">
              <Sprout className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-lora text-lg font-semibold mb-2">
                {translations.sections.culturalArts.cultural.title}
              </h3>
              <p className="text-muted-foreground">
                {translations.sections.culturalArts.cultural.desc}
              </p>
            </Card>
          </div>
        </section>

        {/* Community Impact */}
        <section className="container mx-auto px-4 py-12 lg:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-lora text-3xl lg:text-4xl font-bold">
                {translations.sections.community.title}
              </h2>
              <p className="text-lg text-muted-foreground">
                {translations.sections.community.description}
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span>{translations.sections.community.projects.environmental}</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span>{translations.sections.community.projects.farming}</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span>{translations.sections.community.projects.preservation}</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span>{translations.sections.community.projects.health}</span>
                </li>
              </ul>
              <Button asChild className="w-full sm:w-auto">
                <Link href="/projects">
                  {translations.sections.community.cta}
                </Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80"
                alt="Community impact"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-lora font-semibold mb-4 text-foreground">
                {translations.sections.footer.about.title}
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-foreground hover:text-primary">
                    {translations.sections.footer.about.story}
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="text-foreground hover:text-primary">
                    {translations.sections.footer.about.team}
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-foreground hover:text-primary">
                    {translations.sections.footer.about.careers}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-foreground">
            <p>&copy; {new Date().getFullYear()} Uhuru Learning System. {translations.sections.footer.rights}.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}