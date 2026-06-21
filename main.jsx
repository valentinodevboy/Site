import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Heart, Sparkles, ArrowDown, Lock, Unlock, Star } from 'lucide-react';
import './style.css';

const photos = [
  '/fotos/julia-1.jpg',
  '/fotos/julia-2.jpg',
  '/fotos/julia-3.jpg',
  '/fotos/julia-4.jpg',
  '/fotos/julia-5.jpg',
  '/fotos/julia-6.jpg',
];

function FloatingHearts() {
  const hearts = useMemo(() => {
    return Array.from({ length: 18 }, (_, index) => ({
      id: index,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 8}s`,
      duration: `${7 + Math.random() * 8}s`,
      size: `${12 + Math.random() * 18}px`,
      opacity: 0.18 + Math.random() * 0.38,
    }));
  }, []);

  return (
    <div className="floating-hearts" aria-hidden="true">
      {hearts.map((heart) => (
        <span
          key={heart.id}
          style={{
            left: heart.left,
            animationDelay: heart.delay,
            animationDuration: heart.duration,
            width: heart.size,
            height: heart.size,
            opacity: heart.opacity,
          }}
        />
      ))}
    </div>
  );
}

function App() {
  const [openLetter, setOpenLetter] = useState(false);

  return (
    <main>
      <FloatingHearts />

      <section className="hero section">
        <div className="hero-copy">
          <p className="eyebrow"><Sparkles size={16} /> feito especialmente para</p>
          <h1>Júlia</h1>
          <p className="subtitle">
            Algumas pessoas chegam devagar e, mesmo assim, mudam o clima inteiro.
          </p>
          <div className="hero-actions">
            <a href="#galeria" className="button primary">ver nossas estrelas</a>
            <a href="#carta" className="button ghost">abrir surpresa</a>
          </div>
        </div>

        <div className="hero-card">
          <img src="/fotos/julia-5.jpg" alt="Foto da Júlia" />
          <div className="card-glow" />
          <p>ela tem um jeito que fica na cabeça.</p>
        </div>

        <a className="scroll-hint" href="#galeria" aria-label="Ir para galeria">
          <ArrowDown />
        </a>
      </section>

      <section id="galeria" className="section gallery-section">
        <div className="section-heading">
          <p className="eyebrow"><Star size={15} /> pequena coleção de momentos</p>
          <h2>Um site com a energia dela</h2>
          <p>
            Meio noite, meio poesia, meio “não sei explicar, só sei que gostei”.
          </p>
        </div>

        <div className="photo-grid">
          {photos.map((photo, index) => (
            <article className={`photo-card photo-${index + 1}`} key={photo}>
              <img src={photo} alt={`Foto ${index + 1} da Júlia`} />
              <span>{['mistério', 'noite', 'reflexo', 'sorriso', 'ruiva', 'brilho'][index]}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section quote-section">
        <div className="quote-card">
          <Heart className="quote-icon" />
          <h2>“Você tem um caos bonito.”</h2>
          <p>
            daqueles que parecem música baixa, luz quente e vontade de conversar por horas.
          </p>
        </div>
      </section>

      <section id="carta" className="section letter-section">
        <div className="letter">
          <div className="letter-top">
            <p className="eyebrow"><Lock size={15} /> mensagem reservada</p>
            <button onClick={() => setOpenLetter(!openLetter)} className="button primary">
              {openLetter ? <Unlock size={18} /> : <Heart size={18} />}
              {openLetter ? 'fechar carta' : 'abrir carta'}
            </button>
          </div>

          {openLetter ? (
            <div className="letter-content open">
              <h2>Júlia,</h2>
              <p>
                eu ainda estou descobrindo seu universo, mas já deu para perceber que ele tem cor,
                presença e aquele tipo de detalhe que prende a atenção sem pedir licença.
              </p>
              <p>
                Fiz esse começo de site para guardar um pouco dessa impressão: bonita, intensa,
                diferente e impossível de passar batido.
              </p>
              <p className="signature">— de alguém que claramente quis te impressionar</p>
            </div>
          ) : (
            <div className="letter-content locked">
              <p>tem uma coisa aqui dentro esperando por ela.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
