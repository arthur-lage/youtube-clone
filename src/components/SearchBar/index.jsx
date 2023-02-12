import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

export function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  async function handleSearch(e) {
    e.preventDefault();

    if (!searchTerm) return;

    navigate("/results?search_query=" + searchTerm);

    navigate(0);
  }

  return (
    <Paper
      component="form"
      onSubmit={handleSearch}
      sx={{
        pl: 2,
        border: "1px solid #e3e3e3",
        borderRadius: 20,
        boxShadow: "none",
        mr: { sm: 5 },
      }}
    >
      <input
        placeholder="Search..."
        className="search-bar"
        style={{ fontFamily: "Nunito Sans, sans-serif" }}
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      <IconButton type="submit" sx={{ p: "10px", color: "red" }}>
        <Search />
      </IconButton>
    </Paper>
  );
}
