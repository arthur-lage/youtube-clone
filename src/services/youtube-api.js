import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchNewVideosFromAPI = async (path) => {
  const { data } = await axios.get(`${BASE_URL}/${path}`, {
    ...options,
    params: {
      maxResults: 50,
      part: "id,snippet",
    },
  });

  return data;
};

export const fetchChannelDataFromAPI = async (channelId) => {
  const { data } = await axios.get(`${BASE_URL}/channels`, {
    ...options,
    params: {
      id: channelId,
      part: "snippet",
    },
  });

  return data;
};

export const fetchVideosFromChannel = async (channelId) => {
  const { data } = await axios.get(`${BASE_URL}/search`, {
    ...options,
    params: {
      channelId,
      part: "snippet",
      maxResults: 50,
      order: "date",
    },
  });

  return data;
};

export const fetchVideosFromSearchTerm = async (searchTerm) => {
  const { data } = await axios.get(`${BASE_URL}/search`, {
    ...options,
    params: {
      q: searchTerm,
      part: "snippet,id",
      order: "date",
      maxResults: 50,
    },
  });

  return data;
};
