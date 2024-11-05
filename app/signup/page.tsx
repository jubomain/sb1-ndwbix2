import { AuthForm } from '@/components/auth/auth-form';
import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Sign Up - Uhuru Learning System',
  description: 'Create your Uhuru Learning System account',
};

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary flex flex-col items-center justify-center p-4">
      <Link href="/" className="mb-8">
        <Button variant="ghost" className="font-lora text-xl">Uhuru</Button>
      </Link>
      <AuthForm mode="signup" />
      <p className="mt-4 text-muted-foreground">
        Already have an account?{' '}
        <Link href="/login" className="text-primary hover:underline">
          Sign in
        </Link>
      </p>
    </div>
  );
}