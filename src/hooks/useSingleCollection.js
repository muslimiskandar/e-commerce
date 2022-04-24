import { useQuery } from "react-query";
import { request } from "../utils/axios-utils";

const fetchSingleCollection = ({ queryKey }) => {
  const collectionName = queryKey[1];
  return request({ url: `/products/category/${collectionName}` });
};

export const useSingleCollection = (collectionName) => {
  return useQuery(["single-collection", collectionName], fetchSingleCollection);
};

export default useSingleCollection;
