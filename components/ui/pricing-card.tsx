"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"

interface PricingCardProps {
  name: string
  price: string
  features: string[]
  isPopular?: boolean
  ctaText?: string
  ctaLink?: string
  className?: string
}

export function PricingCard({ 
  name, 
  price, 
  features, 
  isPopular = false, 
  ctaText = "Choose Plan",
  ctaLink = "/signup",
  className 
}: PricingCardProps) {
  return (
    <Card className={cn(
      "relative h-full transition-all duration-200 hover:shadow-xl",
      isPopular && "border-primary shadow-lg scale-105",
      className
    )}>
      {isPopular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <Badge variant="default" className="px-3 py-1">
            Most Popular
          </Badge>
        </div>
      )}
      
      <CardHeader className="text-center pb-6">
        <CardTitle className="text-2xl font-bold">{name}</CardTitle>
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-4xl font-bold text-primary">{price}</span>
          {price !== "Custom" && <span className="text-muted-foreground">/month</span>}
        </div>
      </CardHeader>
      
      <CardContent className="space-y-3">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-3">
            <Check className="h-5 w-5 text-primary flex-shrink-0" />
            <span className="text-sm">{feature}</span>
          </div>
        ))}
      </CardContent>
      
      <CardFooter className="pt-6">
        <Button 
          className="w-full" 
          variant={isPopular ? "default" : "outline"}
          asChild
        >
          <a href={ctaLink}>{ctaText}</a>
        </Button>
      </CardFooter>
    </Card>
  )
}