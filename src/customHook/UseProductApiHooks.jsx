import { useQuery } from "@tanstack/react-query";
import { fatchProduct } from "../apis/ProductApis";


export const getProductApiHook  = ()=>{
    return useQuery({
        queryKey: ["Product"],
         queryFn: fatchProduct,
         staleTime:Infinity
    })
}