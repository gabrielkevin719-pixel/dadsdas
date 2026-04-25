"use client";

import { useState } from "react";
import { Hero } from "@/components/hero";
import { Benefits } from "@/components/benefits";
import { Testimonials } from "@/components/testimonials";
import { Quiz } from "@/components/quiz";
import { ContactForm } from "@/components/contact-form";
import { Success } from "@/components/success";

type Step = "landing" | "quiz" | "form" | "success";

export default function Home() {
  const [currentStep, setCurrentStep] = useState<Step>("landing");

  const handleStartQuiz = () => {
    setCurrentStep("quiz");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleQuizComplete = () => {
    setCurrentStep("form");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleFormSubmit = () => {
    setCurrentStep("success");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (currentStep === "quiz") {
    return (
      <main className="min-h-screen flex flex-col">
        <header className="py-4 px-4 border-b border-border">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <button
              onClick={() => setCurrentStep("landing")}
              className="text-muted hover:text-foreground transition-colors flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Voltar
            </button>
            <span className="text-lg font-semibold text-foreground">Protocolo Bicarbonato</span>
            <div className="w-16" />
          </div>
        </header>
        <div className="flex-1 flex items-center justify-center px-4 py-12">
          <Quiz onComplete={handleQuizComplete} />
        </div>
      </main>
    );
  }

  if (currentStep === "form") {
    return (
      <main className="min-h-screen flex flex-col">
        <header className="py-4 px-4 border-b border-border">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <button
              onClick={() => setCurrentStep("quiz")}
              className="text-muted hover:text-foreground transition-colors flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Voltar
            </button>
            <span className="text-lg font-semibold text-foreground">Protocolo Bicarbonato</span>
            <div className="w-16" />
          </div>
        </header>
        <div className="flex-1 flex items-center justify-center px-4 py-12">
          <ContactForm onSubmit={handleFormSubmit} />
        </div>
      </main>
    );
  }

  if (currentStep === "success") {
    return (
      <main className="min-h-screen flex flex-col">
        <header className="py-4 px-4 border-b border-border">
          <div className="max-w-6xl mx-auto flex items-center justify-center">
            <span className="text-lg font-semibold text-foreground">Protocolo Bicarbonato</span>
          </div>
        </header>
        <div className="flex-1 flex items-center justify-center px-4 py-12">
          <Success />
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 py-4 px-4 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <span className="text-lg font-semibold text-foreground">
            Dr. Carlos Jaramillo
          </span>
          <button
            onClick={handleStartQuiz}
            className="px-4 py-2 bg-primary text-background font-medium rounded-lg hover:bg-primary-hover transition-colors text-sm"
          >
            Começar Quiz
          </button>
        </div>
      </header>

      <Hero onStartQuiz={handleStartQuiz} />
      <Benefits />
      <Testimonials />

      <section className="py-20 px-4 bg-secondary/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Pronto para transformar sua saúde?
          </h2>
          <p className="text-lg text-muted mb-8 max-w-2xl mx-auto">
            Faça o quiz gratuito agora e descubra como o Protocolo Bicarbonato pode te ajudar.
          </p>
          <button
            onClick={handleStartQuiz}
            className="px-8 py-4 bg-primary text-background font-semibold text-lg rounded-lg hover:bg-primary-hover transition-all duration-200 shadow-lg shadow-primary/25"
          >
            Fazer Quiz Gratuito
          </button>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border">
        <div className="max-w-6xl mx-auto text-center text-muted text-sm">
          <p>&copy; 2024 Dr. Carlos Jaramillo - Protocolo Bicarbonato. Todos os direitos reservados.</p>
          <p className="mt-2">
            Este site é apenas para fins informativos e não substitui aconselhamento médico profissional.
          </p>
        </div>
      </footer>
    </main>
  );
}
