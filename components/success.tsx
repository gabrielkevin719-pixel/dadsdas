export function Success() {
  return (
    <div className="w-full max-w-lg mx-auto text-center">
      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 mb-6">
        <svg
          className="w-10 h-10 text-primary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>

      <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
        Consulta Agendada com Sucesso!
      </h3>

      <p className="text-lg text-muted mb-8">
        Obrigado por se inscrever. Nossa equipe entrará em contato em breve pelo
        WhatsApp para confirmar sua consulta gratuita com a equipe do Dr. Carlos
        Jaramillo.
      </p>

      <div className="bg-card border border-border rounded-xl p-6 mb-8">
        <h4 className="font-semibold text-foreground mb-4">Próximos passos:</h4>
        <ul className="text-left space-y-3">
          <li className="flex items-start gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-semibold">
              1
            </span>
            <span className="text-muted">
              Você receberá uma mensagem no WhatsApp em até 24 horas
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-semibold">
              2
            </span>
            <span className="text-muted">
              Agende o melhor horário para sua consulta gratuita
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-semibold">
              3
            </span>
            <span className="text-muted">
              Receba seu plano personalizado do Protocolo Bicarbonato
            </span>
          </li>
        </ul>
      </div>

      <a
        href="/"
        className="inline-block px-8 py-4 bg-primary text-background font-semibold rounded-lg hover:bg-primary-hover transition-all duration-200"
      >
        Voltar ao Início
      </a>
    </div>
  );
}
