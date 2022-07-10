import axios from "axios"


const clientId = '5aaf9bc85770b1d'
const clientSecret = '41d0389885fc7f4187cc607b7630a5ff45ce3fd3'
const url = 'https://api.imgur.com/3/image'

const config = {
    headers: {
      Authorization: `Client-ID ${clientId}`,
    }
  };

/*Authorization: Client-ID YOUR_CLIENT_ID*/

const api_key = "788947227168841"
const cloud_name = "drcattrj1"

export const doUpload = async (data) => {

    /*return axios.post(url, data, config)
        .then((res) => res)
            .catch((err) => console.log(err))*/
        
          //const signatureResponse = await axios.get("/get-signature")
        
          data.append("api_key", api_key)
          //data.append("signature", signatureResponse.data.signature)
          //data.append("timestamp", signatureResponse.data.timestamp)
          data.append("upload_preset", "kbreyloh")
        
          const cloudinaryResponse = await axios.post(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, data, {
            headers: { "Content-Type": "multipart/form-data" },
            onUploadProgress: function (e) {
              console.log(e.loaded / e.total)
            }
          })
          console.log(cloudinaryResponse.data)
        
          // send the image info back to our server
          const photoData = {
            public_id: cloudinaryResponse.data.public_id,
            version: cloudinaryResponse.data.version,
            signature: cloudinaryResponse.data.signature
          }
        
          //axios.post("/do-something-with-photo", photoData  

}