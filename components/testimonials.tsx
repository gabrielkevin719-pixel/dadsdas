const testimonials = [
  {
    name: "Maria Silva",
    location: "São Paulo, SP",
    text: "Depois de anos sofrendo com problemas digestivos, o Protocolo Bicarbonato mudou minha vida. Em apenas 3 semanas já senti uma diferença enorme!",
    rating: 5,
  },
  {
    name: "João Santos",
    location: "Rio de Janeiro, RJ",
    text: "Minha energia aumentou muito desde que comecei o protocolo. Recomendo a todos que querem melhorar sua qualidade de vida.",
    rating: 5,
  },
  {
    name: "Ana Costa",
    location: "Belo Horizonte, MG",
    text: "A consulta foi muito esclarecedora e o suporte da equipe é excelente. O protocolo é simples de seguir e os resultados são reais.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            O que dizem nossos pacientes
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Histórias reais de pessoas que transformaram sua saúde com o Protocolo Bicarbonato.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-accent"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-foreground mb-4 italic">&quot;{testimonial.text}&quot;</p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
