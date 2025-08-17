"use client"

import * as React from "react"
import Link from "next/link"
import { BookOpen, Twitter, Linkedin, Instagram } from "lucide-react"
import { cn } from "@/lib/utils"

interface FooterProps {
  className?: string
}

export function Footer({ className }: FooterProps) {
  const footerSections = [
    {
      title: "Company",
      links: [
        { href: "/about", label: "About" },
        { href: "/careers", label: "Careers" },
        { href: "/contact", label: "Contact" },
      ]
    },
    {
      title: "Resources",
      links: [
        { href: "/blog", label: "Blog" },
        { href: "/faq", label: "FAQ" },
        { href: "/support", label: "Support" },
      ]
    },
    {
      title: "Legal",
      links: [
        { href: "/privacy", label: "Privacy Policy" },
        { href: "/terms", label: "Terms of Service" },
        { href: "/cookies", label: "Cookie Policy" },
      ]
    }
  ]

  const socialLinks = [
    { href: "https://twitter.com/prepedgeai", icon: Twitter, label: "Twitter" },
    { href: "https://linkedin.com/company/prepedgeai", icon: Linkedin, label: "LinkedIn" },
    { href: "https://instagram.com/prepedgeai", icon: Instagram, label: "Instagram" },
  ]

  return (
    <footer className={cn("bg-muted/50 border-t", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-lg">
                <BookOpen className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">PrepEdge AI</span>
            </Link>
            <p className="text-muted-foreground max-w-md leading-relaxed mb-6">
              AI-driven SAT prep personalized to your strengths and weaknesses. 
              Smarter prep for a sharper edge in your academic journey.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <Link
                    key={social.href}
                    href={social.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-foreground mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 PrepEdge AI. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link 
              href="/privacy" 
              className="text-muted-foreground hover:text-foreground text-sm transition-colors duration-200"
            >
              Privacy
            </Link>
            <Link 
              href="/terms" 
              className="text-muted-foreground hover:text-foreground text-sm transition-colors duration-200"
            >
              Terms
            </Link>
            <Link 
              href="/cookies" 
              className="text-muted-foreground hover:text-foreground text-sm transition-colors duration-200"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}