import { useEffect, useState } from "react";
import Header from "../components/header";

const Sum = () => {
  const [result, setResult] = useState(0);

  const sumResult = () => {
    let indice = 13;
    let soma = 0;
    let k = 0;

    while (k < indice) {
      k++;
      soma = soma + k;
      console.log(`A soma terá o valor de : ${soma}`);
      setResult(soma);
    }
  };

  useEffect(() => {
    sumResult();
  }, []);

  return (
    <main>
      <Header />
      <div className="flex flex-col items-center gap-8">
        <h1 className="text-4xl font-semibold">Questão 1</h1>
        <code>
          {`int INDICE = 13, SOMA = 0, K = 0;
    enquanto K < INDICE faça
    {
    	K = K + 1;
    	SOMA = SOMA + K;
    }
    imprimir(SOMA);`}
        </code>
        <p>Ao final do processamento, qual será o valor da variável SOMA?</p>
        <h2 className="text-2xl font-bold">{`A váriavel SOMA terá o valor de : ${result}`}</h2>
      </div>
    </main>
  );
};

export default Sum;
