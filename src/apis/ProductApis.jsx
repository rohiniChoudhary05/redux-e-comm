import { axiosInstance } from "../config/axiosInstance";
export const fatchProduct = async () => {
  try {
    let res = await axiosInstance.get("/products ");
    if (res) {
      return res.data
    }
  } catch (error) {
    console.log("this is error", error);
  }
};
