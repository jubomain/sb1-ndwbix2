'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

interface PlanFeature {
  text: string;
  included: boolean;
}

interface SubscriptionPlanProps {
  name: string;
  price: string;
  features: PlanFeature[];
  popular?: boolean;
}

const plans: SubscriptionPlanProps[] = [
  {
    name: 'Basic',
    price: '$9.99',
    features: [
      { text: 'Access to all basic courses', included: true },
      { text: 'Interactive quizzes', included: true },
      { text: 'Progress tracking', included: true },
      { text: 'Virtual classroom sessions', included: false },
      { text: 'One-on-one tutoring', included: false },
    ],
  },
  {
    name: 'Premium',
    price: '$19.99',
    features: [
      { text: 'Access to all courses', included: true },
      { text: 'Interactive quizzes', included: true },
      { text: 'Progress tracking', included: true },
      { text: 'Virtual classroom sessions', included: true },
      { text: 'One-on-one tutoring', included: true },
    ],
    popular: true,
  },
];

export function SubscriptionPlans() {
  return (
    <div className="grid md:grid-cols-2 gap-6 animate-slide-up">
      {plans.map((plan) => (
        <Card
          key={plan.name}
          className={`p-6 ${
            plan.popular
              ? 'border-primary shadow-lg scale-105'
              : ''
          }`}
        >
          {plan.popular && (
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2">
              <span className="bg-primary text-primary-foreground text-sm font-medium px-3 py-1 rounded-full">
                Popular
              </span>
            </div>
          )}
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold font-lora mb-2">{plan.name}</h3>
            <div className="text-3xl font-bold mb-2">{plan.price}</div>
            <div className="text-sm text-muted-foreground">per month</div>
          </div>
          <ul className="space-y-3 mb-6">
            {plan.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-center text-sm"
              >
                <Check
                  className={`h-4 w-4 mr-2 ${
                    feature.included ? 'text-secondary' : 'text-muted-foreground'
                  }`}
                />
                <span
                  className={
                    feature.included ? '' : 'text-muted-foreground line-through'
                  }
                >
                  {feature.text}
                </span>
              </li>
            ))}
          </ul>
          <Button
            className="w-full"
            variant={plan.popular ? 'default' : 'outline'}
          >
            Choose {plan.name}
          </Button>
        </Card>
      ))}
    </div>
  );
}