import { useLocation } from "react-router";

export const useQuery = () => {
  const { search } = useLocation();

  return search
    .replace("?", "")
    .split("&")
    .reduce((acc, cur) => {
      const [ppty, value] = cur.split("=");

      return { ...acc, [ppty]: value };
    }, {});
};
