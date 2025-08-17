import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckIcon, BookOpenIcon, TrendingUpIcon, BrainIcon, SparklesIcon, ArrowRightIcon } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[hsl(var(--prep-navy))] to-[hsl(var(--prep-cyan))] rounded-lg flex items-center justify-center">
              <BookOpenIcon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-[hsl(var(--prep-navy))]">PrepEdge</h1>
              <span className="text-sm font-medium text-[hsl(var(--prep-cyan))]">AI</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-[hsl(var(--prep-navy))] transition-colors">Features</a>
            <a href="#pricing" className="text-gray-600 hover:text-[hsl(var(--prep-navy))] transition-colors">Pricing</a>
            <a href="#about" className="text-gray-600 hover:text-[hsl(var(--prep-navy))] transition-colors">About</a>
            <Button variant="outline" size="sm">Sign In</Button>
            <Button size="sm" className="bg-[hsl(var(--prep-cyan))] hover:bg-[hsl(var(--prep-cyan))]/90 text-white">
              Start Free Trial
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="inline-flex items-center bg-[hsl(var(--prep-cyan))]/10 text-[hsl(var(--prep-navy))] px-4 py-2 rounded-full text-sm font-medium mb-8">
            <SparklesIcon className="w-4 h-4 mr-2" />
            AI that adapts to you
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-[hsl(var(--prep-navy))] mb-6 leading-tight">
            Your Edge for the SAT
            <span className="block text-[hsl(var(--prep-cyan))]">Powered by AI</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Smarter prep. Sharper scores. Get personalized SAT preparation that adapts to your learning style and helps you achieve your target score.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-[hsl(var(--prep-navy))] hover:bg-[hsl(var(--prep-navy))]/90 text-white text-lg px-8 py-3">
              Start 3-Day Free Trial
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3">
              Take Free Diagnostic
            </Button>
          </div>
          
          <div className="bg-gradient-to-r from-[hsl(var(--prep-navy))] to-[hsl(var(--prep-cyan))] p-1 rounded-2xl shadow-2xl">
            <div className="bg-white rounded-xl p-8">
              <div className="text-left space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-[hsl(var(--prep-navy))]">Your SAT Dashboard</h3>
                  <div className="text-2xl font-bold text-[hsl(var(--prep-green))]">1480</div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[hsl(var(--prep-cyan))]">Math</div>
                    <div className="text-sm text-gray-600">740 / 800</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[hsl(var(--prep-cyan))]">Reading</div>
                    <div className="text-sm text-gray-600">740 / 800</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[hsl(var(--prep-green))]">+180</div>
                    <div className="text-sm text-gray-600">Score increase</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[hsl(var(--prep-navy))] mb-4">
              Why PrepEdge AI Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Built to solve the problems students face with traditional SAT prep platforms
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-[hsl(var(--prep-cyan))]/10 rounded-lg flex items-center justify-center mb-6">
                  <BrainIcon className="w-6 h-6 text-[hsl(var(--prep-cyan))]" />
                </div>
                <h3 className="text-xl font-semibold text-[hsl(var(--prep-navy))] mb-3">
                  AI-Personalized Learning
                </h3>
                <p className="text-gray-600 mb-4">
                  Diagnostic test creates an adaptive study plan tailored to your strengths and weaknesses.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckIcon className="w-4 h-4 text-[hsl(var(--prep-green))] mr-2 flex-shrink-0" />
                    Personalized question difficulty
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckIcon className="w-4 h-4 text-[hsl(var(--prep-green))] mr-2 flex-shrink-0" />
                    Focus on your weak areas
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-[hsl(var(--prep-green))]/10 rounded-lg flex items-center justify-center mb-6">
                  <TrendingUpIcon className="w-6 h-6 text-[hsl(var(--prep-green))]" />
                </div>
                <h3 className="text-xl font-semibold text-[hsl(var(--prep-navy))] mb-3">
                  Smart Analytics
                </h3>
                <p className="text-gray-600 mb-4">
                  Track your progress with score predictions and detailed performance insights.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckIcon className="w-4 h-4 text-[hsl(var(--prep-green))] mr-2 flex-shrink-0" />
                    Score trajectory predictions
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckIcon className="w-4 h-4 text-[hsl(var(--prep-green))] mr-2 flex-shrink-0" />
                    Weekly Edge Reports
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-[hsl(var(--prep-navy))]/10 rounded-lg flex items-center justify-center mb-6">
                  <BookOpenIcon className="w-6 h-6 text-[hsl(var(--prep-navy))]" />
                </div>
                <h3 className="text-xl font-semibold text-[hsl(var(--prep-navy))] mb-3">
                  Realistic Practice
                </h3>
                <p className="text-gray-600 mb-4">
                  Human-verified AI questions that match real SAT difficulty and style.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckIcon className="w-4 h-4 text-[hsl(var(--prep-green))] mr-2 flex-shrink-0" />
                    Unlimited practice sets
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckIcon className="w-4 h-4 text-[hsl(var(--prep-green))] mr-2 flex-shrink-0" />
                    Full-length timed exams
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-[hsl(var(--prep-cyan))]/10 rounded-lg flex items-center justify-center mb-6">
                  <SparklesIcon className="w-6 h-6 text-[hsl(var(--prep-cyan))]" />
                </div>
                <h3 className="text-xl font-semibold text-[hsl(var(--prep-navy))] mb-3">
                  Smart Hints & Explanations
                </h3>
                <p className="text-gray-600 mb-4">
                  AI tutor provides hints during problems and detailed explanations after.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckIcon className="w-4 h-4 text-[hsl(var(--prep-green))] mr-2 flex-shrink-0" />
                    In-problem coaching
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckIcon className="w-4 h-4 text-[hsl(var(--prep-green))] mr-2 flex-shrink-0" />
                    Step-by-step reasoning
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-[hsl(var(--prep-green))]/10 rounded-lg flex items-center justify-center mb-6">
                  <TrendingUpIcon className="w-6 h-6 text-[hsl(var(--prep-green))]" />
                </div>
                <h3 className="text-xl font-semibold text-[hsl(var(--prep-navy))] mb-3">
                  Clean, Fast Interface
                </h3>
                <p className="text-gray-600 mb-4">
                  Academic feel with no clutter. Works seamlessly on desktop and mobile.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckIcon className="w-4 h-4 text-[hsl(var(--prep-green))] mr-2 flex-shrink-0" />
                    Distraction-free design
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckIcon className="w-4 h-4 text-[hsl(var(--prep-green))] mr-2 flex-shrink-0" />
                    Mobile optimized
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-[hsl(var(--prep-navy))]/10 rounded-lg flex items-center justify-center mb-6">
                  <CheckIcon className="w-6 h-6 text-[hsl(var(--prep-navy))]" />
                </div>
                <h3 className="text-xl font-semibold text-[hsl(var(--prep-navy))] mb-3">
                  Score Guarantee
                </h3>
                <p className="text-gray-600 mb-4">
                  200+ point score increase guarantee or your money back.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckIcon className="w-4 h-4 text-[hsl(var(--prep-green))] mr-2 flex-shrink-0" />
                    Money-back guarantee
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckIcon className="w-4 h-4 text-[hsl(var(--prep-green))] mr-2 flex-shrink-0" />
                    Proven results
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[hsl(var(--prep-navy))] mb-4">
              Half the Cost, Double the Results
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Quality SAT prep shouldn't break the bank. Choose the plan that works for you.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Monthly Plan */}
            <Card className="border-2 border-gray-200 hover:border-[hsl(var(--prep-cyan))] transition-colors">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-[hsl(var(--prep-navy))] mb-2">Monthly</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-[hsl(var(--prep-navy))]">$49</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <p className="text-sm text-gray-600 mb-6">Perfect for focused preparation</p>
                <Button className="w-full mb-4" variant="outline">
                  Start Free Trial
                </Button>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckIcon className="w-4 h-4 text-[hsl(var(--prep-green))] mr-2" />
                    All core features
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckIcon className="w-4 h-4 text-[hsl(var(--prep-green))] mr-2" />
                    Unlimited practice
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckIcon className="w-4 h-4 text-[hsl(var(--prep-green))] mr-2" />
                    AI tutoring
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Quarterly Plan */}
            <Card className="border-2 border-[hsl(var(--prep-cyan))] relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-[hsl(var(--prep-cyan))] text-white px-3 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-[hsl(var(--prep-navy))] mb-2">Quarterly</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-[hsl(var(--prep-navy))]">$129</span>
                  <span className="text-gray-600">/3 months</span>
                  <div className="text-sm text-[hsl(var(--prep-green))]">$43/month</div>
                </div>
                <p className="text-sm text-gray-600 mb-6">Best value for most students</p>
                <Button className="w-full mb-4 bg-[hsl(var(--prep-cyan))] hover:bg-[hsl(var(--prep-cyan))]/90">
                  Start Free Trial
                </Button>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckIcon className="w-4 h-4 text-[hsl(var(--prep-green))] mr-2" />
                    All monthly features
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckIcon className="w-4 h-4 text-[hsl(var(--prep-green))] mr-2" />
                    Priority support
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckIcon className="w-4 h-4 text-[hsl(var(--prep-green))] mr-2" />
                    Score guarantee
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Annual Plan */}
            <Card className="border-2 border-gray-200 hover:border-[hsl(var(--prep-green))] transition-colors">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-[hsl(var(--prep-navy))] mb-2">Annual</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-[hsl(var(--prep-navy))]">$399</span>
                  <span className="text-gray-600">/year</span>
                  <div className="text-sm text-[hsl(var(--prep-green))]">$33/month</div>
                </div>
                <p className="text-sm text-gray-600 mb-6">Maximum savings</p>
                <Button className="w-full mb-4" variant="outline">
                  Start Free Trial
                </Button>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckIcon className="w-4 h-4 text-[hsl(var(--prep-green))] mr-2" />
                    All quarterly features
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckIcon className="w-4 h-4 text-[hsl(var(--prep-green))] mr-2" />
                    Biggest savings
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckIcon className="w-4 h-4 text-[hsl(var(--prep-green))] mr-2" />
                    Extended support
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Premium Edge+ */}
            <Card className="border-2 border-[hsl(var(--prep-green))] bg-gradient-to-b from-white to-[hsl(var(--prep-green))]/5">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-[hsl(var(--prep-navy))] mb-2">Edge+</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-[hsl(var(--prep-navy))]">$699</span>
                  <span className="text-gray-600">/year</span>
                </div>
                <p className="text-sm text-gray-600 mb-6">Premium experience</p>
                <Button className="w-full mb-4 bg-[hsl(var(--prep-green))] hover:bg-[hsl(var(--prep-green))]/90">
                  Start Free Trial
                </Button>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckIcon className="w-4 h-4 text-[hsl(var(--prep-green))] mr-2" />
                    Priority AI tutoring
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckIcon className="w-4 h-4 text-[hsl(var(--prep-green))] mr-2" />
                    Early ACT/AP access
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckIcon className="w-4 h-4 text-[hsl(var(--prep-green))] mr-2" />
                    1:1 support sessions
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">All plans include a 3-day free trial. No credit card required.</p>
            <p className="text-sm text-gray-500">* Compared to leading competitors</p>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-[hsl(var(--prep-navy))] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Trusted by Students Nationwide</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-[hsl(var(--prep-cyan))] mb-2">200+</div>
              <div className="text-lg">Average Score Increase</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[hsl(var(--prep-green))] mb-2">95%</div>
              <div className="text-lg">Students See Improvement</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[hsl(var(--prep-cyan))] mb-2">50%</div>
              <div className="text-lg">Less Than Competitors</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-[hsl(var(--prep-navy))] mb-6">
            Ready to Get Your Edge?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have improved their SAT scores with PrepEdge AI. Start your free trial today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[hsl(var(--prep-navy))] hover:bg-[hsl(var(--prep-navy))]/90 text-white text-lg px-8 py-3">
              Start 3-Day Free Trial
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3">
              Take Free Diagnostic Test
            </Button>
          </div>
          
          <p className="text-sm text-gray-500 mt-4">No credit card required • Cancel anytime</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-[hsl(var(--prep-navy))] to-[hsl(var(--prep-cyan))] rounded-lg flex items-center justify-center">
                <BookOpenIcon className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-lg font-bold text-[hsl(var(--prep-navy))]">PrepEdge AI</div>
                <div className="text-sm text-gray-600">Your edge for the SAT</div>
              </div>
            </div>
            
            <div className="flex space-x-6 text-sm text-gray-600">
              <a href="#" className="hover:text-[hsl(var(--prep-navy))] transition-colors">Privacy</a>
              <a href="#" className="hover:text-[hsl(var(--prep-navy))] transition-colors">Terms</a>
              <a href="#" className="hover:text-[hsl(var(--prep-navy))] transition-colors">Support</a>
              <a href="#" className="hover:text-[hsl(var(--prep-navy))] transition-colors">Contact</a>
            </div>
          </div>
          
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm text-gray-500">
            © 2024 PrepEdge AI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}