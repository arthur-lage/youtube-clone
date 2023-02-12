import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Loading, SideBar, Videos } from "../../components";
import { fetchNewVideosFromAPI } from "../../services/youtube-api";

export function Feed() {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("New");

  useEffect(() => {
    async function fetchVideos() {
      try {
        setIsLoading(true);

        const data = await fetchNewVideosFromAPI(
          `search?part=snippet&q=${selectedCategory}`
        );

        setVideos(data.items);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchVideos();
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sm: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          Copyright 2023 Arthur Lage
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          fontFamily="Nunito Sans, serif-sans"
          mb={2}
          sx={{ color: "#FFF" }}
        >
          {selectedCategory}
          <span style={{ color: "#f31503" }}> videos</span>
        </Typography>

        {isLoading ? (
          <Loading />
        ) : (
          <>
            {videos ? (
              <Videos centerVideos={false} videos={videos} />
            ) : (
              <Typography variant="h2" color="gray">
                Could not fetch videos from API
              </Typography>
            )}
          </>
        )}
      </Box>
    </Stack>
  );
}
