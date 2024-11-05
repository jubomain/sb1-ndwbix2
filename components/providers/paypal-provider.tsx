'use client';

import { useState, useEffect } from 'react';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';

const PAYPAL_CLIENT_ID = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || 'test';

const paypalOptions = {
  clientId: PAYPAL_CLIENT_ID,
  currency: 'USD',
  intent: 'capture',
  components: 'buttons',
  'disable-funding': 'credit,card',
};

export function PayPalProvider({ children }: { children: React.ReactNode }) {
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (PAYPAL_CLIENT_ID === 'test') {
      console.warn('PayPal Client ID not configured. Using test mode.');
    }
  }, []);

  return (
    <PayPalScriptProvider 
      options={paypalOptions}
      deferLoading={false}
      onError={(err) => setError(err.message)}
    >
      {error && (
        <Alert variant="destructive" className="fixed bottom-4 right-4 max-w-md z-50">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            Payment system temporarily unavailable. Please try again later.
          </AlertDescription>
        </Alert>
      )}
      {children}
    </PayPalScriptProvider>
  );
}