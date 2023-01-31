import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo as Logo } from "../../utils/constants";
import { SearchBar } from "../../components/SearchBar";

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
        justifyContent: "space-between",
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={Logo} alt="Logo" height={45} />
      </Link>

      <SearchBar />
    </Stack>
  );
}
