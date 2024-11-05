'use client';

import { Button } from '@/components/ui/button';
import { 
  Facebook, 
  Linkedin, 
  Twitter, 
  Youtube, 
  Link as LinkIcon,
  Heart
} from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface SocialButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  vertical?: boolean;
}

export function SocialButtons({ vertical = false, className, ...props }: SocialButtonProps) {
  const socialLinks = [
    {
      name: 'Facebook',
      icon: Facebook,
      href: 'https://facebook.com/uhuru-learning',
      color: 'hover:text-[#1877F2]'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com/company/uhuru-learning',
      color: 'hover:text-[#0A66C2]'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      href: 'https://twitter.com/uhuru_learning',
      color: 'hover:text-[#1DA1F2]'
    },
    {
      name: 'YouTube',
      icon: Youtube,
      href: 'https://youtube.com/@uhuru_learning',
      color: 'hover:text-[#FF0000]'
    },
    {
      name: 'Linktree',
      icon: LinkIcon,
      href: 'https://linktr.ee/uhuru_learning',
      color: 'hover:text-[#43E660]'
    }
  ];

  return (
    <div 
      className={cn(
        'flex gap-2 transition-all',
        vertical ? 'flex-col fixed left-4 top-1/2 -translate-y-1/2 z-50' : 'flex-row',
        className
      )}
      {...props}
    >
      {socialLinks.map((social) => (
        <Button
          key={social.name}
          variant="ghost"
          size="icon"
          asChild
          className={cn(
            'rounded-full bg-background/80 backdrop-blur-sm hover:bg-background/90 transition-colors',
            social.color
          )}
        >
          <a 
            href={social.href} 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label={social.name}
          >
            <social.icon className="h-5 w-5" />
          </a>
        </Button>
      ))}
      <Button
        asChild
        className="bg-red-500 hover:bg-red-600 text-white rounded-full px-6"
      >
        <Link href="/donate">
          <Heart className="h-5 w-5 mr-2" />
          Donate
        </Link>
      </Button>
    </div>
  );
}