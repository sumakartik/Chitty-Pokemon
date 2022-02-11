import React, { useEffect, useState } from "react";
import {
  Grid,
  Modal,
  Typography,
  CircularProgress,
  Toolbar,
  Box,
  AppBar,
  TextField,

} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";



//FETCHES THE DATA FROM API
const restEndpoint = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=200";

const callRestApi = async () => {
  const response = await fetch(restEndpoint);
  const jsonResponse = await response.json();
  console.log(jsonResponse);
//   return JSON.stringify(jsonResponse);
return jsonResponse;
};


// function RenderResult() {
//   const [apiResponse, setApiResponse] = useState("*** now loading ***");

//   useEffect(() => {
//     callRestApi().then((result) => setApiResponse(result), []);
//   }, []);

//   return (
//     <div>
//       <h1>React App</h1>
//       <p>{apiResponse}</p>
//     </div>
//   );
// }

const styleModal = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const useStyles = makeStyles((theme) => ({
    pokedexContainer: {
      paddingTop: "20px",
      paddingLeft: "50px",
      paddingRight: "50px",
    },
    cardMedia: {
        margin: "auto",
        main: '#DEBEBE',
    },
    cardContent: {
        textAlign: "center",
        //main: '#DEBEBE',
        // backgroundColor: fade(theme.palette.color.
    },

  }));


const Pokedex = (props) => {
  const classes = useStyles();
  const { history } = props;
  const [pokemonData, setPokemonData] = useState({});
  const [filter, setFilter] = useState("");


  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=807`)
    .then(r => r.json)
    .then(function (
      response
    ) {
      const { data } = response;
      const { results } = data;
      let newPokemonData = {};
      results.forEach((pokemon, index) => {
        newPokemonData[index + 1] = {
          id: index + 1,
          name: pokemon.name,
          sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
            index + 1
          }.png`,
        };
      });
      setPokemonData(newPokemonData);
    });
  }, []);

//   const toFirstCharUppercase = (name) =>
//     name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <div className={classes.searchContainer}>
            <TextField label="Pokemon" variant="standard" />
          </div>
        </Toolbar>
      </AppBar>
      {pokemonData ? (

        // <Grid container spacing={2} className={classes.pokedexContainer}>d
        //   {Object.keys(pokemonData).map(
        //     (pokemonId) =>
        //       pokemonData[pokemonId].name.includes(filter)
        //   )}
        // </Grid>
        <Grid container onClick={handleOpen} spacing={2} className={classes.pokedexContainer}>
          {Object.keys(pokemonData).map( function(pokemonId){
              return(
                pokemonData[pokemonId].name.includes(filter),

                <Modal
                open={open}
                onClose={handleClose}
                // aria-labelledby="modal-modal-title"
                // aria-describedby="modal-modal-description"
                >
                <Box sx={styleModal}>
                  <Typography id="modal-modal-title" variant="h6" component="h2">
                    {pokemonData[pokemonId].name}
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    lorem ispum
                  </Typography>
                </Box>
              </Modal>

              )

          }

          )}
        </Grid>


      ) : (
        <CircularProgress />
      )}
    </>
  );



};

export default Pokedex;

// ReactDOM.render(<RenderResult />, document.querySelector("#root"));