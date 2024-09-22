import React, { useState } from "react";

export default function Card() {
  const [numbers, setNumbers] = useState([]);

  const generateNumbers = () => {
    const generatedNumbers = [];
    while (generatedNumbers.length < 50) {
      const randomNum = Math.floor(Math.random() * 100) + 1;
      if (!generatedNumbers.includes(randomNum)) {
        generatedNumbers.push(randomNum);
      }
    }
    setNumbers(generatedNumbers);
  };

  return (
    <>
      <div className="container mx-auto flex justify-center items-center min-h-screen">
        <div className="p-6 rounded-lg max-w-lg">
          <h3>Gerador de Números Aleatórios</h3>
          <h1 className="text-6xl">lotomania</h1>
          <div>
            {
              <ul className="flex gap-2 justify-center my-10">
                {numbers.map((number, index) => (
                  <li key={index}>{number}</li>
                ))}
              </ul>
            }
          </div>
          <button
            onClick={generateNumbers}
            className="px-20 py-5 my-20 bg-orange-600 text-white rounded-full hover:bg-orange-700"
          >
            Gere seus números
          </button>
        </div>
      </div>
    </>
  );
}
