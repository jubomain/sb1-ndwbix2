'use client';

import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useCart } from '@/hooks/use-cart';
import { loadStripe } from '@stripe/stripe-js';
import { PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js';
import Image from 'next/image';
import { toast } from 'sonner';

interface CheckoutModalProps {
  open: boolean;
  onClose: () => void;
}

export function CheckoutModal({ open, onClose }: CheckoutModalProps) {
  const { items, total, clearCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState<'stripe' | 'paypal'>('stripe');
  const [{ isInitial, isPending, isResolved, isRejected }] = usePayPalScriptReducer();

  const handleStripeCheckout = async () => {
    try {
      const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY!);
      const response = await fetch('/api/checkout/stripe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ items }),
      });
      
      if (!response.ok) throw new Error('Checkout failed');
      
      const session = await response.json();
      await stripe?.redirectToCheckout({ sessionId: session.id });
    } catch (error) {
      toast.error('Checkout failed. Please try again.');
    }
  };

  const handlePayPalCheckout = async (data: any) => {
    try {
      await data.order.capture();
      clearCart();
      onClose();
      toast.success('Payment successful!');
    } catch (error) {
      toast.error('Payment failed. Please try again.');
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Checkout</DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          <div className="space-y-2">
            {items.map((item) => (
              <div key={item.id} className="flex justify-between">
                <span>{item.name} x{item.quantity}</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <div className="border-t pt-2 font-bold">
              <div className="flex justify-between">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex gap-4">
              <Button
                variant={paymentMethod === 'stripe' ? 'default' : 'outline'}
                className="flex-1"
                onClick={() => setPaymentMethod('stripe')}
              >
                <Image
                  src="/stripe.svg"
                  alt="Stripe"
                  width={60}
                  height={25}
                  className="h-6 w-auto"
                />
              </Button>
              <Button
                variant={paymentMethod === 'paypal' ? 'default' : 'outline'}
                className="flex-1"
                onClick={() => setPaymentMethod('paypal')}
                disabled={isPending || isRejected}
              >
                <Image
                  src="/paypal.svg"
                  alt="PayPal"
                  width={60}
                  height={25}
                  className="h-6 w-auto"
                />
              </Button>
            </div>

            {paymentMethod === 'stripe' ? (
              <Button
                className="w-full"
                onClick={handleStripeCheckout}
              >
                Pay with Stripe
              </Button>
            ) : (
              <div className="relative min-h-[40px]">
                {isResolved && (
                  <PayPalButtons
                    style={{ layout: 'horizontal' }}
                    createOrder={(data, actions) => {
                      return actions.order.create({
                        purchase_units: [{
                          amount: {
                            value: total.toFixed(2),
                            currency_code: 'USD'
                          }
                        }]
                      });
                    }}
                    onApprove={(data, actions) => {
                      return actions.order!.capture().then(() => handlePayPalCheckout(data));
                    }}
                    onError={() => {
                      toast.error('PayPal checkout failed. Please try again.');
                    }}
                  />
                )}
                {isPending && (
                  <div className="absolute inset-0 flex items-center justify-center bg-background/50">
                    <span className="text-sm text-muted-foreground">Loading PayPal...</span>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}