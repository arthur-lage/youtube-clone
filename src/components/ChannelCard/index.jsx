import { Stack, Typography, CardMedia, Card } from "@mui/material";
import { Link } from "react-router-dom";
import { demoChannelTitle } from "../../utils/constants";
import { CheckCircle } from "@mui/icons-material";

export function ChannelCard({
  channelDetails: {
    id: { channelId },
    snippet,
  },
}) {
  return (
    <Link
      style={{
        height: "100%",
      }}
      to={`/channel/${channelId}`}
    >
      <Card
        sx={{
          height: "100%",
          width: { md: "320px", xs: "100%" },
          boxShadow: "none",
          borderRadius: 0,
          background: "transparent",
        }}
      >
        <Stack
          direction="column"
          sx={{
            display: "flex",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CardMedia
            alt={snippet?.title}
            sx={{ width: 180, height: 180, borderRadius: "50%" }}
            image={snippet?.thumbnails?.high?.url}
          />

          <Typography
            variant="subtitle1"
            fontFamily={"Nunito Sans, sans-serif"}
            textAlign="center"
            fontWeight="bold"
            sx={{
              marginTop: "20px",
              gap: "8px",
              display: "flex",
              alignItems: "center",
            }}
            color="#fff"
          >
            {snippet?.title.slice(0, 60) || demoChannelTitle.slice(0, 60)}{" "}
            <CheckCircle fontSize="24px" color="#e3e3e3" />
          </Typography>
        </Stack>
      </Card>
    </Link>
  );
}
