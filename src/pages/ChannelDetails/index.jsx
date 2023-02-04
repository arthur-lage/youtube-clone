import { useState, useEffect } from "react";

import {
  fetchChannelDataFromAPI,
  fetchVideosFromChannel,
} from "../../services/youtube-api";
import { useParams } from "react-router-dom";
import { Loading, Videos } from "../../components";
import { Box, Stack, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import { numberFormatter } from "../../utils/numberFormatter";

export function ChannelDetails() {
  const [channelInfo, setChannelInfo] = useState(null);
  const [videos, setVideos] = useState([]);
  const [isChannelDataLoading, setIsChannelDataLoading] = useState(true);

  const { channelId } = useParams();

  useEffect(() => {
    async function fetchChannelData() {
      try {
        const channelData = await fetchChannelDataFromAPI(channelId);
        const channelVideos = await fetchVideosFromChannel(channelId);

        setChannelInfo(channelData);
        setVideos(channelVideos);
      } catch (error) {
        console.error(error);
      } finally {
        setIsChannelDataLoading(false);
      }
    }

    fetchChannelData();
  }, []);

  return (
    <Box>
      {isChannelDataLoading ? (
        <Loading />
      ) : (
        <>
          {channelInfo ? (
            <Stack direction="column" paddingTop="20px">
              <Stack display="flex" alignItems="center" direction="column">
                <img
                  style={{
                    borderRadius: "50%",
                    width: "140px",
                    height: "140px",
                  }}
                  src={channelInfo.items[0].snippet.thumbnails.medium.url}
                  alt={channelInfo.items[0].snippet.title}
                />

                <Typography
                  color="#fff"
                  display="flex"
                  alignItems="center"
                  gap="8px"
                  fontSize="20px"
                  marginTop="15px"
                >
                  {channelInfo.items[0].snippet.title}
                  <CheckCircle color="#3e3e3e" />
                </Typography>

                <Stack
                  display="flex"
                  alignItems="center"
                  gap="8px"
                  direction="row"
                  marginTop="10px"
                >
                  {!channelInfo.items[0].statistics.hiddenSubscriberCount ? (
                    <Typography fontSize="16px" color="#ffffff8b">
                      {numberFormatter(
                        channelInfo.items[0].statistics.subscriberCount,
                        1
                      )}{" "}
                      subscribers
                    </Typography>
                  ) : (
                    ""
                  )}

                  <Typography fontSize="16px" color="#ffffff8b">
                    |
                  </Typography>

                  <Typography fontSize="16px" color="#ffffff8b">
                    {numberFormatter(
                      channelInfo.items[0].statistics.viewCount,
                      1
                    )}{" "}
                    total views
                  </Typography>

                  <Typography fontSize="16px" color="#ffffff8b">
                    |
                  </Typography>

                  <Typography fontSize="16px" color="#ffffff8b">
                    {numberFormatter(
                      channelInfo.items[0].statistics.videoCount,
                      1
                    )}{" "}
                    videos
                  </Typography>
                </Stack>
              </Stack>

              <Box justifyContent="center" marginTop="30px">
                <Videos videos={videos.items} />
              </Box>
            </Stack>
          ) : (
            ""
          )}
        </>
      )}
    </Box>
  );
}
