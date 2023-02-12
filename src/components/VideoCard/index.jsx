import { Link } from "react-router-dom";
import { Typography, Card, CardMedia, CardContent } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import {
  demoChannelTitle,
  demoChannelUrl,
  demoVideoTitle,
  demoVideoUrl,
} from "../../utils/constants";

export function VideoCard({
  video: {
    id: { videoId },
    snippet,
  },
}) {
  return (
    <Card
      className="video-card"
      sx={{
        width: { md: "320px", xs: "100%" },
        boxShadow: "none",
        borderRadius: 0,
      }}
    >
      <Link to={videoId ? `/watch?v=${videoId}` : demoVideoUrl}>
        <CardMedia
          alt={snippet?.title}
          sx={{
            objectFit: "fill",
            width: { md: "320px", xs: "100%" },
            height: 180,
          }}
          image={snippet?.thumbnails?.high?.url}
        />
      </Link>
      <CardContent
        sx={{
          backgroundColor: "#1e1e1e",
          height: "80px",
        }}
      >
        <Link to={videoId ? `/watch/${videoId}` : demoVideoUrl}>
          <Typography
            sx={{
              textOverflow: "ellipsis",
              fontFamily: "Nunito Sans, sans-serif",
              overflowWrap: "break-word",
              width: { lg: "295px", md: "280px", sx: "300px" },
              whiteSpace: "nowrap",
              overflow: "hidden",
            }}
            variant="subtitle1"
            fontWeight="bold"
            color="#fff"
          >
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>

        <Link
          to={
            snippet?.channelId
              ? `/channel/${snippet?.channelId}`
              : demoChannelUrl
          }
        >
          <Typography
            fontSize="16px"
            variant="subtitle2"
            fontFamily={"Nunito Sans, sans-serif"}
            fontWeight="bold"
            color="gray"
            sx={{
              overflowWrap: "break-word",
              width: { lg: "260px", md: "280px", sx: "290px" },
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              overflow: "hidden",
            }}
          >
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle sx={{ fontSize: 12, color: "gray", ml: "5px" }} />
          </Typography>
        </Link>

        <Typography
          variant="body2"
          color="gray"
          fontFamily={"Nunito Sans, sans-serif"}
          fontSize="14px"
          marginTop="10px"
        >
          Published at{" "}
          {new Date(snippet?.publishedAt).toLocaleDateString("en-US", {
            year: "numeric",
            day: "2-digit",
            month: "2-digit",
          })}
        </Typography>
      </CardContent>
    </Card>
  );
}
