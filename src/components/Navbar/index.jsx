import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { logo as Logo } from "../../utils/constants";
import { SearchBar } from "../SearchBar";

export function Navbar() {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        background: "#000",
        top: 0,
        zIndex: 999,
        justifyContent: "space-between",
      }}
    >
      <Link
        to="/"
        style={{ display: "flex", alignItems: "center", gap: "20px" }}
      >
        <img src={Logo} alt="Logo" height={45} />

        <Typography
          fontFamily={"Nunito Sans, sans-serif"}
          fontSize="20px"
          color="#fff"
          fontWeight="700"
        >
          Youtube Clone
        </Typography>
      </Link>

      <SearchBar />
    </Stack>
  );
}
