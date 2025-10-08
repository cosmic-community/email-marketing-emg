'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function LoginPage() {
  const [code, setCode] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code }),
      })

      const data = await response.json()

      if (response.ok) {
        // Redirect to dashboard on success - don't reset loading state
        router.push('/')
        router.refresh()
        // Keep loading state active until redirect completes
      } else {
        setError(data.error || 'Invalid access code')
        setIsLoading(false)
      }
    } catch (error) {
      setError('An error occurred. Please try again.')
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl w-full">
        {/* Header Section */}
        <div className="text-center mb-10">
          <div className="mx-auto h-20 w-20 bg-slate-800 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
            <img src="https://imgix.cosmicjs.com/888124b0-a471-11f0-8097-1935875d6ffe-emory-market-gardens-icon.svg?w=80&h=80&fit=crop&auto=format,compress" alt="EMG Logo" className="w-12 h-12 object-contain" />
          </div>
          </div>
            <h1 className="text-4xl font-bold text-slate-800 mb-3">
              EMG Email Marketing
          </h1>
          <p className="text-lg text-slate-600 mb-8">
            Professional email campaigns made simple
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Card: Complete Email Marketing Solution */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 max-w-[450px] mx-auto">
            <div className="text-center mb-6">
              <div className="mx-auto h-16 w-16 bg-slate-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-9 h-9 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Complete Email Marketing Solution
              </h2>
              <p className="text-gray-600">
                Everything you need to create, manage, and send professional email campaigns
              </p>
            </div>

            <div className="space-y-5">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Contact Management</p>
                  <p className="text-sm text-gray-600">Import, organize, and segment your audience with powerful tools</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">AI Template Builder</p>
                  <p className="text-sm text-gray-600">Create beautiful, responsive email designs with AI assistance</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Campaign Analytics</p>
                  <p className="text-sm text-gray-600">Track opens, clicks, and conversions with detailed insights</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Professional Delivery</p>
                  <p className="text-sm text-gray-600">High deliverability with Resend integration and inbox optimization</p>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-slate-600">99.9%</div>
                  <div className="text-xs text-gray-600">Uptime</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">High</div>
                  <div className="text-xs text-gray-600">Deliverability</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-600">24/7</div>
                  <div className="text-xs text-gray-600">Available</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Card: Access Required */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 max-w-[450px] mx-auto">
            <div className="text-center mb-6">
              <div className="mx-auto h-16 w-16 bg-slate-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-9 h-9 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Access Required
              </h3>
              <p className="text-gray-600">
                Enter your access code to start creating amazing email campaigns
              </p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="access-code" className="block text-sm font-medium text-gray-700 mb-2">
                  Access Code
                </label>
                <Input
                  id="access-code"
                  name="code"
                  type="password"
                  required
                  className="w-full text-lg py-3 px-4 rounded-xl border-2 focus:border-slate-500 focus:ring-slate-500"
                  placeholder="Enter your access code"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  disabled={isLoading}
                />
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm">
                  {error}
                </div>
              )}

              <Button
                type="submit"
                className="w-full bg-slate-800 hover:bg-slate-900 text-white font-medium py-3 px-6 rounded-xl text-lg transition-all duration-200 hover:shadow-lg"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Verifying Access...
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                    </svg>
                      Access EMG Email Marketing
                  </div>
                )}
              </Button>
            </form>

            {/* Additional Features */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-4">What you'll get access to:</p>
                <div className="flex flex-wrap justify-center gap-2">
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs rounded-full">Contact Import</span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs rounded-full">AI Templates</span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs rounded-full">Campaign Builder</span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs rounded-full">Analytics Dashboard</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm">
            Powered by <span className="font-medium text-gray-700">Cosmic CMS</span> & <span className="font-medium text-gray-700">Resend</span>
          </p>
          <div className="mt-2">
            <Link 
              href="/subscribe" 
              className="text-slate-600 hover:text-slate-800 text-sm underline transition-colors duration-200"
            >
              Subscribe page
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}