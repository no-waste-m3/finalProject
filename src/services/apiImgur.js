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

export const doUpload = (data) => {

    return axios.post(url, data, config)
        .then((res) => res)
            .catch((err) => console.log(err))

}