import { axiosClient } from "./config/axios-client";

export const GetStatisticOwner = async () => {
  try {
    const response = await axiosClient.get(
      `${import.meta.env.VITE_BACKEND}/api/v1/statistic/tour-owner`
    );
    if (!response.data) {
      throw new Error("Profile not found in response data");
    }
    return response.data;
  } catch (error) {
    console.warn("Get Profile failed: ", error);
    return null;
  }
};
