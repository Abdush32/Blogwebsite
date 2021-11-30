import axios from "axios";
const baseUrl = "https://blogmitiz.readandfeel.in/api/v1/upload_profile_pic";

export const imageupload = () => {
  return axios
    .Post(`${baseUrl}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
        console.log(JSON.stringify(res.data));
      return res.data;
    });
};
