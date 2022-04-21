import { useQuery, useQueryClient } from "react-query";
import { request } from "../utils/axios-utils";

const fetchSingleProduct = ({ queryKey }) => {
  const productId = queryKey[1];
  // return axios.get(`https://fakestoreapi.com/products/${productId}`);
  return request({ url: `/products/${productId}` });
};

export const useSingleProduct = (productId) => {
  const queryClient = useQueryClient();
  return useQuery(["single-product", productId], fetchSingleProduct, {
    initialData: () => {
      const product = queryClient
        .getQueryData("all-products")
        ?.data?.find((product) => product.id === parseInt(productId));

      if (product) {
        return {
          data: product,
        };
      } else {
        return undefined;
      }
    },
  });
};
