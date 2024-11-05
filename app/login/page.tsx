import { AuthForm } from '@/components/auth/auth-form';
import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Login - Uhuru Learning System',
  description: 'Sign in to your Uhuru Learning System account',
};

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary flex flex-col items-center justify-center p-4">
      <Link href="/" className="mb-8">
        <Button variant="ghost" className="font-lora text-xl">Uhuru</Button>
      </Link>
      <AuthForm mode="login" />
      <p className="mt-4 text-muted-foreground">
        Don't have an account?{' '}
        <Link href="/signup" className="text-primary hover:underline">
          Sign up
        </Link>
      </p>
    </div>
  );
}