import { Stack } from "@mui/material";
import { categories } from "../../utils/constants";

export function SideBar() {
  const selectedCategory = "New";

  return (
    <Stack
      direction="row"
      sx={{
        overflow: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category) => (
        <button
          className="category-btn"
          style={{
            background:
              selectedCategory === category.name ? "#fc1503" : "transparent",
            color: "white",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
          key={category.name}
        >
          <span>{category.icon}</span>
          <span>{category.name}</span>
        </button>
      ))}
    </Stack>
  );
}
