'use client';

import { cn } from '@/lib/utils';
import { DashboardNav } from '@/components/dashboard/nav';
import { UserNav } from '@/components/dashboard/user-nav';
import { ModeToggle } from '@/components/mode-toggle';
import { Brain } from 'lucide-react';
import Link from 'next/link';

interface DashboardShellProps extends React.HTMLAttributes<HTMLDivElement> {}

export function DashboardShell({ children, className, ...props }: DashboardShellProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center space-x-2">
              <Brain className="h-6 w-6 text-primary" />
              <span className="font-lora font-bold">Uhuru</span>
            </Link>
            <DashboardNav />
          </div>
          <div className="flex items-center gap-4">
            <ModeToggle />
            <UserNav />
          </div>
        </div>
      </header>
      <main className="flex-1 container py-8">
        <div className={cn('flex-1 space-y-8', className)} {...props}>
          {children}
        </div>
      </main>
    </div>
  );
}