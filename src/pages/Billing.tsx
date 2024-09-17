import { useEffect, useState } from "react";
import Header from "../components/header";
import { apiCore } from "../lib/axios";
import { formatPrice } from "../utils/format-price";

interface IBilling {
  dia: number;
  valor: number;
}

const Billing = () => {
  const [billing, setBilling] = useState<IBilling[] | []>([]);

  const fetchBilling = async (): Promise<IBilling[] | []> => {
    const result = await apiCore.get("/billing");
    return result.data;
  };

  useEffect(() => {
    fetchBilling().then((response) => setBilling(response));
  }, []);

  const calculateBilling = (data: IBilling[]) => {
    let numbers = data.map((element) => element.valor);
    let positiveNumbers = numbers.filter((number) => number > 0);
    let lowest = Math.min(...positiveNumbers);
    let highest = Math.max(...numbers);
    let sum = positiveNumbers.reduce((total, number) => total + number, 0);
    let average = sum / positiveNumbers.length;
    let greaterAverage = numbers.filter((number) => number > average);

    return {
      lowest,
      highest,
      daysGreaterAverage: greaterAverage.length,
    };
  };

  const billingResult = calculateBilling(billing);

  return (
    <main>
      <Header />
      <section className="mx-auto flex w-full max-w-[800px] flex-col gap-4 pb-8">
        <h1 className="w-full text-center text-4xl font-semibold">
         Questão 3 - Cálculo de Faturamento
        </h1>
        <div className="flex flex-col items-center justify-center gap-4 self-center">
          <p>
            O menor valor de faturamento ocorrido em um dia do mês:
            <b>{formatPrice(billingResult.lowest)}</b>
          </p>
          <p>
            O maior valor de faturamento ocorrido em um dia do mês:
            <b>{formatPrice(billingResult.highest)}</b>
          </p>
          <p>
            Número de dias no mês em que o valor de faturamento diário foi
            superior à média mensal:
            <b>{`${billingResult.daysGreaterAverage} dias`}</b>
          </p>
        </div>

        <table className="w-full table-fixed text-left">
          <thead>
            <tr>
              <th className="p-4">Dia</th>
              <th className="p-4 text-right">Faturamento</th>
            </tr>
          </thead>

          <tbody>
            {billing.map((result) => (
              <tr className="border-y border-b border-solid border-slate-200">
                <td className="p-4">{result.dia}</td>
                <td className="p-4 text-right">{formatPrice(result.valor)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
};

export default Billing;
