import React, { useState, useEffect } from 'react';

const Agenda = () => {
  // Estado para armazenar o ano e o mês
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  // Estado para rastrear os dias destacados
  const [highlightedDays, setHighlightedDays] = useState([]);

  // Função para atualizar o ano e o mês
  const updateYearAndMonth = () => {
    const currentDate = new Date();
    setYear(currentDate.getFullYear());
    setMonth(currentDate.getMonth() + 1);
  };

  // Chama a função de atualização ao montar o componente
  useEffect(() => {
    updateYearAndMonth();
  }, []);

  // Função para obter o número de dias em um determinado mês e ano
  const getDaysInMonth = (year, month) => {
    return new Date(year, month, 0).getDate();
  };

  // Função para definir um dia como destacado
  const toggleHighlight = (day) => {
    if (highlightedDays.includes(day)) {
      setHighlightedDays(highlightedDays.filter((d) => d !== day));
    } else {
      setHighlightedDays([...highlightedDays, day]);
    }
  };

  // Função para renderizar os dias do calendário para o mês atual
  const renderDays = () => {
    const daysInMonth = getDaysInMonth(year, month);
    return Array.from({ length: daysInMonth }).map((_, day) => (
      <div
        key={day + 1}
        className={`border p-2 cursor-pointer ${
          highlightedDays.includes(day + 1) ? 'bg-green-300' : 'border-gray-200'
        }`}
        onClick={() => toggleHighlight(day + 1)}
      >
        {day + 1}
      </div>
    ));
  };

  // Renderização do calendário
  return (
    <div>
      {/* Renderização do título com o mês e o ano */}
      <h2 className="text-2xl font-bold mb-4">
        {new Date(year, month - 1).toLocaleString('pt-BR', { month: 'long', year: 'numeric' })}
      </h2>
      
      {/* Renderização dos dias do calendário */}
      <div className="grid grid-cols-7 gap-4">
        {renderDays()}
      </div>
    </div>
  );
};

export default Agenda;
