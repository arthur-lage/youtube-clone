import { useEffect, useState } from "react";
import { useQuery } from "../../hooks/useQuery";

import { Link } from "react-router-dom";

import ReactPlayer from "react-player";

import { numberFormatter } from "../../utils/numberFormatter";

import { Loading } from "../../components";

import { fetchVideoDataByIdFromAPI } from "../../services/youtube-api";
import { Typography, Stack, Box } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

export function VideoDetails() {
  const [videoInfo, setVideoInfo] = useState();
  const [isLoadingVideoDetails, setIsLoadingVideoDetails] = useState(true);

  const query = useQuery();
  const videoId = query.get("v");

  useEffect(() => {
    async function fetchVideoData() {
      try {
        const data = await fetchVideoDataByIdFromAPI(videoId);

        setVideoInfo(data.items[0]);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoadingVideoDetails(false);
      }
    }

    fetchVideoData();
  }, [videoId]);

  return (
    <Box minHeight="95vh">
      {isLoadingVideoDetails ? (
        <Loading />
      ) : (
        <>
          {videoInfo ? (
            <Stack direction={{ xs: "column", md: "row" }}>
              <Box flex={1}>
                <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
                  <ReactPlayer
                    className="react-player"
                    controls
                    url={`https://www.youtube.com/watch?v=${videoId}`}
                  />

                  <Typography
                    color="#fff"
                    variant="h5"
                    fontWeight={"bold"}
                    p={2}
                  >
                    {videoInfo?.snippet.title}
                  </Typography>

                  <Box pl={2}>
                    <Link to={`/channel/${videoInfo?.snippet?.channelId}`}>
                      <Typography
                        color="#fff"
                        variant="body2"
                        fontSize="18px"
                        display="flex"
                        alignItems="center"
                        gap="8px"
                        fontWeight={"medium"}
                      >
                        {videoInfo?.snippet.channelTitle}

                        <CheckCircle
                          sx={{
                            marginLeft: "5px",
                          }}
                          color="gray"
                          fontSize="16px"
                        />
                      </Typography>
                    </Link>
                  </Box>

                  <Stack direction="row" gap="50px">
                    <Typography
                      color="#fff"
                      variant="body2"
                      fontSize="16px"
                      p={2}
                    >
                      {numberFormatter(videoInfo?.statistics.viewCount)} views
                    </Typography>

                    <Typography
                      color="#fff"
                      variant="body2"
                      fontSize="16px"
                      p={2}
                    >
                      Published at{" "}
                      {new Date(
                        videoInfo?.snippet.publishedAt
                      ).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                      })}
                    </Typography>
                  </Stack>

                  <Typography color="#fff" variant="body2" p={2}>
                    {videoInfo?.snippet.description}
                  </Typography>
                </Box>
              </Box>
            </Stack>
          ) : (
            <h2>Sorry, we could not load the video you were looking for</h2>
          )}
        </>
      )}
    </Box>
  );
}
