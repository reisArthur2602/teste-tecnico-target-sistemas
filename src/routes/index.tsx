import { Navigate, Route, Routes } from "react-router-dom";

import Fibonacci from "../pages/Fibonacci";
import Billing from "../pages/Billing";
import ReverseWord from "../pages/ReverseWord";
import PercentageBilling from "../pages/PercentageBilling";
import Home from "../pages/Home";

export default () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/exercise/fibonacci" element={<Fibonacci />} />
      <Route path="/exercise/billing" element={<Billing />} />
      <Route path="/exercise/percentage-billing" element={<PercentageBilling />} />
      <Route path="/exercise/reverse-word" element={<ReverseWord />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
