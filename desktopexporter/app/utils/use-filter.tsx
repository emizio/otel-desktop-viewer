import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export const FILTER_PARAM = "filter";

export const useFilter = () => {
  let [params, setParams] = useSearchParams();
  let [filter, setValue] = useState(params.get(FILTER_PARAM));
  let setFilter = (value: string) => {
    setParams({ [FILTER_PARAM]: value });
    setValue(value);
  };
  return [filter, setFilter] as const;
};
