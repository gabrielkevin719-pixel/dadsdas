interface HeroProps {
  onStartQuiz: () => void;
}

export function Hero({ onStartQuiz }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm text-primary font-medium">Consultas Gratuitas Disponíveis</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
          Descubra o{" "}
          <span className="text-primary">Protocolo Bicarbonato</span>{" "}
          do Dr. Carlos Jaramillo
        </h1>
        
        <p className="text-lg md:text-xl text-muted mb-8 max-w-2xl mx-auto text-pretty">
          O método revolucionário que já transformou a vida de milhares de pessoas.
          Faça o quiz gratuito e descubra se você é um candidato ideal para o protocolo.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button
            onClick={onStartQuiz}
            className="w-full sm:w-auto px-8 py-4 bg-primary text-background font-semibold text-lg rounded-lg hover:bg-primary-hover transition-all duration-200 shadow-lg shadow-primary/25"
          >
            Fazer Quiz Gratuito
          </button>
          <a
            href="#beneficios"
            className="w-full sm:w-auto px-8 py-4 border border-border text-foreground font-semibold text-lg rounded-lg hover:bg-secondary transition-all duration-200"
          >
            Saiba Mais
          </a>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 text-sm text-muted">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>+10.000 pacientes</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Método comprovado</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>100% natural</span>
          </div>
        </div>
      </div>
    </section>
  );
}
