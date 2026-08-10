import React, { useState } from 'react';
import styles from './Newsletter.module.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [answer, setAnswer] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Operación matemática simple anti-spam (ej: 12 + 1)
  const num1 = 12;
  const num2 = 1;
  const correctAnswer = num1 + num2;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (parseInt(answer) !== correctAnswer) {
      alert('La respuesta a la operación matemática es incorrecta.');
      return;
    }
    if (!email.includes('@')) {
      alert('Por favor ingresa un correo electrónico válido.');
      return;
    }
    setSubmitted(true);
  };

  return (
    <section className={styles.newsletterSection}>
      <div className={styles.newsletterCard}>
        <div className={styles.newsletterHeader}>
          <span className={styles.badge}>¡Únete al Club Glamour!</span>
          <h2 className={styles.title}>Suscríbete en Glamreebel</h2>
          <p className={styles.subtitle}>Recibe un <strong className={styles.highlight}>5% de descuento</strong> en tu primera compra y entérate de lanzamientos exclusivos.</p>
        </div>

        {submitted ? (
          <div className={styles.successMessage}>
            🎉 ¡Gracias por suscribirte! Revisa tu correo para tu código de descuento.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.inputGroup}>
              <input
                type="email"
                placeholder="Tu Correo Electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className={styles.emailInput}
              />
            </div>

            <div className={styles.footerForm}>
              <div className={styles.captchaContainer}>
                <span className={styles.captchaLabel}>{num1} + {num2} =</span>
                <input
                  type="number"
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  placeholder="?"
                  required
                  className={styles.captchaInput}
                />
              </div>

              <button type="submit" className={styles.submitButton}>
                Suscribirme 💖
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default Newsletter;