import { FormEvent, useState } from "react";
import Header from "../components/header";
import { Input } from "../components/input";
import Button from "../components/button";

const ReverseWord = () => {
  const [word, setWord] = useState("");
  const [message, setMessage] = useState("");

  const reverseWord = (e: FormEvent) => {
    e.preventDefault();

    let reversedWord = "";

    for (let i = word.length - 1; i >= 0; i--) {
      reversedWord += word[i];
    }

    setMessage(reversedWord);
  };

  return (
    <main>
      <Header />
      <section className="mx-auto flex w-full max-w-[50rem] flex-col gap-8 text-center">
        <h1 className="text-4xl font-semibold">Questão 5 - Inverter Caracteres</h1>
        <form className="flex gap-3" onSubmit={reverseWord}>
          <Input
            type="text"
            autoFocus
            placeholder="Insira um caracter"
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />

          <Button>Inverter</Button>
        </form>

        <p className="text-xl">{message}</p>
      </section>
    </main>
  );
};

export default ReverseWord;
