import React, { useEffect } from 'react';
import './Alerta.scss';  // Certifique-se de que o SCSS ou CSS esteja importado corretamente

const Alerta = ({ mensagem, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000); // O alerta desaparece após 3 segundos
    return () => clearTimeout(timer);
  }, [mensagem, onClose]);

  return (
    <div className="alerta">
      {mensagem}
    </div>
  );
};

export default Alerta;
