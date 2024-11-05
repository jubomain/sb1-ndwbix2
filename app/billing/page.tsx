import { Metadata } from 'next';
import { SubscriptionPlans } from '@/components/billing/subscription-card';

export const metadata: Metadata = {
  title: 'Billing - Uhuru Learning System',
  description: 'Manage your subscription and billing',
};

export default function BillingPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="font-lora text-4xl font-bold">Choose Your Plan</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Select the perfect learning plan for your child's educational journey
            </p>
          </div>
          <SubscriptionPlans />
        </div>
      </div>
    </div>
  );
}