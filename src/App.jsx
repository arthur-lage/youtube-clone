import { Box } from "@mui/material";
import { Routes, Route } from "react-router-dom";

import { Navbar } from "./components";

import { Feed, VideoDetails, ChannelDetails, SearchFeed } from "./pages";

export function App() {
  return (
    <Box sx={{ backgroundColor: "#000" }}>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Feed />} />
        <Route path="/watch/:videoId" element={<VideoDetails />} />
        <Route path="/channel/:channelId" element={<ChannelDetails />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
      </Routes>
    </Box>
  );
}
