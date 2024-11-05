'use client';

import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function HomeButton() {
  const pathname = usePathname();
  
  // Don't show on home page
  if (pathname === '/') return null;

  return (
    <Button
      variant="ghost"
      size="icon"
      asChild
      className="fixed bottom-4 right-4 rounded-full shadow-lg bg-background/80 backdrop-blur-sm hover:bg-background/90 z-50"
    >
      <Link href="/">
        <Home className="h-5 w-5" />
        <span className="sr-only">Home</span>
      </Link>
    </Button>
  );
}