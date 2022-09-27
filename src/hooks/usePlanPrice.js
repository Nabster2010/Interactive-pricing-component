import { useEffect, useState } from "react";
import { getCost } from "../utils/getCost";

export const usePlanPrice = (value, yearly) => {
  const [plan, setPlan] = useState({ views: "10K", price: 8 });
  useEffect(() => {
    const newPlan = getCost(value, yearly);
    setPlan(newPlan);
  }, [value, yearly]);

  return plan;
};
