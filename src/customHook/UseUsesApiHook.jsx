import { useQuery } from "@tanstack/react-query";
import { fatchUser } from "../apis/UserApi";


export const getUsesApiHook = ()=>{
    return useQuery ({
        queryKey:["User"],
        queryFn: fatchUser,
        staleTime: Infinity,
    })
}