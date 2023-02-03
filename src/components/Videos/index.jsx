import { Box, Stack } from "@mui/material";
import { VideoCard, ChannelCard } from "../";

export function Videos({ videos }) {
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {videos.map((video, index) => (
        <Box key={index}>
          {video.id.videoId ? <VideoCard key={index} video={video} /> : ""}
          {video.id.channelId ? (
            <ChannelCard key={index} channelDetail={video} />
          ) : (
            ""
          )}
        </Box>
      ))}
    </Stack>
  );
}
