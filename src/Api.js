import axios from "axios";

axios.defaults.baseURL = "https://busy-tan-ox-gown.cyclic.app/streamers";

export const getStreamers = async () => {
  try {
    const response = axios.get("/");
    return (await response).data;
  } catch (error) {
    console.log(error);
  }
};

export const postStreamers = async ({
  author,
  description,
  platform,
  picture,
}) => {
  try {
    const response = axios.post("/", {
      author,
      description,
      platform,
      picture,
    });
    return (await response).data;
  } catch (error) {
    console.log(error);
  }
};

export const getStreamerById = async (id) => {
  try {
    const response = axios.get(`/${id}`);
    return (await response).data;
  } catch (error) {
    console.log(error);
  }
};

export const voteStreamer = async (id, vote) => {
  try {
    const response = axios.put(`/${id}/${vote}`);
    return (await response).data;
  } catch (error) {
    console.log(error);
  }
};
