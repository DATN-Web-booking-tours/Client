import { UserData } from "@/pages/Profile-page";
import { axiosClient } from "./config/axios-client";
// import axios from "axios";
export const GetProfile = async () => {
  try {
    const response = await axiosClient.get(
      `${import.meta.env.VITE_BACKEND}/api/v1/user/profile`
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
export const EditProfile = async (formData: UserData) => {
  const formDataProfile = new FormData();
  Object.entries(formData).forEach(([key, value]) => {
    formDataProfile.append(key, value);
  });
  console.log("api edit", formDataProfile);
  try {
    const response = await axiosClient.put(
      `${import.meta.env.VITE_BACKEND}/api/v1/user/profile`,
      formDataProfile
    );
    if (!response.data) {
      throw new Error("Edit Profile Failed");
    }
    return response.data;
  } catch (error) {
    console.warn("Edit Profile Failed: ", error);
    return null;
  }
};
