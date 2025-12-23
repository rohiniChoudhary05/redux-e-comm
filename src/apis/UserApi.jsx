import { axiosInstance } from "../config/axiosInstance";

export const fatchUser = async () => {
  try {
    let res = await axiosInstance.get("/users");

    if (res) {
      return res.data
    }
  } catch (error) {
    console.log("This is error", error);
  }
};
