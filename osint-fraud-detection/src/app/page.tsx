"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  Zap, 
  Shield, 
  Rocket, 
  Code2, 
  Lock, 
  Database, 
  Globe, 
  Cpu,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Terminal
} from "lucide-react";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const features = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Lightning Fast",
      description: "Next.js 15 with App Router for optimal performance",
      color: "text-yellow-600"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Security First",
      description: "Enterprise-grade security with robust validation",
      color: "text-green-600"
    },
    {
      icon: <Code2 className="h-6 w-6" />,
      title: "Type Safe",
      description: "Full TypeScript coverage with strict mode enabled",
      color: "text-blue-600"
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Scalable Database",
      description: "Prisma ORM with advanced schema design",
      color: "text-purple-600"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Global Ready",
      description: "Internationalization support with Next Intl",
      color: "text-indigo-600"
    },
    {
      icon: <Cpu className="h-6 w-6" />,
      title: "AI Optimized",
      description: "Structured for AI-powered development",
      color: "text-pink-600"
    }
  ];

  const techStack = [
    "Next.js 15", "TypeScript 5", "Tailwind CSS 4", "Prisma ORM",
    "shadcn/ui", "Zustand", "TanStack Query", "NextAuth.js",
    "Framer Motion", "Recharts", "DND Kit", "Zod Validation"
  ];

  const securityFeatures = [
    "XSS Protection",
    "CSRF Protection", 
    "Content Security Policy",
    "Input Validation",
    "SQL Injection Prevention",
    "Secure Headers",
    "Type Safety",
    "Audit Logging"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="relative"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
                  <Rocket className="h-10 w-10 text-white" />
                </div>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl opacity-30 blur-lg"
                />
              </motion.div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent mb-6">
              Next-Gen Web Scaffold
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              Production-ready foundation with cutting-edge technologies, 
              <span className="text-blue-600 font-semibold"> enterprise security</span>, and 
              <span className="text-purple-600 font-semibold"> AI-optimized</span> architecture
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <Sparkles className="mr-2 h-5 w-5" />
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg">
                <Terminal className="mr-2 h-5 w-5" />
                View Documentation
              </Button>
            </div>
            
            <div className="flex flex-wrap justify-center gap-2">
              {techStack.slice(0, 8).map((tech, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Why Choose This Scaffold?
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Built with modern best practices, security-first approach, and developer experience in mind
            </p>
          </motion.div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
              <TabsTrigger value="performance">Performance</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                      <CardHeader>
                        <div className={`${feature.color} mb-2`}>
                          {feature.icon}
                        </div>
                        <CardTitle className="text-lg">{feature.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-sm">
                          {feature.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="security" className="space-y-6">
              <Alert>
                <Lock className="h-4 w-4" />
                <AlertDescription>
                  This scaffold implements enterprise-grade security measures to protect your application and users.
                </AlertDescription>
              </Alert>
              
              <div className="grid md:grid-cols-2 gap-4">
                {securityFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Card>
                      <CardContent className="flex items-center p-4">
                        <CheckCircle2 className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                        <span className="text-sm font-medium">{feature}</span>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="performance" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Zap className="h-5 w-5 mr-2 text-yellow-600" />
                      Core Web Vitals
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Performance Score</span>
                        <span className="font-semibold">98/100</span>
                      </div>
                      <Progress value={98} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Accessibility Score</span>
                        <span className="font-semibold">95/100</span>
                      </div>
                      <Progress value={95} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Best Practices</span>
                        <span className="font-semibold">100/100</span>
                      </div>
                      <Progress value={100} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>SEO Score</span>
                        <span className="font-semibold">96/100</span>
                      </div>
                      <Progress value={96} className="h-2" />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Cpu className="h-5 w-5 mr-2 text-blue-600" />
                      Optimization Features
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <CheckCircle2 className="h-4 w-4 text-green-600 mr-2" />
                        Code splitting and lazy loading
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="h-4 w-4 text-green-600 mr-2" />
                        Image optimization with Sharp
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="h-4 w-4 text-green-600 mr-2" />
                        SWC minification and compilation
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="h-4 w-4 text-green-600 mr-2" />
                        Static generation and ISR
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="h-4 w-4 text-green-600 mr-2" />
                        Bundle size optimization
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Start with this enterprise-grade scaffold and accelerate your development with AI-powered assistance
            </p>
            <Button size="lg" variant="secondary" className="bg-white text-slate-900 hover:bg-slate-100">
              <Sparkles className="mr-2 h-5 w-5" />
              Start Building Now
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}