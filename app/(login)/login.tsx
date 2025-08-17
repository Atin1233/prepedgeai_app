'use client';

import Link from 'next/link';
import { useActionState, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { BookOpen, Loader2, ArrowLeft } from 'lucide-react';
import { signIn, signUp } from './actions';
import { ActionState } from '@/lib/auth/middleware';

export function Login({ mode = 'signin' }: { mode?: 'signin' | 'signup' }) {
  const searchParams = useSearchParams();
  const redirect = searchParams.get('redirect');
  const priceId = searchParams.get('priceId');
  const inviteId = searchParams.get('inviteId');
  const [state, formAction, pending] = useActionState<ActionState, FormData>(
    mode === 'signin' ? signIn : signUp,
    { error: '' }
  );

  // Onboarding state for signup
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [onboardingData, setOnboardingData] = useState({
    grade: '',
    targetScore: '',
    currentScore: '',
    strengths: '',
    weaknesses: ''
  });

  if (mode === 'signup' && showOnboarding) {
    return (
      <div className="min-h-[100dvh] flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="sm:mx-auto sm:w-full sm:max-w-2xl">
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
                <BookOpen className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold text-foreground">PrepEdge AI</span>
            </div>
          </div>

          <Card className="shadow-2xl">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Tell Us About Yourself</CardTitle>
              <CardDescription>
                Help us personalize your SAT prep experience
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="grade">Current Grade</Label>
                  <RadioGroup
                    value={onboardingData.grade}
                    onValueChange={(value) => setOnboardingData({...onboardingData, grade: value})}
                    className="mt-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="9" id="grade-9" />
                      <Label htmlFor="grade-9">9th Grade</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="10" id="grade-10" />
                      <Label htmlFor="grade-10">10th Grade</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="11" id="grade-11" />
                      <Label htmlFor="grade-11">11th Grade</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="12" id="grade-12" />
                      <Label htmlFor="grade-12">12th Grade</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label htmlFor="target-score">Target SAT Score</Label>
                  <RadioGroup
                    value={onboardingData.targetScore}
                    onValueChange={(value) => setOnboardingData({...onboardingData, targetScore: value})}
                    className="mt-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="1200" id="target-1200" />
                      <Label htmlFor="target-1200">1200+</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="1300" id="target-1300" />
                      <Label htmlFor="target-1300">1300+</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="1400" id="target-1400" />
                      <Label htmlFor="target-1400">1400+</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="1500" id="target-1500" />
                      <Label htmlFor="target-1500">1500+</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>

              <div>
                <Label htmlFor="current-score">Current/Practice SAT Score (Optional)</Label>
                <Input
                  id="current-score"
                  value={onboardingData.currentScore}
                  onChange={(e) => setOnboardingData({...onboardingData, currentScore: e.target.value})}
                  placeholder="e.g., 1250 or 'Haven't taken yet'"
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="strengths">Academic Strengths</Label>
                <Input
                  id="strengths"
                  value={onboardingData.strengths}
                  onChange={(e) => setOnboardingData({...onboardingData, strengths: e.target.value})}
                  placeholder="e.g., Math, Reading, Writing"
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="weaknesses">Areas for Improvement</Label>
                <Input
                  id="weaknesses"
                  value={onboardingData.weaknesses}
                  onChange={(e) => setOnboardingData({...onboardingData, weaknesses: e.target.value})}
                  placeholder="e.g., Grammar, Word problems, Time management"
                  className="mt-2"
                />
              </div>

              <div className="flex gap-4 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setShowOnboarding(false)}
                  className="flex-1"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
                <Button
                  type="button"
                  onClick={() => {
                    // Here you would normally save the onboarding data
                    // For now, we'll just redirect to dashboard
                    window.location.href = '/dashboard';
                  }}
                  className="flex-1"
                >
                  Complete Setup
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[100dvh] flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
              <BookOpen className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold text-foreground">PrepEdge AI</span>
          </div>
        </div>
      </div>

      <Card className="sm:mx-auto sm:w-full sm:max-w-md shadow-2xl">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">
            {mode === 'signin' ? 'Welcome Back' : 'Start Your Journey'}
          </CardTitle>
          <CardDescription>
            {mode === 'signin'
              ? 'Sign in to continue your SAT prep'
              : 'Create your account to begin personalized SAT prep'}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" action={formAction}>
            <input type="hidden" name="redirect" value={redirect || ''} />
            <input type="hidden" name="priceId" value={priceId || ''} />
            <input type="hidden" name="inviteId" value={inviteId || ''} />
            
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                defaultValue={state.email}
                required
                maxLength={50}
                className="mt-1"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                autoComplete={mode === 'signin' ? 'current-password' : 'new-password'}
                defaultValue={state.password}
                required
                minLength={8}
                maxLength={100}
                className="mt-1"
                placeholder="Enter your password"
              />
              {mode === 'signup' && (
                <p className="text-xs text-muted-foreground mt-1">
                  Must be at least 8 characters long
                </p>
              )}
            </div>

            {mode === 'signup' && (
              <div>
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  autoComplete="new-password"
                  required
                  minLength={8}
                  maxLength={100}
                  className="mt-1"
                  placeholder="Confirm your password"
                />
              </div>
            )}

            {state?.error && (
              <div className="text-destructive text-sm bg-destructive/10 p-3 rounded-lg">
                {state.error}
              </div>
            )}

            <Button
              type={mode === 'signup' ? 'button' : 'submit'}
              className="w-full"
              disabled={pending}
              onClick={mode === 'signup' ? () => setShowOnboarding(true) : undefined}
            >
              {pending ? (
                <>
                  <Loader2 className="animate-spin mr-2 h-4 w-4" />
                  Loading...
                </>
              ) : mode === 'signin' ? (
                'Sign In'
              ) : (
                'Create Account'
              )}
            </Button>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-background text-muted-foreground">
                  {mode === 'signin' ? 'New to PrepEdge AI?' : 'Already have an account?'}
                </span>
              </div>
            </div>

            <div className="mt-4">
              <Button variant="outline" className="w-full" asChild>
                <Link
                  href={`${mode === 'signin' ? '/sign-up' : '/sign-in'}${
                    redirect ? `?redirect=${redirect}` : ''
                  }${priceId ? `&priceId=${priceId}` : ''}`}
                >
                  {mode === 'signin' ? 'Create an Account' : 'Sign In Instead'}
                </Link>
              </Button>
            </div>
          </div>

          {mode === 'signin' && (
            <div className="mt-4 text-center">
              <Link
                href="/forgot-password"
                className="text-sm text-primary hover:text-primary/80 transition-colors"
              >
                Forgot your password?
              </Link>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
