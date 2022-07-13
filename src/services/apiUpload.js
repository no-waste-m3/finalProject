import axios from "axios";

const api_key = "788947227168841";
const cloud_name = "drcattrj1";

export const doUpload = async (data) => {

  data.append("api_key", api_key);
  data.append("upload_preset", "kbreyloh");

  const cloudinaryResponse = await axios.post(
    `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
    data,
    {
      headers: { "Content-Type": "multipart/form-data" },
      onUploadProgress: function (e) {
      },
    }
  );
  return cloudinaryResponse.data

};


