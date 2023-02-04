import { Box, Stack } from "@mui/material";
import { VideoCard, ChannelCard } from "../";

export function Videos({ videos }) {
  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      width="100%"
      justifyContent="start"
      gap={2}
    >
      {videos.map((item, index) => (
        <Box key={index}>
          {item.id.videoId ? <VideoCard key={index} video={item} /> : ""}
          {item.id.channelId ? (
            <ChannelCard key={index} channelDetails={item} />
          ) : (
            ""
          )}
        </Box>
      ))}
    </Stack>
  );
}
