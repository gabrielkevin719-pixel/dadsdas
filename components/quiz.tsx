"use client";

import { useState } from "react";

interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
}

const questions: QuizQuestion[] = [
  {
    id: 1,
    question: "Como você descreveria seu nível de energia durante o dia?",
    options: [
      "Sempre me sinto disposto e energizado",
      "Tenho altos e baixos durante o dia",
      "Frequentemente me sinto cansado",
      "Estou constantemente exausto",
    ],
  },
  {
    id: 2,
    question: "Com que frequência você experimenta problemas digestivos?",
    options: [
      "Raramente ou nunca",
      "Ocasionalmente (1-2 vezes por semana)",
      "Frequentemente (3-4 vezes por semana)",
      "Diariamente",
    ],
  },
  {
    id: 3,
    question: "Como está sua qualidade de sono?",
    options: [
      "Durmo muito bem todas as noites",
      "Durmo bem na maioria das noites",
      "Tenho dificuldades para dormir às vezes",
      "Sofro de insônia frequente",
    ],
  },
  {
    id: 4,
    question: "Você já tentou outros protocolos de saúde antes?",
    options: [
      "Nunca tentei nenhum",
      "Sim, com pouco sucesso",
      "Sim, com algum sucesso",
      "Sim, mas busco algo melhor",
    ],
  },
  {
    id: 5,
    question: "Qual é seu principal objetivo de saúde?",
    options: [
      "Perder peso",
      "Aumentar energia e disposição",
      "Melhorar digestão",
      "Saúde geral e prevenção",
    ],
  },
];

interface QuizProps {
  onComplete: () => void;
}

export function Quiz({ onComplete }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleNext = () => {
    if (selectedOption === null) return;

    const newAnswers = [...answers, selectedOption];
    setAnswers(newAnswers);
    setSelectedOption(null);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      onComplete();
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const question = questions[currentQuestion];

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="mb-8">
        <div className="flex justify-between text-sm text-muted mb-2">
          <span>Pergunta {currentQuestion + 1} de {questions.length}</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <h3 className="text-xl md:text-2xl font-semibold mb-6 text-foreground">
        {question.question}
      </h3>

      <div className="flex flex-col gap-3 mb-8">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => setSelectedOption(index)}
            className={`p-4 text-left rounded-lg border-2 transition-all duration-200 ${
              selectedOption === index
                ? "border-primary bg-primary/10 text-foreground"
                : "border-border bg-card text-card-foreground hover:border-primary/50"
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      <button
        onClick={handleNext}
        disabled={selectedOption === null}
        className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-200 ${
          selectedOption === null
            ? "bg-muted text-background cursor-not-allowed"
            : "bg-primary text-background hover:bg-primary-hover"
        }`}
      >
        {currentQuestion < questions.length - 1 ? "Próxima Pergunta" : "Ver Resultado"}
      </button>
    </div>
  );
}
