import axios from "axios";

export const GetTokenUser = async (tokenGoogle: string) => {
  try {
    const formData = new FormData();
    formData.append("tokenGoogle", tokenGoogle);
    const response = await axios.post(
      `${import.meta.env.VITE_BACKEND}/api/identity/token`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    if (!response.data) {
      throw new Error("Token not found in response data");
    }
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        if (
          error.response.data.succeeded == false &&
          error.response.data.messages[0] == "USER_NOT_REGISTER"
        ) {
          return "USER_NOT_REGISTER";
        }
        if (
          error.response.data.succeeded == false &&
          error.response.data.messages[0] == "USER_WAITING"
        ) {
          return "USER_WAITING";
        }
      } else {
        console.error("Non-Axios error:", error);
        return null;
      }
    }
  }
};

// fetch(API_URL + v1/upload, {
//   method: "POST", // *GET, POST, PUT, DELETE, etc.
//   mode: "cors", // no-cors, cors, *same-origin
//   cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
//   credentials: "same-origin", // include, *same-origin, omit
//   headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//       Authorization: Bearer ${result.data},
//   },
//   redirect: "follow", // manual, *follow, error
//   referrer: "no-referrer", // no-referrer, *client
//   body: formData,
// })
//   .then((res) => res.json())
//   .then(async (res) => {
//       if (res.succeeded) {
//           try {
//               await updateProfileToApi(result.data, {
//                   ...newProfileData,
//                   image: res.data[0].filePath,
//               });
//           } catch (e) {
//               console.log(login error: ${e});
//               Toast.show({
//                   type: "error",
//                   text1: "Có lỗi xảy ra: " + e,
//               });
//               SetIsLoading(false);
//           }
//       } else {
//           console.log(res);
//           Toast.show({
//               type: "info",
//               text1:
//                   res.messages != null
//                       ? res.messages
//                       : res.title
//                           ? res.title
//                           : res,
//           });
//       }
//       SetIsLoading(false);
//   })
//   .catch((e) => {
//       console.log(login error: ${e});
//       Toast.show({
//           type: "error",
//           text1: "Có lỗi xảy ra: " + e,
//       });
//       SetIsLoading(false);
//   });
