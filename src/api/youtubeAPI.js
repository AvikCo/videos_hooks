import axios from 'axios';

//const KEY="AIzaSyARHmzNAi_q0RaIIG35nHJDCaP-YDv1XpI"
const KEY="AIzaSyB3g3rpGZez8l-GQsgMibCtfb6Tf9MBCuk"

export default axios.create(
    {
        baseURL:"https://www.googleapis.com/youtube/v3",
        params:{
            part: "snippet",
            maxResults: 10,
            key: KEY,
        }
    }
);