import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Typography from "@mui/material/Typography";

const PokemonCard = ({ pokemons }) => {
  return (
    <Grid container>
      {pokemons.map((p) => (
        <Grid item md="4" sx={{ mt: "2rem" }}>
          <Card
            sx={{
              maxWidth: 245,
              border: "14px solid #f5f5f5",
              background:
                "linear-gradient(0deg, rgba(220,220,220,1) 0%, rgba(211,211,211,1) 72%, rgba(169,169,169,1) 93%)",
            }}
          >
            {console.log(p)}
            <CardHeader
              title={"#" + p.order}
              action={
                <IconButton aria-label="settings">
                  <InfoOutlinedIcon />
                </IconButton>
              }
            />
            <CardMedia
              sx={{ objectFit: "cover", width: "100%", height: "100%" }}
              component="img"
              height="125"
              image={p.sprites.other.dream_world.front_default}
              alt="green iguana"
            />
            <CardContent>
              <Typography variant="h6" component="h3">
                {p.name}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default PokemonCard;
