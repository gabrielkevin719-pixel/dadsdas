export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

export const quizQuestions: Question[] = [
  {
    id: 1,
    question: "Qual é o maior planeta do Sistema Solar?",
    options: ["Terra", "Marte", "Júpiter", "Saturno"],
    correctAnswer: 2,
  },
  {
    id: 2,
    question: "Em que ano o Brasil foi descoberto?",
    options: ["1492", "1500", "1510", "1488"],
    correctAnswer: 1,
  },
  {
    id: 3,
    question: "Qual é o elemento químico representado pelo símbolo 'O'?",
    options: ["Ouro", "Oxigênio", "Osmio", "Ósmio"],
    correctAnswer: 1,
  },
  {
    id: 4,
    question: "Quem pintou a Mona Lisa?",
    options: ["Michelangelo", "Rafael", "Leonardo da Vinci", "Botticelli"],
    correctAnswer: 2,
  },
  {
    id: 5,
    question: "Qual é a capital da Austrália?",
    options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
    correctAnswer: 2,
  },
  {
    id: 6,
    question: "Quantos continentes existem no planeta Terra?",
    options: ["5", "6", "7", "8"],
    correctAnswer: 2,
  },
  {
    id: 7,
    question: "Qual é o maior oceano do mundo?",
    options: ["Atlântico", "Índico", "Ártico", "Pacífico"],
    correctAnswer: 3,
  },
  {
    id: 8,
    question: "Quem escreveu 'Dom Casmurro'?",
    options: ["José de Alencar", "Machado de Assis", "Eça de Queirós", "Jorge Amado"],
    correctAnswer: 1,
  },
];
