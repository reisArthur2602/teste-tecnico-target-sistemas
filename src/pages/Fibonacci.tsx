import { FormEvent, useState } from "react";
import Button from "../components/button";
import Header from "../components/header";
import { Input } from "../components/input";

const Fibonacci = () => {
  const [inputNumber, setInputNumber] = useState<number>();
  const [message, setMessage] = useState("");

  const isFibonacci = (num: number) => {
    let fib1 = 0;
    let fib2 = 1;
    while (fib2 < num) {
      [fib1, fib2] = [fib2, fib1 + fib2];
    }
    return fib2 === num;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const result = isFibonacci(Number(inputNumber));

    if (result)
      setMessage(`O número ${inputNumber} pertence a sequência de Fibonacci.`);
    else
      setMessage(
        `O número ${inputNumber} NÃO pertence a sequência de Fibonacci.`,
      );
  };

  return (
    <main>
      <Header />
      <section className="mx-auto flex w-full max-w-[50rem] flex-col gap-8 text-center">
        <h1 className="text-4xl font-semibold">Questão 2 - Sequência de Fibonacci</h1>
        <form className="flex gap-3" onSubmit={handleSubmit}>
          <Input
            type="number"
            autoFocus
            placeholder="Insira um número inteiro"
            value={inputNumber}
            onChange={(e) => setInputNumber(parseInt(e.target.value))}
          />

          <Button>Verificar</Button>
        </form>

        <p className="text-xl">{message}</p>
      </section>
    </main>
  );
};

export default Fibonacci;
