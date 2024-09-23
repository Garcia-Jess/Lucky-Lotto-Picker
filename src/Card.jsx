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
      <div className="container mx-auto flex justify-center items-center">
        <div className="p-6 rounded-lg max-w-lg">
          <h3 className="text-orange-600 text-2xl">
            Gerador de Números Aleatórios
          </h3>
          <h1 className="text-8xl font-semibold">lotomania</h1>
          <div>
            {
              <ul className="flex gap-2 flex-wrap justify-center my-10">
                {numbers.map((number, index) => (
                  <li
                    className="5xl font-semibold rounded-full bg-orange-600 px-4"
                    key={index}
                  >
                    {number}
                  </li>
                ))}
              </ul>
            }
          </div>
          <button
            onClick={generateNumbers}
            className="px-20 py-5 my-15 bg-orange-600 text-white rounded-full hover:bg-orange-700 font-semibold"
          >
            Gere seus números
          </button>
        </div>
      </div>
    </>
  );
}
