'use client';

import { Button } from '@/components/ui/button';
import { Brain } from 'lucide-react';
import Link from 'next/link';

interface HeaderProps {
  isSwahili: boolean;
  setIsSwahili: (value: boolean) => void;
}

export function Header({ isSwahili, setIsSwahili }: HeaderProps) {
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex flex-wrap justify-between items-center gap-4">
        <div className="flex items-center space-x-2">
          <Brain className="h-8 w-8 text-primary animate-float" />
          <span className="font-lora text-2xl font-bold">Uhuru</span>
        </div>
        <div className="flex items-center gap-4 flex-wrap">
          <Button variant="ghost" asChild>
            <Link href="/about">{isSwahili ? "Kuhusu" : "About"}</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/courses">{isSwahili ? "Kozi" : "Courses"}</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/guide">{isSwahili ? "Mwongozo" : "Guide"}</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/partner">{isSwahili ? "Shiriki" : "Partner"}</Link>
          </Button>
          <Button 
            variant="outline" 
            onClick={() => setIsSwahili(!isSwahili)}
            className="min-w-[100px]"
          >
            {isSwahili ? "English" : "Kiswahili"}
          </Button>
          <Button variant="outline" asChild>
            <Link href="/login">{isSwahili ? "Ingia" : "Login"}</Link>
          </Button>
          <Button asChild>
            <Link href="/signup">{isSwahili ? "Jisajili" : "Sign Up"}</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
}