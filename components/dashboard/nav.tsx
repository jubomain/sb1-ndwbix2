'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { 
  LayoutDashboard, 
  BookOpen, 
  Users, 
  Calendar,
  MessageSquare,
  Settings
} from 'lucide-react';

const items = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: LayoutDashboard,
  },
  {
    title: 'My Courses',
    href: '/dashboard/courses',
    icon: BookOpen,
  },
  {
    title: 'Community',
    href: '/dashboard/community',
    icon: Users,
  },
  {
    title: 'Schedule',
    href: '/dashboard/schedule',
    icon: Calendar,
  },
  {
    title: 'Messages',
    href: '/dashboard/messages',
    icon: MessageSquare,
  },
  {
    title: 'Settings',
    href: '/dashboard/settings',
    icon: Settings,
  },
];

export function DashboardNav() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center space-x-6">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            'flex items-center text-sm font-medium transition-colors hover:text-primary',
            pathname === item.href
              ? 'text-primary'
              : 'text-muted-foreground'
          )}
        >
          <item.icon className="w-4 h-4 mr-2" />
          {item.title}
        </Link>
      ))}
    </nav>
  );
}