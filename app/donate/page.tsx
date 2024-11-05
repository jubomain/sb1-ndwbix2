import { Metadata } from 'next';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Heart, BookOpen, Users, GraduationCap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Donate - Uhuru Learning System',
  description: 'Support African-centered education and make a difference',
};

const impactStats = [
  {
    icon: BookOpen,
    stat: '1000+',
    label: 'Students Supported'
  },
  {
    icon: Users,
    stat: '50+',
    label: 'Communities Reached'
  },
  {
    icon: GraduationCap,
    stat: '85%',
    label: 'Program Completion Rate'
  }
];

const donationTiers = [
  {
    amount: 25,
    description: 'Provides learning materials for one student'
  },
  {
    amount: 50,
    description: 'Sponsors one month of online classes'
  },
  {
    amount: 100,
    description: 'Funds a community learning project'
  },
  {
    amount: 250,
    description: 'Supports teacher training program'
  }
];

export default function DonatePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <Heart className="h-12 w-12 text-red-500 mx-auto animate-pulse" />
            <h1 className="font-lora text-4xl font-bold">Support Our Mission</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Your donation helps us provide quality African-centered education to more students
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {impactStats.map((stat, index) => (
              <Card key={index} className="p-6 text-center">
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">{stat.stat}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>

          <Card className="p-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold mb-6">Choose Amount</h2>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {donationTiers.map((tier) => (
                    <Card 
                      key={tier.amount}
                      className="p-4 cursor-pointer hover:border-primary transition-colors"
                    >
                      <div className="text-2xl font-bold mb-2">${tier.amount}</div>
                      <p className="text-sm text-muted-foreground">
                        {tier.description}
                      </p>
                    </Card>
                  ))}
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Custom Amount
                    </label>
                    <Input
                      type="number"
                      placeholder="Enter amount"
                      min="1"
                    />
                  </div>
                  <Button className="w-full" size="lg">
                    Donate Now
                  </Button>
                </div>
              </div>
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Your Impact</h2>
                <p className="text-muted-foreground">
                  Your donation directly supports:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Educational resources and materials</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Teacher training and development</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Technology infrastructure</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Community outreach programs</span>
                  </li>
                </ul>
                <div className="bg-muted p-4 rounded-lg">
                  <p className="text-sm">
                    All donations are tax-deductible. You will receive a receipt for your records.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}