"use client"

import { useState } from 'react';
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
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Clock,
  Flag,
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  AlertCircle,
  Brain,
  Target,
  BookOpen,
  X
} from 'lucide-react';

// Sample question data - in a real app, this would come from your API
const sampleQuestions = [
  {
    id: 1,
    type: "Math",
    difficulty: "Medium",
    question: "If 3x + 7 = 22, what is the value of x?",
    options: ["3", "5", "7", "15"],
    correctAnswer: 1,
    explanation: "To solve for x, subtract 7 from both sides: 3x = 15. Then divide by 3: x = 5."
  },
  {
    id: 2,
    type: "Reading",
    difficulty: "Hard", 
    question: "Based on the passage, the author's primary purpose is to:",
    options: [
      "Criticize modern educational systems",
      "Advocate for increased funding in schools", 
      "Analyze the effectiveness of different teaching methods",
      "Propose reforms to standardized testing"
    ],
    correctAnswer: 2,
    explanation: "Throughout the passage, the author systematically compares various teaching approaches and their outcomes, making this an analytical piece."
  },
  {
    id: 3,
    type: "Writing",
    difficulty: "Easy",
    question: "Choose the best revision for the underlined portion: 'The students, excited about the field trip, packed there lunches quickly.'",
    options: [
      "there lunches",
      "their lunches", 
      "they're lunches",
      "theyre lunches"
    ],
    correctAnswer: 1,
    explanation: "'Their' is the correct possessive pronoun to show ownership of the lunches."
  }
];

export default function PracticePage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [answers, setAnswers] = useState<(number | null)[]>(new Array(sampleQuestions.length).fill(null));
  const [flaggedQuestions, setFlaggedQuestions] = useState<boolean[]>(new Array(sampleQuestions.length).fill(false));
  const [timeElapsed, setTimeElapsed] = useState(0);

  const question = sampleQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / sampleQuestions.length) * 100;

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answerIndex;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (showExplanation) {
      setShowExplanation(false);
      setSelectedAnswer(answers[currentQuestion + 1] || null);
      setCurrentQuestion(prev => Math.min(prev + 1, sampleQuestions.length - 1));
    } else if (selectedAnswer !== null) {
      setShowExplanation(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setShowExplanation(false);
      setCurrentQuestion(prev => prev - 1);
      setSelectedAnswer(answers[currentQuestion - 1] || null);
    }
  };

  const toggleFlag = () => {
    const newFlagged = [...flaggedQuestions];
    newFlagged[currentQuestion] = !newFlagged[currentQuestion];
    setFlaggedQuestions(newFlagged);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'success';
      case 'Medium': return 'warning';  
      case 'Hard': return 'destructive';
      default: return 'secondary';
    }
  };

  return (
    <div className="flex-1 p-4 lg:p-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
              Practice Session
            </h1>
            <p className="text-muted-foreground">
              Adaptive questions based on your performance
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>{Math.floor(timeElapsed / 60)}:{(timeElapsed % 60).toString().padStart(2, '0')}</span>
            </div>
            <Button variant="outline" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Exit Practice
            </Button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Question {currentQuestion + 1} of {sampleQuestions.length}</span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Main Question Area */}
        <div className="lg:col-span-3">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="mb-6">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Badge variant="secondary">{question.type}</Badge>
                      <Badge variant={getDifficultyColor(question.difficulty)}>
                        {question.difficulty}
                      </Badge>
                    </div>
                    <Button
                      variant={flaggedQuestions[currentQuestion] ? "default" : "outline"}
                      size="sm"
                      onClick={toggleFlag}
                    >
                      <Flag className="h-4 w-4" />
                    </Button>
                  </div>
                  <CardTitle className="text-xl leading-relaxed">
                    {question.question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {question.options.map((option, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <button
                          onClick={() => handleAnswerSelect(index)}
                          disabled={showExplanation}
                          className={`w-full p-4 text-left border-2 rounded-lg transition-all duration-200 ${
                            selectedAnswer === index
                              ? showExplanation
                                ? index === question.correctAnswer
                                  ? 'border-green-500 bg-green-50 text-green-900'
                                  : 'border-red-500 bg-red-50 text-red-900'
                                : 'border-primary bg-primary/5 text-primary'
                              : showExplanation && index === question.correctAnswer
                              ? 'border-green-500 bg-green-50 text-green-900'
                              : 'border-border hover:border-primary/50 hover:bg-muted/50'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center text-sm font-medium ${
                              selectedAnswer === index
                                ? showExplanation
                                  ? index === question.correctAnswer
                                    ? 'border-green-500 bg-green-500 text-white'
                                    : 'border-red-500 bg-red-500 text-white'
                                  : 'border-primary bg-primary text-primary-foreground'
                                : showExplanation && index === question.correctAnswer
                                ? 'border-green-500 bg-green-500 text-white'
                                : 'border-border'
                            }`}>
                              {String.fromCharCode(65 + index)}
                            </div>
                            <span>{option}</span>
                            {showExplanation && selectedAnswer === index && index !== question.correctAnswer && (
                              <X className="h-4 w-4 text-red-500 ml-auto" />
                            )}
                            {showExplanation && index === question.correctAnswer && (
                              <CheckCircle className="h-4 w-4 text-green-500 ml-auto" />
                            )}
                          </div>
                        </button>
                      </motion.div>
                    ))}
                  </div>

                  {/* Explanation */}
                  {showExplanation && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg"
                    >
                      <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                        <Brain className="h-4 w-4" />
                        Explanation
                      </h3>
                      <p className="text-blue-800">{question.explanation}</p>
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Previous
            </Button>

            <Button
              onClick={handleNext}
              disabled={!showExplanation && selectedAnswer === null}
            >
              {showExplanation ? (
                currentQuestion === sampleQuestions.length - 1 ? (
                  "Finish"
                ) : (
                  <>
                    Next
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </>
                )
              ) : (
                "Check Answer"
              )}
            </Button>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Question Navigator */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-5 gap-2">
                {sampleQuestions.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentQuestion(index);
                      setSelectedAnswer(answers[index]);
                      setShowExplanation(false);
                    }}
                    className={`aspect-square rounded-lg text-sm font-medium transition-colors ${
                      index === currentQuestion
                        ? 'bg-primary text-primary-foreground'
                        : answers[index] !== null
                        ? 'bg-green-100 text-green-800 border border-green-300'
                        : flaggedQuestions[index]
                        ? 'bg-yellow-100 text-yellow-800 border border-yellow-300'
                        : 'bg-muted hover:bg-muted/80'
                    }`}
                  >
                    {index + 1}
                    {flaggedQuestions[index] && (
                      <Flag className="h-3 w-3 absolute -top-1 -right-1" />
                    )}
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Performance Stats */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Target className="h-4 w-4" />
                Session Stats
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Answered</span>
                <span className="font-medium">
                  {answers.filter(a => a !== null).length}/{sampleQuestions.length}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Flagged</span>
                <span className="font-medium">
                  {flaggedQuestions.filter(f => f).length}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Time</span>
                <span className="font-medium">
                  {Math.floor(timeElapsed / 60)}:{(timeElapsed % 60).toString().padStart(2, '0')}
                </span>
              </div>
            </CardContent>
          </Card>

          {/* AI Insights */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Brain className="h-4 w-4" />
                AI Insights
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <AlertCircle className="h-4 w-4 text-blue-500 mt-0.5" />
                  <p>You're performing well on algebra problems. Consider advancing to polynomial equations.</p>
                </div>
                <div className="flex items-start gap-2">
                  <BookOpen className="h-4 w-4 text-orange-500 mt-0.5" />
                  <p>Reading comprehension timing could be improved. Try skimming passages first.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}