import './globals.css';
import type { Metadata } from 'next';
import { Inter, Lora } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { LanguageToggle } from '@/components/language-toggle';
import { HomeButton } from '@/components/navigation/home-button';
import { SocialButtons } from '@/components/social/social-buttons';
import { PayPalProvider } from '@/components/providers/paypal-provider';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const lora = Lora({ subsets: ['latin'], variable: '--font-lora' });

export const metadata: Metadata = {
  title: 'Uhuru Learning System',
  description: 'An African-centered AI-powered educational platform',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${lora.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <PayPalProvider>
            <div className="fixed top-4 right-4 z-50">
              <LanguageToggle />
            </div>
            <SocialButtons vertical />
            <HomeButton />
            {children}
            <Toaster />
          </PayPalProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}