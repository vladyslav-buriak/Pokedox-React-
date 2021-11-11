import { Drawer } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { List } from "@mui/material";
import { ListItem } from "@mui/material";
import { ListItemIcon } from "@mui/material";
import { ListItemText } from "@mui/material";
import { Link } from "react-router-dom";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import InfoIcon from "@mui/icons-material/Info";
const UseStyles = makeStyles((theme) => ({
  drawer: { width: "240px" },
  drawerPaper: { width: "240px", background: "#e0e0e0 !important" },
  link: { textDecoration: "none", color: "#616161" },
}));
const Leftbar = () => {
  const classes = UseStyles();
  return (
    <>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={true}
        classes={{ paper: classes.drawerPaper }}
      >
        <List>
          <Link to="/pokemons" className={classes.link}>
            <ListItem button>
              <ListItemIcon>
                <CatchingPokemonIcon />
              </ListItemIcon>
              <ListItemText className={classes.listText} primary="Pokemons" />
            </ListItem>
          </Link>
          <Link to="/about" className={classes.link}>
            <ListItem button>
              <ListItemIcon>
                <InfoIcon />
              </ListItemIcon>
              <ListItemText primary="About" />
            </ListItem>
          </Link>
        </List>
      </Drawer>
    </>
  );
};

export default Leftbar;
