import { useState } from 'react';

function FAQSection({ faqs }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="section faq-section">
      <div className="container">
        <div className="section-heading center">
          <span className="section-tag">FAQ</span>
          <h2>Preguntas frecuentes</h2>
          <p>
            Esta parte ayuda mucho al público general porque resuelve dudas sin
            que tengan que escribir o llamar de inmediato.
          </p>
        </div>

        <div className="faq-wrapper">
          {faqs.map((faq, index) => (
            <div className="faq-item" key={faq.question}>
              <button
                className="faq-question"
                onClick={() =>
                  setOpenIndex(openIndex === index ? -1 : index)
                }
              >
                <span>{faq.question}</span>
                <span>{openIndex === index ? '−' : '+'}</span>
              </button>

              {openIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;