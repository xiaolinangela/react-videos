import axios from "axios";

const KEY = "AIzaSyDO6qwgbRTBu-5ABPyRXrWautKTDzT7K70";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: `${KEY}`
  }
});
