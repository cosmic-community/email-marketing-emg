import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ClientLayoutRouter from '@/components/ClientLayoutRouter'
import { Toaster } from '@/components/ui/toaster'
import { getSettings } from '@/lib/cosmic'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Email Marketing Dashboard',
  description: 'Manage your email campaigns, contacts, and templates with AI assistance',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Fetch company name on server-side once
  let companyName = "Email Marketing";
  
  try {
    const settings = await getSettings();
    const settingsCompanyName = settings?.metadata?.company_name;
    if (settingsCompanyName?.trim()) {
      companyName = settingsCompanyName;
    }
  } catch (error) {
    console.error("Failed to fetch company name:", error);
    // Keep default "Email Marketing" on error
  }

  return (
    <html lang="en">
      <head>
          <link rel="icon" href="https://imgix.cosmicjs.com/10a6c530-a471-11f0-8097-1935875d6ffe-emory-market-gardens-icon.svg" />
      </head>
      <body className={inter.className}>
        <ClientLayoutRouter companyName={companyName}>
          {children}
        </ClientLayoutRouter>
        <Toaster />
      </body>
    </html>
  )
}