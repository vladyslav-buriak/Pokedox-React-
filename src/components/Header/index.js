import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const Header = () => {
  return (
    <AppBar>
      <Toolbar sx={{ background: "#bdbdbd" }}>
        <Typography
          variant="h5"
          color="inherit"
          component="p"
          style={{ flexGrow: 1, textAlign: "left" }}
        >
          Pokedox
        </Typography>
        <IconButton color="inherit">
          <FavoriteBorderOutlinedIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
