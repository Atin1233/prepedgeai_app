'use client';

import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from '@/components/ui/card';
import { ChartContainer } from '@/components/ui/chart';
import { motion } from 'framer-motion';
import { 
  Calendar,
  Clock,
  Target,
  TrendingUp,
  Brain,
  BookOpen,
  PlayCircle,
  Timer,
  Award,
  AlertCircle,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar } from 'recharts';

// Sample data - in a real app, this would come from your API
const progressData = [
  { date: '2024-01-01', score: 1200 },
  { date: '2024-01-15', score: 1250 },
  { date: '2024-02-01', score: 1280 },
  { date: '2024-02-15', score: 1320 },
  { date: '2024-03-01', score: 1380 },
  { date: '2024-03-15', score: 1420 },
];

const subjectData = [
  { name: 'Math', value: 75, color: '#2563eb' },
  { name: 'Reading', value: 68, color: '#14b8a6' },
  { name: 'Writing', value: 72, color: '#10b981' },
];

const weeklyActivity = [
  { day: 'Mon', questions: 45 },
  { day: 'Tue', questions: 32 },
  { day: 'Wed', questions: 28 },
  { day: 'Thu', questions: 52 },
  { day: 'Fri', questions: 38 },
  { day: 'Sat', questions: 65 },
  { day: 'Sun', questions: 41 },
];

const recommendedLessons = [
  {
    id: 1,
    title: "Quadratic Functions",
    subject: "Math",
    difficulty: "Medium",
    estimatedTime: "25 min",
    reason: "Based on recent practice test results"
  },
  {
    id: 2,
    title: "Reading Comprehension Strategies",
    subject: "Reading",
    difficulty: "Hard",
    estimatedTime: "30 min",
    reason: "Focus area for improvement"
  },
  {
    id: 3,
    title: "Grammar Fundamentals",
    subject: "Writing",
    difficulty: "Easy",
    estimatedTime: "20 min",
    reason: "Strengthen your foundation"
  }
];

const upcomingTests = [
  {
    id: 1,
    name: "Practice Test #4",
    date: "2024-03-25",
    type: "Full Practice Test",
    duration: "3 hours"
  },
  {
    id: 2,
    name: "Math Section Practice",
    date: "2024-03-22",
    type: "Section Practice",
    duration: "80 minutes"
  }
];

export default function DashboardPage() {
  return (
    <div className="flex-1 p-4 lg:p-8">
      <div className="mb-8">
        <h1 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
          Welcome back, Alex! 👋
        </h1>
        <p className="text-muted-foreground">
          Here's your SAT prep progress and what's coming up next.
        </p>
      </div>

      {/* Study Plan Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                Current Progress
              </CardTitle>
              <CardDescription>
                Your journey toward your target score of 1500
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-bold text-primary">1420</p>
                    <p className="text-sm text-muted-foreground">Current Score</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold">1500</p>
                    <p className="text-sm text-muted-foreground">Target Score</p>
                  </div>
                </div>
                <Progress value={75} className="h-3" />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>80 points to go!</span>
                  <span>75% complete</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-secondary" />
                Next Lesson
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">Quadratic Functions</h3>
                  <p className="text-sm text-muted-foreground">Math • 25 min</p>
                </div>
                <Button className="w-full" size="sm">
                  <PlayCircle className="h-4 w-4 mr-2" />
                  Start Lesson
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Progress Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-green-500" />
                Score Progress
              </CardTitle>
              <CardDescription>
                Track your improvement over time
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer>
                <LineChart data={progressData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis domain={['dataMin - 50', 'dataMax + 50']} />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="score" 
                    stroke="#2563eb" 
                    strokeWidth={3}
                    dot={{ fill: '#2563eb', strokeWidth: 2, r: 4 }}
                  />
                </LineChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-purple-500" />
                Subject Breakdown
              </CardTitle>
              <CardDescription>
                Performance by subject area
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {subjectData.map((subject) => (
                  <div key={subject.name} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{subject.name}</span>
                      <span>{subject.value}%</span>
                    </div>
                    <Progress value={subject.value} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Recommended Lessons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mb-8"
      >
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-orange-500" />
              AI Recommended Lessons
            </CardTitle>
            <CardDescription>
              Personalized recommendations based on your performance
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recommendedLessons.map((lesson) => (
                <div key={lesson.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="space-y-1">
                    <h3 className="font-semibold">{lesson.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <Badge variant="secondary">{lesson.subject}</Badge>
                      <span className="flex items-center gap-1">
                        <Timer className="h-3 w-3" />
                        {lesson.estimatedTime}
                      </span>
                      <Badge 
                        variant={lesson.difficulty === 'Easy' ? 'success' : lesson.difficulty === 'Medium' ? 'warning' : 'destructive'}
                      >
                        {lesson.difficulty}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">{lesson.reason}</p>
                  </div>
                  <Button size="sm" variant="outline">
                    <PlayCircle className="h-4 w-4 mr-1" />
                    Start
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Upcoming Tests & Weekly Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-blue-500" />
                Upcoming Tests
              </CardTitle>
              <CardDescription>
                Scheduled practice tests and assessments
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingTests.map((test) => (
                  <div key={test.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <h3 className="font-medium">{test.name}</h3>
                      <p className="text-sm text-muted-foreground">{test.type} • {test.duration}</p>
                      <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                        <Calendar className="h-3 w-3" />
                        {test.date}
                      </p>
                    </div>
                    <Button size="sm" variant="ghost">
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-green-500" />
                Weekly Activity
              </CardTitle>
              <CardDescription>
                Questions completed this week
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer>
                <BarChart data={weeklyActivity}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="questions" fill="#14b8a6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ChartContainer>
              <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span>301 questions completed this week</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
