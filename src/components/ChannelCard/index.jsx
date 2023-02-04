import { Stack, Typography, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";
import { demoChannelTitle } from "../../utils/constants";

export function ChannelCard({
  channelDetails: {
    id: { channelId },
    snippet,
  },
}) {
  return (
    <Link to={`/channel/${channelId}`}>
      <Stack direction="column">
        <CardMedia
          alt={snippet?.title}
          sx={{ width: 180, height: 180, borderRadius: "50%" }}
          image={snippet?.thumbnails?.high?.url}
        />

        <Typography
          variant="subtitle1"
          textAlign="center"
          fontWeight="bold"
          sx={{ marginTop: "10px" }}
          color="#fff"
        >
          {snippet?.title.slice(0, 60) || demoChannelTitle.slice(0, 60)}
        </Typography>
      </Stack>
    </Link>
  );
}
