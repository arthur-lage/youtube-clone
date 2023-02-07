import { useEffect, useState } from "react";
import { useQuery } from "../../hooks/useQuery";

import ReactPlayer from "react-player";

import { fetchVideoDataByIdFromAPI } from "../../services/youtube-api";
import { Typography, Stack, Box } from "@mui/material";

export function VideoDetails() {
  const [videoInfo, setVideoInfo] = useState();

  const query = useQuery();
  const videoId = query.get("v");

  useEffect(() => {
    async function fetchVideoData() {
      const data = await fetchVideoDataByIdFromAPI(videoId);

      console.log(data);
      setVideoInfo(data.items[0]);
    }

    fetchVideoData();
  }, [videoId]);

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer
              className="react-player"
              controls
              url={`https://www.youtube.com/watch?v=${videoId}`}
            />

            <Typography color="#fff" variant="h5" fontWeight={"bold"} p={2}>
              {videoInfo?.snippet.title}
            </Typography>

            <Typography color="#fff" variant="body2" p={2}>
              {videoInfo?.snippet.description}
            </Typography>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}
