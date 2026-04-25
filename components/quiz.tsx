"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { quizQuestions } from "@/lib/quiz-data";
import { CheckCircle, XCircle, Trophy, RotateCcw, ChevronRight } from "lucide-react";

type QuizState = "start" | "playing" | "finished";

export function Quiz() {
  const [state, setState] = useState<QuizState>("start");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const question = quizQuestions[currentQuestion];
  const isCorrect = selectedAnswer === question?.correctAnswer;
  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

  const handleStart = () => {
    setState("playing");
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowResult(false);
  };

  const handleAnswer = (index: number) => {
    if (showResult) return;
    setSelectedAnswer(index);
    setShowResult(true);
    if (index === question.correctAnswer) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setState("finished");
    }
  };

  const getScoreMessage = () => {
    const percentage = (score / quizQuestions.length) * 100;
    if (percentage === 100) return "Perfeito! Você é um gênio!";
    if (percentage >= 75) return "Excelente! Muito bem!";
    if (percentage >= 50) return "Bom trabalho! Continue praticando!";
    return "Não desista! Tente novamente!";
  };

  if (state === "start") {
    return (
      <div className="flex flex-col items-center justify-center gap-8 text-center">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold tracking-tight text-balance">
            Quiz de Conhecimentos Gerais
          </h1>
          <p className="text-[var(--muted-foreground)] text-lg">
            Teste seus conhecimentos com {quizQuestions.length} perguntas
          </p>
        </div>
        <button
          onClick={handleStart}
          className="flex items-center gap-2 px-8 py-4 bg-[var(--primary)] text-[var(--primary-foreground)] rounded-[var(--radius)] font-semibold text-lg transition-all hover:opacity-90 hover:scale-105"
        >
          Começar Quiz
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    );
  }

  if (state === "finished") {
    return (
      <div className="flex flex-col items-center justify-center gap-8 text-center">
        <Trophy className="w-20 h-20 text-[var(--accent)]" />
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold tracking-tight">Quiz Finalizado!</h1>
          <p className="text-[var(--muted-foreground)] text-lg">
            {getScoreMessage()}
          </p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="text-6xl font-bold text-[var(--primary)]">
            {score}/{quizQuestions.length}
          </span>
          <span className="text-[var(--muted-foreground)]">
            {Math.round((score / quizQuestions.length) * 100)}% de acertos
          </span>
        </div>
        <button
          onClick={handleStart}
          className="flex items-center gap-2 px-8 py-4 bg-[var(--primary)] text-[var(--primary-foreground)] rounded-[var(--radius)] font-semibold text-lg transition-all hover:opacity-90 hover:scale-105"
        >
          <RotateCcw className="w-5 h-5" />
          Jogar Novamente
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8 w-full max-w-2xl">
      {/* Progress Bar */}
      <div className="flex flex-col gap-2">
        <div className="flex justify-between text-sm text-[var(--muted-foreground)]">
          <span>Pergunta {currentQuestion + 1} de {quizQuestions.length}</span>
          <span>Pontuação: {score}</span>
        </div>
        <div className="h-2 bg-[var(--secondary)] rounded-full overflow-hidden">
          <div
            className="h-full bg-[var(--primary)] transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-[var(--card)] rounded-[var(--radius)] p-8 flex flex-col gap-6">
        <h2 className="text-2xl font-semibold leading-relaxed text-balance">
          {question.question}
        </h2>

        <div className="flex flex-col gap-3">
          {question.options.map((option, index) => {
            const isSelected = selectedAnswer === index;
            const isCorrectOption = index === question.correctAnswer;

            return (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                disabled={showResult}
                className={cn(
                  "flex items-center gap-4 p-4 rounded-[var(--radius)] border-2 text-left transition-all",
                  !showResult && "hover:border-[var(--primary)] hover:bg-[var(--secondary)] cursor-pointer",
                  !showResult && "border-[var(--border)]",
                  showResult && isCorrectOption && "border-[var(--accent)] bg-[var(--accent)]/10",
                  showResult && isSelected && !isCorrectOption && "border-[var(--destructive)] bg-[var(--destructive)]/10",
                  showResult && !isSelected && !isCorrectOption && "border-[var(--border)] opacity-50"
                )}
              >
                <span
                  className={cn(
                    "flex items-center justify-center w-8 h-8 rounded-full text-sm font-semibold",
                    !showResult && "bg-[var(--secondary)] text-[var(--secondary-foreground)]",
                    showResult && isCorrectOption && "bg-[var(--accent)] text-[var(--accent-foreground)]",
                    showResult && isSelected && !isCorrectOption && "bg-[var(--destructive)] text-[var(--destructive-foreground)]",
                    showResult && !isSelected && !isCorrectOption && "bg-[var(--secondary)] text-[var(--secondary-foreground)]"
                  )}
                >
                  {String.fromCharCode(65 + index)}
                </span>
                <span className="flex-1 font-medium">{option}</span>
                {showResult && isCorrectOption && (
                  <CheckCircle className="w-6 h-6 text-[var(--accent)]" />
                )}
                {showResult && isSelected && !isCorrectOption && (
                  <XCircle className="w-6 h-6 text-[var(--destructive)]" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Result & Next Button */}
      {showResult && (
        <div className="flex flex-col items-center gap-4">
          <p
            className={cn(
              "text-lg font-semibold",
              isCorrect ? "text-[var(--accent)]" : "text-[var(--destructive)]"
            )}
          >
            {isCorrect ? "Correto!" : "Incorreto!"}
          </p>
          <button
            onClick={handleNext}
            className="flex items-center gap-2 px-6 py-3 bg-[var(--primary)] text-[var(--primary-foreground)] rounded-[var(--radius)] font-semibold transition-all hover:opacity-90"
          >
            {currentQuestion < quizQuestions.length - 1 ? "Próxima Pergunta" : "Ver Resultado"}
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
}
