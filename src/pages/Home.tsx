import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <section className="flex w-full max-w-[37.5rem] items-center justify-between gap-4">
        <img src="/logo.png" alt="logo target sistemas" />
        <div className="flex flex-col gap-10">
          <Link
            to="/exercise/fibonacci"
            className="w-full rounded bg-red-900 p-4 px-16 text-white"
          >
            Exercicio 2
          </Link>
          <Link
            to="/exercise/billing"
            className="w-full rounded bg-red-900 p-4 px-16 text-white"
          >
            Exercicio 3
          </Link>
          <Link
            to="/exercise/percentage-billing"
            className="w-full rounded bg-red-900 p-4 px-16 text-white"
          >
            Exercicio 4
          </Link>
          <Link
            to="/exercise/reverse-word"
            className="w-full rounded bg-red-900 p-4 px-16 text-white"
          >
            Exercicio 5
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
