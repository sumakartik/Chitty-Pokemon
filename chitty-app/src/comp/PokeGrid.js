export default function PokeGrid({props}){


    return (
        {Object.keys(pokemonData).map(
            (pokemonId) =>
              pokemonData[pokemonId].name.includes(filter) &&
              getPokemonCard(pokemonId)
          )}
    )
}

