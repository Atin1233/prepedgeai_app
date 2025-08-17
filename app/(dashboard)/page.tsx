"use client"

import { Button } from '@/components/ui/button';
import { FeatureCard } from '@/components/ui/feature-card';
import { TestimonialCard } from '@/components/ui/testimonial-card';
import { PricingCard } from '@/components/ui/pricing-card';
import { Progress } from '@/components/ui/progress';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { motion } from 'framer-motion';
import { 
  Brain, 
  BarChart3, 
  Wallet, 
  Users, 
  ArrowRight, 
  CheckCircle, 
  X,
  Zap,
  Target,
  Award 
} from 'lucide-react';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight"
              >
                Smarter Prep. 
                <span className="block text-primary">Sharper Edge.</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
              >
                AI-driven SAT prep personalized to your strengths and weaknesses. 
                Achieve your target score with intelligent practice and insights.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button size="lg" className="text-lg px-8" asChild>
                  <a href="/sign-up">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                  <a href="#features">Learn More</a>
                </Button>
              </motion.div>

              {/* Hero Visual */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mt-16 bg-card rounded-2xl shadow-2xl p-8 max-w-2xl mx-auto border"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Your Progress</h3>
                    <span className="text-2xl font-bold text-primary">1420</span>
                  </div>
                  <Progress value={75} className="h-3" />
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="text-center">
                      <p className="text-muted-foreground">Math</p>
                      <p className="font-semibold">720</p>
                    </div>
                    <div className="text-center">
                      <p className="text-muted-foreground">Reading</p>
                      <p className="font-semibold">700</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Why PrepEdge AI?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Advanced AI technology meets proven SAT strategies to deliver personalized prep that adapts to you.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <FeatureCard
                title="Adaptive Learning"
                description="Our AI adjusts difficulty and content based on your performance in real-time."
                icon={<Brain className="h-8 w-8" />}
              />
              <FeatureCard
                title="Detailed Analytics"
                description="Track your progress with interactive charts and actionable insights."
                icon={<BarChart3 className="h-8 w-8" />}
              />
              <FeatureCard
                title="Affordable Pricing"
                description="High-quality prep at a fraction of the cost of competitors."
                icon={<Wallet className="h-8 w-8" />}
              />
              <FeatureCard
                title="Easy to Use"
                description="Clean interface with intuitive navigation for students of all levels."
                icon={<Users className="h-8 w-8" />}
              />
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                PrepEdge vs Acely
              </h2>
              <p className="text-xl text-muted-foreground">
                See why students choose PrepEdge AI for their SAT preparation
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto bg-card rounded-2xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Feature</th>
                      <th className="px-6 py-4 text-center font-semibold text-primary">PrepEdge AI</th>
                      <th className="px-6 py-4 text-center font-semibold">Acely</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr>
                      <td className="px-6 py-4 font-medium">AI Personalization</td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span className="text-green-700 font-medium">Advanced</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span>Basic</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium">Adaptive Analytics</td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span className="text-green-700 font-medium">Real-time</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <div className="h-5 w-5 rounded-full bg-gray-300" />
                          <span className="text-muted-foreground">Limited</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium">Pricing</td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-primary font-bold">$19–$49/mo</span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span>$29–$79/mo</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium">Ease of Use</td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span className="text-green-700 font-medium">Intuitive</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span>Average</span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                What Students Are Saying
              </h2>
              <p className="text-xl text-muted-foreground">
                Real results from real students who achieved their SAT goals
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <TestimonialCard
                name="Alex R."
                role="High School Junior"
                quote="PrepEdge AI transformed my SAT prep. I improved my score by 150 points in 2 months!"
              />
              <TestimonialCard
                name="Maria L."
                role="High School Senior"
                quote="The adaptive lessons made studying efficient and even fun. I finally understood my weak areas and how to improve them."
              />
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Flexible Plans for Every Student
              </h2>
              <p className="text-xl text-muted-foreground">
                Choose the plan that fits your learning style and budget
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <PricingCard
                name="Starter"
                price="$19"
                features={[
                  "Basic AI Recommendations",
                  "Limited Practice Questions",
                  "Progress Tracker",
                  "Email Support"
                ]}
                ctaLink="/sign-up?plan=starter"
              />
              <PricingCard
                name="Standard"
                price="$29"
                features={[
                  "Full AI Personalization",
                  "All Practice Questions",
                  "Progress Tracker",
                  "Detailed Analytics",
                  "Priority Support"
                ]}
                isPopular={true}
                ctaLink="/sign-up?plan=standard"
              />
              <PricingCard
                name="Pro"
                price="$49"
                features={[
                  "Standard Features +",
                  "1:1 AI Tutoring Support",
                  "Priority Feedback",
                  "Practice Test Analysis",
                  "Advanced Insights"
                ]}
                ctaLink="/sign-up?plan=pro"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
