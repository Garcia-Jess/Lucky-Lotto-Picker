import { useState } from "react";

export default function Card() {
  const [numbers, setNumbers] = useState([]);

  const generateNumbers = () => {
    const generatedNumbers = [];
    while (generatedNumbers.length < 50) {
      const randomNum = Math.floor(Math.random() * 100) + 1;
      if (!generatedNumbers.includes(randomNum)) {
        // Convert the number to a string and pad with '0' if it's less than 10
        const formattedNum =
          randomNum < 10
            ? randomNum.toString().padStart(2, "0")
            : randomNum.toString();
        generatedNumbers.push(formattedNum);
      }
    }
    setNumbers(generatedNumbers);
  };

  return (
    <>
      <div className="container flex justify-center items-center">
        <div className="p-2 rounded-lg md:max-w-4xl lg:max-w-7xl">
          <h3 className="text-orange-600 md:text-2xl">
            Gerador de Números Aleatórios
          </h3>
          <h1 className="text-4xl md:text-7xl font-semibold">LOTOMANIA</h1>
          <div>
            {
              <ul className="flex gap-3 flex-wrap justify-center my-10">
                {numbers.map((number, index) => (
                  <li
                    className="font-semibold rounded-full bg-orange-600 p-4 lg:p-5"
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
            className="px-10 md:px-20 py-5 my-15 bg-orange-600 text-white rounded-full hover:bg-orange-700 font-semibold"
          >
            Gere seus números
          </button>
        </div>
      </div>
    </>
  );
}
