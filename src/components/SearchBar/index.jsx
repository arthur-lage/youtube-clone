import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

export function SearchBar() {
  return (
    <Paper
      component="form"
      onSubmit={() => {}}
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
        value=""
        onChange={() => {}}
      />
      <IconButton type="submit" sx={{ p: "10px", color: "red" }}>
        <Search />
      </IconButton>
    </Paper>
  );
}
