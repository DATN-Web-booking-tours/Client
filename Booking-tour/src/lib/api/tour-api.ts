import { axiosClient } from "./config/axios-client";
interface schedulesItem {
  startTime: string;
  Date: number;
  Description: string;
}
interface filePathItem {
  FilePath: string;
}
export interface TourData {
  name: string;
  description: string;
  price: string;
  location: string;
  startDate: string;
  endDate: string;
  lastRegisterDate: string;
  status: number;
  vehicle: string;
  hotel: string;
  schedules: schedulesItem[];
  images: filePathItem[];
}
export const AddTour = async (formData: TourData) => {
  const formDataTour = new FormData();
  for (const key in formData) {
    if (Object.prototype.hasOwnProperty.call(formData, key)) {
      const value = formData[key as keyof TourData];

      if (Array.isArray(value)) {
        value.forEach((item, index) => {
          if (key === "schedules") {
            const scheduleItem = item as schedulesItem;
            formDataTour.append(
              `${key}[${index}][startTime]`,
              scheduleItem.startTime
            );
            formDataTour.append(
              `${key}[${index}][Date]`,
              scheduleItem.Date.toString()
            );
            formDataTour.append(
              `${key}[${index}][Description]`,
              scheduleItem.Description
            );
          } else if (key === "images") {
            const imageItem = item as filePathItem;
            formDataTour.append(
              `${key}[${index}][FilePath]`,
              imageItem.FilePath
            );
          }
        });
      } else {
        formDataTour.append(key, value as string);
      }
    }
  }
  try {
    const response = await axiosClient.post(
      `${import.meta.env.VITE_BACKEND}/api/v1/tour`,
      formDataTour,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    if (!response.data) {
      throw new Error("Add Tour Failed");
    }
    return response.data;
  } catch (error) {
    console.warn("Add Tour Failed: ", error);
    return null;
  }
};
export const GetAllTourByTourOwner = async (current: number = 1) => {
  try {
    const response = await axiosClient.get(
      `${
        import.meta.env.VITE_BACKEND
      }/api/v1/tour/tour-owner/?curentPage=${current}`
    );
    if (!response.data) {
      throw new Error("Tour not found in response data");
    }
    return response.data;
  } catch (error) {
    console.warn("Get Tour failed: ", error);
    return null;
  }
};
