import { Typography } from "@mui/material";
import { useQuery } from "../../hooks/useQuery";

import { useEffect, useState } from "react";

import { fetchVideosFromSearchTerm } from "../../services/youtube-api.js";

import { Loading, Videos } from "../../components";
import { Stack } from "@mui/system";

export function SearchFeed() {
  const [videos, setVideos] = useState([]);
  const [isLoadingVideos, setIsLoadingVideos] = useState(true);

  const query = useQuery();

  let searchQuery = query.get("search_query");

  useEffect(() => {
    async function fetchVideos() {
      try {
        const data = await fetchVideosFromSearchTerm(searchQuery);

        setVideos(data);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoadingVideos(false);
      }
    }

    fetchVideos();
  }, []);

  return (
    <div>
      {isLoadingVideos ? (
        <Loading />
      ) : (
        <>
          {videos ? (
            <Stack direction={"column"} marginTop="20px">
              <Typography
                marginBottom="40px"
                variant="body2"
                fontSize="22px"
                fontFamily="Nunito Sans, serif-sans"
                marginLeft={"20px"}
                color="#fff"
              >
                Results for{" "}
                <span style={{ fontWeight: "700" }}>{searchQuery}</span>
              </Typography>

              <Videos centerVideos videos={videos.items} />
            </Stack>
          ) : (
            <Typography color="#fff" variant="h2">
              Could not load videos.
            </Typography>
          )}
        </>
      )}
    </div>
  );
}
