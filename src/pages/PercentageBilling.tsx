import Header from "../components/header";
import { BillingMonth } from "../constants/billing-month";
import { formatPrice } from "../utils/format-price";

const PercentageBilling = () => {

  interface ICalculatePercentages {
    state: string;
    percentual: number;
    billing: number;
  }

  const calculatePercentages = (data: typeof BillingMonth) => {
    const percentagesPerState: ICalculatePercentages[] = [];

    const total = Object.values(data).reduce((acc, value) => acc + value, 0);

    Object.entries(data).forEach(([state, value]) => {
      const percentual = (value / total) * 100;
      percentagesPerState.push({ state, percentual, billing: value });
    });

    return { percentagesPerState, total };
  };

  const result = calculatePercentages(BillingMonth);

  return (
    <main>
      <Header />

      <h1 className="text-4xl font-semibold">Questão 4 - Percentual de faturamento por Estado</h1>
      <table className="my-8 w-full table-fixed text-left">
        <thead>
          <tr>
            <th className="p-4">Estado</th>
            <th className="p-4">Faturamento</th>
            <th className="p-4 text-right">Percentual</th>
          </tr>
        </thead>

        <tbody>
          {result.percentagesPerState.map((data, index) => (
            <tr
              key={index}
              className="border-y border-b border-solid border-slate-200"
            >
              <td className="p-4">{data.state}</td>
              <td className="p-4">{formatPrice(data.billing)}</td>
              <td className="p-4 text-right">{`${data.percentual.toFixed(2)} %`}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex w-full items-center justify-between gap-4 text-xl font-semibold">
        <p>TOTAL:</p>
        <p>{formatPrice(result.total)}</p>
      </div>
    </main>
  );
};

export default PercentageBilling;
