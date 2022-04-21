import { useQuery } from "react-query";
import { request } from "../utils/axios-utils";

const fetchProducts = () => {
  return request({ url: "/products" });
};

export const useAllProducts = (onSuccess, onError) => {
  return useQuery("all-products", fetchProducts, {
    staleTime: 10000,
    onSuccess,
    onError,
  });
};
